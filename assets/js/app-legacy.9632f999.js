(function(t){function e(e){for(var r,a,o=e[0],s=e[1],u=e[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i={app:0},c=[];function o(t){return s.p+"assets/js/"+({file:"file",markdown:"markdown",prismjs:"prismjs"}[t]||t)+"-legacy."+{file:"f57c9c25",markdown:"ae9fa797",prismjs:"a67bda2e"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={prismjs:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="assets/css/"+({file:"file",markdown:"markdown",prismjs:"prismjs"}[t]||t)+"."+{file:"31d6cfe0",markdown:"31d6cfe0",prismjs:"3de3ba0d"}[t]+".css",i=s.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/v-no-doc/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"027e":function(t,e,n){"use strict";n("33a0")},1889:function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f}));n("99af"),n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("1e25"),n("eee7");var r=n("bb76"),a=n("35f0"),i="--8<--",c=[],o=new CustomEvent("rendered");function s(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3?arguments[3]:void 0,a="h[".concat(e,"-").concat(n,"]-\\d+");return t&&(a="^".concat(a,"$")),new RegExp(a,r)}function u(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=t.indexOf(e);if(r<0)return{key:t,value:null};var a=t.substring(0,r),i=t.substring(r+e.length);return n&&(a=a.trimEnd(),i=i.trimStart()),{key:a,value:i}}function l(t){return{title:t}}function f(t){return{path:t,data:r["b"].messages.pageError,flags:l(Object(a["l"])(t)),links:[],isError:!0}}},"2a94":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"g",(function(){return m}));n("99af"),n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("5377"),n("3ca3"),n("159b"),n("ddb0");var r=n("b85c"),a=(n("96cf"),n("1da1")),i=n("35f0"),c=n("8ef8"),o={};function s(){o={}}function u(t,e){e&&t.classList.remove(e),0===t.classList.length&&t.removeAttribute("class")}var l=document.documentElement;function f(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.style.scrollBehavior=e?"smooth":"auto",setTimeout((function(){return scrollTo(0,t)}),0)}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="'.concat(e,'" height="').concat(n,'"><path fill-rule="evenodd" d="').concat(t,'"></path></svg>')}function h(t){var e=document.createElement("div");if(e.classList.add("bar"),t.tags&&t.tags.forEach((function(t){var n=document.createElement("code");n.classList.add("item-tag"),Object(i["g"])(t).forEach((function(t){var e=document.createElement("a");e.href=t[0],e.innerText=t[1],n.append(e)})),e.append(n)})),t.startDate){var n=document.createElement("code");n.classList.add("item-date"),n.innerText=t.startDate,e.append(n)}if(e.childElementCount>0){var r=document.createElement("span");return r.classList.add("filler"),[r,e]}return null}function p(t,e){var n=t.flags;if(!e){e=document.createElement("li");var r=document.createElement("a");r.href="#".concat(Object(i["l"])(t.path)),r.innerText=n.title,e.append(r)}if(e.classList.add("article"),t.isError)return e;var a=h(n);return a&&(e.append(a[0]),e.append(a[1])),e}function m(t){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,o,s,l,f,d,h,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n={},o=Object(r["a"])(document.querySelectorAll('a[href^="#/"]')),t.prev=2,o.s();case 4:if((s=o.n()).done){t.next=17;break}if(l=s.value,""===l.innerText){t.next=8;break}return t.abrupt("continue",15);case 8:if(l.innerText="#",f=Object(i["d"])(l.getAttribute("href").substr(1)),f){t.next=12;break}return t.abrupt("continue",15);case 12:l.classList.add("rendering"),d=n[f],void 0===d?(d=[l],n[f]=d):d.push(l);case 15:t.next=4;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](2),o.e(t.t0);case 22:return t.prev=22,o.f(),t.finish(22);case 25:if(h=Object.keys(n),0!==h.length){t.next=28;break}return t.abrupt("return");case 28:return t.next=30,Promise.all(h.map(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])();case 2:return t.abrupt("return",t.sent.getFile(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 30:p=t.sent,p.forEach((function(t){var a,i=Object(r["a"])(n[t.path]);try{for(i.s();!(a=i.n()).done;){var c=a.value;t.isError&&c.classList.add("error"),c.innerText=t.flags.title,e&&e(t,c),u(c,"rendering")}}catch(o){i.e(o)}finally{i.f()}}));case 32:case"end":return t.stop()}}),t,null,[[2,19,22,25]])}))),v.apply(this,arguments)}l.style.scrollBehavior="smooth"},"33a0":function(t,e,n){},"35f0":function(t,e,n){"use strict";n.d(e,"l",(function(){return c})),n.d(e,"h",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"i",(function(){return k})),n.d(e,"k",(function(){return y})),n.d(e,"j",(function(){return j})),n.d(e,"f",(function(){return O}));n("99af"),n("4160"),n("c975"),n("a15b"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("8a79"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("18a5"),n("159b");var r=n("bb76"),a=n("4c55"),i=n("1889");function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"md",n="index.".concat(e);return t===n?"":t.endsWith("/".concat(n))?t.replace(new RegExp("index\\.".concat(e,"$")),""):t}var o="/v-no-doc/",s="/v-no-doc/",u="-/index.html",l=!1,f=s+c(u,"html");function d(t){return t.startsWith("/")?"/"===t?f:!l&&r["b"].cdn?r["b"].cdn+t.substr(1):"/"!==o?o+t.substr(1):t:t}function h(t){return"/"!==o&&t.startsWith(o)?t.substr(o.length-1):r["b"].cdn&&t.startsWith(r["b"].cdn)?t.substr(r["b"].cdn.length-1):t===f?"/":t}function p(t){var e=t.path,n=t.anchor,r=t.query,a="#".concat(e);return n&&(a+="#".concat(n)),r&&(a+="?".concat(r)),a}function m(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="content=".concat(encodeURIComponent(t));return e?p({path:r["d"].search,anchor:"",query:n}):n}function v(t,e){return m("@".concat(t,": ").concat(e),!0)}function b(t){var e=[],n=0,r=t.indexOf("/");while(r>=0)r+=n,e.push([v(a["a"].tags,t.substring(0,r)),t.substring(n,r)]),n=r+1,r=t.substring(n).indexOf("/");return e.push([v(a["a"].tags,t),n>0?t.substring(n):t]),e}function g(t){return t.endsWith(".md")?t:t.endsWith("/")?t+"index.md":""}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r["b"].paths.index,a="",o="";if(!t.startsWith("#/"))return{path:e?c(n):n,anchor:a,query:o};n=t.substr(1);var s=Object(i["a"])(n,"?",!1);return null!==s.value&&(n=s.key,o=s.value),s=Object(i["a"])(n,"#",!1),null!==s.value&&(n=s.key,a=s.value),n.endsWith("/")?e||(n+="index.md"):e&&(n=c(n)),{path:n,anchor:a,query:o}}function y(t){var e=t.path;return e.endsWith("/")&&(e+="index.html"),e==="/".concat(u)?k(t.hash):(e.endsWith(".html")&&(e=e.replace(/\.html$/,".md")),{path:e,anchor:"",query:""})}function j(t){var e={};return t.split("&").forEach((function(t){var n=Object(i["a"])(t,"=",!1);if(null!==n.value){var r=decodeURIComponent(n.key).trim();r&&(e[r]=decodeURIComponent(n.value).trim())}else t=decodeURIComponent(t).trim(),t&&(e[t]=null)})),e}function O(t){for(var e=[],n=0,r=Object.keys(t);n<r.length;n++){var a=r[n],i=a.trim();if(i){i=encodeURIComponent(i);var c=t[a];null!==c?e.push("".concat(i,"=").concat(encodeURIComponent(c.trim()))):e.push(i)}}return e.join("&")}},"3b52":function(t,e,n){},"4c55":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return a}));var r;n("07ac"),n("9911");(function(t){t["title"]="title",t["tags"]="tags",t["updated"]="updated",t["cover"]="cover",t["startDate"]="startDate",t["endDate"]="endDate",t["creator"]="creator",t["updater"]="updater"})(r||(r={}));var a,i=Object.values(r);(function(t){t["link"]="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",t["backlink"]="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",t["external"]="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z",t["sync"]="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"})(a||(a={}))},"525d":function(t,e,n){"use strict";n("3b52")},"72db":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));n("4160"),n("b64b"),n("159b");function r(t){return window[t]}function a(t,e){window[t]=e}function i(t){var e=r("vno");e||(e={},a("vno",e)),Object.keys(t).forEach((function(n){e[n]=t[n]}))}},"8ef8":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return f}));n("d3b7"),n("96cf");var r,a,i,c=n("1da1");function o(){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=4;break}return t.next=3,n.e("file").then(n.bind(null,"b269"));case 3:r=t.sent;case 4:return t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return l=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=4;break}return t.next=3,Promise.all([n.e("file"),n.e("markdown")]).then(n.bind(null,"ed6f"));case 3:a=t.sent;case 4:return t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i){t.next=4;break}return t.next=3,n.e("prismjs").then(n.bind(null,"92f4"));case 3:i=t.sent;case 4:return t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},bb76:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return f}));n("b64b"),n("ac1f"),n("841c");var r=n("35f0"),a=n("72db");function i(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];e[a]instanceof Object&&Object.assign(e[a],i(t[a],e[a]))}return Object.assign(t||{},e),t}var c="";function o(){var t=JSON.parse(JSON.stringify(Object(a["b"])("vnoConfig")));if(!t.defaultConf||!t.multiConf)return t;var e=localStorage.getItem("conf");if(e){var n=t.multiConf[e];if(n)return c=e,i(t,JSON.parse(JSON.stringify(n))),t;localStorage.removeItem("conf")}var r=t.multiConf[t.defaultConf];return r?(c=t.defaultConf,i(t,JSON.parse(JSON.stringify(r))),t):t}function s(){return c}var u=o(),l=[u.paths.index,u.paths.readme,u.paths.archive,u.paths.category,u.paths.search];u.paths.common&&l.push(u.paths.common);var f={index:Object(r["l"])(u.paths.index),readme:Object(r["l"])(u.paths.readme),archive:Object(r["l"])(u.paths.archive),category:Object(r["l"])(u.paths.category),search:Object(r["l"])(u.paths.search)}},c061:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"top"}},[n("div",[t.favicon?n("img",{attrs:{src:t.favicon,alt:"favicon"}}):t._e(),n("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.siteName||t.config.messages.home))]),n("span",{staticClass:"filler"}),n("a",{attrs:{href:"#"+t.shortPaths.readme}}),n("a",{attrs:{href:"#"+t.shortPaths.archive}}),n("a",{attrs:{href:"#"+t.shortPaths.category}}),n("a",{attrs:{href:"#"+t.shortPaths.search}}),t.enableMultiConf?n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectConf,expression:"selectConf"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectConf=e.target.multiple?n:n[0]},t.confChanged]}},t._l(t.confList[0],(function(e,r){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(t.confList[1][r]))])})),0):t._e()])]),n("transition",{attrs:{name:"slide-fade"}},[t.isShow?n("main",{class:t.isError?"error":null},[t.cover?n("div",{staticClass:"center",attrs:{id:"cover"}},[n("img",{attrs:{src:t.cover,alt:"cover"}})]):t._e(),t.isError?t._e():n("div",{staticClass:"bar",attrs:{id:"bar"}},[t.isIndexFile?t._e():n("code",{staticClass:"item-home"},[n("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v("«")])]),t.date?n("code",{staticClass:"item-date"},[t._v(t._s(t.isIndexFile?t.updated:t.date))]):t._e(),t.creator?n("code",{staticClass:"item-creator"},[t._v(t._s(t.creator))]):t._e(),t._l(t.tags,(function(e){return n("code",{key:e,staticClass:"item-tag"},[t._l(t.getSearchTagLinks(e),(function(e){return[n("a",{key:e[0],attrs:{href:e[0]}},[t._v(t._s(e[1]))])]}))],2)})),t._l(Object.keys(t.otherFlags).sort(),(function(e){return n("code",{key:e,class:"item-"+e},[t._v(t._s(t.otherFlags[e]))])})),n("code",{staticClass:"item-raw"},[n("a",{attrs:{href:t.rawFilePath,target:"_blank"}},[t._v(t._s(t.config.messages.raw))])])],2),n("header",[t._v(t._s(t.title))]),n("Article",{attrs:{anchor:t.anchor,data:t.data,filePath:t.filePath,query:t.query}}),t.isError?t._e():n("div",{attrs:{id:"backlinks"}},[t.hasLoadedBacklinks?t._e():n("div",{class:["icon",{loading:t.isLoadingBacklinks}],domProps:{innerHTML:t._s(t.isLoadingBacklinks?t.iconSync:t.iconBacklink)}}),t.isLoadingBacklinks?n("span",[t._v(t._s(t.config.messages.loading))]):t.hasLoadedBacklinks?[t.backlinkFiles.length>0?n("ul",t._l(t.backlinkFiles,(function(e){return n("li",{key:e.path,staticClass:"article",domProps:{innerHTML:t._s(t.getListHtml(e))}})})),0):n("span",[t._v(t._s(t.config.messages.noBacklinks))])]:n("a",{on:{click:t.getBacklinks}},[t._v(t._s(t.config.messages.showBacklinks))])],2),t.isIndexFile?t._e():n("footer",[n("a",{staticClass:"home",attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.messages.returnHome))]),!t.isError&&t.date?[n("span",{staticClass:"filler"}),n("span",{staticClass:"date"},[t._v(t._s(t.updated!==t.date?t.updated+t.lastUpdatedMessage:t.date))])]:t._e()],2)],1):t._e()]),n("span",{attrs:{id:"toggle-dark"},on:{click:t.toggleDark}},[t._v(t._s(t.darkMarks[t.isDark?1:0]))]),n("span",{ref:"toggleZen",class:t.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:t.toggleZen}},[t._v(t._s(t.zenMark))]),n("span",{ref:"toTop",class:t.isToTop?"spin":null,attrs:{id:"to-top"},on:{click:function(e){return t.toTop()}}},[t._v(t._s(t.toTopMark))])],1)},c=[],o=(n("99af"),n("4160"),n("caad"),n("d81d"),n("b64b"),n("d3b7"),n("ac1f"),n("5377"),n("8a79"),n("2532"),n("3ca3"),n("5319"),n("841c"),n("498a"),n("18a5"),n("159b"),n("ddb0"),n("2909")),s=(n("96cf"),n("1da1")),u=n("d4ec"),l=n("bee2"),f=n("262e"),d=n("2caf"),h=n("9ab4"),p=n("bb76"),m=n("2a94"),v=n("4c55"),b=n("35f0"),g=n("1889"),k=n("72db"),y=n("8ef8"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{ref:"article",class:t.isRendering?"rendering":null,domProps:{innerHTML:t._s(t.markdown)}})},O=[],x=n("3835"),w=n("1b40"),_=function(t){Object(f["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.mdData="",t.markdown="",t.isRendering=!0,t}return Object(l["a"])(n,[{key:"created",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i,c,o,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["b"])();case 2:if(e=t.sent,n=e.renderMD,r=e.replaceInlineScript,a=e.updateCategoryPage,i=e.updateDom,c=e.updateSearchPage,o=e.updateSnippet,this.data&&(this.mdData=r(this.filePath,this.data)),this.mdData){t.next=8;break}return this.renderComplete(),t.abrupt("return");case 8:this.markdown=n(this.mdData),this.$nextTick((function(){Promise.all([o(s.mdData),i()]).then((function(t){var n=Object(x["a"])(t,1),r=n[0];s.isCategoryFile?r?a(r).then((function(t){return s.updateData(t,e)})):s.updateData(r,e):(s.updateData(r,e),s.isSearchFile&&s.$nextTick((function(){return c(s.query.content||"")})))}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateData",value:function(t,e){var n=this,r=e.renderMD,a=e.updateDom;if(t!==this.mdData){if(!t)return this.markdown="",void this.renderComplete();this.markdown=r(t),this.$nextTick((function(){a().then((function(){n.renderComplete()}))}))}else this.renderComplete()}},{key:"renderComplete",value:function(){var t=this;this.isRendering=!1,this.$nextTick((function(){if(Object(m["e"])(t.$refs.article),Object(g["e"])().test(t.anchor)){var e=document.querySelector('article > *[id="'.concat(t.anchor,'"]'));e&&Object(m["f"])(e.offsetTop-6)}})),setTimeout((function(){document.dispatchEvent(g["f"])}),100)}},{key:"isCategoryFile",get:function(){return this.filePath===p["b"].paths.category}},{key:"isSearchFile",get:function(){return this.filePath===p["b"].paths.search}}]),n}(w["c"]);Object(h["a"])([Object(w["b"])()],_.prototype,"filePath",void 0),Object(h["a"])([Object(w["b"])()],_.prototype,"data",void 0),Object(h["a"])([Object(w["b"])()],_.prototype,"anchor",void 0),Object(h["a"])([Object(w["b"])()],_.prototype,"query",void 0),_=Object(h["a"])([w["a"]],_);var C=_,T=C,S=(n("027e"),n("0c7c")),P=Object(S["a"])(T,j,O,!1,null,null,null),E=P.exports;w["a"].registerHooks(["beforeRouteUpdate"]);var D=function(t){Object(f["a"])(n,t);var e=Object(d["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.data="",t.title="",t.tags=[],t.date="",t.updated="",t.cover="",t.creator="",t.updater="",t.otherFlags={},t.anchor="",t.queryStr="",t.backlinkFiles=[],t.isLoadingBacklinks=!1,t.hasLoadedBacklinks=!1,t.isShow=!1,t.isError=!1,t.isCancel=!1,t.isDark=!1,t.isZen=!1,t.isToTop=!1,t.darkMarks=["★","☆"],t.zenMark="▣",t.toTopMark="と",t.favicon=t.config.paths.favicon?Object(b["a"])(t.config.paths.favicon):"",t.iconSync=Object(m["d"])(v["b"].sync),t.iconBacklink=Object(m["d"])(v["b"].backlink,18),t.keyInput="",t.inputBinds={},t.shortPaths=p["d"],t.homePath=b["h"],t.homeHash=Object(b["b"])({path:t.shortPaths.index,anchor:"",query:""}),t.selectConf=Object(p["c"])(),t}return Object(l["a"])(n,[{key:"created",value:function(){var t=this,e=this.homePath,n=this.shortFilePath;if("prerender"===document.body.id){var r=e;return this.isIndexFile||(r+="#".concat(n)),location.href=r+location.search,void(this.isCancel=!0)}if(location.search){var a=location.search.substr(1)+(this.queryStr?"&".concat(this.queryStr):"");return location.href=e+Object(b["b"])({path:n,anchor:this.anchor,query:Object(b["f"])(Object(b["j"])(a))}),void(this.isCancel=!0)}if(this.enableMultiConf){var i=this.query.conf;if(i&&this.confList[0].includes(i)&&this.selectConf!==i)return localStorage.setItem("conf",i),this.$router.go(0),void(this.isCancel=!0)}Object(y["a"])().then((function(t){var e=t.axios;return Object(k["a"])({axios:e})})),Object(y["b"])().then((function(e){var n=e.renderMD,r=e.replaceInlineScript,a=e.updateDom;Object(k["a"])({renderMD:function(e){return e?(e=e.trim(),e?(e=r(t.filePath,e),e?n(e):""):""):""},updateDom:a})})),this.getData().then((function(e){var n=e.data,r=e.flags;return t.setData(n,r)})),this.isDark=!!localStorage.getItem("dark"),this.isZen=!!localStorage.getItem("zen"),this.metaTheme=document.querySelector('meta[name="theme-color"]');var c=document.querySelector('link[rel="icon"]');this.favicon?c.href=this.favicon:c&&c.remove(),this.addInputBinds({home:function(){return t.returnHome()},gg:function(){t.toTop(document.body.offsetHeight),t.keyInput+="_"},G:function(){return t.toTop()},dark:function(){return t.toggleDark()},zen:function(){return t.toggleZen()},Backspace:function(){t.keyInput=t.keyInput.replace(/.?Backspace$/,"")}}),Object(k["a"])({version:"1.1.6",config:this.config,homePath:e,filePath:this.filePath,addInputBind:this.addInputBind,destructors:g["d"]})}},{key:"mounted",value:function(){var t=this;this.isCancel||(Object(m["g"])(),document.addEventListener("keydown",(function(e){if(!document.activeElement||!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){t.keyInput+=e.key,t.keyInput.length>20&&(t.keyInput=t.keyInput.substr(10));for(var n=0,r=Object.keys(t.inputBinds);n<r.length;n++){var a=r[n];if(t.keyInput.endsWith(a)){t.inputBinds[a]();break}}}})))}},{key:"beforeRouteUpdate",value:function(t,e,n){var r=this,a=Object(b["k"])(t),i=Object(b["k"])(e);a.path===i.path&&a.query===i.query||(this.isShow=!1,n(),Object(k["a"])({filePath:this.filePath}),Object(m["a"])(),this.getData().then((function(t){var e=t.data,n=t.flags;document.querySelectorAll(".custom").forEach((function(t){return t.remove()}));var a=g["d"].shift();while(a)"function"===typeof a&&a(),a=g["d"].shift();r.setData(e,n),Object(m["f"])(0,!1)})))}},{key:"getData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i,c,o,s,u,l,f,d,h,p,m,v,b,k;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.filePath,e.endsWith(".md")){t.next=5;break}return this.isError=!0,n=Object(g["b"])(e),r=n.data,a=n.flags,t.abrupt("return",{data:r,flags:a});case 5:return t.next=7,Object(y["a"])();case 7:return i=t.sent,c=i.getFile,o=[],o.push(c(e)),s=this.config.paths.common,s&&e!==s&&o.push(c(s)),t.next=15,Promise.all(o);case 15:if(u=t.sent,l=u[0],f=l.data,d=l.flags,!l.isError){t.next=22;break}return this.isError=!0,t.abrupt("return",{data:f,flags:d});case 22:if(this.isError=!1,this.hasLoadedBacklinks&&this.getBacklinks().then(),!(u.length<2||u[1].isError)){t.next=26;break}return t.abrupt("return",{data:f,flags:d});case 26:return h=u[1].data,p="",m=h,v=Object(g["a"])(h,g["g"]),b=v.key,k=v.value,null!==k&&(p=b,m=k),p&&(f=p+"\n\n\n"+f),m&&(f+="\n\n\n"+m),t.abrupt("return",{data:f,flags:d});case 34:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"setData",value:function(t,e){this.setFlags(e),this.data=t,this.isShow=!0}},{key:"setFlags",value:function(t){var e=this;this.title=t.title,document.title="".concat(this.title),this.config.siteName&&this.config.siteName!==this.title&&(document.title+=" - ".concat(this.config.siteName)),this.tags=t.tags?Object(o["a"])(t.tags):[],this.date=t.startDate||"",this.updated=t.endDate||"",this.cover=t.cover||"",this.creator=t.creator||"",this.updater=t.updater||"",this.otherFlags={},Object.keys(t).forEach((function(n){v["c"].includes(n)||(e.otherFlags[n]=t[n])}))}},{key:"returnHome",value:function(){location.hash&&(location.hash=this.homeHash)}},{key:"confChanged",value:function(){localStorage.setItem("conf",this.selectConf),location.href=this.homePath}},{key:"getSearchTagLinks",value:function(t){return Object(b["g"])(t)}},{key:"getBacklinks",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoadingBacklinks=!0,t.next=3,Object(y["a"])();case 3:return e=t.sent,n=e.getFiles,r=e.sortFiles,t.next=8,n();case 8:a=t.sent,i=a.files,c=a.backlinks,o=c[this.filePath],this.backlinkFiles=o&&o.length>0?o.map((function(t){return i[t]})).sort(r):[],this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0);case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getListHtml",value:function(t){return Object(m["b"])(t).innerHTML}},{key:"toggleDark",value:function(){this.isDark=!this.isDark,this.metaTheme.setAttribute("content",this.metaThemeColor),this.isDark?(document.body.classList.add("dark"),localStorage.setItem("dark",String(!0))):(Object(m["e"])(document.body,"dark"),localStorage.removeItem("dark"))}},{key:"toggleZen",value:function(){var t=this;this.isZen=!this.isZen,this.metaTheme.setAttribute("content",this.metaThemeColor),this.isZen?(document.body.classList.add("zen"),localStorage.setItem("zen",String(!0))):(this.$nextTick((function(){return Object(m["e"])(t.$refs.toggleZen)})),Object(m["e"])(document.body,"zen"),localStorage.removeItem("zen"))}},{key:"toTop",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.isToTop||(this.isToTop=!0,Object(m["f"])(e),setTimeout((function(){t.isToTop=!1,t.$nextTick((function(){return Object(m["e"])(t.$refs.toTop)}))}),500))}},{key:"addInputBind",value:function(t,e){this.inputBinds[t]=e}},{key:"addInputBinds",value:function(t){var e=this;Object.keys(t).forEach((function(n){return e.addInputBind(n,t[n])}))}},{key:"config",get:function(){return p["b"]}},{key:"confList",get:function(){var t=this.config.multiConf;if(!t)return null;var e=Object.keys(t).sort(),n=e.map((function(e){return t[e].alias||e}));return[e,n]}},{key:"enableMultiConf",get:function(){return this.selectConf&&this.confList&&this.confList[0].length>1}},{key:"filePath",get:function(){var t=Object(b["k"])(this.$route),e=t.path,n=t.anchor,r=t.query;return this.anchor=n,this.queryStr=r,e}},{key:"shortFilePath",get:function(){return Object(b["l"])(this.filePath)}},{key:"rawFilePath",get:function(){return Object(b["a"])(this.filePath)}},{key:"query",get:function(){return Object(b["j"])(this.queryStr)}},{key:"isIndexFile",get:function(){return this.filePath===this.config.paths.index}},{key:"lastUpdatedMessage",get:function(){return" | ".concat(this.config.messages.lastUpdated).concat(this.updater?" (".concat(this.updater,")"):"")}},{key:"metaThemeColor",get:function(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}}]),n}(w["c"]);D=Object(h["a"])([Object(w["a"])({components:{Article:E}})],D);var L=D,I=L,B=(n("f408"),Object(S["a"])(I,i,c,!1,null,null,null)),R=B.exports;r["a"].use(a["a"]);var F=new a["a"]({mode:"history",base:"/v-no-doc/",routes:[{path:"*",name:"home",component:R}]}),M=F,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},A=[],H=(n("525d"),{}),$=Object(S["a"])(H,q,A,!1,null,null,null),N=$.exports;r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(t){return t(N)}}).$mount("#app")},f408:function(t,e,n){"use strict";n("c061")}});