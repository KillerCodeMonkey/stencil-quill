var __extends=this&&this.__extends||function(){var r=function(e,n){r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))r[n]=e[n]};return r(e,n)};return function(e,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(r,e,n,t){function i(r){return r instanceof n?r:new n((function(e){e(r)}))}return new(n||(n=Promise))((function(n,a){function f(r){try{o(t.next(r))}catch(r){a(r)}}function u(r){try{o(t["throw"](r))}catch(r){a(r)}}function o(r){r.done?n(r.value):i(r.value).then(f,u)}o((t=t.apply(r,e||[])).next())}))};var __generator=this&&this.__generator||function(r,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,f;return f={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(f[Symbol.iterator]=function(){return this}),f;function u(r){return function(e){return o([r,e])}}function o(u){if(t)throw new TypeError("Generator is already executing.");while(f&&(f=0,u[0]&&(n=0)),n)try{if(t=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1];a=u;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(u);break}if(a[2])n.ops.pop();n.trys.pop();continue}u=e.call(r,n)}catch(r){u=[6,r];i=0}finally{t=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(r,e,n){if(n||arguments.length===2)for(var t=0,i=e.length,a;t<i;t++){if(a||!(t in e)){if(!a)a=Array.prototype.slice.call(e,0,t);a[t]=e[t]}}return r.concat(a||Array.prototype.slice.call(e))};System.register([],(function(r,e){"use strict";return{execute:function(){var n=this;var t="quill-components";var i={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,constructableCSS:true,cssAnnotations:true,devTools:false,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:false,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:false,mode:false,modernPropertyDecls:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:false,propNumber:false,propString:true,reflect:false,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:false,slot:true,slotChildNodesFix:false,slotRelocation:true,state:false,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:false,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:false,vdomText:false,vdomXlink:false,watchCallback:true};var a=Object.defineProperty;var f=function(r,e){for(var n in e)a(r,n,{get:e[n],enumerable:true})};var u=function(r){if(r.__stencil__getHostRef){return r.__stencil__getHostRef()}return void 0};var o=r("r",(function(r,e){r.__stencil__getHostRef=function(){return e};e.t=r}));var l=function(r,e){var n={i:0,$hostElement$:r,u:e,o:new Map};{n.l=new Promise((function(r){return n.v=r}));r["s-p"]=[];r["s-rc"]=[]}var t=n;r.__stencil__getHostRef=function(){return t};return t};var s=function(r,e){return e in r};var v=function(r,e){return(0,console.error)(r,e)};var c=new Map;var d=function(r,n,t){var i=r.h.replace(/-/g,"_");var a=r.p;if(!a){return void 0}var f=c.get(a);if(f){return f[i]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return e.import("./".concat(a,".entry.js").concat("")).then((function(r){{c.set(a,r)}return r[i]}),(function(r){v(r,n.$hostElement$)}))};var h=new Map;var p="sty-id";var y="{visibility:hidden}.hydrated{visibility:inherit}";var m="slot-fb{display:contents}slot-fb[hidden]{display:none}";var w=typeof window!=="undefined"?window:{};var b={i:0,m:"",jmp:function(r){return r()},raf:function(r){return requestAnimationFrame(r)},ael:function(r,e,n,t){return r.addEventListener(e,n,t)},rel:function(r,e,n,t){return r.removeEventListener(e,n,t)},ce:function(r,e){return new CustomEvent(r,e)}};var S=i.shadowDom;var g=r("p",(function(r){return Promise.resolve(r)}));var _=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(r){}return false}();var $=false;var k=[];var A=[];var O=function(r,e){return function(n){r.push(n);if(!$){$=true;if(e&&b.i&4){C(T)}else{b.raf(T)}}}};var j=function(r){for(var e=0;e<r.length;e++){try{r[e](performance.now())}catch(r){v(r)}}r.length=0};var T=function(){j(k);{j(A);if($=k.length>0){b.raf(T)}}};var C=function(r){return g().then(r)};var x=O(A,true);var L=function(r){return r!=null&&r!==void 0};var E=function(r){r=typeof r;return r==="object"||r==="function"};function F(r){var e,n,t;return(t=(n=(e=r.head)==null?void 0:e.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?t:void 0}var N={};f(N,{err:function(){return M},map:function(){return P},ok:function(){return D},unwrap:function(){return R},unwrapErr:function(){return U}});var D=function(r){return{isOk:true,isErr:false,value:r}};var M=function(r){return{isOk:false,isErr:true,value:r}};function P(r,e){if(r.isOk){var n=e(r.value);if(n instanceof Promise){return n.then((function(r){return D(r)}))}else{return D(n)}}if(r.isErr){var t=r.value;return M(t)}throw"should never get here"}var R=function(r){if(r.isOk){return r.value}else{throw r.value}};var U=function(r){if(r.isErr){return r.value}else{throw r.value}};var W=function(r){var e=Q(r,"childNodes");if(r.tagName&&r.tagName.includes("-")&&r["s-cr"]&&r.tagName!=="SLOT-FB"){z(e,r.tagName).forEach((function(r){if(r.nodeType===1&&r.tagName==="SLOT-FB"){if(H(r,q(r),false).length){r.hidden=true}else{r.hidden=false}}}))}var n=0;for(n=0;n<e.length;n++){var t=e[n];if(t.nodeType===1&&Q(t,"childNodes").length){W(t)}}};var B=function(r){var e=[];for(var n=0;n<r.length;n++){var t=r[n]["s-nr"]||void 0;if(t&&t.isConnected){e.push(t)}}return e};function z(r,e,n){var t=0;var i=[];var a;for(;t<r.length;t++){a=r[t];if(a["s-sr"]&&(!e||a["s-hn"]===e)&&(n===void 0||q(a)===n)){i.push(a);if(typeof n!=="undefined")return i}i=__spreadArray(__spreadArray([],i,true),z(a.childNodes,e,n),true)}return i}var H=function(r,e,n){if(n===void 0){n=true}var t=[];if(n&&r["s-sr"]||!r["s-sr"])t.push(r);var i=r;while(i=i.nextSibling){if(q(i)===e&&(n||!i["s-sr"]))t.push(i)}return t};var I=function(r,e){if(r.nodeType===1){if(r.getAttribute("slot")===null&&e===""){return true}if(r.getAttribute("slot")===e){return true}return false}if(r["s-sn"]===e){return true}return e===""};var q=function(r){return typeof r["s-sn"]==="string"?r["s-sn"]:r.nodeType===1&&r.getAttribute("slot")||void 0};function G(r){if(r.assignedElements||r.assignedNodes||!r["s-sr"])return;var e=function(e){return function(r){var n=[];var t=this["s-sn"];if(r==null?void 0:r.flatten){console.error("\n          Flattening is not supported for Stencil non-shadow slots. \n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ")}var i=this["s-cr"].parentElement;var a=i.__childNodes?i.childNodes:B(i.childNodes);a.forEach((function(r){if(t===q(r)){n.push(r)}}));if(e){return n.filter((function(r){return r.nodeType===1}))}return n}.bind(r)};r.assignedElements=e(true);r.assignedNodes=e(false)}function Q(r,e){if("__"+e in r){var n=r["__"+e];if(typeof n!=="function")return n;return n.bind(r)}else{if(typeof r[e]!=="function")return r[e];return r[e].bind(r)}}var V=function(r,e){if(e===void 0){e=""}{return function(){return}}};var Y=function(r,e){{return function(){return}}};var K=r("h",(function(r,e){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var i=null;var a=null;var f=null;var u=false;var o=false;var l=[];var s=function(e){for(var n=0;n<e.length;n++){i=e[n];if(Array.isArray(i)){s(i)}else if(i!=null&&typeof i!=="boolean"){if(u=typeof r!=="function"&&!E(i)){i=String(i)}if(u&&o){l[l.length-1].S+=i}else{l.push(u?X(null,i):i)}o=u}}};s(n);if(e){if(e.key){a=e.key}if(e.name){f=e.name}{var v=e.className||e.class;if(v){e.class=typeof v!=="object"?v:Object.keys(v).filter((function(r){return v[r]})).join(" ")}}}var c=X(r,null);c._=e;if(l.length>0){c.$=l}{c.k=a}{c.A=f}return c}));var X=function(r,e){var n={i:0,O:r,S:e,j:null,$:null};{n._=null}{n.k=null}{n.A=null}return n};var J=r("H",{});var Z=function(r){return r&&r.O===J};var rr=function(r,e){if(r!=null&&!E(r)){if(e&4){return r==="false"?false:r===""||!!r}if(e&1){return String(r)}return r}return r};var er=r("g",(function(r){return u(r).$hostElement$}));var nr=r("c",(function(r,e,n){var t=er(r);return{emit:function(r){return tr(t,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:r})}}}));var tr=function(r,e,n){var t=b.ce(e,n);r.dispatchEvent(t);return t};var ir=new WeakMap;var ar=function(r,e,n){var t=h.get(r);if(_&&n){t=t||new CSSStyleSheet;if(typeof t==="string"){t=e}else{t.replaceSync(e)}}else{t=e}h.set(r,t)};var fr=function(r,e,n){var t;var i=or(e);var a=h.get(i);if(!w.document){return i}r=r.nodeType===11?r:w.document;if(a){if(typeof a==="string"){r=r.head||r;var f=ir.get(r);var u=void 0;if(!f){ir.set(r,f=new Set)}if(!f.has(i)){{u=document.querySelector("[".concat(p,'="').concat(i,'"]'))||w.document.createElement("style");u.innerHTML=a;var o=(t=b.T)!=null?t:F(w.document);if(o!=null){u.setAttribute("nonce",o)}if(!(e.i&1)){if(r.nodeName==="HEAD"){var l=r.querySelectorAll("link[rel=preconnect]");var s=l.length>0?l[l.length-1].nextSibling:r.querySelector("style");r.insertBefore(u,(s==null?void 0:s.parentNode)===r?s:null)}else if("host"in r){if(_){var v=new CSSStyleSheet;v.replaceSync(a);r.adoptedStyleSheets=__spreadArray([v],r.adoptedStyleSheets,true)}else{var c=r.querySelector("style");if(c){c.innerHTML=a+c.innerHTML}else{r.prepend(u)}}}else{r.append(u)}}if(e.i&1){r.insertBefore(u,null)}}if(e.i&4){u.innerHTML+=m}if(f){f.add(i)}}}else if(!r.adoptedStyleSheets.includes(a)){r.adoptedStyleSheets=__spreadArray(__spreadArray([],r.adoptedStyleSheets,true),[a],false)}}return i};var ur=function(r){var e=r.u;var n=r.$hostElement$;var t=e.i;var i=V("attachStyles",e.h);var a=fr(n.getRootNode(),e);if(t&10&&t&2||t&128){n["s-sc"]=a;n.classList.add(a+"-h")}i()};var or=function(r,e){return"sc-"+r.h};var lr=function(r,e,n,t,i,a,f){if(n===t){return}var u=s(r,e);e.toLowerCase();if(e==="class"){var o=r.classList;var l=vr(n);var v=vr(t);{o.remove.apply(o,l.filter((function(r){return r&&!v.includes(r)})));o.add.apply(o,v.filter((function(r){return r&&!l.includes(r)})))}}else if(e==="key");else if(e==="ref"){if(t){t(r)}}else{var c=E(t);if((u||c&&t!==null)&&!i){try{if(!r.tagName.includes("-")){var d=t==null?"":t;if(e==="list"){u=false}else if(n==null||r[e]!=d){if(typeof r.__lookupSetter__(e)==="function"){r[e]=d}else{r.setAttribute(e,d)}}}else if(r[e]!==t){r[e]=t}}catch(r){}}if(t==null||t===false){if(t!==false||r.getAttribute(e)===""){{r.removeAttribute(e)}}}else if((!u||a&4||i)&&!c&&r.nodeType===1){t=t===true?"":t;{r.setAttribute(e,t)}}}};var sr=/\s/;var vr=function(r){if(typeof r==="object"&&r&&"baseVal"in r){r=r.baseVal}if(!r||typeof r!=="string"){return[]}return r.split(sr)};var cr=function(r,e,n,t){var i=e.j.nodeType===11&&e.j.host?e.j.host:e.j;var a=r&&r._||{};var f=e._||{};{for(var u=0,o=dr(Object.keys(a));u<o.length;u++){var l=o[u];if(!(l in f)){lr(i,l,a[l],void 0,n,e.i)}}}for(var s=0,v=dr(Object.keys(f));s<v.length;s++){var l=v[s];lr(i,l,a[l],f[l],n,e.i)}};function dr(r){return r.includes("ref")?__spreadArray(__spreadArray([],r.filter((function(r){return r!=="ref"})),true),["ref"],false):r}var hr;var pr;var yr;var mr=false;var wr=false;var br=false;var Sr=false;var gr=function(r,e,n){var t;var a=e.$[n];var f=0;var u;var o;var l;if(!mr){br=true;if(a.O==="slot"){a.i|=a.$?2:1}}if(a.i&1){u=a.j=w.document.createTextNode("");{cr(null,a,Sr)}}else{if(!w.document){throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.")}u=a.j=w.document.createElement(!mr&&i.slotRelocation&&a.i&2?"slot-fb":a.O);{cr(null,a,Sr)}if(L(hr)&&u["s-si"]!==hr){u.classList.add(u["s-si"]=hr)}if(a.$){for(f=0;f<a.$.length;++f){o=gr(r,a,f);if(o){u.appendChild(o)}}}}u["s-hn"]=yr;{if(a.i&(2|1)){u["s-sr"]=true;u["s-cr"]=pr;u["s-sn"]=a.A||"";u["s-rf"]=(t=a._)==null?void 0:t.ref;G(u);l=r&&r.$&&r.$[n];if(l&&l.O===a.O&&r.j){{_r(r.j,false)}}{Fr(pr,u,e.j,r==null?void 0:r.j)}}}return u};var _r=function(r,e){b.i|=1;var n=Array.from(r.__childNodes||r.childNodes);if(r["s-sr"]&&i.experimentalSlotFixes){var t=r;while(t=t.nextSibling){if(t&&t["s-sn"]===r["s-sn"]&&t["s-sh"]===yr){n.push(t)}}}for(var a=n.length-1;a>=0;a--){var f=n[a];if(f["s-hn"]!==yr&&f["s-ol"]){Er(jr(f).parentNode,f,jr(f));f["s-ol"].remove();f["s-ol"]=void 0;f["s-sh"]=void 0;br=true}if(e){_r(f,e)}}b.i&=~1};var $r=function(r,e,n,t,i,a){var f=r["s-cr"]&&r["s-cr"].parentNode||r;var u;for(;i<=a;++i){if(t[i]){u=gr(null,n,i);if(u){t[i].j=u;Er(f,u,jr(e))}}}};var kr=function(r,e,n){for(var t=e;t<=n;++t){var i=r[t];if(i){var a=i.j;Lr(i);if(a){{wr=true;if(a["s-ol"]){a["s-ol"].remove()}else{_r(a,true)}}a.remove()}}}};var Ar=function(r,e,n,t,i){if(i===void 0){i=false}var a=0;var f=0;var u=0;var o=0;var l=e.length-1;var s=e[0];var v=e[l];var c=t.length-1;var d=t[0];var h=t[c];var p;var y;while(a<=l&&f<=c){if(s==null){s=e[++a]}else if(v==null){v=e[--l]}else if(d==null){d=t[++f]}else if(h==null){h=t[--c]}else if(Or(s,d,i)){Tr(s,d,i);s=e[++a];d=t[++f]}else if(Or(v,h,i)){Tr(v,h,i);v=e[--l];h=t[--c]}else if(Or(s,h,i)){if(s.O==="slot"||h.O==="slot"){_r(s.j.parentNode,false)}Tr(s,h,i);Er(r,s.j,v.j.nextSibling);s=e[++a];h=t[--c]}else if(Or(v,d,i)){if(s.O==="slot"||h.O==="slot"){_r(v.j.parentNode,false)}Tr(v,d,i);Er(r,v.j,s.j);v=e[--l];d=t[++f]}else{u=-1;{for(o=a;o<=l;++o){if(e[o]&&e[o].k!==null&&e[o].k===d.k){u=o;break}}}if(u>=0){y=e[u];if(y.O!==d.O){p=gr(e&&e[f],n,u)}else{Tr(y,d,i);e[u]=void 0;p=y.j}d=t[++f]}else{p=gr(e&&e[f],n,f);d=t[++f]}if(p){{Er(jr(s.j).parentNode,p,jr(s.j))}}}}if(a>l){$r(r,t[c+1]==null?null:t[c+1].j,n,t,f,c)}else if(f>c){kr(e,a,l)}};var Or=function(r,e,n){if(n===void 0){n=false}if(r.O===e.O){if(r.O==="slot"){return r.A===e.A}if(!n){return r.k===e.k}if(n&&!r.k&&e.k){r.k=e.k}return true}return false};var jr=function(r){return r&&r["s-ol"]||r};var Tr=function(r,e,n){if(n===void 0){n=false}var t=e.j=r.j;var a=r.$;var f=e.$;{{cr(r,e,Sr)}if(a!==null&&f!==null){Ar(t,a,e,f,n)}else if(f!==null){$r(t,null,e,f,0,f.length-1)}else if(!n&&i.updatable&&a!==null){kr(a,0,a.length-1)}}};var Cr=[];var xr=function(r){var e;var n;var t;var a=r.__childNodes||r.childNodes;for(var f=0,u=a;f<u.length;f++){var o=u[f];if(o["s-sr"]&&(e=o["s-cr"])&&e.parentNode){n=e.parentNode.__childNodes||e.parentNode.childNodes;var l=o["s-sn"];var s=function(){e=n[t];if(!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==o["s-hn"]&&!i.experimentalSlotFixes){if(I(e,l)){var r=Cr.find((function(r){return r.C===e}));wr=true;e["s-sn"]=e["s-sn"]||l;if(r){r.C["s-sh"]=o["s-hn"];r.L=o}else{e["s-sh"]=o["s-hn"];Cr.push({L:o,C:e})}if(e["s-sr"]){Cr.map((function(n){if(I(n.C,e["s-sn"])){r=Cr.find((function(r){return r.C===e}));if(r&&!n.L){n.L=r.L}}}))}}else if(!Cr.some((function(r){return r.C===e}))){Cr.push({C:e})}}};for(t=n.length-1;t>=0;t--){s()}}if(o.nodeType===1){xr(o)}}};var Lr=function(r){{r._&&r._.ref&&r._.ref(null);r.$&&r.$.map(Lr)}};var Er=function(r,e,n){if(typeof e["s-sn"]==="string"&&!!e["s-sr"]&&!!e["s-cr"]){Fr(e["s-cr"],e,r,e.parentElement)}{return r==null?void 0:r.insertBefore(e,n)}};function Fr(r,e,n,t){var i,a;var f;if(r&&typeof e["s-sn"]==="string"&&!!e["s-sr"]&&r.parentNode&&r.parentNode["s-sc"]&&(f=e["s-si"]||r.parentNode["s-sc"])){var u=e["s-sn"];var o=e["s-hn"];(i=n.classList)==null?void 0:i.add(f+"-s");if(t&&((a=t.classList)==null?void 0:a.contains(f+"-s"))){var l=(t.__childNodes||t.childNodes)[0];var s=false;while(l){if(l["s-sn"]!==u&&l["s-hn"]===o&&!!l["s-sr"]){s=true;break}l=l.nextSibling}if(!s)t.classList.remove(f+"-s")}}}var Nr=function(r,e,n){if(n===void 0){n=false}var t,i,a,f;var u=r.$hostElement$;var o=r.F||X(null,null);var l=Z(e)?e:K(null,null,e);yr=u.tagName;if(n&&l._){for(var s=0,v=Object.keys(l._);s<v.length;s++){var c=v[s];if(u.hasAttribute(c)&&!["key","ref","style","class"].includes(c)){l._[c]=u[c]}}}l.O=null;l.i|=4;r.F=l;l.j=o.j=u;{hr=u["s-sc"]}mr=S;{pr=u["s-cr"];wr=false}Tr(o,l,n);{b.i|=1;if(br){xr(l.j);for(var d=0,h=Cr;d<h.length;d++){var p=h[d];var y=p.C;if(!y["s-ol"]&&w.document){var m=w.document.createTextNode("");m["s-nr"]=y;Er(y.parentNode,y["s-ol"]=m,y)}}for(var g=0,_=Cr;g<_.length;g++){var p=_[g];var y=p.C;var $=p.L;if($){var k=$.parentNode;var A=$.nextSibling;{var m=(t=y["s-ol"])==null?void 0:t.previousSibling;while(m){var O=(i=m["s-nr"])!=null?i:null;if(O&&O["s-sn"]===y["s-sn"]&&k===(O.__parentNode||O.parentNode)){O=O.nextSibling;while(O===y||(O==null?void 0:O["s-sr"])){O=O==null?void 0:O.nextSibling}if(!O||!O["s-nr"]){A=O;break}}m=m.previousSibling}}var j=y.__parentNode||y.parentNode;var T=y.__nextSibling||y.nextSibling;if(!A&&k!==j||T!==A){if(y!==A){if(!y["s-hn"]&&y["s-ol"]){y["s-hn"]=y["s-ol"].parentNode.nodeName}Er(k,y,A);if(y.nodeType===1&&y.tagName!=="SLOT-FB"){y.hidden=(a=y["s-ih"])!=null?a:false}}}y&&typeof $["s-rf"]==="function"&&$["s-rf"]($)}else{if(y.nodeType===1){if(n){y["s-ih"]=(f=y.hidden)!=null?f:false}y.hidden=true}}}}if(wr){W(l.j)}b.i&=~1;Cr.length=0}pr=void 0};var Dr=function(r,e){if(e&&!r.N&&e["s-p"]){var n=e["s-p"].push(new Promise((function(t){return r.N=function(){e["s-p"].splice(n-1,1);t()}})))}};var Mr=function(r,e){{r.i|=16}if(r.i&4){r.i|=512;return}Dr(r,r.D);var n=function(){return Pr(r,e)};return x(n)};var Pr=function(r,e){var n=r.$hostElement$;var t=V("scheduleUpdate",r.u.h);var i=r.t;if(!i){throw new Error("Can't render component <".concat(n.tagName.toLowerCase()," /> with invalid Stencil runtime! Make sure this imported component is compiled with a `externalRuntime: true` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime"))}var a;if(e){a=Ir(i,"componentWillLoad",void 0,n)}else{a=Ir(i,"componentWillUpdate",void 0,n)}a=Rr(a,(function(){return Ir(i,"componentWillRender",void 0,n)}));t();return Rr(a,(function(){return Wr(r,i,e)}))};var Rr=function(r,e){return Ur(r)?r.then(e).catch((function(r){console.error(r);e()})):e()};var Ur=function(r){return r instanceof Promise||r&&r.then&&typeof r.then==="function"};var Wr=function(r,e,t){return __awaiter(n,void 0,void 0,(function(){var n,i,a,f,u,o,l;return __generator(this,(function(s){i=r.$hostElement$;a=V("update",r.u.h);f=i["s-rc"];if(t){ur(r)}u=V("render",r.u.h);{Br(r,e,i,t)}if(f){f.map((function(r){return r()}));i["s-rc"]=void 0}u();a();{o=(n=i["s-p"])!=null?n:[];l=function(){return zr(r)};if(o.length===0){l()}else{Promise.all(o).then(l);r.i|=4;o.length=0}}return[2]}))}))};var Br=function(r,e,n,t){try{e=e.render();{r.i&=~16}{r.i|=2}{{{Nr(r,e,t)}}}}catch(e){v(e,r.$hostElement$)}return null};var zr=function(r){var e=r.u.h;var n=r.$hostElement$;var t=V("postUpdate",e);var i=r.t;var a=r.D;Ir(i,"componentDidRender",void 0,n);if(!(r.i&64)){r.i|=64;{qr(n)}Ir(i,"componentDidLoad",void 0,n);t();{r.v(n);if(!a){Hr()}}}else{Ir(i,"componentDidUpdate",void 0,n);t()}{if(r.N){r.N();r.N=void 0}if(r.i&512){C((function(){return Mr(r,false)}))}r.i&=~(4|512)}};var Hr=function(r){C((function(){return tr(w,"appload",{detail:{namespace:t}})}))};var Ir=function(r,e,n,t){if(r&&r[e]){try{return r[e](n)}catch(r){v(r,t)}}return void 0};var qr=function(r){var e;return r.classList.add((e=i.hydratedSelectorName)!=null?e:"hydrated")};var Gr=function(r,e){return u(r).o.get(e)};var Qr=function(r,e,n,t){var i=u(r);if(!i){throw new Error("Couldn't find host element for \"".concat(t.h,'" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).'))}var a=i.$hostElement$;var f=i.o.get(e);var o=i.i;var l=i.t;n=rr(n,t.M[e][0]);var s=Number.isNaN(f)&&Number.isNaN(n);var c=n!==f&&!s;if((!(o&8)||f===void 0)&&c){i.o.set(e,n);if(l){if(t.P&&o&128){var d=t.P[e];if(d){d.map((function(r){try{l[r](n,f,e)}catch(r){v(r,a)}}))}}if((o&(2|16))===2){if(l.componentShouldUpdate){if(l.componentShouldUpdate(n,f,e)===false){return}}Mr(i,false)}}}};var Vr=function(r,e,n){var t,a;var f=r.prototype;if(e.M||(e.P||r.watchers)){if(r.watchers&&!e.P){e.P=r.watchers}var o=Object.entries((t=e.M)!=null?t:{});o.map((function(r){var t=r[0],i=r[1][0];if(i&31||n&2&&i&32){var a=Object.getOwnPropertyDescriptor(f,t)||{},o=a.get,l=a.set;if(o)e.M[t][0]|=2048;if(l)e.M[t][0]|=4096;if(n&1||!o){Object.defineProperty(f,t,{get:function(){{if((e.M[t][0]&2048)===0){return Gr(this,t)}var r=u(this);var n=r?r.t:f;if(!n)return;return n[t]}},configurable:true,enumerable:true})}Object.defineProperty(f,t,{set:function(r){var a=this;var f=u(this);if(l){var o=i&32?this[t]:f.$hostElement$[t];if(typeof o==="undefined"&&f.o.get(t)){r=f.o.get(t)}else if(!f.o.get(t)&&o){f.o.set(t,o)}l.apply(this,[rr(r,i)]);r=i&32?this[t]:f.$hostElement$[t];Qr(this,t,r,e);return}{if((n&1)===0||(e.M[t][0]&4096)===0){Qr(this,t,r,e);if(n&1&&!f.t){f.l.then((function(){if(e.M[t][0]&4096&&f.t[t]!==f.o.get(t)){f.t[t]=r}}))}return}var s=function(){var n=f.t[t];if(!f.o.get(t)&&n){f.o.set(t,n)}f.t[t]=rr(r,i);Qr(a,t,f.t[t],e)};if(f.t){s()}else{f.l.then((function(){return s()}))}}}})}}));if(n&1){var l=new Map;f.attributeChangedCallback=function(r,n,t){var a=this;b.jmp((function(){var o;var s=l.get(r);if(a.hasOwnProperty(s)&&i.lazyLoad){t=a[s];delete a[s]}else if(f.hasOwnProperty(s)&&typeof a[s]==="number"&&a[s]==t){return}else if(s==null){var v=u(a);var c=v==null?void 0:v.i;if(c&&!(c&8)&&c&128&&t!==n){var d=v.t;var h=(o=e.P)==null?void 0:o[r];h==null?void 0:h.forEach((function(e){if(d[e]!=null){d[e].call(d,t,n,r)}}))}return}var p=Object.getOwnPropertyDescriptor(f,s);t=t===null&&typeof a[s]==="boolean"?false:t;if(t!==a[s]&&(!p.get||!!p.set)){a[s]=t}}))};r.observedAttributes=Array.from(new Set(__spreadArray(__spreadArray([],Object.keys((a=e.P)!=null?a:{}),true),o.filter((function(r){var e=r[0],n=r[1];return n[0]&15})).map((function(r){var e=r[0],n=r[1];var t=n[1]||e;l.set(t,e);return t})),true)))}}return r};var Yr=function(r,e,t,i){return __awaiter(n,void 0,void 0,(function(){var n,i,a,f,u,o,l,s,c,p,y;return __generator(this,(function(m){switch(m.label){case 0:if(!((e.i&32)===0))return[3,6];e.i|=32;i=t.p;if(!i)return[3,4];a=d(t,e);if(!(a&&"then"in a))return[3,2];f=Y();return[4,a];case 1:n=m.sent();f();return[3,3];case 2:n=a;m.label=3;case 3:if(!n){throw new Error('Constructor for "'.concat(t.h,"#").concat(e.R,'" was not found'))}if(!n.isProxied){{t.P=n.watchers}Vr(n,t,2);n.isProxied=true}u=V("createInstance",t.h);{e.i|=8}try{new n(e)}catch(e){v(e,r)}{e.i&=~8}{e.i|=128}u();Kr(e.t,r);return[3,5];case 4:n=r.constructor;o=r.localName;customElements.whenDefined(o).then((function(){return e.i|=128}));m.label=5;case 5:if(n&&n.style){l=void 0;if(typeof n.style==="string"){l=n.style}s=or(t);if(!h.has(s)){c=V("registerStyles",t.h);ar(s,l,!!(t.i&1));c()}}m.label=6;case 6:p=e.D;y=function(){return Mr(e,true)};if(p&&p["s-rc"]){p["s-rc"].push(y)}else{y()}return[2]}}))}))};var Kr=function(r,e){{Ir(r,"connectedCallback",void 0,e)}};var Xr=function(r){if((b.i&1)===0){var e=u(r);var n=e.u;var t=V("connectedCallback",n.h);if(!(e.i&1)){e.i|=1;{if(n.i&(4|8)){Jr(r)}}{var i=r;while(i=i.parentNode||i.host){if(i["s-p"]){Dr(e,e.D=i);break}}}if(n.M){Object.entries(n.M).map((function(e){var n=e[0],t=e[1][0];if(t&31&&r.hasOwnProperty(n)){var i=r[n];delete r[n];r[n]=i}}))}{Yr(r,e,n)}}else{if(e==null?void 0:e.t){Kr(e.t,r)}else if(e==null?void 0:e.l){e.l.then((function(){return Kr(e.t,r)}))}}t()}};var Jr=function(r){if(!w.document){return}var e=r["s-cr"]=w.document.createComment("");e["s-cn"]=true;Er(r,e,r.firstChild)};var Zr=function(r,e){{Ir(r,"disconnectedCallback",void 0,e||r)}};var re=function(r){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(n){if((b.i&1)===0){e=u(r);if(e==null?void 0:e.t){Zr(e.t,r)}else if(e==null?void 0:e.l){e.l.then((function(){return Zr(e.t,r)}))}}if(ir.has(r)){ir.delete(r)}if(r.shadowRoot&&ir.has(r.shadowRoot)){ir.delete(r.shadowRoot)}return[2]}))}))};var ee=r("b",(function(r,e){if(e===void 0){e={}}var n;if(!w.document){console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");return}var t=V();var i=[];var a=e.exclude||[];var f=w.customElements;var o=w.document.head;var s=o.querySelector("meta[charset]");var v=w.document.createElement("style");var c=[];var d;var h=true;Object.assign(b,e);b.m=new URL(e.resourcesUrl||"./",w.document.baseURI).href;var p=false;r.map((function(r){r[1].map((function(e){var n;var t={i:e[0],h:e[1],M:e[2],U:e[3]};if(t.i&4){p=true}{t.M=e[2]}{t.P=(n=e[4])!=null?n:{}}var o=t.h;var s=function(r){__extends(e,r);function e(e){var n=r.call(this,e)||this;n.hasRegisteredEventListeners=false;e=n;l(e,t);return n}e.prototype.connectedCallback=function(){var r=this;u(this);if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true}if(d){clearTimeout(d);d=null}if(h){c.push(this)}else{b.jmp((function(){return Xr(r)}))}};e.prototype.disconnectedCallback=function(){var r=this;b.jmp((function(){return re(r)}));b.raf((function(){var e;var n=u(r);var t=c.findIndex((function(e){return e===r}));if(t>-1){c.splice(t,1)}if(((e=n==null?void 0:n.F)==null?void 0:e.j)instanceof Node&&!n.F.j.isConnected){delete n.F.j}}))};e.prototype.componentOnReady=function(){return u(this).l};return e}(HTMLElement);t.p=r[0];if(!a.includes(o)&&!f.get(o)){i.push(o);f.define(o,Vr(s,t,1))}}))}));if(i.length>0){if(p){v.textContent+=m}{v.textContent+=i.sort()+y}if(v.innerHTML.length){v.setAttribute("data-styles","");var S=(n=b.T)!=null?n:F(w.document);if(S!=null){v.setAttribute("nonce",S)}o.insertBefore(v,s?s.nextSibling:o.firstChild)}}h=false;if(c.length){c.map((function(r){return r.connectedCallback()}))}else{{b.jmp((function(){return d=setTimeout(Hr,30)}))}}t()}));var ne=r("s",(function(r){return b.T=r}))}}}));
//# sourceMappingURL=p-9a8d1e65.system.js.map