(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function s(t){return c.p+"assets/js/"+({file:"file",markdown:"markdown",main:"main",prismjs:"prismjs"}[t]||t)+"."+{file:"98924efe",markdown:"6a1e4b43",main:"33452198",prismjs:"fa583f91"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={main:1,prismjs:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="assets/css/"+({file:"file",markdown:"markdown",main:"main",prismjs:"prismjs"}[t]||t)+"."+{file:"31d6cfe0",markdown:"31d6cfe0",main:"aa9dcc96",prismjs:"fb887072"}[t]+".css",i=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],f.parentNode.removeChild(f),n(a)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/v-no-doc/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1227:function(t,e,n){},1889:function(t,e,n){"use strict";n.r(e),n.d(e,"definedFlags",(function(){return o})),n.d(e,"destructors",(function(){return i})),n.d(e,"inputBinds",(function(){return a})),n.d(e,"addInputBinds",(function(){return s})),n.d(e,"chopStr",(function(){return c})),n.d(e,"sleep",(function(){return u}));var r=n("4c55");const o=Object.values(r["EFlag"]),i=[],a={};function s(t){Object.keys(t).forEach(e=>{a[e]=t[e]})}function c(t,e,n=!0,r=!1){const o=r?t.lastIndexOf(e):t.indexOf(e);if(o<0)return[t,null];let i=t.substring(0,o),a=t.substring(o+e.length);return n&&(i=i.trimEnd(),a=a.trimStart()),[i,a]}async function u(t){await new Promise(e=>setTimeout(e,t))}},"35f0":function(t,e,n){"use strict";n.r(e),n.d(e,"isExternalLink",(function(){return a})),n.d(e,"checkLinkPath",(function(){return s})),n.d(e,"shortenPath",(function(){return c})),n.d(e,"baseUrl",(function(){return u})),n.d(e,"publicPath",(function(){return l})),n.d(e,"indexPath",(function(){return d})),n.d(e,"cdnUrl",(function(){return f})),n.d(e,"homePath",(function(){return h})),n.d(e,"disableCDN",(function(){return m})),n.d(e,"enableCDN",(function(){return g})),n.d(e,"addBaseUrl",(function(){return v})),n.d(e,"cleanBaseUrl",(function(){return b})),n.d(e,"buildHash",(function(){return y})),n.d(e,"buildQueryContent",(function(){return k})),n.d(e,"buildQueryFlagUrl",(function(){return E})),n.d(e,"parseHash",(function(){return w})),n.d(e,"changeAnchor",(function(){return j})),n.d(e,"changeQueryContent",(function(){return O})),n.d(e,"parseRoute",(function(){return C})),n.d(e,"parseQuery",(function(){return x})),n.d(e,"formatQuery",(function(){return L})),n.d(e,"returnHome",(function(){return I}));n("5319"),n("2b3d");var r=n("bb76"),o=n("4397"),i=n("1889");function a(t){try{return!!new URL(t).host}catch(e){return!1}}function s(t){return t.endsWith(".md")?t:t.endsWith("/")?t+"index.md":""}function c(t,e="md"){const n="index."+e;return t===n?"":t.endsWith("/"+n)?t.replace(new RegExp(`index\\.${e}$`),""):t}const u="/v-no-doc/",l="/v-no-doc/",d="-/index.html",f="",h=l+c(d,"html");let p=!!o["getItem"]("noCDN");function m(){p=!0,o["setItem"]("noCDN",String(!0))}function g(){p=!1,o["removeItem"]("noCDN")}function v(t){return t.startsWith("/")?"/"===t?h:p?"/"!==l?l+t.substr(1):t:!f&&r["config"].cdn?r["config"].cdn+t.substr(1):"/"!==u?u+t.substr(1):t:t}function b(t){return"/"!==u&&t.startsWith(u)?t.substr(u.length-1):r["config"].cdn&&t.startsWith(r["config"].cdn)?t.substr(r["config"].cdn.length-1):"/"!==l&&t.startsWith(l)?t.substr(l.length-1):t===h?"/":t}function y(t){const{path:e,anchor:n,query:r}=t;let o="#"+e;return n&&(o+="#"+n),r&&(o+="?"+r),o}function k(t,e=!1){const n="content="+encodeURIComponent(t);return e?y({path:r["shortBaseFiles"].search,anchor:"",query:n}):n}function E(t,e){return k(`@${t}: ${e}`,!0)}function w(t,e=!1){let n=r["config"].paths.index,o="",a="";if(!t.startsWith("#/"))return{path:e?c(n):n,anchor:o,query:a};n=t.substr(1);let s=Object(i["chopStr"])(n,"?",!1);return null!==s[1]&&(n=s[0],a=s[1]),s=Object(i["chopStr"])(n,"#",!1),null!==s[1]&&(n=s[0],o=s[1]),n.endsWith("/")?e||(n+="index.md"):e&&(n=c(n)),{path:n,anchor:o,query:a}}function j(t){const{path:e,query:n}=w(location.hash,!0);location.hash=y({path:e,anchor:t,query:n})}function O(t){const e=t?k(t):"",{path:n,anchor:r}=w(location.hash,!0);location.hash=y({path:n,anchor:r,query:e})}function C(t){let e=t.path;return e.endsWith("/")&&(e+="index.html"),e==="/"+d?w(t.hash):(e.endsWith(".html")&&(e=e.replace(/\.html$/,".md")),{path:e,anchor:"",query:""})}function x(t){const e={};return t.split("&").forEach(t=>{const n=Object(i["chopStr"])(t,"=",!1);if(null!==n[1]){const t=decodeURIComponent(n[0]).trim();t&&(e[t]=decodeURIComponent(n[1]).trim())}else t=decodeURIComponent(t).trim(),t&&(e[t]=null)}),e}function L(t){const e=[];for(const n of Object.keys(t)){let r=n.trim();if(!r)continue;r=encodeURIComponent(r);const o=t[n];null!==o?e.push(`${r}=${encodeURIComponent(o.trim())}`):e.push(r)}return e.join("&")}function I(){location.hash&&(location.hash=r["homeHash"])}},4397:function(t,e,n){"use strict";n.r(e),n.d(e,"getItem",(function(){return o})),n.d(e,"setItem",(function(){return i})),n.d(e,"removeItem",(function(){return a}));const r="v-no/v-no-doc/";function o(t){return localStorage.getItem(r+t)}function i(t,e){localStorage.setItem(r+t,e)}function a(t){localStorage.removeItem(r+t)}},"4c55":function(t,e,n){"use strict";var r,o,i,a;n.r(e),n.d(e,"EFlag",(function(){return r})),n.d(e,"EMark",(function(){return o})),n.d(e,"EEvent",(function(){return i})),n.d(e,"EIcon",(function(){return a})),function(t){t["title"]="title",t["tags"]="tags",t["updated"]="updated",t["cover"]="cover",t["times"]="times",t["startDate"]="startDate",t["endDate"]="endDate",t["creator"]="creator",t["updater"]="updater"}(r||(r={})),function(t){t["redirect"]="redirect",t["noCommon"]="noCommon",t["toc"]="toc",t["list"]="list",t["slice"]="slice",t["input"]="input",t["result"]="result",t["number"]="number",t["count"]="count",t["time"]="time"}(o||(o={})),function(t){t["appCreated"]="appCreated",t["mainCreated"]="mainCreated",t["mainShown"]="mainShown",t["articleCreated"]="articleCreated",t["htmlChanged"]="htmlChanged",t["rendered"]="rendered",t["searchCompleted"]="searchCompleted",t["toggleDark"]="toggleDark",t["toggleZen"]="toggleZen",t["toTop"]="toTop"}(i||(i={})),function(t){t["link"]="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z",t["backlink"]="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",t["external"]="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z",t["sync"]="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"}(a||(a={}))},"525d":function(t,e,n){"use strict";n("1227")},"72db":function(t,e,n){"use strict";function r(t){return window[t]}function o(t,e){window[t]=e}function i(t,e=!1){let n=r("vno");n||(n={},o("vno",n));for(const r of Object.keys(t)){const o=t[r];if(!e){n[r]=o;continue}let i=n[r];void 0===i?(i={},n[r]=i):"object"!==typeof i&&(i={[r]:i},n[r]=i),Object.assign(i,o)}}n.d(e,"a",(function(){return i}))},8964:function(t,e,n){"use strict";n.r(e),n.d(e,"cleanEventListenerDict",(function(){return s})),n.d(e,"addEventListener",(function(){return c})),n.d(e,"dispatchEvent",(function(){return u})),n.d(e,"removeClass",(function(){return l})),n.d(e,"scroll",(function(){return f})),n.d(e,"getIcon",(function(){return h})),n.d(e,"getSyncSpan",(function(){return p})),n.d(e,"getQueryTagLinks",(function(){return m})),n.d(e,"createList",(function(){return v}));var r=n("4c55"),o=n("35f0"),i=n("1889");let a={};function s(){a={}}function c(t,e,n){let r=a[e];if(void 0===r)return r=[[t],[n]],a[e]=r,void t.addEventListener(e,n);const o=r[0].indexOf(t);o>=0?(t.removeEventListener(e,r[1][o]),r[1].splice(o,1,n)):(r[0].push(t),r[1].push(n)),t.addEventListener(e,n)}async function u(t,e,n){return n&&await Object(i["sleep"])(n),document.dispatchEvent(new CustomEvent(t,{detail:e}))}function l(t,e){e&&t.classList.remove(e),0===t.classList.length&&t.removeAttribute("class")}const d=document.documentElement;function f(t,e=!0){d.style.scrollBehavior=e?"smooth":"auto",setTimeout(()=>scrollTo(0,t),0)}function h(t,e=16,n=e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="${e}" height="${n}"><path fill-rule="evenodd" d="${t}"></path></svg>`}function p(t){return`<span${t?` id="${t}"`:""} class="sync">${h(r["EIcon"].sync)}</span>`}function m(t){const e=[];let n=0,i=t.indexOf("/");while(i>=0)i+=n,e.push({text:t.substring(n,i),href:Object(o["buildQueryFlagUrl"])(r["EFlag"].tags,t.substring(0,i)),isMarkdown:!0}),n=i+1,i=t.substring(n).indexOf("/");return e.push({text:n>0?t.substring(n):t,href:Object(o["buildQueryFlagUrl"])(r["EFlag"].tags,t),isMarkdown:!0}),e}function g(t){const e=document.createElement("div");if(e.classList.add("bar"),t.tags&&t.tags.forEach(t=>{const n=document.createElement("code");n.classList.add("item-tag"),m(t).forEach(({text:t,href:e})=>{const r=document.createElement("a");r.href=e,r.innerText=t,n.append(r)}),e.append(n)}),t.startDate){const n=document.createElement("code");n.classList.add("item-date"),n.innerText=t.startDate,e.append(n)}if(e.childElementCount>0){const t=document.createElement("span");return t.classList.add("filler"),[t,e]}return null}function v(t,e){if(!e){e=document.createElement("li");const n=document.createElement("a");n.href="#"+Object(o["shortenPath"])(t.path),n.innerText=t.flags.title,e.append(n)}if(e.classList.add("article"),t.isError)return e;const n=g(t.flags);return n&&(e.append(n[0]),e.append(n[1])),e}d.style.scrollBehavior="smooth"},"8ef8":function(t,e,n){"use strict";let r,o,i,a;async function s(){return r||(r=await n.e("file").then(n.bind(null,"b269"))),r}async function c(){return o||(o=await Promise.all([n.e("file"),n.e("markdown")]).then(n.bind(null,"ed6f"))),o}async function u(){return i||(i=await n.e("file").then(n.bind(null,"0663"))),i}async function l(){return a||(a=await n.e("prismjs").then(n.bind(null,"92f4"))),a}n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return l}))},b00f:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return i}));var r=n("35f0"),o=n("2b0e");const i=o["a"].observable({initing:!0,filePath:"",anchor:"",queryStr:"",homePath:r["homePath"]})},bb76:function(t,e,n){"use strict";n.r(e),n.d(e,"getSelectConf",(function(){return s})),n.d(e,"config",(function(){return c})),n.d(e,"confList",(function(){return u})),n.d(e,"enableMultiConf",(function(){return l})),n.d(e,"baseFiles",(function(){return d})),n.d(e,"shortBaseFiles",(function(){return f})),n.d(e,"homeHash",(function(){return h}));var r=n("35f0"),o=n("4397");function i(t,e){for(const n of Object.keys(e))e[n]instanceof Object&&Object.assign(e[n],i(t[n]||{},e[n]));return Object.assign(t||{},e),t}let a="";function s(){return a}const c=(()=>{const t=JSON.parse(JSON.stringify(vnoConfig));if(!t.defaultConf||!t.multiConf)return t;const e=o["getItem"]("conf");if(e){const n=t.multiConf[e];if(n)return a=e,i(t,JSON.parse(JSON.stringify(n))),t;o["removeItem"]("conf")}const n=t.multiConf[t.defaultConf];return n?(a=t.defaultConf,i(t,JSON.parse(JSON.stringify(n))),t):t})(),u=(()=>{const t=c.multiConf;if(!t)return null;const e=Object.keys(t).sort(),n=e.map(e=>t[e].alias||e);return[e,n]})(),l=!!(a&&u&&u[0].length>1),d=[c.paths.index,c.paths.readme,c.paths.archive,c.paths.category,c.paths.search];c.paths.common&&d.push(c.paths.common);const f={index:Object(r["shortenPath"])(c.paths.index),readme:Object(r["shortenPath"])(c.paths.readme),archive:Object(r["shortenPath"])(c.paths.archive),category:Object(r["shortenPath"])(c.paths.category),search:Object(r["shortenPath"])(c.paths.search)},h=Object(r["buildHash"])({path:f.index,anchor:"",query:""})},cd49:function(t,e,n){"use strict";n.r(e);var r=n("b00f"),o=n("2b0e"),i=n("8c4f");o["a"].use(i["a"]);const a=()=>n.e("main").then(n.bind(null,"615d")).then(t=>(r["state"].initing=!1,t)),s=new i["a"]({mode:"history",base:"/v-no-doc/",routes:[{path:"*",name:"main",component:a}]});var c=s,u=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"top"}},[r("div",[e.favicon?r("img",{attrs:{src:e.favicon,alt:"favicon"}}):e._e(),r("a",{attrs:{href:e.homePath},on:{click:function(t){return t.preventDefault(),e.returnHome(t)}}},[e._v(e._s(e.config.siteName||e.config.messages.home))]),r("span",{staticClass:"filler"}),e._l(e.links,(function(t,n){return[r("a",{key:n,attrs:{href:"#"+t}}),n!==e.links.length-1?r("span",{key:n+"-0",staticClass:"separator"},[e._v("|")]):e._e()]})),e._l(e.otherLinks,(function(t,n){return[r("span",{key:"o-"+n+"-0",staticClass:"separator"},[e._v("|")]),t.isExternal?r("a",{key:"o-"+n,attrs:{href:t.href,rel:"noopener noreferrer",target:"_blank"},domProps:{innerHTML:e._s(t.text+e.iconExternal)}}):r("a",{key:"o-"+n,attrs:{href:t.href,target:t.isMarkdown?null:"_blank"}},[e._v(e._s(t.text))])]})),e.enableMultiConf?[r("span",{staticClass:"separator"},[e._v("|")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectConf,expression:"selectConf"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));e.selectConf=t.target.multiple?n:n[0]}}},e._l(e.confList[0],(function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v(e._s(e.confList[1][n]))])})),0)]:e._e()],2)]),e.initing?r("div",{staticClass:"lds-ellipsis initing"},e._l(4,(function(t){return r("div",{key:t})})),0):r("router-view"),r("Gadget",{attrs:{addToKeyInput:function(e){return t.keyInput+=e}}})],1)},l=[],d=(n("5319"),n("9ab4")),f=n("bb76"),h=n("8964"),p=n("4c55"),m=n("35f0"),g=n("eb5f"),v=n("4397"),b=n("1889"),y=n("72db"),k=n("8ef8"),E=n("1b40");function w(){Object(y["a"])({VPD:E,Vue:E["Vue"],version:"1.2.13-dev",destructors:b["destructors"],addInputBinds:b["addInputBinds"],sleep:b["sleep"],...p,config:f,element:h,enums:p,path:m,regexp:g,storage:v,store:r,utils:b}),Object(k["a"])().then(t=>Object(y["a"])({file:t})),Object(k["b"])().then(t=>{Object(y["a"])({markdown:t,markdownIt:t.markdownIt,renderMD:async(e,n,r,o=!1,i)=>(r=r.trim(),r?(r=t.updateInlineScript(e,n,r,o,i),r?(r=await t.updateSnippet(r,[e],i),r?(r=await t.updateList(r),r?t.renderMD(r):""):""):""):""),updateDom:t.updateDom})}),Object(k["d"])().then(t=>{Object(y["a"])({utils:t},!0),Object(y["a"])({axios:t.axios,dayjs:t.dayjs,waitFor:t.waitFor,waitForEvent:t.waitForEvent,addEventListener:t.addEventListener,callAndListen:t.callAndListen,encodeParam:t.encodeParam,getMessage:t.getMessage,parseDate:t.parseDate,formatDate:t.formatDate})})}const j=()=>n.e("main").then(n.bind(null,"fead"));let O=class extends E["Vue"]{constructor(){super(...arguments),this.keyInput="",this.selectConf=Object(f["getSelectConf"])(),this.links=[f["shortBaseFiles"].readme,f["shortBaseFiles"].archive,f["shortBaseFiles"].category,f["shortBaseFiles"].search],this.otherLinks=[]}get initing(){return r["state"].initing}get homePath(){return r["state"].homePath}get config(){return f["config"]}get confList(){return f["confList"]}get enableMultiConf(){return f["enableMultiConf"]}get favicon(){return this.config.paths.favicon?Object(m["addBaseUrl"])(this.config.paths.favicon):""}get iconExternal(){return Object(h["getIcon"])(p["EIcon"].external,14)}created(){w(),Object(y["a"])({appSelf:this,selectConf:this.selectConf});const t=document.querySelector('link[rel="icon"]');this.favicon?t.href=this.favicon:t&&t.remove(),Object(b["addInputBinds"])({home:this.returnHome,Backspace:()=>{this.keyInput=this.keyInput.replace(/.?Backspace$/,"")}}),this.$watch("keyInput",()=>{for(const t of Object.keys(b["inputBinds"]))if(this.keyInput.endsWith(t)){b["inputBinds"][t]();break}}),this.$watch("selectConf",()=>{v["setItem"]("conf",this.selectConf),location.href=this.homePath}),Object(h["dispatchEvent"])(p["EEvent"].appCreated,(new Date).getTime())}mounted(){document.addEventListener("keydown",t=>{if(document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;let e=this.keyInput+t.key;e.length>20&&(e=e.substr(10)),this.keyInput=e})}addLink(t,e=""){let n=!1,r=!1;if(Object(m["isExternalLink"])(t))n=!0;else if(t.startsWith("/")){const{path:e,anchor:n,query:o}=Object(m["parseHash"])("#"+t,!0);(e.endsWith(".md")||e.endsWith("/"))&&(r=!0,t=Object(m["buildHash"])({path:e,anchor:n,query:o}))}const o={text:e,href:t};return n&&(o.isExternal=!0),r&&(o.isMarkdown=!0),this.otherLinks.push(o),o}removeLink(t){for(let e=0;e<this.otherLinks.length;e++)if(this.otherLinks[e].href===t)return this.otherLinks.splice(e,1),e;return-1}returnHome(){Object(m["returnHome"])()}};O=Object(d["a"])([Object(E["Component"])({components:{Gadget:j}})],O);var C=O,x=C,L=(n("525d"),n("2877")),I=Object(L["a"])(x,u,l,!1,null,null,null),S=I.exports;o["a"].config.productionTip=!1,new o["a"]({router:c,render:t=>t(S)}).$mount("#app")},eb5f:function(t,e,n){"use strict";function r(t,e){return` {0,3}(#{${t},${e}})`}function o(t=1,e=6,n){return new RegExp(`^${r(t,e)}(?: \\s*(.+?))?$`,n)}function i(t){return`\\(\\s*(${t?"/":""}.*?)(?:\\s+["'].*?["'])?\\s*\\)`}function a(t=!1,e=!1,n=!1,r){let o="\\[(.*?)]"+i(t);return e&&(o="!"+o),n&&(o=`^${o}$`),new RegExp(o,r)}function s(t,e=t,n){return new RegExp(`${t}\\s*(.*?)\\s*${e}`,n)}function c(t,e=!0,n="im"){let r=`\\[${t}${s("(?:#",")?").source}]`;return e&&(r=`^${r}$`),new RegExp(r,n)}function u(t){return new RegExp(`^(?:${r(2,6)} \\s*(\\+ )?)?\\s*${c("\\+",!1).source}${i(!0)}$`,t)}function l(t=!0,e=2,n=6,r){let o=`h[${e}-${n}]-\\d+`;return t&&(o=`^${o}$`),new RegExp(o,r)}function d(t="g"){return s("{{","}}",t)}n.r(e),n.d(e,"getHeadingRegExp",(function(){return o})),n.d(e,"getLinkRegExp",(function(){return a})),n.d(e,"getWrapRegExp",(function(){return s})),n.d(e,"getMarkRegExp",(function(){return c})),n.d(e,"getSnippetRegExp",(function(){return u})),n.d(e,"getAnchorRegExp",(function(){return l})),n.d(e,"getParamRegExp",(function(){return d}))}});