(function(e){function t(t){for(var r,a,c=t[0],o=t[1],u=t[2],l=0,h=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i={app:0},s=[];function c(e){return o.p+"assets/js/"+({file:"file",markdown:"markdown",prismjs:"prismjs"}[e]||e)+"-legacy."+{file:"02d9c954",markdown:"084ab3af",prismjs:"4eac89a1"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={prismjs:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({file:"file",markdown:"markdown",prismjs:"prismjs"}[e]||e)+"."+{file:"31d6cfe0",markdown:"31d6cfe0",prismjs:"3de3ba0d"}[e]+".css",i=o.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/v-no-doc/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"027e":function(e,t,n){"use strict";n("33a0")},1889:function(e,t,n){"use strict";n.r(t),n.d(t,"snippetMark",(function(){return r})),n.d(t,"destructors",(function(){return a})),n.d(t,"inputBinds",(function(){return i})),n.d(t,"addInputBinds",(function(){return s})),n.d(t,"chopStr",(function(){return c}));n("4160"),n("c975"),n("b64b"),n("1e25"),n("eee7"),n("159b");var r="--8<--",a=[],i={};function s(e){Object.keys(e).forEach((function(t){i[t]=e[t]}))}function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.indexOf(t);if(r<0)return{key:e,value:null};var a=e.substring(0,r),i=e.substring(r+t.length);return n&&(a=a.trimEnd(),i=i.trimStart()),{key:a,value:i}}},"33a0":function(e,t,n){},"35f0":function(e,t,n){"use strict";n.r(t),n.d(t,"checkLinkPath",(function(){return i})),n.d(t,"shortenPath",(function(){return s})),n.d(t,"baseUrl",(function(){return c})),n.d(t,"publicPath",(function(){return o})),n.d(t,"indexPath",(function(){return u})),n.d(t,"cdnUrl",(function(){return l})),n.d(t,"homePath",(function(){return h})),n.d(t,"addBaseUrl",(function(){return f})),n.d(t,"cleanBaseUrl",(function(){return d})),n.d(t,"buildHash",(function(){return p})),n.d(t,"buildSearchContent",(function(){return m})),n.d(t,"buildSearchFlagUrl",(function(){return v})),n.d(t,"parseHash",(function(){return g})),n.d(t,"changeHash",(function(){return b})),n.d(t,"parseRoute",(function(){return k})),n.d(t,"parseQuery",(function(){return y})),n.d(t,"formatQuery",(function(){return O}));n("99af"),n("4160"),n("a15b"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("8a79"),n("5319"),n("841c"),n("1276"),n("2ca0"),n("498a"),n("18a5"),n("159b");var r=n("bb76"),a=n("1889");function i(e){return e.endsWith(".md")?e:e.endsWith("/")?e+"index.md":""}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"md",n="index.".concat(t);return e===n?"":e.endsWith("/".concat(n))?e.replace(new RegExp("index\\.".concat(t,"$")),""):e}var c="/v-no-doc/",o="/v-no-doc/",u="-/index.html",l="",h=o+s(u,"html");function f(e){return e.startsWith("/")?"/"===e?h:!l&&r["config"].cdn?r["config"].cdn+e.substr(1):"/"!==c?c+e.substr(1):e:e}function d(e){return"/"!==c&&e.startsWith(c)?e.substr(c.length-1):r["config"].cdn&&e.startsWith(r["config"].cdn)?e.substr(r["config"].cdn.length-1):e===h?"/":e}function p(e){var t=e.path,n=e.anchor,r=e.query,a="#".concat(t);return n&&(a+="#".concat(n)),r&&(a+="?".concat(r)),a}function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="content=".concat(encodeURIComponent(e));return t?p({path:r["shortBaseFiles"].search,anchor:"",query:n}):n}function v(e,t){return m("@".concat(e,": ").concat(t),!0)}function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r["config"].paths.index,i="",c="";if(!e.startsWith("#/"))return{path:t?s(n):n,anchor:i,query:c};n=e.substr(1);var o=Object(a["chopStr"])(n,"?",!1);return null!==o.value&&(n=o.key,c=o.value),o=Object(a["chopStr"])(n,"#",!1),null!==o.value&&(n=o.key,i=o.value),n.endsWith("/")?t||(n+="index.md"):t&&(n=s(n)),{path:n,anchor:i,query:c}}function b(e){var t=g(location.hash,!0),n=t.path,r=t.query;location.hash=p({path:n,anchor:e,query:r})}function k(e){var t=e.path;return t.endsWith("/")&&(t+="index.html"),t==="/".concat(u)?g(e.hash):(t.endsWith(".html")&&(t=t.replace(/\.html$/,".md")),{path:t,anchor:"",query:""})}function y(e){var t={};return e.split("&").forEach((function(e){var n=Object(a["chopStr"])(e,"=",!1);if(null!==n.value){var r=decodeURIComponent(n.key).trim();r&&(t[r]=decodeURIComponent(n.value).trim())}else e=decodeURIComponent(e).trim(),e&&(t[e]=null)})),t}function O(e){for(var t=[],n=0,r=Object.keys(e);n<r.length;n++){var a=r[n],i=a.trim();if(i){i=encodeURIComponent(i);var s=e[a];null!==s?t.push("".concat(i,"=").concat(encodeURIComponent(s.trim()))):t.push(i)}}return t.join("&")}},"3b52":function(e,t,n){},"4c55":function(e,t,n){"use strict";n.r(t),n.d(t,"EFlag",(function(){return r})),n.d(t,"EIcon",(function(){return a})),n.d(t,"EEvent",(function(){return i}));var r,a,i;n("9911");(function(e){e["title"]="title",e["tags"]="tags",e["updated"]="updated",e["cover"]="cover",e["startDate"]="startDate",e["endDate"]="endDate",e["creator"]="creator",e["updater"]="updater"})(r||(r={})),function(e){e["link"]="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",e["backlink"]="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",e["external"]="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z",e["sync"]="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"}(a||(a={})),function(e){e["rendered"]="rendered",e["searchCompleted"]="searchCompleted",e["toggleDark"]="toggleDark",e["toggleZen"]="toggleZen",e["toTop"]="toTop"}(i||(i={}))},"525d":function(e,t,n){"use strict";n("3b52")},"72db":function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m}));n("b64b"),n("498a"),n("96cf");var r=n("1da1"),a=n("ade3"),i=n("53ca"),s=n("bb76"),c=n("8964"),o=n("4c55"),u=n("35f0"),l=n("1889"),h=n("8ef8");function f(e){return window[e]}function d(e,t){window[e]=t}function p(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=f("vno");n||(n={},d("vno",n));for(var r=0,s=Object.keys(e);r<s.length;r++){var c=s[r],o=e[c];if(t){var u=n[c];void 0===u?(u={},n[c]=u):"object"!==Object(i["a"])(u)&&(u=Object(a["a"])({},c,u),n[c]=u),Object.assign(u,o)}else n[c]=o}}function m(){p({version:"1.1.7",addInputBinds:l["addInputBinds"],addEventListener:function(e,t,n){e.addEventListener(t,n),l["destructors"].push((function(){return e.removeEventListener(t,n)}))},destructors:l["destructors"]}),p({config:s,element:c,enums:o,path:u,utils:l}),Object(h["a"])().then((function(e){p({file:e,axios:e.axios})})),Object(h["b"])().then((function(e){p({markdown:e,dayjs:e.utils.dayjs,parseDate:e.utils.parseDate,formatDate:e.utils.formatDate,renderMD:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=r.trim(),r){t.next=3;break}return t.abrupt("return","");case 3:if(r=e.utils.replaceInlineScript(n,r),r){t.next=6;break}return t.abrupt("return","");case 6:return t.next=8,e.updateSnippet(r);case 8:return r=t.sent,t.abrupt("return",r?e.renderMD(r):"");case 10:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}(),updateDom:e.updateDom}),p({utils:e.utils},!0)}))}},8964:function(e,t,n){"use strict";n.r(t),n.d(t,"cleanEventListenerDict",(function(){return u})),n.d(t,"addEventListener",(function(){return l})),n.d(t,"dispatchEvent",(function(){return h})),n.d(t,"removeClass",(function(){return d})),n.d(t,"scroll",(function(){return m})),n.d(t,"getIcon",(function(){return v})),n.d(t,"getSearchTagLinks",(function(){return g})),n.d(t,"createList",(function(){return k})),n.d(t,"simpleUpdateLinkPath",(function(){return y}));n("99af"),n("4160"),n("c975"),n("d81d"),n("a434"),n("b64b"),n("d3b7"),n("5377"),n("3ca3"),n("159b"),n("ddb0");var r=n("b85c"),a=(n("96cf"),n("1da1")),i=n("4c55"),s=n("35f0"),c=n("8ef8"),o={};function u(){o={}}function l(e,t,n){var r=o[t];if(void 0===r)return r={elements:[e],listeners:[n]},o[t]=r,void e.addEventListener(t,n);var a=r.elements.indexOf(e);a>=0?(e.removeEventListener(t,r.listeners[a]),r.listeners.splice(a,1,n)):(r.elements.push(e),r.listeners.push(n)),e.addEventListener(t,n)}function h(e,t,n){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,new Promise((function(e){return setTimeout(e,r)}));case 3:return e.abrupt("return",document.dispatchEvent(new CustomEvent(t,{detail:n})));case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e,t){t&&e.classList.remove(t),0===e.classList.length&&e.removeAttribute("class")}var p=document.documentElement;function m(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];p.style.scrollBehavior=t?"smooth":"auto",setTimeout((function(){return scrollTo(0,e)}),0)}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="'.concat(t,'" height="').concat(n,'"><path fill-rule="evenodd" d="').concat(e,'"></path></svg>')}function g(e){var t=[],n=0,r=e.indexOf("/");while(r>=0)r+=n,t.push([Object(s["buildSearchFlagUrl"])(i["EFlag"].tags,e.substring(0,r)),e.substring(n,r)]),n=r+1,r=e.substring(n).indexOf("/");return t.push([Object(s["buildSearchFlagUrl"])(i["EFlag"].tags,e),n>0?e.substring(n):e]),t}function b(e){var t=document.createElement("div");if(t.classList.add("bar"),e.tags&&e.tags.forEach((function(e){var n=document.createElement("code");n.classList.add("item-tag"),g(e).forEach((function(e){var t=document.createElement("a");t.href=e[0],t.innerText=e[1],n.append(t)})),t.append(n)})),e.startDate){var n=document.createElement("code");n.classList.add("item-date"),n.innerText=e.startDate,t.append(n)}if(t.childElementCount>0){var r=document.createElement("span");return r.classList.add("filler"),[r,t]}return null}function k(e,t){var n=e.flags;if(!t){t=document.createElement("li");var r=document.createElement("a");r.href="#".concat(Object(s["shortenPath"])(e.path)),r.innerText=n.title,t.append(r)}if(t.classList.add("article"),e.isError)return t;var a=b(n);return a&&(t.append(a[0]),t.append(a[1])),t}function y(e){return O.apply(this,arguments)}function O(){return O=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,i,o,u,l,h,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={},i=Object(r["a"])(document.querySelectorAll('a[href^="#/"]')),e.prev=2,i.s();case 4:if((o=i.n()).done){e.next=20;break}if(u=o.value,""===u.innerText){e.next=8;break}return e.abrupt("continue",18);case 8:if(u.innerText="#",l=Object(s["checkLinkPath"])(u.getAttribute("href").substr(1)),l){e.next=12;break}return e.abrupt("continue",18);case 12:if(u.classList.add("rendering"),h=n[l],void 0===h){e.next=17;break}return h.push(u),e.abrupt("continue",18);case 17:n[l]=[u];case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](2),i.e(e.t0);case 25:return e.prev=25,i.f(),e.finish(25);case 28:if(f=Object.keys(n),0!==f.length){e.next=31;break}return e.abrupt("return");case 31:return e.next=33,Promise.all(f.map(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:return e.abrupt("return",e.sent.getFile(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 33:p=e.sent,p.forEach((function(e){var a,i=Object(r["a"])(n[e.path]);try{for(i.s();!(a=i.n()).done;){var s=a.value;e.isError&&s.classList.add("error"),s.innerText=e.flags.title,t&&t(e,s),d(s,"rendering")}}catch(c){i.e(c)}finally{i.f()}}));case 35:case"end":return e.stop()}}),e,null,[[2,22,25,28]])}))),O.apply(this,arguments)}p.style.scrollBehavior="smooth"},"8ef8":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return h}));n("d3b7"),n("96cf");var r,a,i,s=n("1da1");function c(){return o.apply(this,arguments)}function o(){return o=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,n.e("file").then(n.bind(null,"b269"));case 3:r=e.sent;case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return l=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=4;break}return e.next=3,Promise.all([n.e("file"),n.e("markdown")]).then(n.bind(null,"ed6f"));case 3:a=e.sent;case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i){e.next=4;break}return e.next=3,n.e("prismjs").then(n.bind(null,"92f4"));case 3:i=e.sent;case 4:return e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},bb76:function(e,t,n){"use strict";n.r(t),n.d(t,"getSelectConf",(function(){return o})),n.d(t,"config",(function(){return u})),n.d(t,"baseFiles",(function(){return l})),n.d(t,"shortBaseFiles",(function(){return h}));n("b64b"),n("ac1f"),n("841c");var r=n("35f0"),a=n("72db");function i(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var a=r[n];t[a]instanceof Object&&Object.assign(t[a],i(e[a],t[a]))}return Object.assign(e||{},t),e}var s="";function c(){var e=JSON.parse(JSON.stringify(Object(a["b"])("vnoConfig")));if(!e.defaultConf||!e.multiConf)return e;var t=localStorage.getItem("conf");if(t){var n=e.multiConf[t];if(n)return s=t,i(e,JSON.parse(JSON.stringify(n))),e;localStorage.removeItem("conf")}var r=e.multiConf[e.defaultConf];return r?(s=e.defaultConf,i(e,JSON.parse(JSON.stringify(r))),e):e}function o(){return s}var u=c(),l=[u.paths.index,u.paths.readme,u.paths.archive,u.paths.category,u.paths.search];u.paths.common&&l.push(u.paths.common);var h={index:Object(r["shortenPath"])(u.paths.index),readme:Object(r["shortenPath"])(u.paths.readme),archive:Object(r["shortenPath"])(u.paths.archive),category:Object(r["shortenPath"])(u.paths.category),search:Object(r["shortenPath"])(u.paths.search)}},c061:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"top"}},[n("div",[e.favicon?n("img",{attrs:{src:e.favicon,alt:"favicon"}}):e._e(),n("a",{attrs:{href:e.homePath},on:{click:function(t){return t.preventDefault(),e.returnHome(t)}}},[e._v(e._s(e.config.siteName||e.config.messages.home))]),n("span",{staticClass:"filler"}),n("a",{attrs:{href:"#"+e.shortBaseFiles.readme}}),n("a",{attrs:{href:"#"+e.shortBaseFiles.archive}}),n("a",{attrs:{href:"#"+e.shortBaseFiles.category}}),n("a",{attrs:{href:"#"+e.shortBaseFiles.search}}),e.enableMultiConf?n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectConf,expression:"selectConf"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectConf=t.target.multiple?n:n[0]},e.confChanged]}},e._l(e.confList[0],(function(t,r){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(e.confList[1][r]))])})),0):e._e()])]),n("transition",{attrs:{name:"slide-fade"}},[e.isShow?n("main",{class:e.isError?"error":null},[e.cover?n("div",{staticClass:"center",attrs:{id:"cover"}},[n("img",{attrs:{src:e.cover,alt:"cover"}})]):e._e(),e.isError?e._e():n("div",{staticClass:"bar",attrs:{id:"bar"}},[e.isIndexFile?e._e():n("code",{staticClass:"item-home"},[n("a",{attrs:{href:e.homePath},on:{click:function(t){return t.preventDefault(),e.returnHome(t)}}},[e._v("«")])]),e.date?n("code",{staticClass:"item-date"},[e._v(e._s(e.isIndexFile?e.updated:e.date))]):e._e(),e.creator?n("code",{staticClass:"item-creator"},[e._v(e._s(e.creator))]):e._e(),e._l(e.tags,(function(t){return n("code",{key:t,staticClass:"item-tag"},[e._l(e.getSearchTagLinks(t),(function(t){return[n("a",{key:t[0],attrs:{href:t[0]}},[e._v(e._s(t[1]))])]}))],2)})),e._l(Object.keys(e.otherFlags).sort(),(function(t){return n("code",{key:t,class:"item-"+t},[e._v(e._s(e.otherFlags[t]))])})),n("code",{staticClass:"item-raw"},[n("a",{attrs:{href:e.rawFilePath,target:"_blank"}},[e._v(e._s(e.config.messages.raw))])])],2),n("header",[e._v(e._s(e.title))]),n("Article",{attrs:{anchor:e.anchor,data:e.data,filePath:e.filePath,query:e.query,showTime:e.showTime}}),e.isError?e._e():n("div",{attrs:{id:"backlinks"}},[e.hasLoadedBacklinks?e._e():n("div",{class:["icon",{loading:e.isLoadingBacklinks}],domProps:{innerHTML:e._s(e.isLoadingBacklinks?e.iconSync:e.iconBacklink)}}),e.isLoadingBacklinks?n("span",[e._v(e._s(e.config.messages.loading))]):e.hasLoadedBacklinks?[e.backlinkFiles.length>0?n("ul",e._l(e.backlinkFiles,(function(t){return n("li",{key:t.path,staticClass:"article",domProps:{innerHTML:e._s(e.getListHtml(t))}})})),0):n("span",[e._v(e._s(e.config.messages.noBacklinks))])]:n("a",{on:{click:e.getBacklinks}},[e._v(e._s(e.config.messages.showBacklinks))])],2),e.isIndexFile?e._e():n("footer",[n("a",{staticClass:"home",attrs:{href:e.homePath},on:{click:function(t){return t.preventDefault(),e.returnHome(t)}}},[e._v(e._s(e.config.messages.returnHome))]),!e.isError&&e.date?[n("span",{staticClass:"filler"}),n("span",{staticClass:"date"},[e._v(e._s(e.updated!==e.date?e.updated+e.lastUpdatedMessage:e.date))])]:e._e()],2)],1):e._e()]),n("span",{attrs:{id:"toggle-dark"},on:{click:e.toggleDark}},[e._v(e._s(e.darkMarks[e.isDark?1:0]))]),n("span",{ref:"toggleZen",class:e.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:e.toggleZen}},[e._v(e._s(e.zenMark))]),n("span",{ref:"toTop",class:e.isToTop?"spin":null,attrs:{id:"to-top"},on:{click:function(t){return e.toTop()}}},[e._v(e._s(e.toTopMark))])],1)},s=[],c=(n("99af"),n("4160"),n("caad"),n("d81d"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("5377"),n("8a79"),n("2532"),n("3ca3"),n("5319"),n("841c"),n("18a5"),n("159b"),n("ddb0"),n("2909")),o=(n("96cf"),n("1da1")),u=n("d4ec"),l=n("bee2"),h=n("262e"),f=n("2caf"),d=n("9ab4"),p=n("bb76"),m=n("8964"),v=n("4c55"),g=n("35f0"),b=n("1889"),k=n("72db"),y=n("8ef8"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{ref:"article",class:e.isRendering?"rendering":null,domProps:{innerHTML:e._s(e.html)}})},j=[],w=n("3835"),x=n("1b40"),T=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.startTime=0,e.isRendering=!0,e.html="",e.renderData="",e}return Object(l["a"])(n,[{key:"created",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(k["a"])({articleSelf:this}),e.next=3,Object(y["b"])();case 3:this.markdownTs=e.sent,this.renderMD();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"renderMD",value:function(){var e=this;if(this.startTime=(new Date).getTime(),this.isRendering=!0,!this.updateHtml(this.sourceData)){var t=this.markdownTs,n=t.updateCategoryPage,r=t.updateDom,a=t.updateSearchPage,i=t.updateSnippet;this.$nextTick((function(){Promise.all([i(e.sourceData),r()]).then((function(t){var r=Object(w["a"])(t,1),i=r[0];e.isCategoryFile?i?n(i).then((function(t){return e.updateData(t)})):e.updateData(i):(e.updateData(i),e.isSearchFile&&e.$nextTick((function(){return a(e.query.content||"")})))}))}))}}},{key:"updateData",value:function(e){var t=this;e!==this.sourceData?this.updateHtml(e)||this.$nextTick((function(){t.markdownTs.updateDom().then((function(){t.renderComplete()}))})):this.renderComplete()}},{key:"updateHtml",value:function(e){return e?(this.html=this.markdownTs.renderMD(e)+"\x3c!-- "+this.showTime+" --\x3e",this.renderData=e,!1):(this.html="",this.renderData="",this.renderComplete(),!0)}},{key:"renderComplete",value:function(){var e=this;this.isRendering=!1,this.$nextTick((function(){Object(m["removeClass"])(e.$refs.article);var t=e.markdownTs.utils.getAnchorRegExp();if(t.test(e.anchor)){var n=document.querySelector('article > *[id="'.concat(e.anchor,'"]'));n&&n.offsetTop>0&&Object(m["scroll"])(n.offsetTop-6)}})),Object(m["dispatchEvent"])(v["EEvent"].rendered,(new Date).getTime()-this.startTime,100)}},{key:"sourceData",get:function(){return this.data?this.markdownTs.utils.replaceInlineScript(this.filePath,this.data):""}},{key:"isCategoryFile",get:function(){return this.filePath===p["config"].paths.category}},{key:"isSearchFile",get:function(){return this.filePath===p["config"].paths.search}}]),n}(x["c"]);Object(d["a"])([Object(x["b"])()],T.prototype,"filePath",void 0),Object(d["a"])([Object(x["b"])()],T.prototype,"data",void 0),Object(d["a"])([Object(x["b"])()],T.prototype,"anchor",void 0),Object(d["a"])([Object(x["b"])()],T.prototype,"query",void 0),Object(d["a"])([Object(x["b"])()],T.prototype,"showTime",void 0),Object(d["a"])([Object(x["d"])("showTime")],T.prototype,"renderMD",null),T=Object(d["a"])([x["a"]],T);var E=T,C=E,S=(n("027e"),n("0c7c")),_=Object(S["a"])(C,O,j,!1,null,null,null),P=_.exports;x["a"].registerHooks(["beforeRouteUpdate"]);var D=function(e){Object(h["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.fileTs=null,e.data="",e.title="",e.tags=[],e.date="",e.updated="",e.cover="",e.creator="",e.updater="",e.otherFlags={},e.flagNames=Object.values(v["EFlag"]),e.anchor="",e.queryStr="",e.links=[],e.backlinks=[],e.backlinkFiles=[],e.isLoadingBacklinks=!1,e.hasLoadedBacklinks=!1,e.isShow=!1,e.showTime=0,e.isError=!1,e.isCancel=!1,e.isDark=!1,e.isZen=!1,e.isToTop=!1,e.darkMarks=["★","☆"],e.zenMark="▣",e.toTopMark="と",e.favicon=e.config.paths.favicon?Object(g["addBaseUrl"])(e.config.paths.favicon):"",e.iconSync=Object(m["getIcon"])(v["EIcon"].sync),e.iconBacklink=Object(m["getIcon"])(v["EIcon"].backlink,18),e.keyInput="",e.homePath=g["homePath"],e.homeHash=Object(g["buildHash"])({path:e.shortBaseFiles.index,anchor:"",query:""}),e.selectConf=Object(p["getSelectConf"])(),e}return Object(l["a"])(n,[{key:"created",value:function(){var e=this,t=this.homePath,n=this.shortFilePath;if("prerender"===document.body.id){var r=t;return this.isIndexFile||(r+="#".concat(n)),location.href=r+location.search,void(this.isCancel=!0)}if(location.search){var a=location.search.substr(1)+(this.queryStr?"&".concat(this.queryStr):"");return location.href=t+Object(g["buildHash"])({path:n,anchor:this.anchor,query:Object(g["formatQuery"])(Object(g["parseQuery"])(a))}),void(this.isCancel=!0)}if(this.enableMultiConf){var i=this.query.conf;if(i&&this.confList[0].includes(i)&&this.selectConf!==i)return localStorage.setItem("conf",i),location.reload(),void(this.isCancel=!0)}Object(k["a"])({Vue:x["c"],homeSelf:this,reload:this.reload,filePath:this.filePath}),Object(k["c"])(),this.getData().then((function(t){var n=t.data,r=t.flags,a=t.links;return e.setData(n,r,a)})),this.isDark=!!localStorage.getItem("dark"),this.isZen=!!localStorage.getItem("zen"),this.metaTheme=document.querySelector('meta[name="theme-color"]');var s=document.querySelector('link[rel="icon"]');this.favicon?s.href=this.favicon:s&&s.remove(),Object(b["addInputBinds"])({home:function(){return e.returnHome()},gg:function(){e.toTop(!0),e.keyInput+="_"},G:function(){return e.toTop()},dark:function(){return e.toggleDark()},zen:function(){return e.toggleZen()},Backspace:function(){e.keyInput=e.keyInput.replace(/.?Backspace$/,"")}})}},{key:"mounted",value:function(){var e=this;this.isCancel||(Object(m["simpleUpdateLinkPath"])(),document.addEventListener("keydown",(function(t){if(!document.activeElement||!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.keyInput+=t.key,e.keyInput.length>20&&(e.keyInput=e.keyInput.substr(10));for(var n=0,r=Object.keys(b["inputBinds"]);n<r.length;n++){var a=r[n];if(e.keyInput.endsWith(a)){b["inputBinds"][a]();break}}}})))}},{key:"beforeRouteUpdate",value:function(e,t,n){var r=Object(g["parseRoute"])(e),a=Object(g["parseRoute"])(t);r.path===a.path&&r.query===a.query||(this.isShow=!1,n(),Object(k["a"])({filePath:this.filePath}),this.reload(!0))}},{key:"reload",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(m["cleanEventListenerDict"])(),this.getData().then((function(n){var r=n.data,a=n.flags,i=n.links;document.querySelectorAll(".custom").forEach((function(e){return e.remove()}));var s=b["destructors"].shift();while(s)"function"===typeof s&&s(),s=b["destructors"].shift();e.setData(r,a,i),t&&Object(m["scroll"])(0,!1)}))}},{key:"getData",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,c,o,u,l,h,f,d,p,m,v,g,k,O,j,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.fileTs){e.next=4;break}return e.next=3,Object(y["a"])();case 3:this.fileTs=e.sent;case 4:if(t=this.fileTs,n=t.createErrorFile,r=t.getFile,a=this.filePath,a.endsWith(".md")){e.next=10;break}return this.isError=!0,i=n(a),s=i.data,c=i.flags,o=i.links,e.abrupt("return",{data:s,flags:c,links:o});case 10:return u=[],u.push(r(a)),l=this.config.paths.common,l&&a!==l&&u.push(r(l)),e.next=16,Promise.all(u);case 16:if(h=e.sent,f=h[0],d=f.data,p=f.flags,m=f.links,!f.isError){e.next=24;break}return this.isError=!0,e.abrupt("return",{data:d,flags:p,links:m});case 24:if(this.isError=!1,this.hasLoadedBacklinks&&this.getBacklinks().then(),!(h.length<2||h[1].isError)){e.next=28;break}return e.abrupt("return",{data:d,flags:p,links:m});case 28:return v=h[1].data,g="",k=v,O=Object(b["chopStr"])(v,b["snippetMark"]),j=O.key,w=O.value,null!==w&&(g=j,k=w),g&&(d=g+"\n\n\n"+d),k&&(d+="\n\n\n"+k),e.abrupt("return",{data:d,flags:p,links:m});case 36:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setData",value:function(e,t,n){this.setFlags(t),this.data=e,this.links=Object(c["a"])(n),this.isShow=!0,this.showTime=(new Date).getTime()}},{key:"setFlags",value:function(e){var t=this;this.title=e.title,document.title="".concat(this.title),this.config.siteName&&this.config.siteName!==this.title&&(document.title+=" - ".concat(this.config.siteName)),this.tags=e.tags?Object(c["a"])(e.tags):[],this.date=e.startDate||"",this.updated=e.endDate||"",this.cover=e.cover||"",this.creator=e.creator||"",this.updater=e.updater||"",this.otherFlags={},Object.keys(e).forEach((function(n){t.flagNames.includes(n)||(t.otherFlags[n]=e[n])}))}},{key:"returnHome",value:function(){location.hash&&(location.hash=this.homeHash)}},{key:"confChanged",value:function(){localStorage.setItem("conf",this.selectConf),location.href=this.homePath}},{key:"getSearchTagLinks",value:function(e){return Object(m["getSearchTagLinks"])(e)}},{key:"getBacklinks",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoadingBacklinks=!0,this.fileTs){e.next=5;break}return e.next=4,Object(y["a"])();case 4:this.fileTs=e.sent;case 5:return t=this.fileTs,n=t.getFiles,r=t.sortFiles,e.next=8,n();case 8:a=e.sent,i=a.files,s=a.backlinks,o=s[this.filePath],o&&o.length>0?(this.backlinks=Object(c["a"])(o),this.backlinkFiles=o.map((function(e){return JSON.parse(JSON.stringify(i[e]))})).sort(r)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getListHtml",value:function(e){return Object(m["createList"])(e).innerHTML}},{key:"toggleDark",value:function(){this.isDark=!this.isDark,this.metaTheme.setAttribute("content",this.metaThemeColor),this.isDark?(document.body.classList.add("dark"),localStorage.setItem("dark",String(!0))):(Object(m["removeClass"])(document.body,"dark"),localStorage.removeItem("dark")),Object(m["dispatchEvent"])(v["EEvent"].toggleDark,this.isDark)}},{key:"toggleZen",value:function(){var e=this;this.isZen=!this.isZen,this.metaTheme.setAttribute("content",this.metaThemeColor),this.isZen?(document.body.classList.add("zen"),localStorage.setItem("zen",String(!0))):(this.$nextTick((function(){return Object(m["removeClass"])(e.$refs.toggleZen)})),Object(m["removeClass"])(document.body,"zen"),localStorage.removeItem("zen")),Object(m["dispatchEvent"])(v["EEvent"].toggleZen,this.isZen)}},{key:"toTop",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isToTop||(this.isToTop=!0,Object(m["scroll"])(t?document.body.offsetHeight:0),setTimeout((function(){e.isToTop=!1,e.$nextTick((function(){return Object(m["removeClass"])(e.$refs.toTop)}))}),500),Object(m["dispatchEvent"])(v["EEvent"].toTop,!t))}},{key:"shortBaseFiles",get:function(){return p["shortBaseFiles"]}},{key:"config",get:function(){return p["config"]}},{key:"confList",get:function(){var e=this.config.multiConf;if(!e)return null;var t=Object.keys(e).sort(),n=t.map((function(t){return e[t].alias||t}));return[t,n]}},{key:"enableMultiConf",get:function(){return this.selectConf&&this.confList&&this.confList[0].length>1}},{key:"filePath",get:function(){var e=Object(g["parseRoute"])(this.$route),t=e.path,n=e.anchor,r=e.query;return this.anchor=n,this.queryStr=r,t}},{key:"shortFilePath",get:function(){return Object(g["shortenPath"])(this.filePath)}},{key:"rawFilePath",get:function(){return Object(g["addBaseUrl"])(this.filePath)}},{key:"query",get:function(){return Object(g["parseQuery"])(this.queryStr)}},{key:"isIndexFile",get:function(){return this.filePath===this.config.paths.index}},{key:"lastUpdatedMessage",get:function(){return" | ".concat(this.config.messages.lastUpdated).concat(this.updater?" (".concat(this.updater,")"):"")}},{key:"metaThemeColor",get:function(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}}]),n}(x["c"]);D=Object(d["a"])([Object(x["a"])({components:{Article:P}})],D);var L=D,F=L,B=(n("f408"),Object(S["a"])(F,i,s,!1,null,null,null)),I=B.exports;r["a"].use(a["a"]);var R=new a["a"]({mode:"history",base:"/v-no-doc/",routes:[{path:"*",name:"home",component:I}]}),M=R,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},H=[],A=(n("525d"),{}),U=Object(S["a"])(A,q,H,!1,null,null,null),N=U.exports;r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(e){return e(N)}}).$mount("#app")},f408:function(e,t,n){"use strict";n("c061")}});