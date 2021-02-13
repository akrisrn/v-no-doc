(()=>{"use strict";var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.isZen?"hidden":null,attrs:{id:"provider"}},[n("img",{attrs:{src:e.logo,alt:"logo",height:"32"}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.html)}})])};function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e._withStripped=!0;var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(l,vno.Vue);var t,u,f,s,a=(f=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(f);if(s){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function l(){var e;return n(this,l),(e=a.apply(this,arguments)).isZen=vno.gadgetSelf.isZen,e.logo=vno.path.addBaseUrl(vno.getMessage("paths.logo",[])),e.powered=JSON.parse(vno.getMessage("links.powered",[])),e.hosted=JSON.parse(vno.getMessage("links.hosted",[])),e}return t=l,(u=[{key:"html",get:function(){return vno.markdown.renderMD(vno.getMessage("components.provider",[this.powered,this.hosted].map((function(e){return"[".concat(e[0],"](").concat(e[1],")")}))),!1)}},{key:"mounted",value:function(){var e=this;document.querySelector("#app").append(this.$el),document.addEventListener(vno.EEvent.toggleZen,(function(t){!0===t.detail?setTimeout((function(){e.isZen=!0}),500):(e.isZen=!1,e.$nextTick((function(){return vno.element.removeClass(e.$el)})))}))}}])&&o(t.prototype,u),l}(),f=function(e,t,n,o,r,i,c,u){var f,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=[],s._compiled=!0),s._scopeId="data-v-de3c2468",f)if(s.functional){s._injectStyles=f;var a=s.render;s.render=function(e,t){return f.call(t),a(e,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,f):[f]}return{exports:e,options:s}}(u=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}([vno.VPD.Component({el:document.createElement("div")})],u),e);f.options.__file="components/Provider.vue",new(0,f.exports)})();