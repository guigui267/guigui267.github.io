(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e5f4f8"],{"88fa":function(n,t,e){"use strict";e.r(t);var r=e("7a23");function i(n,t,e,i,u,o){var a=Object(r["resolveComponent"])("littleCould");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(a)])}var u={id:"WebGL",style:{width:"100%",height:"100%"}};function o(n,t,e,i,o,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u)}var a=e("1da1"),c=(e("96cf"),e("5c40")),s=e("10ac"),l=e("90b1"),f=e("d7bc"),h=e.n(f),d={setup:function(){var n,t,e,r,i,u,o;Object(c["nb"])((function(){t=l["a"].service({fullscreen:!0}),n=new s["b"]("WebGL"),f(),i=n.Clocks(),d().then((function(){t.close()})),v(),p()})),Object(c["jb"])((function(){n.SceneDestory(),cancelAnimationFrame(u),console.log("场景销毁了")}));var f=function(){var t=n.addSpotlight(16777215,2);t.position.set(-10,10,0),n.scene.add(t),e=n.loadSkyBox("./skycube1/"),n.scene.background=e},d=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.LoadModel("./resources/airs.glb");case 2:i=t.sent,n.scene.add(i.scene),i.scene.traverse((function(n){n.isMesh&&(n.material.envMap=e,n.material.envMapIntensity=2)})),r=n.GetMixer(i.scene),r.timeScale=0,r.clipAction(i.animations[0]).play(),window.mixer=r;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function n(){u=requestAnimationFrame(n);var t=i.getDelta();r&&r.update(t),h.a&&h.a.update()},p=function(){window.addEventListener("keydown",(function(n){"w"==n.key&&r.timeScale<=1&&(r.timeScale+=.01),o&&clearTimeout(o),o=setTimeout((function(){I()}),1e3)}))},I=function(){var n={x:r.timeScale};console.log(n.x);var t=new h.a.Tween(n);t.to({x:0},2e3),t.onUpdate((function(){r.timeScale=n.x})),t.start()}}},v=e("d959"),p=e.n(v);const I=p()(d,[["render",o]]);var M=I,w={name:"shaderDemo1",components:{littleCould:M}};e("b9d1");const m=p()(w,[["render",i],["__scopeId","data-v-0c504800"]]);t["default"]=m},ab7c:function(n,t,e){},b9d1:function(n,t,e){"use strict";e("ab7c")},d7bc:function(n,t){void 0===Date.now&&(Date.now=function(){return(new Date).valueOf()});var e=e||function(){var n=[];return{REVISION:"8",getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)},update:function(t){if(0===n.length)return!1;var e=0,r=n.length;t=void 0!==t?t:Date.now();while(e<r)n[e].update(t)?e++:(n.splice(e,1),r--);return!0}}}();e.Tween=function(n){var t=n,r={},i={},u=1e3,o=0,a=null,c=e.Easing.Linear.None,s=e.Interpolation.Linear,l=[],f=null,h=!1,d=null,v=null;this.to=function(n,t){return void 0!==t&&(u=t),i=n,this},this.start=function(n){for(var u in e.add(this),h=!1,a=void 0!==n?n:Date.now(),a+=o,i)if(null!==t[u]&&u in t){if(i[u]instanceof Array){if(0===i[u].length)continue;i[u]=[t[u]].concat(i[u])}r[u]=t[u]}return this},this.stop=function(){return e.remove(this),this},this.delay=function(n){return o=n,this},this.easing=function(n){return c=n,this},this.interpolation=function(n){return s=n,this},this.chain=function(){return l=arguments,this},this.onStart=function(n){return f=n,this},this.onUpdate=function(n){return d=n,this},this.onComplete=function(n){return v=n,this},this.update=function(n){if(n<a)return!0;!1===h&&(null!==f&&f.call(t),h=!0);var e=(n-a)/u;e=e>1?1:e;var o=c(e);for(var p in r){var I=r[p],M=i[p];t[p]=M instanceof Array?s(M,o):I+(M-I)*o}if(null!==d&&d.call(t,o),1==e){null!==v&&v.call(t);for(var w=0,m=l.length;w<m;w++)l[w].start(n);return!1}return!0}},e.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(2-Math.pow(2,-10*(n-1)))}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){var t,e=.1,r=.4;return 0===n?0:1===n?1:(!e||e<1?(e=1,t=r/4):t=r*Math.asin(1/e)/(2*Math.PI),-e*Math.pow(2,10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/r))},Out:function(n){var t,e=.1,r=.4;return 0===n?0:1===n?1:(!e||e<1?(e=1,t=r/4):t=r*Math.asin(1/e)/(2*Math.PI),e*Math.pow(2,-10*n)*Math.sin((n-t)*(2*Math.PI)/r)+1)},InOut:function(n){var t,e=.1,r=.4;return 0===n?0:1===n?1:(!e||e<1?(e=1,t=r/4):t=r*Math.asin(1/e)/(2*Math.PI),(n*=2)<1?e*Math.pow(2,10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/r)*-.5:e*Math.pow(2,-10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/r)*.5+1)}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?n*n*((t+1)*n-t)*.5:.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-e.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?.5*e.Easing.Bounce.In(2*n):.5*e.Easing.Bounce.Out(2*n-1)+.5}}},e.Interpolation={Linear:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=e.Interpolation.Utils.Linear;return t<0?o(n[0],n[1],i):t>1?o(n[r],n[r-1],r-i):o(n[u],n[u+1>r?r:u+1],i-u)},Bezier:function(n,t){var r,i=0,u=n.length-1,o=Math.pow,a=e.Interpolation.Utils.Bernstein;for(r=0;r<=u;r++)i+=o(1-t,u-r)*o(t,r)*n[r]*a(u,r);return i},CatmullRom:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),o=e.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(t<0&&(u=Math.floor(i=r*(1+t))),o(n[(u-1+r)%r],n[u],n[(u+1)%r],n[(u+2)%r],i-u)):t<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[r]-(o(n[r],n[r],n[r-1],n[r-1],i-r)-n[r]):o(n[u?u-1:0],n[u],n[r<u+1?r:u+1],n[r<u+2?r:u+2],i-u)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var r=e.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var n=[1];return function(t){var e,r=1;if(n[t])return n[t];for(e=t;e>1;e--)r*=e;return n[t]=r}}(),CatmullRom:function(n,t,e,r,i){var u=.5*(e-n),o=.5*(r-t),a=i*i,c=i*a;return(2*t-2*e+u+o)*c+(-3*t+3*e-2*u-o)*a+u*i+t}}},n.exports=e}}]);
//# sourceMappingURL=chunk-27e5f4f8.ae708d83.js.map