(()=>{var t={365:t=>{t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},161:t=>{t.exports=function(t){if(Array.isArray(t))return t}},647:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},504:t=>{function e(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=t.apply(n,r);function s(t){e(a,i,o,s,c,"next",t)}function c(t){e(a,i,o,s,c,"throw",t)}s(void 0)}))}}},372:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},816:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},620:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},422:(t,e,n)=>{var r=n(276);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},238:t=>{t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}},768:t=>{t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},66:(t,e,n)=>{var r=n(873),i=n(647);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}},276:t=>{function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},613:(t,e,n)=>{var r=n(161),i=n(238),o=n(595),a=n(768);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()}},873:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},595:(t,e,n)=>{var r=n(365);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},135:(t,e,n)=>{t.exports=n(248)},248:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new N(r||[]);return o._invoke=function(t,e,n){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return E()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=h(t,e,n);if("normal"===c.type){if(r=n.done?v:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function y(){}function g(){}function k(){}var x={};x[o]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(_([])));w&&w!==n&&r.call(w,o)&&(x=w);var L=k.prototype=y.prototype=Object.create(x);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(i,o,a,s){var c=h(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:E}}function E(){return{value:e,done:!0}}return g.prototype=L.constructor=k,k.constructor=g,g.displayName=c(k,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(C.prototype),C.prototype[a]=function(){return this},t.AsyncIterator=C,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new C(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(L),c(L,s,"Generator"),L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.style,attrs:{id:"graph"}},[n("canvas",{ref:"canvas",attrs:{height:t.height,width:t.width}})])};t._withStripped=!0;var e=n(135),r=n.n(e),i=n(613),o=n.n(i),a=n(504),s=n.n(a),c=n(372),u=n.n(c),h=n(816),l=n.n(h),f=n(422),d=n.n(f),v=n(66),p=n.n(v),y=n(620),g=n.n(y);function k(t){for(var e=0,n=0;n<t.length;n++)e=t.charCodeAt(n)+((e<<5)-e);var r=(16777215&e).toString(16).toUpperCase();return"#".concat("00000".substring(0,6-r.length)).concat(r)}var x=function(t){d()(f,t);var e,n,i,a,c,h=(a=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g()(a);if(c){var n=g()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p()(this,t)});function f(){var t;return u()(this,f),(t=h.apply(this,arguments)).isLoading=!0,t.loadingText=vno.getMessage("loading",[]),t.isError=!1,t.errorText=vno.getMessage("components.graph.error",[]),t.width=0,t.height=700,t.PI_2=2*Math.PI,t.PI_HALF=Math.PI/2,t.nodeRadiusUnit=2,t.nodeMinRadius=8,t.nodeMaxRadius=t.nodeMinRadius+46*t.nodeRadiusUnit,t.linkWidth=4,t.halfLinkWidth=t.linkWidth/2,t.linkArrowLength=10,t.linkArrowAngle=Math.PI/16,t.linkArrowLengthSin=t.linkArrowLength*Math.sin(t.linkArrowAngle),t.linkArrowLengthCos=t.linkArrowLength*Math.cos(t.linkArrowAngle),t.linkArrowLengthSin2=2*t.linkArrowLengthSin,t.canvasAlpha=.2,t.interpolate=0,t.nodes=[],t.links=[],t.linkCount={},t.selectedNodeOrLink=null,t.draggedLinkSourceOffsetXY=null,t.draggedLinkTargetOffsetXY=null,t}return l()(f,[{key:"style",get:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}}},{key:"selectedNode",get:function(){return this.selectedNodeOrLink}},{key:"selectedLink",get:function(){return this.selectedNodeOrLink}},{key:"isSelectedNode",get:function(){return!(!this.selectedNodeOrLink||this.selectedLink.source)}},{key:"isSelectedLink",get:function(){return!(!this.selectedNodeOrLink||!this.selectedLink.source)}},{key:"selectedLinkNodeIndices",get:function(){return[this.selectedLink.source.index,this.selectedLink.target.index]}},{key:"selectedLinkCount",get:function(){return this.linkCount[this.selectedNode.id]}},{key:"created",value:function(){var t=this,e=document.querySelector("article"),n=function(){t.width=e.clientWidth};n(),window.onresize=n}},{key:"mounted",value:(i=s()(r().mark((function t(){var e,n=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$refs.canvas,this.canvasCtx=e.getContext("2d"),this.ticked(),t.next=5,vno.waitFor((function(){d3}));case 5:if(t.sent){t.next=9;break}return this.isError=!0,this.ticked(),t.abrupt("return");case 9:this.transform=d3.zoomIdentity,this.$watch("width",(function(){var t=n.transformXY(n.width/2,n.height/2),e=o()(t,2),r=e[0],i=e[1];n.forceXY(r,i,!0),n.restartSimulationWithAlpha()})),this.$watch("selectedNodeOrLink",(function(){n.interpolate=0,n.restartSimulationWithAlpha(!1,.1)})),this.simulation=d3.forceSimulation(this.nodes).force("charge",d3.forceManyBody().strength((function(t){return 100*-Math.log2(n.nodeMaxRadius-t.radius+2)}))).force("link",d3.forceLink(this.links).id((function(t){return t.id}))).on("tick",this.ticked),this.forceXY(this.width/2,this.height/2),this.forceCollide(),d3.select(e).call(d3.drag().subject(this.dragSubject).on("start",this.dragStarted).on("drag",this.dragged).on("end",this.dragEnded)).call(d3.zoom().scaleExtent([.1,10]).on("zoom",this.zoomed)).on("mousemove",this.mouseMoved),this.initNodes().then();case 17:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"initNodes",value:(n=s()(r().mark((function t(){var e,n,i,o,a,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vno.file.getFiles();case 2:e=t.sent,n=e.files,i={},o=0,a=Object.keys(n);case 6:if(!(o<a.length)){t.next=14;break}if(s=a[o],void 0!==i[s]){t.next=11;break}return t.next=11,this.createNodeFromFile(s,n,i);case 11:o++,t.next=6;break;case 14:this.isLoading=!1;case 15:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"createNodeFromFile",value:(e=s()(r().mark((function t(e,n,i){var o,a,s,c,u,h;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(o=n[e])){t.next=5;break}return t.next=4,vno.file.getFile(e);case 4:o=t.sent;case 5:a=this.addNode(e,o.flags.title,o.flags.tags),i[e]=a,s=0,c=Object.keys(o.links);case 8:if(!(s<c.length)){t.next=22;break}if(u=c[s],o.links[u].isMarkdown){t.next=13;break}return t.abrupt("continue",19);case 13:if(void 0!==(h=i[u])){t.next=18;break}return t.next=17,this.createNodeFromFile(u,n,i);case 17:h=t.sent;case 18:this.addLink(a,h);case 19:s++,t.next=8;break;case 22:return t.abrupt("return",a);case 23:case"end":return t.stop()}}),t,this)}))),function(t,n,r){return e.apply(this,arguments)})},{key:"forceXY",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(n)return this.simulation.force("x").x(t),void this.simulation.force("y").y(e);this.simulation.force("x",d3.forceX(t)),this.simulation.force("y",d3.forceY(e))}},{key:"forceCollide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=function(e){return e.radius+10*t.nodeRadiusUnit};e?this.simulation.force("collide").radius(n):this.simulation.force("collide",d3.forceCollide().radius(n))}},{key:"ticked",value:function(){var t=this;this.canvasCtx.lineWidth=this.linkWidth,this.canvasCtx.textAlign="center",this.canvasCtx.save(),this.canvasCtx.clearRect(0,0,this.width,this.height),this.isLoading?(this.canvasCtx.font="80px sans-serif",this.canvasCtx.fillStyle=this.isError?"#ff0000":"#424242",this.canvasCtx.fillText(this.isError?this.errorText:this.loadingText,this.width/2,this.height/2)):(this.canvasCtx.translate(this.transform.x,this.transform.y),this.canvasCtx.scale(this.transform.k,this.transform.k),this.links.forEach((function(e){return t.drawLink(e)})),this.nodes.forEach((function(e){return t.drawNode(e)}))),this.canvasCtx.restore(),this.increaseInterpolate()}},{key:"drawLink",value:function(t){var e=!1;this.isSelectedLink?this.selectedLink.index===t.index&&(e=!0):this.isSelectedNode&&[t.source.index,t.target.index].includes(this.selectedNode.index)&&(e=!0),this.drawLinkFrom(t.source,t.target,e,t)}},{key:"drawLinkFrom",value:function(t,e,n,r){var i=this,o=Math.atan2(e.y-t.y,e.x-t.x),a=Math.sin(o),s=Math.cos(o),c=t.radius,u=this.linkCount[t.id];u[0].includes(e.id)&&u[1].includes(e.id)&&(c+=this.linkArrowLengthCos);var h=t.x+c*s,l=t.y+c*a,f=e.radius+this.linkArrowLengthCos,d=e.x-f*s,v=e.y-f*a;this.drawWithAlpha((function(){i.strokeWithColor((function(){i.canvasCtx.moveTo(h,l),i.canvasCtx.lineTo(d,v)}),"#999999"),i.drawLinkArrow(e,o,a,s)}),n?1:this.canvasAlpha,r)}},{key:"drawLinkArrow",value:function(t,e,n,r){var i=this,o=this.PI_HALF-e,a=Math.sin(o),s=Math.tan(o),c=this.linkArrowLengthCos-this.linkArrowLengthSin/s,u=c*r,h=this.linkArrowLengthSin/a+c*n,l=u+this.linkArrowLengthSin2*n,f=h-this.linkArrowLengthSin2*r,d=t.x-t.radius*r,v=t.y-t.radius*n;this.fillWithColor((function(){i.canvasCtx.moveTo(d,v),i.canvasCtx.lineTo(d-u,v-h),i.canvasCtx.lineTo(d-l,v-f)}),"#ff0000")}},{key:"drawNode",value:function(t){var e=this,n=!1,r=0,i=function(e){e?r=t.radius/2:(n=!0,r=t.radius-2)};if(this.isSelectedNode?t.index!==this.selectedNode.index&&i(this.selectedLinkCount.flat().includes(t.id)):this.isSelectedLink&&i(this.selectedLinkNodeIndices.includes(t.index)),t.innerRadius||(t.innerRadius=0),t.innerRadius!==r&&(r=d3.interpolate(t.innerRadius,r)(this.interpolate),this.interpolate>0&&(t.innerRadius=r)),t.radius>0){var o=t.name,a=t.x,s=t.y+t.radius+12;o&&this.drawWithAlpha((function(){e.canvasCtx.strokeStyle="#ffffff",e.canvasCtx.strokeText(o,a,s)}),1),this.drawWithAlpha((function(){for(var n=t.tags.length,r=n||1,i=e.PI_2/r,c=-i,u=0,h=0;h<r;h++)e.fillWithColor((function(){e.canvasCtx.arc(t.x,t.y,t.radius,c+=i,u+=i),r>1&&e.canvasCtx.lineTo(t.x,t.y)}),k(n>0?t.tags[h]:"Untagged"));o&&(e.canvasCtx.fillStyle="#424242",e.canvasCtx.fillText(o,a,s))}),n?this.canvasAlpha:1,t)}r>0&&this.drawWithAlpha((function(){e.fillWithColor((function(){e.canvasCtx.arc(t.x,t.y,r,0,e.PI_2)}),"#ffffff")}),1)}},{key:"strokeWithColor",value:function(t,e){this.canvasCtx.strokeStyle=e,this.canvasCtx.beginPath(),t(),this.canvasCtx.stroke()}},{key:"fillWithColor",value:function(t,e){this.canvasCtx.fillStyle=e,this.canvasCtx.beginPath(),t(),this.canvasCtx.fill()}},{key:"drawWithAlpha",value:function(t,e,n){if(!n)return this.canvasCtx.globalAlpha=e,void t();n.alpha||(n.alpha=this.canvasAlpha),n.alpha!==e&&(e=d3.interpolate(n.alpha,e)(this.interpolate),this.interpolate>0&&(n.alpha=e)),this.canvasCtx.globalAlpha=e,t()}},{key:"increaseInterpolate",value:function(){var t=this.interpolate;t>=1||(t+=.05,this.interpolate=t>1?1:t)}},{key:"dragSubject",value:function(){var t=this.findNode();if(t)return t;var e=this.findLink();if(e)return e;this.selectedNodeOrLink=null}},{key:"dragStarted",value:function(){d3.event.active||this.restartSimulationWithAlpha(!0),this.selectedNodeOrLink=d3.event.subject,this.dragged()}},{key:"dragged",value:function(){var t=this.getCanvasXY(),e=o()(t,2),n=e[0],r=e[1];if(this.isSelectedNode)return this.selectedNode.fx=n,void(this.selectedNode.fy=r);this.isSelectedLink&&(this.draggedLinkSourceOffsetXY||(this.draggedLinkSourceOffsetXY=[this.selectedLink.source.x-n,this.selectedLink.source.y-r]),this.draggedLinkTargetOffsetXY||(this.draggedLinkTargetOffsetXY=[this.selectedLink.target.x-n,this.selectedLink.target.y-r]),this.selectedLink.source.fx=n+this.draggedLinkSourceOffsetXY[0],this.selectedLink.source.fy=r+this.draggedLinkSourceOffsetXY[1],this.selectedLink.target.fx=n+this.draggedLinkTargetOffsetXY[0],this.selectedLink.target.fy=r+this.draggedLinkTargetOffsetXY[1])}},{key:"dragEnded",value:function(){if(d3.event.active||this.resetSimulationAlphaTarget(),this.isSelectedNode)return this.selectedNode.fx=null,void(this.selectedNode.fy=null);this.isSelectedLink&&(this.selectedLink.source.fx=null,this.selectedLink.source.fy=null,this.selectedLink.target.fx=null,this.selectedLink.target.fy=null,this.draggedLinkSourceOffsetXY=null,this.draggedLinkTargetOffsetXY=null)}},{key:"zoomed",value:function(){this.transform=d3.event.transform,this.ticked()}},{key:"mouseMoved",value:function(){var t=this.findNode();this.canvasCtx.canvas.title=t?t.id:""}},{key:"addNode",value:function(t,e,n){this.linkCount[t]=[[],[]];var r={x:this.width/2,y:this.height/2,id:t,name:e,tags:n||[],radius:this.nodeMinRadius};return this.nodes.push(r),this.reloadNode(),this.restartSimulationWithAlpha(),r}},{key:"addLink",value:function(t,e){if(t.index!==e.index){var n=this.linkCount[t.id],r=this.linkCount[e.id];n[1].includes(e.id)||(n[1].push(e.id),r[0].push(t.id),this.links.push({source:t,target:e}),this.increaseRadius(e),this.interpolate=0,this.reloadLink(),this.restartSimulationWithAlpha())}}},{key:"reloadNode",value:function(){this.simulation.nodes(this.nodes)}},{key:"reloadLink",value:function(){this.simulation.force("link").links(this.links)}},{key:"increaseRadius",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.nodeRadiusUnit,n=t.radius;n>=this.nodeMaxRadius||((n+=e)>this.nodeMaxRadius&&(n=this.nodeMaxRadius),t.radius=n,this.forceCollide(!0),this.restartSimulationWithAlpha())}},{key:"restartSimulationWithAlpha",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;if(t)return this.resetSimulationAlphaTarget(e),void this.simulation.restart();this.simulation.alpha(e),this.simulation.restart()}},{key:"resetSimulationAlphaTarget",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.simulation.alphaTarget(t)}},{key:"getCanvasXY",value:function(){var t=d3.mouse(this.canvasCtx.canvas),e=o()(t,2),n=e[0],r=e[1];return this.transformXY(n,r)}},{key:"transformXY",value:function(t,e){return[this.transform.invertX(t),this.transform.invertY(e)]}},{key:"findNode",value:function(){for(var t=this.getCanvasXY(),e=o()(t,2),n=e[0],r=e[1],i=this.nodes.length-1;i>=0;--i){var a=this.nodes[i],s=n-a.x;if(!(s>a.radius||s<-a.radius)){var c=r-a.y;if(!(c>a.radius||c<-a.radius)&&s*s+c*c<=a.radius*a.radius)return a}}return null}},{key:"findLink",value:function(){for(var t=this.getCanvasXY(),e=o()(t,2),n=e[0],r=e[1],i=this.links.length-1;i>=0;--i){var a=this.links[i],s=[a.source.x,a.target.x].sort((function(t,e){return t-e})),c=o()(s,2),u=c[0],h=c[1],l=h-u<this.linkWidth?this.halfLinkWidth:0;if(!(n>h+l||n<u-l)){var f=[a.source.y,a.target.y].sort((function(t,e){return t-e})),d=o()(f,2),v=d[0],p=d[1],y=p-v<this.linkWidth?this.halfLinkWidth:0;if(!(r>p+y||r<v-y)){var g=Math.atan2(a.target.y-a.source.y,a.target.x-a.source.x),k=g-this.PI_HALF,x=Math.tan(k);if(x*(n-a.source.x)-r+a.source.y<0!=x*(n-a.target.x)-r+a.target.y<0){var m=Math.tan(g)*(n-a.source.x)-r+a.source.y,w=this.halfLinkWidth/Math.sin(k);if(m+w<0!=m-w<0)return a}}}}return null}}]),f}(vno.Vue),m=function(t,e,n,r,i,o,a,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=[],u._compiled=!0),u._scopeId="data-v-8169d3fa",c)if(u.functional){u._injectStyles=c;var h=u.render;u.render=function(t,e){return c.call(e),h(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}(x=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a}([vno.VPD.Component({el:"#graph"})],x),t);m.options.__file="components/Graph.vue",new(0,m.exports)})()})();