(function(e){function n(n){for(var t,a,o=n[0],i=n[1],h=n[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);d&&d(n);while(l.length)l.shift()();return u.push.apply(u,h||[]),c()}function c(){for(var e,n=0;n<u.length;n++){for(var c=u[n],t=!0,a=1;a<c.length;a++){var o=c[a];0!==r[o]&&(t=!1)}t&&(u.splice(n--,1),e=i(i.s=c[0]))}return e}var t={},a={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0267ac36":"946b270e","chunk-6625a9a1":"c7ebf5ba","chunk-4c6a3ed8":"6b10ce46","chunk-cb0525c4":"cf0119cc","chunk-2d21a3d2":"39e72082","chunk-80cce6c8":"4c8400d5","chunk-53ee3f76":"50c5c04a","chunk-544a3bf5":"6958aa6c","chunk-746bc904":"839f98de","chunk-57035327":"af414780","chunk-7c1b11bc":"58c51237","chunk-81b63c0c":"ae401dce","chunk-fab1be30":"dc0a4c90","chunk-6971422d":"48249011","chunk-3564c433":"57671f64","chunk-96876f46":"d9705384","chunk-ce2887c0":"8bd43deb","chunk-87685acc":"b5e82b0c","chunk-28ede3f6":"40424831","chunk-7ae94aa3":"e6b08c88"}[e]+".js"}function i(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.e=function(e){var n=[],c={"chunk-0267ac36":1,"chunk-6625a9a1":1,"chunk-4c6a3ed8":1,"chunk-cb0525c4":1,"chunk-80cce6c8":1,"chunk-53ee3f76":1,"chunk-544a3bf5":1,"chunk-746bc904":1,"chunk-57035327":1,"chunk-7c1b11bc":1,"chunk-81b63c0c":1,"chunk-fab1be30":1,"chunk-6971422d":1,"chunk-3564c433":1,"chunk-96876f46":1,"chunk-ce2887c0":1,"chunk-87685acc":1,"chunk-28ede3f6":1,"chunk-7ae94aa3":1};a[e]?n.push(a[e]):0!==a[e]&&c[e]&&n.push(a[e]=new Promise((function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-0267ac36":"fb79c444","chunk-6625a9a1":"1ecc40b4","chunk-4c6a3ed8":"86715470","chunk-cb0525c4":"f08b7e43","chunk-2d21a3d2":"31d6cfe0","chunk-80cce6c8":"d5abf3c9","chunk-53ee3f76":"4eaf95cf","chunk-544a3bf5":"4eaf95cf","chunk-746bc904":"1bf414a5","chunk-57035327":"ffac7160","chunk-7c1b11bc":"4eaf95cf","chunk-81b63c0c":"4eaf95cf","chunk-fab1be30":"d4205f10","chunk-6971422d":"7439d23f","chunk-3564c433":"ca9734c4","chunk-96876f46":"9502305a","chunk-ce2887c0":"a09fb622","chunk-87685acc":"0c0c5ce4","chunk-28ede3f6":"274cc7df","chunk-7ae94aa3":"4eaf95cf"}[e]+".css",r=i.p+t,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var h=u[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===t||f===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){h=l[o],f=h.getAttribute("data-href");if(f===t||f===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var t=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete a[e],d.parentNode.removeChild(d),c(u)},d.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){a[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise((function(n,c){t=r[e]=[n,c]}));n.push(t[2]=u);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var l=new Error;h=function(n){f.onerror=f.onload=null,clearTimeout(d);var c=r[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",l.name="ChunkLoadError",l.type=t,l.request=a,c[1](l)}r[e]=void 0}};var d=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,c){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(c,t,function(n){return e[n]}.bind(null,t));return c},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=n,h=h.slice();for(var l=0;l<h.length;l++)n(h[l]);var d=f;u.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},"034f":function(e,n,c){"use strict";var t=c("8a23"),a=c.n(t);a.a},"56d7":function(e,n,c){"use strict";c.r(n);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("2b0e"),a=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("body",{staticStyle:{"overflow-x":"hidden",position:"relative"}},[c("v-app",[c("PageHeader",{staticStyle:{"z-index":"5"}}),c("v-content",[c("router-view")],1),c("PageFooter")],1)],1)},r=[],u=(c("d3b7"),function(){return Promise.all([c.e("chunk-0267ac36"),c.e("chunk-6625a9a1"),c.e("chunk-4c6a3ed8"),c.e("chunk-cb0525c4")]).then(c.bind(null,"0418"))}),o=function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-0267ac36"),c.e("chunk-6625a9a1"),c.e("chunk-746bc904")]).then(c.bind(null,"fd2d"))},i={name:"App",components:{PageHeader:u,PageFooter:o}},h=i,f=(c("034f"),c("2877")),l=c("6544"),d=c.n(l),s=c("7496"),b=c("a75b"),k=Object(f["a"])(h,a,r,!1,null,null,null),p=k.exports;d()(k,{VApp:s["a"],VContent:b["a"]});var m=c("8c4f");t["a"].use(m["a"]);var v=[{path:"/",name:"Home",component:function(){return c.e("chunk-2d21a3d2").then(c.bind(null,"bb51"))},meta:{title:"DevlUp Labs"}},{path:"/about",name:"About",component:function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-57035327")]).then(c.bind(null,"2664"))},meta:{title:"About Us"}},{path:"/projects",name:"Projects",component:function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-81b63c0c")]).then(c.bind(null,"07bd"))},meta:{title:"Projects"}},{path:"/timeline",name:"Timeline",component:function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-fab1be30")]).then(c.bind(null,"f67a"))},meta:{title:"Timeline"}},{path:"/blog",name:"Blog",component:function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-0267ac36"),c.e("chunk-544a3bf5")]).then(c.bind(null,"fd3f"))},meta:{title:" Our Blog"}},{path:"/videos",name:"Videos",component:function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-0267ac36"),c.e("chunk-53ee3f76")]).then(c.bind(null,"a3fd"))},meta:{title:" Videos"}},{path:"/team",name:"Team",component:function(){return Promise.all([c.e("chunk-80cce6c8"),c.e("chunk-7c1b11bc")]).then(c.bind(null,"c66d"))},meta:{title:"Team"}}],g=new m["a"]({routes:v});g.beforeEach((function(e,n,c){document.title=e.meta.title,c()}));var y=g,P=c("f309");t["a"].use(P["a"]);var w=new P["a"]({theme:{options:{customProperties:!0,cards:{ProjectHeight:300,ProfileWidth:300}},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",basic:"#1b65c4"}}}});t["a"].config.productionTip=!1,new t["a"]({router:y,vuetify:w,render:function(e){return e(p)}}).$mount("#app")},"8a23":function(e,n,c){}});
//# sourceMappingURL=app.832c424b.js.map