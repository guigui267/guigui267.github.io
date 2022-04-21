import * as THREE from "./three.module.js"; //引入threejs模块

import {
  RollerCoasterGeometry,
  RollerCoasterShadowGeometry,
  RollerCoasterLiftersGeometry,
  TreesGeometry,
  SkyGeometry,
} from "./RollerCoaster.js"; //模块引入过山车函数对象
import { VRButton } from "./VRButton.js"; //模块引入VR按钮

let mesh, material, geometry;

//初始化渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; //开启WebXR场景
renderer.xr.setReferenceSpaceType("local");
document.body.appendChild(renderer.domElement); //在html body标签里面现实canvas

document.body.appendChild(VRButton.createButton(renderer)); //创建VR按钮

//
//场景初始化
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0ff); //设置场景背景颜色

const light = new THREE.HemisphereLight(0xfff0f0, 0x606066);
light.position.set(1, 1, 1);
scene.add(light);

//火车容器
const train = new THREE.Object3D();
scene.add(train);

//相机
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
train.add(camera); //将相机放入火车容器内部

//创建地面
geometry = new THREE.PlaneGeometry(500, 500, 15, 15); //创建地面场景几何体
geometry.rotateX(-Math.PI / 2);

const positions = geometry.attributes.position.array;
const vertex = new THREE.Vector3();

for (let i = 0; i < positions.length; i += 3) {
  vertex.fromArray(positions, i);

  vertex.x += Math.random() * 10 - 5;
  vertex.z += Math.random() * 10 - 5;

  const distance = vertex.distanceTo(scene.position) / 5 - 25;
  vertex.y = Math.random() * Math.max(0, distance);

  vertex.toArray(positions, i);
}

geometry.computeVertexNormals();

material = new THREE.MeshLambertMaterial({
  //地面的材质
  color: 0x407000,
});

mesh = new THREE.Mesh(geometry, material); //将地面几何体和材质组合成一个完整的物体地面
scene.add(mesh); //将地面几何体添加到场景里面

//场景树木模型
geometry = new TreesGeometry(mesh);
material = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  vertexColors: true,
});
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

geometry = new SkyGeometry(); //创建天空几何体
material = new THREE.MeshBasicMaterial({ color: 0xffffff });
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//

const PI2 = Math.PI * 2;

const curve = (function () {
  const vector = new THREE.Vector3();
  const vector2 = new THREE.Vector3();

  return {
    getPointAt: function (t) {
      t = t * PI2;

      const x = Math.sin(t * 3) * Math.cos(t * 4) * 50;
      const y = Math.sin(t * 10) * 2 + Math.cos(t * 17) * 2 + 5;
      const z = Math.sin(t) * Math.sin(t * 4) * 50;

      return vector.set(x, y, z).multiplyScalar(2);
    },

    getTangentAt: function (t) {
      const delta = 0.0001;
      const t1 = Math.max(0, t - delta);
      const t2 = Math.min(1, t + delta);

      return vector2
        .copy(this.getPointAt(t2))
        .sub(this.getPointAt(t1))
        .normalize();
    },
  };
})();

//创建过山车滑轨
geometry = new RollerCoasterGeometry(curve, 1500);//初始化轨道几何体
material = new THREE.MeshPhongMaterial({
  vertexColors: true,
});
mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

geometry = new RollerCoasterLiftersGeometry(curve, 100);
material = new THREE.MeshPhongMaterial();//设置一个Phong的材质球
mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 0.1;
scene.add(mesh);//在场景中添加几何体

geometry = new RollerCoasterShadowGeometry(curve, 500);
material = new THREE.MeshBasicMaterial({
  color: 0x305000,
  depthWrite: false,
  transparent: true,
});
mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 0.1;
scene.add(mesh);

const funfairs = [];

//

geometry = new THREE.CylinderGeometry(10, 10, 5, 15);//创建圆柱几何体
material = new THREE.MeshLambertMaterial({
  color: 0xff8080,
});
mesh = new THREE.Mesh(geometry, material);
mesh.position.set(-80, 10, -70);
mesh.rotation.x = Math.PI / 2;
scene.add(mesh);

funfairs.push(mesh);

geometry = new THREE.CylinderGeometry(5, 6, 4, 10);
material = new THREE.MeshLambertMaterial({
  color: 0x8080ff,
});
mesh = new THREE.Mesh(geometry, material);
mesh.position.set(50, 2, 30);
scene.add(mesh);

funfairs.push(mesh);

//

window.addEventListener("resize", onWindowResize); //窗口自适应监听

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;//相机实时更改视角比
  camera.updateProjectionMatrix();//相机更新投影矩阵

  renderer.setSize(window.innerWidth, window.innerHeight);//实时更改渲染器渲染的屏幕比例
}

//

const position = new THREE.Vector3();
const tangent = new THREE.Vector3();

const lookAt = new THREE.Vector3();

let velocity = 0;
let progress = 0;

let prevTime = performance.now();

//相机循环渲染（渲染函数）//如果不循环执行场景不能显示
function render() {
  const time = performance.now();
  const delta = time - prevTime;

  for (let i = 0; i < funfairs.length; i++) {
    funfairs[i].rotation.y = time * 0.0004;
  }

  //

  progress += velocity;
  progress = progress % 1;

  position.copy(curve.getPointAt(progress));//位置采用curve的点的位置
  position.y += 0.3;

  train.position.copy(position);

  tangent.copy(curve.getTangentAt(progress));

  velocity -= tangent.y * 0.0000001 * delta;
  velocity = Math.max(0.00004, Math.min(0.0002, velocity));

  train.lookAt(lookAt.copy(position).sub(tangent));//火车方向朝向

  //

  renderer.render(scene, camera);//渲染当前的场景和相机

  prevTime = time;
}

renderer.setAnimationLoop(render); //循环回调render函数，循环执行