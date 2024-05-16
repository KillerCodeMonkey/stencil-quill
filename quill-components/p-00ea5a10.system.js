var __extends=this&&this.__extends||function(){var r=function(e,n){r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))r[n]=e[n]};return r(e,n)};return function(e,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(r,e,n,t){function a(r){return r instanceof n?r:new n((function(e){e(r)}))}return new(n||(n=Promise))((function(n,i){function f(r){try{o(t.next(r))}catch(r){i(r)}}function u(r){try{o(t["throw"](r))}catch(r){i(r)}}function o(r){r.done?n(r.value):a(r.value).then(f,u)}o((t=t.apply(r,e||[])).next())}))};var __generator=this&&this.__generator||function(r,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,f;return f={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(f[Symbol.iterator]=function(){return this}),f;function u(r){return function(e){return o([r,e])}}function o(u){if(t)throw new TypeError("Generator is already executing.");while(f&&(f=0,u[0]&&(n=0)),n)try{if(t=1,a&&(i=u[0]&2?a["return"]:u[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;if(a=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;a=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=e.call(r,n)}catch(r){u=[6,r];a=0}finally{t=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(r,e,n){if(n||arguments.length===2)for(var t=0,a=e.length,i;t<a;t++){if(i||!(t in e)){if(!i)i=Array.prototype.slice.call(e,0,t);i[t]=e[t]}}return r.concat(i||Array.prototype.slice.call(e))};System.register([],(function(r,e){"use strict";return{execute:function(){var n=this;var t="quill-components";var a={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:false,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:false,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:false,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:false,propNumber:false,propString:true,reflect:false,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:false,slot:true,slotChildNodesFix:false,slotRelocation:true,state:false,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:false,vdomKey:true,vdomListener:false,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:false,vdomText:false,vdomXlink:false,watchCallback:true};var i=Object.defineProperty;var f=function(r,e){for(var n in e)i(r,n,{get:e[n],enumerable:true})};var u={};var o=function(r){return r!=null};var l=function(r){r=typeof r;return r==="object"||r==="function"};function v(r){var e,n,t;return(t=(n=(e=r.head)==null?void 0:e.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?t:void 0}var s={};f(s,{err:function(){return d},map:function(){return h},ok:function(){return c},unwrap:function(){return p},unwrapErr:function(){return m}});var c=function(r){return{isOk:true,isErr:false,value:r}};var d=function(r){return{isOk:false,isErr:true,value:r}};function h(r,e){if(r.isOk){var n=e(r.value);if(n instanceof Promise){return n.then((function(r){return c(r)}))}else{return c(n)}}if(r.isErr){var t=r.value;return d(t)}throw"should never get here"}var p=function(r){if(r.isOk){return r.value}else{throw r.value}};var m=function(r){if(r.isErr){return r.value}else{throw r.value}};var y=function(r,e){if(e===void 0){e=""}{return function(){return}}};var b=function(r,e){{return function(){return}}};var w="{visibility:hidden}.hydrated{visibility:inherit}";var S="slot-fb{display:contents}slot-fb[hidden]{display:none}";var g=r("h",(function(r,e){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var f=null;var u=false;var o=false;var v=[];var s=function(e){for(var n=0;n<e.length;n++){a=e[n];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(u=typeof r!=="function"&&!l(a)){a=String(a)}if(u&&o){v[v.length-1].t+=a}else{v.push(u?_(null,a):a)}o=u}}};s(n);if(e){if(e.key){i=e.key}if(e.name){f=e.name}{var c=e.className||e.class;if(c){e.class=typeof c!=="object"?c:Object.keys(c).filter((function(r){return c[r]})).join(" ")}}}var d=_(r,null);d.i=e;if(v.length>0){d.u=v}{d.o=i}{d.l=f}return d}));var _=function(r,e){var n={v:0,h:r,t:e,p:null,u:null};{n.i=null}{n.o=null}{n.l=null}return n};var $=r("H",{});var k=function(r){return r&&r.h===$};var A=function(r,e){if(r!=null&&!l(r)){if(e&4){return r==="false"?false:r===""||!!r}if(e&1){return String(r)}return r}return r};var C=r("g",(function(r){return Rr(r).$hostElement$}));var T=r("c",(function(r,e,n){var t=C(r);return{emit:function(r){return j(t,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:r})}}}));var j=function(r,e,n){var t=zr.ce(e,n);r.dispatchEvent(t);return t};var O=new WeakMap;var x=function(r,e,n){var t=Wr.get(r);if(Gr&&n){t=t||new CSSStyleSheet;if(typeof t==="string"){t=e}else{t.replaceSync(e)}}else{t=e}Wr.set(r,t)};var L=function(r,e,n){var t;var a=R(e);var i=Wr.get(a);r=r.nodeType===11?r:qr;if(i){if(typeof i==="string"){r=r.head||r;var f=O.get(r);var u=void 0;if(!f){O.set(r,f=new Set)}if(!f.has(a)){{u=qr.createElement("style");u.innerHTML=i;var o=(t=zr.m)!=null?t:v(qr);if(o!=null){u.setAttribute("nonce",o)}r.insertBefore(u,r.querySelector("link"))}if(e.v&4){u.innerHTML+=S}if(f){f.add(a)}}}else if(!r.adoptedStyleSheets.includes(i)){r.adoptedStyleSheets=__spreadArray(__spreadArray([],r.adoptedStyleSheets,true),[i],false)}}return a};var D=function(r){var e=r.S;var n=r.$hostElement$;var t=e.v;var a=y("attachStyles",e._);var i=L(n.getRootNode(),e);if(t&10){n["s-sc"]=i;n.classList.add(i+"-h");if(t&2){n.classList.add(i+"-s")}}a()};var R=function(r,e){return"sc-"+r._};var E=function(r,e,n,t,a,i){if(n!==t){var f=Pr(r,e);e.toLowerCase();if(e==="class"){var u=r.classList;var o=P(n);var v=P(t);u.remove.apply(u,o.filter((function(r){return r&&!v.includes(r)})));u.add.apply(u,v.filter((function(r){return r&&!o.includes(r)})))}else if(e==="key");else if(e==="ref"){if(t){t(r)}}else{var s=l(t);if((f||s&&t!==null)&&!a){try{if(!r.tagName.includes("-")){var c=t==null?"":t;if(e==="list"){f=false}else if(n==null||r[e]!=c){r[e]=c}}else{r[e]=t}}catch(r){}}if(t==null||t===false){if(t!==false||r.getAttribute(e)===""){{r.removeAttribute(e)}}}else if((!f||i&4||a)&&!s){t=t===true?"":t;{r.setAttribute(e,t)}}}}};var M=/\s/;var P=function(r){return!r?[]:r.split(M)};var F=function(r,e,n){var t=e.p.nodeType===11&&e.p.host?e.p.host:e.p;var a=r&&r.i||u;var i=e.i||u;{for(var f=0,o=N(Object.keys(a));f<o.length;f++){var l=o[f];if(!(l in i)){E(t,l,a[l],void 0,n,e.v)}}}for(var v=0,s=N(Object.keys(i));v<s.length;v++){var l=s[v];E(t,l,a[l],i[l],n,e.v)}};function N(r){return r.includes("ref")?__spreadArray(__spreadArray([],r.filter((function(r){return r!=="ref"})),true),["ref"],false):r}var U;var W;var H;var q=false;var z=false;var B=false;var G=false;var Q=function(r,e,n,t){var a;var i=e.u[n];var f=0;var u;var l;var v;if(!q){B=true;if(i.h==="slot"){if(U){t.classList.add(U+"-s")}i.v|=i.u?2:1}}if(i.v&1){u=i.p=qr.createTextNode("")}else{u=i.p=qr.createElement(i.v&2?"slot-fb":i.h);{F(null,i,G)}if(o(U)&&u["s-si"]!==U){u.classList.add(u["s-si"]=U)}if(i.u){for(f=0;f<i.u.length;++f){l=Q(r,i,f,u);if(l){u.appendChild(l)}}}}u["s-hn"]=H;{if(i.v&(2|1)){u["s-sr"]=true;u["s-cr"]=W;u["s-sn"]=i.l||"";u["s-rf"]=(a=i.i)==null?void 0:a.ref;v=r&&r.u&&r.u[n];if(v&&v.h===i.h&&r.p){{I(r.p,false)}}}}return u};var I=function(r,e){zr.v|=1;var n=Array.from(r.childNodes);if(r["s-sr"]&&a.experimentalSlotFixes){var t=r;while(t=t.nextSibling){if(t&&t["s-sn"]===r["s-sn"]&&t["s-sh"]===H){n.push(t)}}}for(var i=n.length-1;i>=0;i--){var f=n[i];if(f["s-hn"]!==H&&f["s-ol"]){fr(Z(f),f,Y(f));f["s-ol"].remove();f["s-ol"]=void 0;f["s-sh"]=void 0;B=true}if(e){I(f,e)}}zr.v&=~1};var K=function(r,e,n,t,a,i){var f=r["s-cr"]&&r["s-cr"].parentNode||r;var u;for(;a<=i;++a){if(t[a]){u=Q(null,n,a,r);if(u){t[a].p=u;fr(f,u,Y(e))}}}};var V=function(r,e,n){for(var t=e;t<=n;++t){var a=r[t];if(a){var i=a.p;ir(a);if(i){{z=true;if(i["s-ol"]){i["s-ol"].remove()}else{I(i,true)}}i.remove()}}}};var X=function(r,e,n,t,a){if(a===void 0){a=false}var i=0;var f=0;var u=0;var o=0;var l=e.length-1;var v=e[0];var s=e[l];var c=t.length-1;var d=t[0];var h=t[c];var p;var m;while(i<=l&&f<=c){if(v==null){v=e[++i]}else if(s==null){s=e[--l]}else if(d==null){d=t[++f]}else if(h==null){h=t[--c]}else if(J(v,d,a)){rr(v,d,a);v=e[++i];d=t[++f]}else if(J(s,h,a)){rr(s,h,a);s=e[--l];h=t[--c]}else if(J(v,h,a)){if(v.h==="slot"||h.h==="slot"){I(v.p.parentNode,false)}rr(v,h,a);fr(r,v.p,s.p.nextSibling);v=e[++i];h=t[--c]}else if(J(s,d,a)){if(v.h==="slot"||h.h==="slot"){I(s.p.parentNode,false)}rr(s,d,a);fr(r,s.p,v.p);s=e[--l];d=t[++f]}else{u=-1;{for(o=i;o<=l;++o){if(e[o]&&e[o].o!==null&&e[o].o===d.o){u=o;break}}}if(u>=0){m=e[u];if(m.h!==d.h){p=Q(e&&e[f],n,u,r)}else{rr(m,d,a);e[u]=void 0;p=m.p}d=t[++f]}else{p=Q(e&&e[f],n,f,r);d=t[++f]}if(p){{fr(Z(v.p),p,Y(v.p))}}}}if(i>l){K(r,t[c+1]==null?null:t[c+1].p,n,t,f,c)}else if(f>c){V(e,i,l)}};var J=function(r,e,n){if(n===void 0){n=false}if(r.h===e.h){if(r.h==="slot"){return r.l===e.l}if(!n){return r.o===e.o}return true}return false};var Y=function(r){return r&&r["s-ol"]||r};var Z=function(r){return(r["s-ol"]?r["s-ol"]:r).parentNode};var rr=function(r,e,n){if(n===void 0){n=false}var t=e.p=r.p;var a=r.u;var i=e.u;var f=e.h;{{if(f==="slot"&&!q);else{F(r,e,G)}}if(a!==null&&i!==null){X(t,a,e,i,n)}else if(i!==null){K(t,null,e,i,0,i.length-1)}else if(a!==null){V(a,0,a.length-1)}}};var er=function(r){var e=r.childNodes;for(var n=0,t=e;n<t.length;n++){var a=t[n];if(a.nodeType===1){if(a["s-sr"]){var i=a["s-sn"];a.hidden=false;for(var f=0,u=e;f<u.length;f++){var o=u[f];if(o!==a){if(o["s-hn"]!==a["s-hn"]||i!==""){if(o.nodeType===1&&(i===o.getAttribute("slot")||i===o["s-sn"])||o.nodeType===3&&i===o["s-sn"]){a.hidden=true;break}}else{if(o.nodeType===1||o.nodeType===3&&o.textContent.trim()!==""){a.hidden=true;break}}}}}er(a)}}};var nr=[];var tr=function(r){var e;var n;var t;for(var i=0,f=r.childNodes;i<f.length;i++){var u=f[i];if(u["s-sr"]&&(e=u["s-cr"])&&e.parentNode){n=e.parentNode.childNodes;var o=u["s-sn"];var l=function(){e=n[t];if(!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==u["s-hn"]&&!a.experimentalSlotFixes){if(ar(e,o)){var r=nr.find((function(r){return r.$===e}));z=true;e["s-sn"]=e["s-sn"]||o;if(r){r.$["s-sh"]=u["s-hn"];r.k=u}else{e["s-sh"]=u["s-hn"];nr.push({k:u,$:e})}if(e["s-sr"]){nr.map((function(n){if(ar(n.$,e["s-sn"])){r=nr.find((function(r){return r.$===e}));if(r&&!n.k){n.k=r.k}}}))}}else if(!nr.some((function(r){return r.$===e}))){nr.push({$:e})}}};for(t=n.length-1;t>=0;t--){l()}}if(u.nodeType===1){tr(u)}}};var ar=function(r,e){if(r.nodeType===1){if(r.getAttribute("slot")===null&&e===""){return true}if(r.getAttribute("slot")===e){return true}return false}if(r["s-sn"]===e){return true}return e===""};var ir=function(r){{r.i&&r.i.ref&&r.i.ref(null);r.u&&r.u.map(ir)}};var fr=function(r,e,n){var t=r==null?void 0:r.insertBefore(e,n);{or(e,r)}return t};var ur=function(r){return r?r["s-rsc"]||r["s-si"]||r["s-sc"]||ur(r.parentElement):void 0};var or=function(r,e){var n,t,a;if(r&&e){var i=r["s-rsc"];var f=ur(e);i&&((n=r.classList)==null?void 0:n.contains(i))&&r.classList.remove(i);if(f){r["s-rsc"]=f;!((t=r.classList)==null?void 0:t.contains(f))&&((a=r.classList)==null?void 0:a.add(f))}}};var lr=function(r,e,n){if(n===void 0){n=false}var t,a,i,f;var u=r.$hostElement$;var o=r.S;var l=r.A||_(null,null);var v=k(e)?e:g(null,null,e);H=u.tagName;if(n&&v.i){for(var s=0,c=Object.keys(v.i);s<c.length;s++){var d=c[s];if(u.hasAttribute(d)&&!["key","ref","style","class"].includes(d)){v.i[d]=u[d]}}}v.h=null;v.v|=4;r.A=v;v.p=l.p=u;{U=u["s-sc"]}q=(o.v&1)!==0;{W=u["s-cr"];z=false}rr(l,v,n);{zr.v|=1;if(B){tr(v.p);for(var h=0,p=nr;h<p.length;h++){var m=p[h];var y=m.$;if(!y["s-ol"]){var b=qr.createTextNode("");b["s-nr"]=y;fr(y.parentNode,y["s-ol"]=b,y)}}for(var w=0,S=nr;w<S.length;w++){var m=S[w];var y=m.$;var $=m.k;if($){var A=$.parentNode;var C=$.nextSibling;{var b=(t=y["s-ol"])==null?void 0:t.previousSibling;while(b){var T=(a=b["s-nr"])!=null?a:null;if(T&&T["s-sn"]===y["s-sn"]&&A===T.parentNode){T=T.nextSibling;while(T===y||(T==null?void 0:T["s-sr"])){T=T==null?void 0:T.nextSibling}if(!T||!T["s-nr"]){C=T;break}}b=b.previousSibling}}if(!C&&A!==y.parentNode||y.nextSibling!==C){if(y!==C){if(!y["s-hn"]&&y["s-ol"]){y["s-hn"]=y["s-ol"].parentNode.nodeName}fr(A,y,C);if(y.nodeType===1){y.hidden=(i=y["s-ih"])!=null?i:false}}}y&&typeof $["s-rf"]==="function"&&$["s-rf"](y)}else{if(y.nodeType===1){if(n){y["s-ih"]=(f=y.hidden)!=null?f:false}y.hidden=true}}}}if(z){er(v.p)}zr.v&=~1;nr.length=0}W=void 0};var vr=function(r,e){if(e&&!r.C&&e["s-p"]){e["s-p"].push(new Promise((function(e){return r.C=e})))}};var sr=function(r,e){{r.v|=16}if(r.v&4){r.v|=512;return}vr(r,r.T);var n=function(){return cr(r,e)};return Zr(n)};var cr=function(r,e){var n=y("scheduleUpdate",r.S._);var t=r.j;var a;n();return dr(a,(function(){return pr(r,t,e)}))};var dr=function(r,e){return hr(r)?r.then(e):e()};var hr=function(r){return r instanceof Promise||r&&r.then&&typeof r.then==="function"};var pr=function(r,e,t){return __awaiter(n,void 0,void 0,(function(){var n,a,i,f,u,o,l;return __generator(this,(function(v){a=r.$hostElement$;i=y("update",r.S._);f=a["s-rc"];if(t){D(r)}u=y("render",r.S._);{mr(r,e,a,t)}if(f){f.map((function(r){return r()}));a["s-rc"]=void 0}u();i();{o=(n=a["s-p"])!=null?n:[];l=function(){return yr(r)};if(o.length===0){l()}else{Promise.all(o).then(l);r.v|=4;o.length=0}}return[2]}))}))};var mr=function(r,e,n,t){try{e=e.render();{r.v&=~16}{r.v|=2}{{{lr(r,e,t)}}}}catch(e){Fr(e,r.$hostElement$)}return null};var yr=function(r){var e=r.S._;var n=r.$hostElement$;var t=y("postUpdate",e);var a=r.j;var i=r.T;if(!(r.v&64)){r.v|=64;{Sr(n)}{wr(a,"componentDidLoad")}t();{r.O(n);if(!i){br()}}}else{t()}{if(r.C){r.C();r.C=void 0}if(r.v&512){Yr((function(){return sr(r,false)}))}r.v&=~(4|512)}};var br=function(r){{Sr(qr.documentElement)}Yr((function(){return j(Hr,"appload",{detail:{namespace:t}})}))};var wr=function(r,e,n){if(r&&r[e]){try{return r[e](n)}catch(r){Fr(r)}}return void 0};var Sr=function(r){return r.classList.add("hydrated")};var gr=function(r,e){return Rr(r).L.get(e)};var _r=function(r,e,n,t){var a=Rr(r);if(!a){throw new Error("Couldn't find host element for \"".concat(t._,'" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).'))}var i=a.$hostElement$;var f=a.L.get(e);var u=a.v;var o=a.j;n=A(n,t.D[e][0]);var l=Number.isNaN(f)&&Number.isNaN(n);var v=n!==f&&!l;if((!(u&8)||f===void 0)&&v){a.L.set(e,n);if(o){if(t.R&&u&128){var s=t.R[e];if(s){s.map((function(r){try{o[r](n,f,e)}catch(r){Fr(r,i)}}))}}if((u&(2|16))===2){sr(a,false)}}}};var $r=function(r,e,n){var t;var a=r.prototype;if(e.D){if(r.watchers){e.R=r.watchers}var i=Object.entries(e.D);i.map((function(r){var t=r[0],i=r[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return gr(this,t)},set:function(r){_r(this,t,r,e)},configurable:true,enumerable:true})}}));if(n&1){var f=new Map;a.attributeChangedCallback=function(r,n,t){var i=this;zr.jmp((function(){var u;var o=f.get(r);if(i.hasOwnProperty(o)){t=i[o];delete i[o]}else if(a.hasOwnProperty(o)&&typeof i[o]==="number"&&i[o]==t){return}else if(o==null){var l=Rr(i);var v=l==null?void 0:l.v;if(v&&!(v&8)&&v&128&&t!==n){var s=l.j;var c=(u=e.R)==null?void 0:u[r];c==null?void 0:c.forEach((function(e){if(s[e]!=null){s[e].call(s,t,n,r)}}))}return}i[o]=t===null&&typeof i[o]==="boolean"?false:t}))};r.observedAttributes=Array.from(new Set(__spreadArray(__spreadArray([],Object.keys((t=e.R)!=null?t:{}),true),i.filter((function(r){var e=r[0],n=r[1];return n[0]&15})).map((function(r){var e=r[0],n=r[1];var t=n[1]||e;f.set(t,e);return t})),true)))}}return r};var kr=function(r,e,t,a){return __awaiter(n,void 0,void 0,(function(){var n,a,i,f,u,o,l,v,s;return __generator(this,(function(c){switch(c.label){case 0:if(!((e.v&32)===0))return[3,5];e.v|=32;a=t.M;if(!a)return[3,3];n=Ur(t);if(!n.then)return[3,2];i=b();return[4,n];case 1:n=c.sent();i();c.label=2;case 2:if(!n.isProxied){{t.R=n.watchers}$r(n,t,2);n.isProxied=true}f=y("createInstance",t._);{e.v|=8}try{new n(e)}catch(r){Fr(r)}{e.v&=~8}{e.v|=128}f();return[3,4];case 3:n=r.constructor;customElements.whenDefined(t._).then((function(){return e.v|=128}));c.label=4;case 4:if(n.style){u=n.style;o=R(t);if(!Wr.has(o)){l=y("registerStyles",t._);x(o,u,!!(t.v&1));l()}}c.label=5;case 5:v=e.T;s=function(){return sr(e,true)};if(v&&v["s-rc"]){v["s-rc"].push(s)}else{s()}return[2]}}))}))};var Ar=function(r){};var Cr=function(r){if((zr.v&1)===0){var e=Rr(r);var n=e.S;var t=y("connectedCallback",n._);if(!(e.v&1)){e.v|=1;{if(n.v&(4|8)){Tr(r)}}{var a=r;while(a=a.parentNode||a.host){if(a["s-p"]){vr(e,e.T=a);break}}}if(n.D){Object.entries(n.D).map((function(e){var n=e[0],t=e[1][0];if(t&31&&r.hasOwnProperty(n)){var a=r[n];delete r[n];r[n]=a}}))}{kr(r,e,n)}}else{if(e==null?void 0:e.j);else if(e==null?void 0:e.P){e.P.then((function(){return Ar()}))}}t()}};var Tr=function(r){var e=r["s-cr"]=qr.createComment("");e["s-cn"]=true;fr(r,e,r.firstChild)};var jr=function(r){{wr(r,"disconnectedCallback")}};var Or=function(r){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(n){if((zr.v&1)===0){e=Rr(r);if(e==null?void 0:e.j){jr(e.j)}else if(e==null?void 0:e.P){e.P.then((function(){return jr(e.j)}))}}return[2]}))}))};var xr=r("b",(function(r,e){if(e===void 0){e={}}var n;var t=y();var a=[];var i=e.exclude||[];var f=Hr.customElements;var u=qr.head;var o=u.querySelector("meta[charset]");var l=qr.createElement("style");var s=[];var c;var d=true;Object.assign(zr,e);zr.F=new URL(e.resourcesUrl||"./",qr.baseURI).href;var h=false;r.map((function(r){r[1].map((function(e){var n;var t={v:e[0],_:e[1],D:e[2],N:e[3]};if(t.v&4){h=true}{t.D=e[2]}{t.R=(n=e[4])!=null?n:{}}var u=t._;var o=function(r){__extends(e,r);function e(e){var n=r.call(this,e)||this;e=n;Mr(e,t);return n}e.prototype.connectedCallback=function(){var r=this;if(c){clearTimeout(c);c=null}if(d){s.push(this)}else{zr.jmp((function(){return Cr(r)}))}};e.prototype.disconnectedCallback=function(){var r=this;zr.jmp((function(){return Or(r)}))};e.prototype.componentOnReady=function(){return Rr(this).P};return e}(HTMLElement);t.M=r[0];if(!i.includes(u)&&!f.get(u)){a.push(u);f.define(u,$r(o,t,1))}}))}));if(a.length>0){if(h){l.textContent+=S}{l.textContent+=a+w}if(l.innerHTML.length){l.setAttribute("data-styles","");var p=(n=zr.m)!=null?n:v(qr);if(p!=null){l.setAttribute("nonce",p)}u.insertBefore(l,o?o.nextSibling:u.firstChild)}}d=false;if(s.length){s.map((function(r){return r.connectedCallback()}))}else{{zr.jmp((function(){return c=setTimeout(br,30)}))}}t()}));var Lr=r("s",(function(r){return zr.m=r}));var Dr=new WeakMap;var Rr=function(r){return Dr.get(r)};var Er=r("r",(function(r,e){return Dr.set(e.j=r,e)}));var Mr=function(r,e){var n={v:0,$hostElement$:r,S:e,L:new Map};{n.P=new Promise((function(r){return n.O=r}));r["s-p"]=[];r["s-rc"]=[]}return Dr.set(r,n)};var Pr=function(r,e){return e in r};var Fr=function(r,e){return(0,console.error)(r,e)};var Nr=new Map;var Ur=function(r,n,t){var a=r._.replace(/-/g,"_");var i=r.M;var f=Nr.get(i);if(f){return f[a]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return e.import("./".concat(i,".entry.js").concat("")).then((function(r){{Nr.set(i,r)}return r[a]}),Fr)};var Wr=new Map;var Hr=typeof window!=="undefined"?window:{};var qr=Hr.document||{head:{}};var zr={v:0,F:"",jmp:function(r){return r()},raf:function(r){return requestAnimationFrame(r)},ael:function(r,e,n,t){return r.addEventListener(e,n,t)},rel:function(r,e,n,t){return r.removeEventListener(e,n,t)},ce:function(r,e){return new CustomEvent(r,e)}};var Br=r("p",(function(r){return Promise.resolve(r)}));var Gr=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(r){}return false}();var Qr=false;var Ir=[];var Kr=[];var Vr=function(r,e){return function(n){r.push(n);if(!Qr){Qr=true;if(e&&zr.v&4){Yr(Jr)}else{zr.raf(Jr)}}}};var Xr=function(r){for(var e=0;e<r.length;e++){try{r[e](performance.now())}catch(r){Fr(r)}}r.length=0};var Jr=function(){Xr(Ir);{Xr(Kr);if(Qr=Ir.length>0){zr.raf(Jr)}}};var Yr=function(r){return Br().then(r)};var Zr=Vr(Kr,true)}}}));
//# sourceMappingURL=p-00ea5a10.system.js.map