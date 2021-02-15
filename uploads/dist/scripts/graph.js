(()=>{"use strict";var t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.style,attrs:{id:"graph"}},[i("canvas",{ref:"canvas",attrs:{height:t.height,width:t.width}})])};function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,i){return!i||"object"!==e(i)&&"function"!=typeof i?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):i}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){for(var e=0,i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e);var n=(16777215&e).toString(16).toUpperCase();return"#".concat("00000".substring(0,6-n.length)).concat(n)}t._withStripped=!0;var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(f,vno.Vue);var e,n,u,d,h=(u=f,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(u);if(d){var i=l(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return o(this,t)});function f(){var t;return r(this,f),(t=h.apply(this,arguments)).isLoading=!0,t.loadingText=vno.getMessage("loading",[]),t.isError=!1,t.errorText=vno.getMessage("components.graph.error",[]),t.width=0,t.height=700,t.PI_2=2*Math.PI,t.PI_HALF=Math.PI/2,t.nodeRadiusUnit=2,t.nodeMinRadius=8,t.nodeMaxRadius=t.nodeMinRadius+46*t.nodeRadiusUnit,t.linkWidth=4,t.halfLinkWidth=t.linkWidth/2,t.linkArrowLength=10,t.linkArrowAngle=Math.PI/16,t.linkArrowLengthSin=t.linkArrowLength*Math.sin(t.linkArrowAngle),t.linkArrowLengthCos=t.linkArrowLength*Math.cos(t.linkArrowAngle),t.linkArrowLengthSin2=2*t.linkArrowLengthSin,t.canvasAlpha=.2,t.interpolate=0,t.nodes=[],t.links=[],t.linkCount={},t.selectedNodeOrLink=null,t.draggedLinkSourceOffsetXY=null,t.draggedLinkTargetOffsetXY=null,t.canvasNoTransXY=[0,0],t}return e=f,(n=[{key:"style",get:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}}},{key:"canvasXY",get:function(){var t=i(this.canvasNoTransXY,2),e=t[0],n=t[1];return this.transformXY(e,n)}},{key:"selectedNode",get:function(){return this.selectedNodeOrLink}},{key:"selectedLink",get:function(){return this.selectedNodeOrLink}},{key:"isSelectedNode",get:function(){return!(!this.selectedNodeOrLink||this.selectedLink.source)}},{key:"isSelectedLink",get:function(){return!(!this.selectedNodeOrLink||!this.selectedLink.source)}},{key:"selectedLinkNodeIndices",get:function(){return[this.selectedLink.source.index,this.selectedLink.target.index]}},{key:"selectedLinkCount",get:function(){return this.linkCount[this.selectedNode.id]}},{key:"created",value:function(){var t=this,e=document.querySelector("article"),i=function(){t.width=e.clientWidth};i(),window.onresize=i}},{key:"mounted",value:function(){var t=this,e=this.$refs.canvas;this.canvasCtx=e.getContext("2d"),this.ticked(),vno.waitFor((function(){d3})).then((function(n){if(!n)return t.isError=!0,void t.ticked();t.transform=d3.zoomIdentity,t.$watch("width",(function(){var e=i(t.transformXY(t.width/2,t.height/2),2),n=e[0],r=e[1];t.forceXY(n,r,!0),t.restartSimulationWithAlpha()})),t.$watch("selectedNodeOrLink",(function(){t.interpolate=0,t.restartSimulationWithAlpha(!1,.1)})),t.simulation=d3.forceSimulation(t.nodes).force("charge",d3.forceManyBody().strength((function(e){return 100*-Math.log2(t.nodeMaxRadius-e.radius+2)}))).force("link",d3.forceLink(t.links).id((function(t){return t.id}))).on("tick",t.ticked),t.forceXY(t.width/2,t.height/2),t.forceCollide(),t.zoom=d3.zoom().scaleExtent([.1,10]).on("zoom",t.zoomed),d3.select(e).call(d3.drag().subject(t.dragSubject).on("start",t.dragStarted).on("drag",t.dragged).on("end",t.dragEnded)).call(t.zoom).on("mousemove",t.mouseMoved),t.initNodes()}))}},{key:"initNodes",value:function(){var t=this;vno.file.getFiles().then((function(e){var i=e.files;t.isLoading=!1;var n={};Object.keys(i).forEach((function(e){void 0===n[e]&&t.createNodeFromFile(e,i,n)}))}))}},{key:"createNodeFromFile",value:function(t,e,i){var n=this,r=e[t],a=this.addNode(t,r.flags.title,r.flags.tags);return i[t]=a,Object.keys(r.links).forEach((function(t){if(r.links[t].isMarkdown){var s=i[t];void 0===s&&(s=n.createNodeFromFile(t,e,i)),n.addLink(a,s)}})),a}},{key:"forceXY",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i)return this.simulation.force("x").x(t),void this.simulation.force("y").y(e);this.simulation.force("x",d3.forceX(t)),this.simulation.force("y",d3.forceY(e))}},{key:"forceCollide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=function(e){return e.radius+10*t.nodeRadiusUnit};e?this.simulation.force("collide").radius(i):this.simulation.force("collide",d3.forceCollide().radius(i))}},{key:"ticked",value:function(){var t=this;this.canvasCtx.lineWidth=this.linkWidth,this.canvasCtx.textAlign="center",this.canvasCtx.save(),this.canvasCtx.clearRect(0,0,this.width,this.height),this.isLoading?(this.canvasCtx.font="80px sans-serif",this.canvasCtx.fillStyle=this.isError?"#ff0000":"#424242",this.canvasCtx.fillText(this.isError?this.errorText:this.loadingText,this.width/2,this.height/2)):(this.canvasCtx.translate(this.transform.x,this.transform.y),this.canvasCtx.scale(this.transform.k,this.transform.k),this.links.forEach((function(e){return t.drawLink(e)})),this.nodes.forEach((function(e){return t.drawNode(e)}))),this.canvasCtx.restore(),this.increaseInterpolate()}},{key:"drawLink",value:function(t){var e=!1;this.isSelectedLink?this.selectedLink.index===t.index&&(e=!0):this.isSelectedNode&&[t.source.index,t.target.index].includes(this.selectedNode.index)&&(e=!0),this.drawLinkFrom(t.source,t.target,e,t)}},{key:"drawLinkFrom",value:function(t,e,i,n){var r=this,a=Math.atan2(e.y-t.y,e.x-t.x),s=Math.sin(a),o=Math.cos(a),l=t.radius,c=this.linkCount[t.id];c[0].includes(e.id)&&c[1].includes(e.id)&&(l+=this.linkArrowLengthCos);var u=t.x+l*o,d=t.y+l*s,h=e.radius+this.linkArrowLengthCos,f=e.x-h*o,v=e.y-h*s;this.drawWithAlpha((function(){r.strokeWithColor((function(){r.canvasCtx.moveTo(u,d),r.canvasCtx.lineTo(f,v)}),"#999999"),r.drawLinkArrow(e,a,s,o)}),i?1:this.canvasAlpha,n)}},{key:"drawLinkArrow",value:function(t,e,i,n){var r=this,a=this.PI_HALF-e,s=Math.sin(a),o=Math.tan(a),l=this.linkArrowLengthCos-this.linkArrowLengthSin/o,c=l*n,u=this.linkArrowLengthSin/s+l*i,d=c+this.linkArrowLengthSin2*i,h=u-this.linkArrowLengthSin2*n,f=t.x-t.radius*n,v=t.y-t.radius*i;this.fillWithColor((function(){r.canvasCtx.moveTo(f,v),r.canvasCtx.lineTo(f-c,v-u),r.canvasCtx.lineTo(f-d,v-h)}),"#ff0000")}},{key:"drawNode",value:function(t){var e=this,i=!1,n=0,r=function(e){e?n=t.radius/2:(i=!0,n=t.radius-2)};if(this.isSelectedNode?t.index!==this.selectedNode.index&&r(this.selectedLinkCount.flat().includes(t.id)):this.isSelectedLink&&r(this.selectedLinkNodeIndices.includes(t.index)),t.innerRadius||(t.innerRadius=0),t.innerRadius!==n&&(n=d3.interpolate(t.innerRadius,n)(this.interpolate),this.interpolate>0&&(t.innerRadius=n)),t.radius>0){var a=t.name,s=t.x,o=t.y+t.radius+12;a&&this.drawWithAlpha((function(){e.canvasCtx.strokeStyle="#ffffff",e.canvasCtx.strokeText(a,s,o)}),1),this.drawWithAlpha((function(){for(var i=t.tags.length,n=i||1,r=e.PI_2/n,l=-r,u=0,d=0;d<n;d++)e.fillWithColor((function(){e.canvasCtx.arc(t.x,t.y,t.radius,l+=r,u+=r),n>1&&e.canvasCtx.lineTo(t.x,t.y)}),c(i>0?t.tags[d]:"Untagged"));a&&(e.canvasCtx.fillStyle="#424242",e.canvasCtx.fillText(a,s,o))}),i?this.canvasAlpha:1,t)}n>0&&this.drawWithAlpha((function(){e.fillWithColor((function(){e.canvasCtx.arc(t.x,t.y,n,0,e.PI_2)}),"#ffffff")}),1)}},{key:"strokeWithColor",value:function(t,e){this.canvasCtx.strokeStyle=e,this.canvasCtx.beginPath(),t(),this.canvasCtx.stroke()}},{key:"fillWithColor",value:function(t,e){this.canvasCtx.fillStyle=e,this.canvasCtx.beginPath(),t(),this.canvasCtx.fill()}},{key:"drawWithAlpha",value:function(t,e,i){if(!i)return this.canvasCtx.globalAlpha=e,void t();i.alpha||(i.alpha=this.canvasAlpha),i.alpha!==e&&(e=d3.interpolate(i.alpha,e)(this.interpolate),this.interpolate>0&&(i.alpha=e)),this.canvasCtx.globalAlpha=e,t()}},{key:"increaseInterpolate",value:function(){var t=this.interpolate;t>=1||(t+=.05,this.interpolate=t>1?1:t)}},{key:"dragSubject",value:function(){var t=this.findCurrentNode();if(t)return t;var e=this.findCurrentLink();if(e)return e;this.selectedNodeOrLink=null}},{key:"dragStarted",value:function(){d3.event.active||this.restartSimulationWithAlpha(!0),this.selectedNodeOrLink=d3.event.subject,this.dragged()}},{key:"dragged",value:function(){var t=i(this.getCanvasXY(),2),e=t[0],n=t[1];if(this.isSelectedNode)return this.selectedNode.fx=e,void(this.selectedNode.fy=n);this.isSelectedLink&&(this.draggedLinkSourceOffsetXY||(this.draggedLinkSourceOffsetXY=[this.selectedLink.source.x-e,this.selectedLink.source.y-n]),this.draggedLinkTargetOffsetXY||(this.draggedLinkTargetOffsetXY=[this.selectedLink.target.x-e,this.selectedLink.target.y-n]),this.selectedLink.source.fx=e+this.draggedLinkSourceOffsetXY[0],this.selectedLink.source.fy=n+this.draggedLinkSourceOffsetXY[1],this.selectedLink.target.fx=e+this.draggedLinkTargetOffsetXY[0],this.selectedLink.target.fy=n+this.draggedLinkTargetOffsetXY[1])}},{key:"dragEnded",value:function(){if(d3.event.active||this.resetSimulationAlphaTarget(),this.isSelectedNode)return this.selectedNode.fx=null,void(this.selectedNode.fy=null);this.isSelectedLink&&(this.selectedLink.source.fx=null,this.selectedLink.source.fy=null,this.selectedLink.target.fx=null,this.selectedLink.target.fy=null,this.draggedLinkSourceOffsetXY=null,this.draggedLinkTargetOffsetXY=null)}},{key:"zoomed",value:function(){this.canvasNoTransXY=this.getCanvasNoTransXY(),this.transform=d3.event.transform,this.ticked()}},{key:"mouseMoved",value:function(){this.canvasNoTransXY=this.getCanvasNoTransXY();var t=this.findCurrentNode();this.canvasCtx.canvas.title=t?t.id:""}},{key:"addNode",value:function(t,e,i){this.linkCount[t]=[[],[]];var n={x:this.width/2,y:this.height/2,id:t,name:e,tags:i||[],radius:this.nodeMinRadius};return this.nodes.push(n),this.reloadNode(),this.restartSimulationWithAlpha(),n}},{key:"addLink",value:function(t,e){if(t.index!==e.index){var i=this.linkCount[t.id],n=this.linkCount[e.id];i[1].includes(e.id)||(i[1].push(e.id),n[0].push(t.id),this.links.push({source:t,target:e}),this.increaseRadius(e),this.interpolate=0,this.reloadLink(),this.restartSimulationWithAlpha())}}},{key:"reloadNode",value:function(){this.simulation.nodes(this.nodes)}},{key:"reloadLink",value:function(){this.simulation.force("link").links(this.links)}},{key:"increaseRadius",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.nodeRadiusUnit,i=t.radius;i>=this.nodeMaxRadius||((i+=e)>this.nodeMaxRadius&&(i=this.nodeMaxRadius),t.radius=i,this.forceCollide(!0),this.restartSimulationWithAlpha())}},{key:"restartSimulationWithAlpha",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;if(t)return this.resetSimulationAlphaTarget(e),void this.simulation.restart();this.simulation.alpha(e),this.simulation.restart()}},{key:"resetSimulationAlphaTarget",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.simulation.alphaTarget(t)}},{key:"getCanvasXY",value:function(){var t=i(this.getCanvasNoTransXY(),2),e=t[0],n=t[1];return this.transformXY(e,n)}},{key:"getCanvasNoTransXY",value:function(){return d3.mouse(this.canvasCtx.canvas)}},{key:"transformXY",value:function(t,e){return[this.transform.invertX(t),this.transform.invertY(e)]}},{key:"findNode",value:function(t,e){for(var i=this.nodes.length-1;i>=0;--i){var n=this.nodes[i],r=t-n.x;if(!(r>n.radius||r<-n.radius)){var a=e-n.y;if(!(a>n.radius||a<-n.radius)&&r*r+a*a<=n.radius*n.radius)return n}}return null}},{key:"findCurrentNode",value:function(){var t=i(this.canvasXY,2),e=t[0],n=t[1];return this.findNode(e,n)}},{key:"findLink",value:function(t,e){for(var n=this.links.length-1;n>=0;--n){var r=this.links[n],a=i([r.source.x,r.target.x].sort((function(t,e){return t-e})),2),s=a[0],o=a[1],l=o-s<this.linkWidth?this.halfLinkWidth:0;if(!(t>o+l||t<s-l)){var c=i([r.source.y,r.target.y].sort((function(t,e){return t-e})),2),u=c[0],d=c[1],h=d-u<this.linkWidth?this.halfLinkWidth:0;if(!(e>d+h||e<u-h)){var f=Math.atan2(r.target.y-r.source.y,r.target.x-r.source.x),v=f-this.PI_HALF,k=Math.tan(v);if(k*(t-r.source.x)-e+r.source.y<0!=k*(t-r.target.x)-e+r.target.y<0){var g=Math.tan(f)*(t-r.source.x)-e+r.source.y,y=this.halfLinkWidth/Math.sin(v);if(g+y<0!=g-y<0)return r}}}}return null}},{key:"findCurrentLink",value:function(){var t=i(this.canvasXY,2),e=t[0],n=t[1];return this.findLink(e,n)}}])&&a(e.prototype,n),f}(),d=function(t,e,i,n,r,a,s,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[],c._compiled=!0),c._scopeId="data-v-8169d3fa",l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}(u=function(t,e,i,n){var r,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(s=(a<3?r(s):a>3?r(e,i,s):r(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}([vno.VPD.Component({el:"#graph"})],u),t);d.options.__file="components/Graph.vue",new(0,d.exports)})();