(this.webpackJsonptest_babylon=this.webpackJsonptest_babylon||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r);n(15),n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=function(){return i.a.createElement("section",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,i.a.createElement("strong",null,"Playground")," by ",i.a.createElement("a",{href:"https://github.com/marcelosevergnini"},"Marcelo Severgnini"),i.a.createElement("strong",null," Have Fun"))))};var c=function(){return i.a.createElement("section",{className:"hero is-primary"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},"My Playground"),i.a.createElement("h2",{className:"subtitle"},"Primary subtitle"))))},d=n(2),l=n(4),u=n(3),h=n(5),m=n(1),f=n(9),v=function e(t,n){var a=this;Object(d.a)(this,e),this.scene=void 0,this.renderer=void 0,this.camera=void 0,this.controls=void 0,this.updateRenderSize=function(e,t,n){a.renderer.setSize(e,t,n),a.camera.aspect=e/t,a.camera.updateProjectionMatrix()},this.addLights=function(e){e.forEach((function(e){var t=new m.b(new m.a(e.color));t.position.set(e.position.x,e.position.y,e.position.z).normalize(),a.scene.add(t)}))},this.addGrid=function(e){a.add(new m.c(e.size,e.dimensions))},this.add=function(e){a.scene.add(e)},this.updateControls=function(){a.renderer.render(a.scene,a.camera)},this.render=function(){a.renderer.render(a.scene,a.camera)},this.scene=new m.e,this.scene.background=new m.a(n),this.renderer=new m.f({antialias:t}),this.camera=new m.d(45,800/600,1,1e4),this.renderer.setSize(0,0,!1),this.camera.position.set(500,800,1300),this.camera.lookAt(0,0,0),this.controls=new f.OrbitControls(this.camera),this.controls.addEventListener("change",this.updateControls)},p={width:"calc(97vw)",height:"calc(70vh)"},g=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).containerRef=void 0,n.props=void 0,n.scene=void 0,n.componentDidMount=function(){n.scene=new v(!1,n.props.backgroundColor),n.containerRef.appendChild(n.scene.renderer.domElement);var e=n.containerRef,t=e.offsetWidth,a=e.offsetHeight;n.setState({width:t,height:a}),n.scene.updateRenderSize(t,a,!0),n.scene.addLights(n.props.lights),n.scene.addGrid(n.props.grid),n.animate()},n.animate=function(){window.requestAnimationFrame(n.animate),n.scene.render()},n.resizeCanvas=function(){var e=n.containerRef,t=e.offsetWidth,a=e.offsetHeight;n.scene.updateRenderSize(t,a,!0),n.setState({width:t,height:a})},n.onDocumentMouseMove=function(e){e.preventDefault(),n.setState((function(){return{mousePos:{x:e.clientX/n.containerRef.offsetWidth*2-1,y:-e.clientY/n.containerRef.offsetHeight*2+1}}}))},n.render=function(){return i.a.createElement("div",{style:p,ref:function(e){return n.containerRef=e}})},n.props=e,n.containerRef=i.a.createRef(),n.state={width:0,height:0,mousePos:{x:0,y:0}},window.addEventListener("resize",n.resizeCanvas,!0),window.addEventListener("mousemove",n.onDocumentMouseMove),n}return Object(h.a)(t,e),t}(a.Component);var w=function(){return i.a.createElement("div",{className:"container is-fluid"},i.a.createElement(g,{backgroundColor:14277081,lights:[{color:16777215,position:{x:1,y:.75,z:.5}}],grid:{size:1e3,dimensions:50}}))};var E=function(){return i.a.createElement("div",null,i.a.createElement(c,null),i.a.createElement(w,null),i.a.createElement(s,null))};o.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.03362a00.chunk.js.map