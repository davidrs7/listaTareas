(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("A36C"),r=n("iWo5"),o=n("qULd");const s=(t,e)=>{let n,s;const a=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),c(o,r)):l()},c=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},VnTo:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("mrSG"),r=n("fXoL"),o=n("Z16M"),s=n("tyNb"),a=n("TEn/"),c=n("ofXK");let l=(()=>{class t{transform(t,e=!0){return t.filter(t=>t.terminada===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Gb({name:"filtroCompletado",type:t,pure:!1}),t})();const u=["lista"];function d(t,e){if(1&t){const t=r.Lb();r.Kb(0,"ion-item-sliding"),r.Kb(1,"ion-item",3),r.Sb("click",(function(){r.bc(t);const n=e.$implicit;return r.Ub().listaSeleccionada(n)})),r.Kb(2,"ion-label"),r.fc(3),r.Jb(),r.Kb(4,"ion-note",4),r.fc(5),r.Jb(),r.Jb(),r.Kb(6,"ion-item-options",5),r.Kb(7,"ion-item-option",6),r.Sb("click",(function(){r.bc(t);const n=e.$implicit;return r.Ub().borrarLista(n)})),r.Ib(8,"ion-icon",7),r.Jb(),r.Jb(),r.Kb(9,"ion-item-options",8),r.Kb(10,"ion-item-option",6),r.Sb("click",(function(){r.bc(t);const n=e.$implicit;return r.Ub().editarLista(n)})),r.Ib(11,"ion-icon",9),r.Jb(),r.Jb(),r.Jb()}if(2&t){const t=e.$implicit;r.xb(3),r.hc(" ",t.titulo," "),r.xb(2),r.gc(t.items.length)}}let f=(()=>{class t{constructor(t,e,n){this.deseosService=t,this.router=e,this.alertCtrl=n,this.terminada=!0}ngOnInit(){}borrarLista(t){console.log({lista:t}),this.deseosService.borrarLista(t)}editarLista(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Editar lista",inputs:[{name:"titulo",type:"text",value:t.titulo,placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("cancelar")}},{text:"Editar",handler:e=>{console.log(e),0!==e.titulo.length&&(t.titulo=e.titulo,this.deseosService.guardarStorage(),this.lista.closeSlidingItems())}}]})).present()}))}listaSeleccionada(t){console.log(t),this.router.navigateByUrl(!0===this.terminada?"/tabs/tab2/agregar/"+t.id:"/tabs/tab1/agregar/"+t.id)}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(o.a),r.Hb(s.g),r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-listas"]],viewQuery:function(t,e){var n;1&t&&r.ic(u,!0),2&t&&r.ac(n=r.Tb())&&(e.lista=n.first)},inputs:{terminada:"terminada"},decls:4,vars:4,consts:[["color","dark"],["lista",""],[4,"ngFor","ngForOf"],["color","dark","detail","",3,"click"],["color","tertiary","slot","end"],["side","start"],["color","danger",3,"click"],["name","close"],["side","end"],["name","create-outline"]],template:function(t,e){1&t&&(r.Kb(0,"ion-list",0,1),r.ec(2,d,12,2,"ion-item-sliding",2),r.Vb(3,"filtroCompletado"),r.Jb()),2&t&&(r.xb(2),r.Zb("ngForOf",r.Wb(3,1,e.deseosService.listas,e.terminada)))},directives:[a.s,c.h,a.q,a.n,a.r,a.u,a.p,a.o,a.l],pipes:[l],styles:[""]}),t})()},Z16M:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class i{constructor(t){this.titulo=t,this.creadaEn=new Date,this.terminada=!1,this.items=[],this.id=(new Date).getTime()}}var r=n("fXoL");let o=(()=>{class t{constructor(){this.listas=[],this.cargarStorage()}crearLista(t){const e=new i(t);return this.listas.push(e),this.guardarStorage(),e.id}borrarLista(t){this.listas=this.listas.filter(e=>e.id!==t.id),this.guardarStorage()}obtenerLista(t){return t=Number(t),this.listas.find(e=>e.id===t)}guardarStorage(){localStorage.setItem("data",JSON.stringify(this.listas))}cargarStorage(){this.listas=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),r=n("TEn/"),o=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)}}),t})(),a=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.B,s]]}),t})()},qULd:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.B]]}),t})()}}]);