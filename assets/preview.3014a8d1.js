var cr=Object.defineProperty;var a=(v,f)=>cr(v,"name",{value:f,configurable:!0});var lr=(v,f)=>()=>(f||v((f={exports:{}}).exports,f),f.exports);import{w as J,k as nr,r as vr,S as pr}from"./iframe.e14b0556.js";var Or=lr((Ir,b)=>{var dr={exports:{}};(function(v){var f=function(u){var l=Object.prototype,s=l.hasOwnProperty,p=Object.defineProperty||function(e,r,t){e[r]=t.value},i,w=typeof Symbol=="function"?Symbol:{},d=w.iterator||"@@iterator",T=w.asyncIterator||"@@asyncIterator",O=w.toStringTag||"@@toStringTag";function E(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}a(E,"define");try{E({},"")}catch{E=a(function(r,t,o){return r[t]=o},"define")}function D(e,r,t,o){var n=r&&r.prototype instanceof M?r:M,h=Object.create(n.prototype),g=new Q(o||[]);return p(h,"_invoke",{value:hr(e,t,g)}),h}a(D,"wrap"),u.wrap=D;function c(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(o){return{type:"throw",arg:o}}}a(c,"tryCatch");var A="suspendedStart",fr="suspendedYield",F="executing",P="completed",L={};function M(){}a(M,"Generator");function U(){}a(U,"GeneratorFunction");function R(){}a(R,"GeneratorFunctionPrototype");var Y={};E(Y,d,function(){return this});var q=Object.getPrototypeOf,j=q&&q(q(V([])));j&&j!==l&&s.call(j,d)&&(Y=j);var N=R.prototype=M.prototype=Object.create(Y);U.prototype=R,p(N,"constructor",{value:R,configurable:!0}),p(R,"constructor",{value:U,configurable:!0}),U.displayName=E(R,O,"GeneratorFunction");function x(e){["next","throw","return"].forEach(function(r){E(e,r,function(t){return this._invoke(r,t)})})}a(x,"defineIteratorMethods"),u.isGeneratorFunction=function(e){var r=typeof e=="function"&&e.constructor;return r?r===U||(r.displayName||r.name)==="GeneratorFunction":!1},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,R):(e.__proto__=R,E(e,O,"GeneratorFunction")),e.prototype=Object.create(N),e},u.awrap=function(e){return{__await:e}};function $(e,r){function t(h,g,m,S){var y=c(e[h],e,g);if(y.type==="throw")S(y.arg);else{var W=y.arg,_=W.value;return _&&typeof _=="object"&&s.call(_,"__await")?r.resolve(_.__await).then(function(G){t("next",G,m,S)},function(G){t("throw",G,m,S)}):r.resolve(_).then(function(G){W.value=G,m(W)},function(G){return t("throw",G,m,S)})}}a(t,"invoke");var o;function n(h,g){function m(){return new r(function(S,y){t(h,g,S,y)})}return a(m,"callInvokeWithMethodAndArg"),o=o?o.then(m,m):m()}a(n,"enqueue"),p(this,"_invoke",{value:n})}a($,"AsyncIterator"),x($.prototype),E($.prototype,T,function(){return this}),u.AsyncIterator=$,u.async=function(e,r,t,o,n){n===void 0&&(n=Promise);var h=new $(D(e,r,t,o),n);return u.isGeneratorFunction(r)?h:h.next().then(function(g){return g.done?g.value:h.next()})};function hr(e,r,t){var o=A;return a(function(h,g){if(o===F)throw new Error("Generator is already running");if(o===P){if(h==="throw")throw g;return er()}for(t.method=h,t.arg=g;;){var m=t.delegate;if(m){var S=rr(m,t);if(S){if(S===L)continue;return S}}if(t.method==="next")t.sent=t._sent=t.arg;else if(t.method==="throw"){if(o===A)throw o=P,t.arg;t.dispatchException(t.arg)}else t.method==="return"&&t.abrupt("return",t.arg);o=F;var y=c(e,r,t);if(y.type==="normal"){if(o=t.done?P:fr,y.arg===L)continue;return{value:y.arg,done:t.done}}else y.type==="throw"&&(o=P,t.method="throw",t.arg=y.arg)}},"invoke")}a(hr,"makeInvokeMethod");function rr(e,r){var t=r.method,o=e.iterator[t];if(o===i)return r.delegate=null,t==="throw"&&e.iterator.return&&(r.method="return",r.arg=i,rr(e,r),r.method==="throw")||t!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+t+"' method")),L;var n=c(o,e.iterator,r.arg);if(n.type==="throw")return r.method="throw",r.arg=n.arg,r.delegate=null,L;var h=n.arg;if(!h)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,L;if(h.done)r[e.resultName]=h.value,r.next=e.nextLoc,r.method!=="return"&&(r.method="next",r.arg=i);else return h;return r.delegate=null,L}a(rr,"maybeInvokeDelegate"),x(N),E(N,O,"Generator"),E(N,d,function(){return this}),E(N,"toString",function(){return"[object Generator]"});function sr(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}a(sr,"pushTryEntry");function B(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}a(B,"resetTryEntry");function Q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(sr,this),this.reset(!0)}a(Q,"Context"),u.keys=function(e){var r=Object(e),t=[];for(var o in r)t.push(o);return t.reverse(),a(function n(){for(;t.length;){var h=t.pop();if(h in r)return n.value=h,n.done=!1,n}return n.done=!0,n},"next")};function V(e){if(e){var r=e[d];if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var t=-1,o=a(function n(){for(;++t<e.length;)if(s.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=i,n.done=!0,n},"next");return o.next=o}}return{next:er}}a(V,"values"),u.values=V;function er(){return{value:i,done:!0}}return a(er,"doneResult"),Q.prototype={constructor:Q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(B),!e)for(var r in this)r.charAt(0)==="t"&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0],r=e.completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function t(S,y){return h.type="throw",h.arg=e,r.next=S,y&&(r.method="next",r.arg=i),!!y}a(t,"handle");for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],h=n.completion;if(n.tryLoc==="root")return t("end");if(n.tryLoc<=this.prev){var g=s.call(n,"catchLoc"),m=s.call(n,"finallyLoc");if(g&&m){if(this.prev<n.catchLoc)return t(n.catchLoc,!0);if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else if(g){if(this.prev<n.catchLoc)return t(n.catchLoc,!0)}else if(m){if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&s.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&(e==="break"||e==="continue")&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var h=n?n.completion:{};return h.type=e,h.arg=r,n?(this.method="next",this.next=n.finallyLoc,L):this.complete(h)},complete:function(e,r){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&r&&(this.next=r),L},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),B(t),L}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var o=t.completion;if(o.type==="throw"){var n=o.arg;B(t)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:V(e),resultName:r,nextLoc:t},this.method==="next"&&(this.arg=i),L}},u}(v.exports);try{regeneratorRuntime=f}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=f:Function("r","regeneratorRuntime = r")(f)}})(dr);var I="storybook/a11y",ar="a11yHighlight",gr="".concat(I,"/result"),mr="".concat(I,"/request"),yr="".concat(I,"/running"),wr="".concat(I,"/error"),Er="".concat(I,"/manual"),Sr="".concat(I,"/highlight"),k={RESULT:gr,REQUEST:mr,RUNNING:yr,ERROR:wr,MANUAL:Er,HIGHLIGHT:Sr};function tr(v,f,u,l,s,p,i){try{var w=v[p](i),d=w.value}catch(T){u(T);return}w.done?f(d):Promise.resolve(d).then(l,s)}a(tr,"asyncGeneratorStep");function X(v){return function(){var f=this,u=arguments;return new Promise(function(l,s){var p=v.apply(f,u);function i(d){tr(p,l,s,i,w,"next",d)}a(i,"_next");function w(d){tr(p,l,s,i,w,"throw",d)}a(w,"_throw"),i(void 0)})}}a(X,"_asyncToGenerator");var Lr=J.document,br=J.window;b&&b.hot&&b.hot.decline&&b.hot.decline();var H=nr.getChannel(),C=!1,K,Rr=function(){var v=X(regeneratorRuntime.mark(a(function f(u){var l,s;return regeneratorRuntime.wrap(a(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,ir(u);case 2:if(l=i.sent,s=l.manual,s){i.next=7;break}return i.next=7,Z(u);case 7:case"end":return i.stop()}},"_callee$"),f)},"_callee")));return a(function(u){return v.apply(this,arguments)},"handleRequest")}(),Z=function(){var v=X(regeneratorRuntime.mark(a(function f(u){var l,s,p,i,w,d,T,O,E;return regeneratorRuntime.wrap(a(function(c){for(;;)switch(c.prev=c.next){case 0:return K=u,c.prev=1,c.next=4,ir(u);case 4:if(l=c.sent,C){c.next=19;break}return C=!0,H.emit(k.RUNNING),c.next=10,vr(()=>import("./axe.1bde67fe.js").then(A=>A.a),["assets/axe.1bde67fe.js","assets/iframe.e14b0556.js"]);case 10:return s=c.sent.default,p=l.element,i=p===void 0?"#root":p,w=l.config,d=l.options,T=d===void 0?{}:d,O=Lr.querySelector(i),s.reset(),w&&s.configure(w),c.next=17,s.run(O,T);case 17:E=c.sent,K===u?H.emit(k.RESULT,E):(C=!1,Z(K));case 19:c.next=24;break;case 21:c.prev=21,c.t0=c.catch(1),H.emit(k.ERROR,c.t0);case 24:return c.prev=24,C=!1,c.finish(24);case 27:case"end":return c.stop()}},"_callee2$"),f,null,[[1,21,24,27]])},"_callee2")));return a(function(u){return v.apply(this,arguments)},"run")}(),ir=function(){var v=X(regeneratorRuntime.mark(a(function f(u){var l,s;return regeneratorRuntime.wrap(a(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,br.__STORYBOOK_STORY_STORE__.loadStory({storyId:u});case 2:if(i.t0=i.sent,i.t0){i.next=5;break}i.t0={};case 5:return l=i.t0,s=l.parameters,i.abrupt("return",s.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return i.stop()}},"_callee3$"),f)},"_callee3")));return a(function(u){return v.apply(this,arguments)},"getParams")}();H.on(k.REQUEST,Rr);H.on(k.MANUAL,Z);var Gr=a(function(f){return`
  outline: 2px dashed `.concat(f,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},"highlightStyle"),z=J.document;b&&b.hot&&b.hot.decline&&b.hot.decline();var or=nr.getChannel(),Tr=a(function(f){var u=ar;ur();var l=Array.from(new Set(f.elements)),s=z.createElement("style");s.setAttribute("id",u),s.innerHTML=l.map(function(p){return"".concat(p,`{
          `).concat(Gr(f.color),`
         }`)}).join(" "),z.head.appendChild(s)},"highlight"),ur=a(function(){var f=ar,u=z.getElementById(f);u&&u.parentNode.removeChild(u)},"resetHighlight");or.on(pr,ur);or.on(k.HIGHLIGHT,Tr)});export default Or();
//# sourceMappingURL=preview.3014a8d1.js.map
