(function(e,t){if(typeof define==="function"&&define.amd){define([],t)}else{e.htmx=t()}})(typeof self!=="undefined"?self:this,function(){return function(){"use strict";var D={onLoad:t,process:rt,on:N,off:I,trigger:lt,ajax:$t,find:w,findAll:S,closest:O,values:function(e,t){var r=Ot(e,t||"post");return r.values},remove:E,addClass:C,removeClass:R,toggleClass:q,takeClass:L,defineExtension:Qt,removeExtension:er,logAll:b,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:true,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:true,attributesToSettle:["class","style","width","height"],withCredentials:false,timeout:0,wsReconnectDelay:"full-jitter",disableSelector:"[hx-disable], [data-hx-disable]",useTemplateFragments:false,scrollBehavior:"smooth"},parseInterval:h,_:e,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){return new WebSocket(e,[])},version:"1.6.1"};var r=["get","post","put","delete","patch"];var n=r.map(function(e){return"[hx-"+e+"], [data-hx-"+e+"]"}).join(", ");function h(e){if(e==undefined){return undefined}if(e.slice(-2)=="ms"){return parseFloat(e.slice(0,-2))||undefined}if(e.slice(-1)=="s"){return parseFloat(e.slice(0,-1))*1e3||undefined}return parseFloat(e)||undefined}function c(e,t){return e.getAttribute&&e.getAttribute(t)}function s(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute("data-"+t))}function F(e,t){return c(e,t)||c(e,"data-"+t)}function l(e){return e.parentElement}function P(){return document}function d(e,t){if(t(e)){return e}else if(l(e)){return d(l(e),t)}else{return null}}function X(e,t){var r=null;d(e,function(e){return r=F(e,t)});if(r!=="unset"){return r}}function v(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function i(e){var t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else{return""}}function o(e,t){var r=new DOMParser;var n=r.parseFromString(e,"text/html");var i=n.body;while(t>0){t--;i=i.firstChild}if(i==null){i=P().createDocumentFragment()}return i}function u(e){if(D.config.useTemplateFragments){var t=o("<body><template>"+e+"</template></body>",0);return t.querySelector("template").content}else{var r=i(e);switch(r){case"thead":case"tbody":case"tfoot":case"colgroup":case"caption":return o("<table>"+e+"</table>",1);case"col":return o("<table><colgroup>"+e+"</colgroup></table>",2);case"tr":return o("<table><tbody>"+e+"</tbody></table>",2);case"td":case"th":return o("<table><tbody><tr>"+e+"</tr></tbody></table>",3);case"script":return o("<div>"+e+"</div>",1);default:return o(e,0)}}}function U(e){if(e){e()}}function a(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function f(e){return a(e,"Function")}function g(e){return a(e,"Object")}function j(e){var t="htmx-internal-data";var r=e[t];if(!r){r=e[t]={}}return r}function p(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r])}}return t}function B(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r])}}}function m(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function z(e){return P().body.contains(e)}function y(e){return e.trim().split(/\s+/)}function V(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}function x(e){try{return JSON.parse(e)}catch(e){ut(e);return null}}function e(e){return Ut(P().body,function(){return eval(e)})}function t(t){var e=D.on("htmx:load",function(e){t(e.detail.elt)});return e}function b(){D.logger=function(e,t,r){if(console){console.log(t,e,r)}}}function w(e,t){if(t){return e.querySelector(t)}else{return w(P(),e)}}function S(e,t){if(t){return e.querySelectorAll(t)}else{return S(P(),e)}}function E(e,t){e=H(e);if(t){setTimeout(function(){E(e)},t)}else{e.parentElement.removeChild(e)}}function C(e,t,r){e=H(e);if(r){setTimeout(function(){C(e,t)},r)}else{e.classList&&e.classList.add(t)}}function R(e,t,r){e=H(e);if(r){setTimeout(function(){R(e,t)},r)}else{if(e.classList){e.classList.remove(t);if(e.classList.length===0){e.removeAttribute("class")}}}}function q(e,t){e=H(e);e.classList.toggle(t)}function L(e,t){e=H(e);B(e.parentElement.children,function(e){R(e,t)});C(e,t)}function O(e,t){e=H(e);if(e.closest){return e.closest(t)}else{do{if(e==null||v(e,t)){return e}}while(e=e&&l(e))}}function T(e,t){if(t.indexOf("closest ")===0){return[O(e,t.substr(8))]}else if(t.indexOf("find ")===0){return[w(e,t.substr(5))]}else if(t==="document"){return[document]}else if(t==="window"){return[window]}else{return P().querySelectorAll(t)}}function A(e,t){if(t){return T(e,t)[0]}else{return T(P().body,e)[0]}}function H(e){if(a(e,"String")){return w(e)}else{return e}}function k(e,t,r){if(f(t)){return{target:P().body,event:e,listener:t}}else{return{target:H(e),event:t,listener:r}}}function N(t,r,n){rr(function(){var e=k(t,r,n);e.target.addEventListener(e.event,e.listener)});var e=f(r);return e?r:n}function I(t,r,n){rr(function(){var e=k(t,r,n);e.target.removeEventListener(e.event,e.listener)});return f(r)?r:n}function _(e){var t=d(e,function(e){return F(e,"hx-target")!==null});if(t){var r=F(t,"hx-target");if(r==="this"){return t}else{return A(e,r)}}else{var n=j(e);if(n.boosted){return P().body}else{return e}}}function M(e){var t=D.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function W(t,r){B(t.attributes,function(e){if(!r.hasAttribute(e.name)&&M(e.name)){t.removeAttribute(e.name)}});B(r.attributes,function(e){if(M(e.name)){t.setAttribute(e.name,e.value)}})}function $(e,t){var r=tr(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){ut(e)}}return e==="outerHTML"}function J(e,t,r){var n="#"+t.id;var i="outerHTML";if(e==="true"){}else if(e.indexOf(":")>0){i=e.substr(0,e.indexOf(":"));n=e.substr(e.indexOf(":")+1,e.length)}else{i=e}var o=P().querySelector(n);if(o){var a;a=P().createDocumentFragment();a.appendChild(t);if(!$(i,o)){a=t}le(i,o,o,a,r)}else{t.parentNode.removeChild(t);ot(P().body,"htmx:oobErrorNoTarget",{content:t})}return e}function Z(e,r){B(S(e,"[hx-swap-oob], [data-hx-swap-oob]"),function(e){var t=F(e,"hx-swap-oob");if(t!=null){J(t,e,r)}})}function G(e){B(S(e,"[hx-preserve], [data-hx-preserve]"),function(e){var t=F(e,"id");var r=P().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e)}})}function K(n,e,i){B(e.querySelectorAll("[id]"),function(e){if(e.id&&e.id.length>0){var t=n.querySelector(e.tagName+"[id='"+e.id+"']");if(t&&t!==n){var r=e.cloneNode();W(e,t);i.tasks.push(function(){W(e,r)})}}})}function Y(e){return function(){R(e,D.config.addedClass);rt(e);Ke(e);Q(e);lt(e,"htmx:load")}}function Q(e){var t="[autofocus]";var r=v(e,t)?e:e.querySelector(t);if(r!=null){r.focus()}}function ee(e,t,r,n){K(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;C(i,D.config.addedClass);e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(Y(i))}}}function te(t){var e=j(t);if(e.webSocket){e.webSocket.close()}if(e.sseEventSource){e.sseEventSource.close()}if(e.listenerInfos){B(e.listenerInfos,function(e){if(t!==e.on){e.on.removeEventListener(e.trigger,e.listener)}})}if(t.children){B(t.children,function(e){te(e)})}}function re(e,t,r){if(e.tagName==="BODY"){return se(e,t,r)}else{var n=e.previousSibling;ee(l(e),e,t,r);if(n==null){var i=l(e).firstChild}else{var i=n.nextSibling}j(e).replacedWith=i;r.elts=[];while(i&&i!==e){if(i.nodeType===Node.ELEMENT_NODE){r.elts.push(i)}i=i.nextElementSibling}te(e);l(e).removeChild(e)}}function ne(e,t,r){return ee(e,e.firstChild,t,r)}function ie(e,t,r){return ee(l(e),e,t,r)}function oe(e,t,r){return ee(e,null,t,r)}function ae(e,t,r){return ee(l(e),e.nextSibling,t,r)}function se(e,t,r){var n=e.firstChild;ee(e,n,t,r);if(n){while(n.nextSibling){te(n.nextSibling);e.removeChild(n.nextSibling)}te(n);e.removeChild(n)}}function ue(e,t){var r=X(e,"hx-select");if(r){var n=P().createDocumentFragment();B(t.querySelectorAll(r),function(e){n.appendChild(e)});t=n}return t}function le(e,t,r,n,i){switch(e){case"none":return;case"outerHTML":re(r,n,i);return;case"afterbegin":ne(r,n,i);return;case"beforebegin":ie(r,n,i);return;case"beforeend":oe(r,n,i);return;case"afterend":ae(r,n,i);return;default:var o=tr(t);for(var a=0;a<o.length;a++){var s=o[a];try{var u=s.handleSwap(e,r,n,i);if(u){if(typeof u.length!=="undefined"){for(var l=0;l<u.length;l++){var f=u[l];if(f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE){i.tasks.push(Y(f))}}}return}}catch(e){ut(e)}}se(r,n,i)}}function fe(e){if(e.indexOf("<title")>-1){var t=e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");var r=t.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);if(r){return r[2]}}}function ce(e,t,r,n,i){var o=fe(n);if(o){var a=w("title");if(a){a.innerHTML=o}else{window.document.title=o}}var s=u(n);if(s){Z(s,i);s=ue(r,s);G(s);return le(e,r,t,s,i)}}function he(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf("{")===0){var i=x(n);for(var o in i){if(i.hasOwnProperty(o)){var a=i[o];if(!g(a)){a={value:a}}lt(r,o,a)}}}else{lt(r,n,[])}}var de=/\s/;var ve=/[\s,]/;var ge=/[_$a-zA-Z]/;var pe=/[_$a-zA-Z0-9]/;var me=['"',"'","/"];var ye=/[^\s]/;function xe(e){var t=[];var r=0;while(r<e.length){if(ge.exec(e.charAt(r))){var n=r;while(pe.exec(e.charAt(r+1))){r++}t.push(e.substr(n,r-n+1))}else if(me.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)==="\\"){r++}r++}t.push(e.substr(n,r-n+1))}else{var o=e.charAt(r);t.push(o)}r++}return t}function be(e,t,r){return ge.exec(e.charAt(0))&&e!=="true"&&e!=="false"&&e!=="this"&&e!==r&&t!=="."}function we(e,t,r){if(t[0]==="["){t.shift();var n=1;var i=" return (function("+r+"){ return (";var o=null;while(t.length>0){var a=t[0];if(a==="]"){n--;if(n===0){if(o===null){i=i+"true"}t.shift();i+=")})";try{var s=Ut(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){ot(P().body,"htmx:syntax:error",{error:e,source:i});return null}}}else if(a==="["){n++}if(be(a,o,r)){i+="(("+r+"."+a+") ? ("+r+"."+a+") : (window."+a+"))"}else{i=i+a}o=t.shift()}}}function Se(e,t){var r="";while(e.length>0&&!e[0].match(t)){r+=e.shift()}return r}var Ee="input, textarea, select";function Ce(e){var t=F(e,"hx-trigger");var r=[];if(t){var n=xe(t);do{Se(n,ye);var i=n.length;var o=Se(n,/[,\[\s]/);if(o!==""){if(o==="every"){var a={trigger:"every"};Se(n,ye);a.pollInterval=h(Se(n,/[,\[\s]/));Se(n,ye);var s=we(e,n,"event");if(s){a.eventFilter=s}r.push(a)}else if(o.indexOf("sse:")===0){r.push({trigger:"sse",sseEvent:o.substr(4)})}else{var u={trigger:o};var s=we(e,n,"event");if(s){u.eventFilter=s}while(n.length>0&&n[0]!==","){Se(n,ye);var l=n.shift();if(l==="changed"){u.changed=true}else if(l==="once"){u.once=true}else if(l==="consume"){u.consume=true}else if(l==="delay"&&n[0]===":"){n.shift();u.delay=h(Se(n,ve))}else if(l==="from"&&n[0]===":"){n.shift();let e=Se(n,ve);if(e==="closest"||e==="find"){n.shift();e+=" "+Se(n,ve)}u.from=e}else if(l==="target"&&n[0]===":"){n.shift();u.target=Se(n,ve)}else if(l==="throttle"&&n[0]===":"){n.shift();u.throttle=h(Se(n,ve))}else if(l==="queue"&&n[0]===":"){n.shift();u.queue=Se(n,ve)}else if((l==="root"||l==="threshold")&&n[0]===":"){n.shift();u[l]=Se(n,ve)}else{ot(e,"htmx:syntax:error",{token:n.shift()})}}r.push(u)}}if(n.length===i){ot(e,"htmx:syntax:error",{token:n.shift()})}Se(n,ye)}while(n[0]===","&&n.shift())}if(r.length>0){return r}else if(v(e,"form")){return[{trigger:"submit"}]}else if(v(e,Ee)){return[{trigger:"change"}]}else{return[{trigger:"click"}]}}function Re(e){j(e).cancelled=true}function qe(e,t,r,n){var i=j(e);i.timeout=setTimeout(function(){if(z(e)&&i.cancelled!==true){if(!He(n,it("hx:poll:trigger",{triggerSpec:n}))){Zt(t,r,e)}qe(e,t,F(e,"hx-"+t),n)}},n.pollInterval)}function Le(e){return location.hostname===e.hostname&&c(e,"href")&&c(e,"href").indexOf("#")!==0}function Oe(t,r,e){if(t.tagName==="A"&&Le(t)&&t.target===""||t.tagName==="FORM"){r.boosted=true;var n,i;if(t.tagName==="A"){n="get";i=c(t,"href");r.pushURL=true}else{var o=c(t,"method");n=o?o.toLowerCase():"get";if(n==="get"){r.pushURL=true}i=c(t,"action")}e.forEach(function(e){ke(t,n,i,r,e,true)})}}function Te(e,t){if(e.type==="submit"||e.type==="click"){if(t.tagName==="FORM"){return true}if(v(t,'input[type="submit"], button')&&O(t,"form")!==null){return true}if(t.tagName==="A"&&t.href&&(t.getAttribute("href")==="#"||t.getAttribute("href").indexOf("#")!==0)){return true}}return false}function Ae(e,t){return j(e).boosted&&e.tagName==="A"&&t.type==="click"&&(t.ctrlKey||t.metaKey)}function He(e,t){var r=e.eventFilter;if(r){try{return r(t)!==true}catch(e){ot(P().body,"htmx:eventFilter:error",{error:e,source:r.source});return true}}return false}function ke(o,a,s,e,u,l){var t;if(u.from){t=T(o,u.from)}else{t=[o]}B(t,function(n){var i=function(e){if(!z(o)){n.removeEventListener(u.trigger,i);return}if(Ae(o,e)){return}if(l||Te(e,o)){e.preventDefault()}if(He(u,e)){return}var t=j(e);t.triggerSpec=u;if(t.handledFor==null){t.handledFor=[]}var r=j(o);if(t.handledFor.indexOf(o)<0){t.handledFor.push(o);if(u.consume){e.stopPropagation()}if(u.target&&e.target){if(!v(e.target,u.target)){return}}if(u.once){if(r.triggeredOnce){return}else{r.triggeredOnce=true}}if(u.changed){if(r.lastValue===o.value){return}else{r.lastValue=o.value}}if(r.delayed){clearTimeout(r.delayed)}if(r.throttle){return}if(u.throttle){if(!r.throttle){Zt(a,s,o,e);r.throttle=setTimeout(function(){r.throttle=null},u.throttle)}}else if(u.delay){r.delayed=setTimeout(function(){Zt(a,s,o,e)},u.delay)}else{Zt(a,s,o,e)}}};if(e.listenerInfos==null){e.listenerInfos=[]}e.listenerInfos.push({trigger:u.trigger,listener:i,on:n});n.addEventListener(u.trigger,i)})}var Ne=false;var Ie=null;function Me(){if(!Ie){Ie=function(){Ne=true};window.addEventListener("scroll",Ie);setInterval(function(){if(Ne){Ne=false;B(P().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"),function(e){De(e)})}},200)}}function De(e){if(!s(e,"data-hx-revealed")&&m(e)){e.setAttribute("data-hx-revealed","true");var t=j(e);if(t.initialized){Zt(t.verb,t.path,e)}else{e.addEventListener("htmx:afterProcessNode",function(){Zt(t.verb,t.path,e)},{once:true})}}}function Fe(e,t,r){var n=y(r);for(var i=0;i<n.length;i++){var o=n[i].split(/:(.+)/);if(o[0]==="connect"){Pe(e,o[1],0)}if(o[0]==="send"){Ue(e)}}}function Pe(s,r,n){if(!z(s)){return}if(r.indexOf("/")==0){var e=location.hostname+(location.port?":"+location.port:"");if(location.protocol=="https:"){r="wss://"+e+r}else if(location.protocol=="http:"){r="ws://"+e+r}}var t=D.createWebSocket(r);t.onerror=function(e){ot(s,"htmx:wsError",{error:e,socket:t});Xe(s)};t.onclose=function(e){if([1006,1012,1013].indexOf(e.code)>=0){var t=je(n);setTimeout(function(){Pe(s,r,n+1)},t)}};t.onopen=function(e){n=0};j(s).webSocket=t;t.addEventListener("message",function(e){if(Xe(s)){return}var t=e.data;st(s,function(e){t=e.transformResponse(t,null,s)});var r=Ft(s);var n=u(t);var i=p(n.children);for(var o=0;o<i.length;o++){var a=i[o];J(F(a,"hx-swap-oob")||"true",a,r)}mt(r.tasks)})}function Xe(e){if(!z(e)){j(e).webSocket.close();return true}}function Ue(l){var f=d(l,function(e){return j(e).webSocket!=null});if(f){l.addEventListener(Ce(l)[0].trigger,function(e){var t=j(f).webSocket;var r=kt(l,f);var n=Ot(l,"post");var i=n.errors;var o=n.values;var a=zt(l);var s=V(o,a);var u=Nt(s,l);u["HEADERS"]=r;if(i&&i.length>0){lt(l,"htmx:validation:halted",i);return}t.send(JSON.stringify(u));if(Te(e,l)){e.preventDefault()}})}else{ot(l,"htmx:noWebSocketSourceError")}}function je(e){var t=D.config.wsReconnectDelay;if(typeof t==="function"){return t(e)}if(t==="full-jitter"){var r=Math.min(e,6);var n=1e3*Math.pow(2,r);return n*Math.random()}ut('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"')}function Be(e,t,r){var n=y(r);for(var i=0;i<n.length;i++){var o=n[i].split(/:(.+)/);if(o[0]==="connect"){ze(e,o[1])}if(o[0]==="swap"){Ve(e,o[1])}}}function ze(t,e){var r=D.createEventSource(e);r.onerror=function(e){ot(t,"htmx:sseError",{error:e,source:r});We(t)};j(t).sseEventSource=r}function Ve(o,a){var s=d(o,$e);if(s){var u=j(s).sseEventSource;var l=function(e){if(We(s)){u.removeEventListener(a,l);return}var t=e.data;st(o,function(e){t=e.transformResponse(t,null,o)});var r=Mt(o);var n=_(o);var i=Ft(o);ce(r.swapStyle,o,n,t,i);mt(i.tasks);lt(o,"htmx:sseMessage",e)};j(o).sseListener=l;u.addEventListener(a,l)}else{ot(o,"htmx:noSSESourceError")}}function _e(e,t,r,n){var i=d(e,$e);if(i){var o=j(i).sseEventSource;var a=function(){if(!We(i)){if(z(e)){Zt(t,r,e)}else{o.removeEventListener(n,a)}}};j(e).sseListener=a;o.addEventListener(n,a)}else{ot(e,"htmx:noSSESourceError")}}function We(e){if(!z(e)){j(e).sseEventSource.close();return true}}function $e(e){return j(e).sseEventSource!=null}function Je(e,t,r,n,i){var o=function(){if(!n.loaded){n.loaded=true;Zt(t,r,e)}};if(i){setTimeout(o,i)}else{o()}}function Ze(o,a,e){var t=false;B(r,function(n){if(s(o,"hx-"+n)){var i=F(o,"hx-"+n);t=true;a.path=i;a.verb=n;e.forEach(function(e){if(e.sseEvent){_e(o,n,i,e.sseEvent)}else if(e.trigger==="revealed"){Me();De(o)}else if(e.trigger==="intersect"){var t={};if(e.root){t.root=A(o,e.root)}if(e.threshold){t.threshold=parseFloat(e.threshold)}var r=new IntersectionObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.isIntersecting){lt(o,"intersect");break}}},t);r.observe(o);ke(o,n,i,a,e)}else if(e.trigger==="load"){Je(o,n,i,a,e.delay)}else if(e.pollInterval){a.polling=true;qe(o,n,i,e)}else{ke(o,n,i,a,e)}})}});return t}function Ge(e){if(e.type==="text/javascript"||e.type===""){var t=P().createElement("script");B(e.attributes,function(e){t.setAttribute(e.name,e.value)});t.textContent=e.textContent;t.async=false;var r=e.parentElement;try{r.insertBefore(t,e)}catch(e){ut(e)}finally{r.removeChild(e)}}}function Ke(e){if(v(e,"script")){Ge(e)}B(S(e,"script"),function(e){Ge(e)})}function Ye(){return document.querySelector("[hx-boost], [data-hx-boost]")}function Qe(e){if(e.querySelectorAll){var t=Ye()?", a, form":"";var r=e.querySelectorAll(n+t+", [hx-sse], [data-hx-sse], [hx-ws],"+" [data-hx-ws], [hx-ext], [hx-data-ext]");return r}else{return[]}}function et(r){var e=function(e){if(v(e.target,"button, input[type='submit']")){var t=j(r);t.lastButtonClicked=e.target}};r.addEventListener("click",e);r.addEventListener("focusin",e);r.addEventListener("focusout",function(e){var t=j(r);t.lastButtonClicked=null})}function tt(e){if(e.closest&&e.closest(D.config.disableSelector)){return}var t=j(e);if(!t.initialized){t.initialized=true;lt(e,"htmx:beforeProcessNode");if(e.value){t.lastValue=e.value}var r=Ce(e);var n=Ze(e,t,r);if(!n&&X(e,"hx-boost")==="true"){Oe(e,t,r)}if(e.tagName==="FORM"){et(e)}var i=F(e,"hx-sse");if(i){Be(e,t,i)}var o=F(e,"hx-ws");if(o){Fe(e,t,o)}lt(e,"htmx:afterProcessNode")}}function rt(e){e=H(e);tt(e);B(Qe(e),function(e){tt(e)})}function nt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function it(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent==="function"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t})}else{r=P().createEvent("CustomEvent");r.initCustomEvent(e,true,true,t)}return r}function ot(e,t,r){lt(e,t,V({error:t},r))}function at(e){return e==="htmx:afterProcessNode"}function st(e,t){B(tr(e),function(e){try{t(e)}catch(e){ut(e)}})}function ut(e){if(console.error){console.error(e)}else if(console.log){console.log("ERROR: ",e)}}function lt(e,t,r){e=H(e);if(r==null){r={}}r["elt"]=e;var n=it(t,r);if(D.logger&&!at(t)){D.logger(e,t,r)}if(r.error){ut(r.error);lt(e,"htmx:error",{errorInfo:r})}var i=e.dispatchEvent(n);var o=nt(t);if(i&&o!==t){var a=it(o,n.detail);i=i&&e.dispatchEvent(a)}st(e,function(e){i=i&&e.onEvent(t,n)!==false});return i}var ft=location.pathname+location.search;function ct(){var e=P().querySelector("[hx-history-elt],[data-hx-history-elt]");return e||P().body}function ht(e,t,r,n){var i=x(localStorage.getItem("htmx-history-cache"))||[];for(var o=0;o<i.length;o++){if(i[o].url===e){i.splice(o,1);break}}i.push({url:e,content:t,title:r,scroll:n});while(i.length>D.config.historyCacheSize){i.shift()}while(i.length>0){try{localStorage.setItem("htmx-history-cache",JSON.stringify(i));break}catch(e){ot(P().body,"htmx:historyCacheError",{cause:e,cache:i});i.shift()}}}function dt(e){var t=x(localStorage.getItem("htmx-history-cache"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function vt(e){var t=D.config.requestClass;var r=e.cloneNode(true);B(S(r,"."+t),function(e){R(e,t)});return r.innerHTML}function gt(){var e=ct();var t=ft||location.pathname+location.search;lt(P().body,"htmx:beforeHistorySave",{path:t,historyElt:e});if(D.config.historyEnabled)history.replaceState({htmx:true},P().title,window.location.href);ht(t,vt(e),P().title,window.scrollY)}function pt(e){if(D.config.historyEnabled)history.pushState({htmx:true},"",e);ft=e}function mt(e){B(e,function(e){e.call()})}function yt(n){var e=new XMLHttpRequest;var i={path:n,xhr:e};lt(P().body,"htmx:historyCacheMiss",i);e.open("GET",n,true);e.setRequestHeader("HX-History-Restore-Request","true");e.onload=function(){if(this.status>=200&&this.status<400){lt(P().body,"htmx:historyCacheMissLoad",i);var e=u(this.response);e=e.querySelector("[hx-history-elt],[data-hx-history-elt]")||e;var t=ct();var r=Ft(t);se(t,e,r);mt(r.tasks);ft=n;lt(P().body,"htmx:historyRestore",{path:n})}else{ot(P().body,"htmx:historyCacheMissLoadError",i)}};e.send()}function xt(e){gt();e=e||location.pathname+location.search;var t=dt(e);if(t){var r=u(t.content);var n=ct();var i=Ft(n);se(n,r,i);mt(i.tasks);document.title=t.title;window.scrollTo(0,t.scroll);ft=e;lt(P().body,"htmx:historyRestore",{path:e})}else{if(D.config.refreshOnHistoryMiss){window.location.reload(true)}else{yt(e)}}}function bt(e){var t=X(e,"hx-push-url");return t&&t!=="false"||j(e).boosted&&j(e).pushURL}function wt(e){var t=X(e,"hx-push-url");return t==="true"||t==="false"?null:t}function St(e){var t=X(e,"hx-indicator");if(t){var r=T(e,t)}else{r=[e]}B(r,function(e){e.classList["add"].call(e.classList,D.config.requestClass)});return r}function Et(e){B(e,function(e){e.classList["remove"].call(e.classList,D.config.requestClass)})}function Ct(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function Rt(e){if(e.name===""||e.name==null||e.disabled){return false}if(e.type==="button"||e.type==="submit"||e.tagName==="image"||e.tagName==="reset"||e.tagName==="file"){return false}if(e.type==="checkbox"||e.type==="radio"){return e.checked}return true}function qt(t,r,n,e,i){if(e==null||Ct(t,e)){return}else{t.push(e)}if(Rt(e)){var o=c(e,"name");var a=e.value;if(e.multiple){a=p(e.querySelectorAll("option:checked")).map(function(e){return e.value})}if(e.files){a=p(e.files)}if(o!=null&&a!=null){var s=r[o];if(s){if(Array.isArray(s)){if(Array.isArray(a)){r[o]=s.concat(a)}else{s.push(a)}}else{if(Array.isArray(a)){r[o]=[s].concat(a)}else{r[o]=[s,a]}}}else{r[o]=a}}if(i){Lt(e,n)}}if(v(e,"form")){var u=e.elements;B(u,function(e){qt(t,r,n,e,i)})}}function Lt(e,t){if(e.willValidate){lt(e,"htmx:validation:validate");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});lt(e,"htmx:validation:failed",{message:e.validationMessage,validity:e.validity})}}}function Ot(e,t){var r=[];var n={};var i={};var o=[];var a=v(e,"form")&&e.noValidate!==true;if(t!=="get"){qt(r,i,o,O(e,"form"),a)}qt(r,n,o,e,a);var s=j(e);if(s.lastButtonClicked){var u=c(s.lastButtonClicked,"name");if(u){n[u]=s.lastButtonClicked.value}}var l=X(e,"hx-include");if(l){var f=T(e,l);B(f,function(e){qt(r,n,o,e,a);if(!v(e,"form")){B(e.querySelectorAll(Ee),function(e){qt(r,n,o,e,a)})}})}n=V(n,i);return{errors:o,values:n}}function Tt(e,t,r){if(e!==""){e+="&"}e+=encodeURIComponent(t)+"="+encodeURIComponent(r);return e}function At(e){var t="";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){B(n,function(e){t=Tt(t,r,e)})}else{t=Tt(t,r,n)}}}return t}function Ht(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){B(n,function(e){t.append(r,e)})}else{t.append(r,n)}}}return t}function kt(e,t,r){var n={"HX-Request":"true","HX-Trigger":c(e,"id"),"HX-Trigger-Name":c(e,"name"),"HX-Target":F(t,"id"),"HX-Current-URL":P().location.href};Xt(e,"hx-headers",false,n);if(r!==undefined){n["HX-Prompt"]=r}if(j(e).boosted){n["HX-Boosted"]="true"}return n}function Nt(t,e){var r=X(e,"hx-params");if(r){if(r==="none"){return{}}else if(r==="*"){return t}else if(r.indexOf("not ")===0){B(r.substr(4).split(","),function(e){e=e.trim();delete t[e]});return t}else{var n={};B(r.split(","),function(e){e=e.trim();n[e]=t[e]});return n}}else{return t}}function It(e){return c(e,"href")&&c(e,"href").indexOf("#")>=0}function Mt(e){var t=X(e,"hx-swap");var r={swapStyle:j(e).boosted?"innerHTML":D.config.defaultSwapStyle,swapDelay:D.config.defaultSwapDelay,settleDelay:D.config.defaultSettleDelay};if(j(e).boosted&&!It(e)){r["show"]="top"}if(t){var n=y(t);if(n.length>0){r["swapStyle"]=n[0];for(var i=1;i<n.length;i++){var o=n[i];if(o.indexOf("swap:")===0){r["swapDelay"]=h(o.substr(5))}if(o.indexOf("settle:")===0){r["settleDelay"]=h(o.substr(7))}if(o.indexOf("scroll:")===0){var a=o.substr(7);var s=a.split(":");var u=s.pop();var l=s.length>0?s.join(":"):null;r["scroll"]=u;r["scrollTarget"]=l}if(o.indexOf("show:")===0){var f=o.substr(5);var s=f.split(":");var c=s.pop();var l=s.length>0?s.join(":"):null;r["show"]=c;r["showTarget"]=l}}}}return r}function Dt(t,r,n){var i=null;st(r,function(e){if(i==null){i=e.encodeParameters(t,n,r)}});if(i!=null){return i}else{if(X(r,"hx-encoding")==="multipart/form-data"||v(r,"form")&&c(r,"enctype")==="multipart/form-data"){return Ht(n)}else{return At(n)}}}function Ft(e){return{tasks:[],elts:[e]}}function Pt(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){var i=null;if(t.scrollTarget){i=A(r,t.scrollTarget)}if(t.scroll==="top"&&(r||i)){i=i||r;i.scrollTop=0}if(t.scroll==="bottom"&&(n||i)){i=i||n;i.scrollTop=i.scrollHeight}}if(t.show){var i=null;if(t.showTarget){var o=t.showTarget;if(t.showTarget==="window"){o="body"}i=A(r,o)}if(t.show==="top"&&(r||i)){i=i||r;i.scrollIntoView({block:"start",behavior:D.config.scrollBehavior})}if(t.show==="bottom"&&(n||i)){i=i||n;i.scrollIntoView({block:"end",behavior:D.config.scrollBehavior})}}}function Xt(e,t,r,n){if(n==null){n={}}if(e==null){return n}var i=F(e,t);if(i){var o=i.trim();var a=r;if(o.indexOf("javascript:")===0){o=o.substr(11);a=true}else if(o.indexOf("js:")===0){o=o.substr(3);a=true}if(o.indexOf("{")!==0){o="{"+o+"}"}var s;if(a){s=Ut(e,function(){return Function("return ("+o+")")()},{})}else{s=x(o)}for(var u in s){if(s.hasOwnProperty(u)){if(n[u]==null){n[u]=s[u]}}}}return Xt(l(e),t,r,n)}function Ut(e,t,r){if(D.config.allowEval){return t()}else{ot(e,"htmx:evalDisallowedError");return r}}function jt(e,t){return Xt(e,"hx-vars",true,t)}function Bt(e,t){return Xt(e,"hx-vals",false,t)}function zt(e){return V(jt(e),Bt(e))}function Vt(t,r,n){if(n!==null){try{t.setRequestHeader(r,n)}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+"-URI-AutoEncoded","true")}}}function _t(t){if(t.responseURL&&typeof URL!=="undefined"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){ot(P().body,"htmx:badResponseUrl",{url:t.responseURL})}}}function Wt(e,t){return e.getAllResponseHeaders().match(t)}function $t(e,t,r){e=e.toLowerCase();if(r){if(r instanceof Element||a(r,"String")){return Zt(e,t,null,null,{targetOverride:H(r),returnPromise:true})}else{return Zt(e,t,H(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:H(r.target),returnPromise:true})}}else{return Zt(e,t,null,null,{returnPromise:true})}}function Jt(e){var t=[];while(e){t.push(e);e=e.parentElement}return t}function Zt(e,t,n,r,i){var o=null;var a=null;i=i!=null?i:{};if(i.returnPromise&&typeof Promise!=="undefined"){var s=new Promise(function(e,t){o=e;a=t})}if(n==null){n=P().body}var u=i.handler||Gt;if(!z(n)){return}var l=i.targetOverride||_(n);if(l==null){ot(n,"htmx:targetError",{target:F(n,"hx-target")});return}var f=j(n);if(f.requestInFlight){var c="last";if(r){var h=j(r);if(h&&h.triggerSpec&&h.triggerSpec.queue){c=h.triggerSpec.queue}}if(f.queuedRequests==null){f.queuedRequests=[]}if(c==="first"&&f.queuedRequests.length===0){f.queuedRequests.push(function(){Zt(e,t,n,r,i)})}else if(c==="all"){f.queuedRequests.push(function(){Zt(e,t,n,r,i)})}else if(c==="last"){f.queuedRequests=[];f.queuedRequests.push(function(){Zt(e,t,n,r,i)})}return}else{f.requestInFlight=true}var d=function(){f.requestInFlight=false;if(f.queuedRequests!=null&&f.queuedRequests.length>0){var e=f.queuedRequests.shift();e()}};var v=X(n,"hx-prompt");if(v){var g=prompt(v);if(g===null||!lt(n,"htmx:prompt",{prompt:g,target:l})){U(o);d();return s}}var p=X(n,"hx-confirm");if(p){if(!confirm(p)){U(o);d();return s}}var m=new XMLHttpRequest;var y=kt(n,l,g);if(i.headers){y=V(y,i.headers)}var x=Ot(n,e);var b=x.errors;var w=x.values;if(i.values){w=V(w,i.values)}var S=zt(n);var E=V(w,S);var C=Nt(E,n);if(e!=="get"&&X(n,"hx-encoding")==null){y["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"}if(t==null||t===""){t=P().location.href}var R=Xt(n,"hx-request");var q={parameters:C,unfilteredParameters:E,headers:y,target:l,verb:e,errors:b,withCredentials:i.credentials||R.credentials||D.config.withCredentials,timeout:i.timeout||R.timeout||D.config.timeout,path:t,triggeringEvent:r};if(!lt(n,"htmx:configRequest",q)){U(o);d();return s}t=q.path;e=q.verb;y=q.headers;C=q.parameters;b=q.errors;if(b&&b.length>0){lt(n,"htmx:validation:halted",q);U(o);d();return s}var L=t.split("#");var O=L[0];var T=L[1];if(e==="get"){var A=O;var H=Object.keys(C).length!==0;if(H){if(A.indexOf("?")<0){A+="?"}else{A+="&"}A+=At(C);if(T){A+="#"+T}}m.open("GET",A,true)}else{m.open(e.toUpperCase(),t,true)}m.overrideMimeType("text/html");m.withCredentials=q.withCredentials;m.timeout=q.timeout;if(R.noHeaders){}else{for(var k in y){if(y.hasOwnProperty(k)){var N=y[k];Vt(m,k,N)}}}var I={xhr:m,target:l,requestConfig:q,pathInfo:{path:t,finalPath:A,anchor:T}};m.onload=function(){try{var e=Jt(n);u(n,I);Et(M);lt(n,"htmx:afterRequest",I);lt(n,"htmx:afterOnLoad",I);if(!z(n)){var t=null;while(e.length>0&&t==null){var r=e.shift();if(z(r)){t=r}}if(t){lt(t,"htmx:afterRequest",I);lt(t,"htmx:afterOnLoad",I)}}U(o);d()}catch(e){ot(n,"htmx:onLoadError",V({error:e},I));throw e}};m.onerror=function(){Et(M);ot(n,"htmx:afterRequest",I);ot(n,"htmx:sendError",I);U(a);d()};m.onabort=function(){Et(M);ot(n,"htmx:afterRequest",I);ot(n,"htmx:sendAbort",I);U(a);d()};m.ontimeout=function(){Et(M);ot(n,"htmx:afterRequest",I);ot(n,"htmx:timeout",I);U(a);d()};if(!lt(n,"htmx:beforeRequest",I)){U(o);d();return s}var M=St(n);B(["loadstart","loadend","progress","abort"],function(t){B([m,m.upload],function(e){e.addEventListener(t,function(e){lt(n,"htmx:xhr:"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total})})})});lt(n,"htmx:beforeSend",I);m.send(e==="get"?null:Dt(m,n,C));return s}function Gt(a,s){var u=s.xhr;var l=s.target;if(!lt(a,"htmx:beforeOnLoad",s))return;if(Wt(u,/HX-Trigger:/i)){he(u,"HX-Trigger",a)}if(Wt(u,/HX-Push:/i)){var f=u.getResponseHeader("HX-Push")}if(Wt(u,/HX-Redirect:/i)){window.location.href=u.getResponseHeader("HX-Redirect");return}if(Wt(u,/HX-Refresh:/i)){if("true"===u.getResponseHeader("HX-Refresh")){location.reload();return}}if(Wt(u,/HX-Retarget:/i)){s.target=P().querySelector(u.getResponseHeader("HX-Retarget"))}var c=bt(a)||f;var e=u.status>=200&&u.status<400&&u.status!==204;var h=u.response;var t=u.status>=400;var r=V({shouldSwap:e,serverResponse:h,isError:t},s);if(!lt(l,"htmx:beforeSwap",r))return;l=r.target;h=r.serverResponse;t=r.isError;s.failed=t;s.successful=!t;if(r.shouldSwap){if(u.status===286){Re(a)}st(a,function(e){h=e.transformResponse(h,u,a)});if(c){gt()}var d=Mt(a);l.classList.add(D.config.swappingClass);var n=function(){try{var e=document.activeElement;var t={};try{t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null}}catch(e){}var r=Ft(l);ce(d.swapStyle,l,a,h,r);if(t.elt&&!z(t.elt)&&t.elt.id){var n=document.getElementById(t.elt.id);if(n){if(t.start&&n.setSelectionRange){n.setSelectionRange(t.start,t.end)}n.focus()}}l.classList.remove(D.config.swappingClass);B(r.elts,function(e){if(e.classList){e.classList.add(D.config.settlingClass)}lt(e,"htmx:afterSwap",s)});if(s.pathInfo.anchor){location.hash=s.pathInfo.anchor}if(Wt(u,/HX-Trigger-After-Swap:/i)){var i=a;if(!z(a)){i=P().body}he(u,"HX-Trigger-After-Swap",i)}var o=function(){B(r.tasks,function(e){e.call()});B(r.elts,function(e){if(e.classList){e.classList.remove(D.config.settlingClass)}lt(e,"htmx:afterSettle",s)});if(c){var e=f||wt(a)||_t(u)||s.pathInfo.finalPath||s.pathInfo.path;pt(e);lt(P().body,"htmx:pushedIntoHistory",{path:e})}Pt(r.elts,d);if(Wt(u,/HX-Trigger-After-Settle:/i)){var t=a;if(!z(a)){t=P().body}he(u,"HX-Trigger-After-Settle",t)}};if(d.settleDelay>0){setTimeout(o,d.settleDelay)}else{o()}}catch(e){ot(a,"htmx:swapError",s);throw e}};if(d.swapDelay>0){setTimeout(n,d.swapDelay)}else{n()}}if(t){ot(a,"htmx:responseError",V({error:"Response Status Error Code "+u.status+" from "+s.pathInfo.path},s))}}var Kt={};function Yt(){return{onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function Qt(e,t){Kt[e]=V(Yt(),t)}function er(e){delete Kt[e]}function tr(e,r,n){if(e==undefined){return r}if(r==undefined){r=[]}if(n==undefined){n=[]}var t=F(e,"hx-ext");if(t){B(t.split(","),function(e){e=e.replace(/ /g,"");if(e.slice(0,7)=="ignore:"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=Kt[e];if(t&&r.indexOf(t)<0){r.push(t)}}})}return tr(l(e),r,n)}function rr(e){if(P().readyState!=="loading"){e()}else{P().addEventListener("DOMContentLoaded",e)}}function nr(){if(D.config.includeIndicatorStyles!==false){P().head.insertAdjacentHTML("beforeend","<style>                      ."+D.config.indicatorClass+"{opacity:0;transition: opacity 200ms ease-in;}                      ."+D.config.requestClass+" ."+D.config.indicatorClass+"{opacity:1}                      ."+D.config.requestClass+"."+D.config.indicatorClass+"{opacity:1}                    </style>")}}function ir(){var e=P().querySelector('meta[name="htmx-config"]');if(e){return x(e.content)}else{return null}}function or(){var e=ir();if(e){D.config=V(D.config,e)}}rr(function(){or();nr();var e=P().body;rt(e);window.onpopstate=function(e){if(e.state&&e.state.htmx){xt()}};setTimeout(function(){lt(e,"htmx:load",{})},0)});return D}()});