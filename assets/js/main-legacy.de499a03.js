(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"027e":function(t,e,r){"use strict";r("eab5")},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"1ffc":function(t,e,r){},2532:function(t,e,r){"use strict";var n=r("23e7"),a=r("5a34"),i=r("1d80"),s=r("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=r("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||Object(s["a"])(t)||o()}},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0)if(r.push(s.value),e&&r.length===e)break}catch(c){a=!0,i=c}finally{try{n||null==o["return"]||o["return"]()}finally{if(a)throw i}}return r}}var i=r("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){return n(t)||a(t,e)||Object(i["a"])(t,e)||s()}},3908:function(t,e,r){},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),s=r("1d80"),o=r("8aa5"),c=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var s=a(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;var h,d=[],f=0;while(null!==(h=c(s,l))){var g=String(h[0]);d[f]=g,""===g&&(s.lastIndex=o(l,i(s.lastIndex),u)),f++}return 0===f?null:d}]}))},"615d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"slide-fade"}},[t.isShow?r("main",{class:t.isError?"error":null},[t.cover?r("div",{staticClass:"center",attrs:{id:"cover"}},[r("img",{attrs:{src:t.cover,alt:"cover"}})]):t._e(),t.isError?t._e():r("div",{staticClass:"bar",attrs:{id:"bar"}},[t.isIndexFile?t._e():r("code",{staticClass:"item-home"},[r("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v("«")])]),t.startDate?r("code",{staticClass:"item-date"},[t._v(t._s(t.isIndexFile?t.endDate:t.startDate))]):t._e(),t.creator?r("code",{staticClass:"item-creator"},[t._v(t._s(t.creator))]):t._e(),t._l(t.tags,(function(e){return r("code",{key:e,staticClass:"item-tag"},[t._l(t.getQueryTagLinks(e),(function(e){return[r("a",{key:e[0],attrs:{href:e[0]}},[t._v(t._s(e[1]))])]}))],2)})),t._l(t.otherFlags,(function(e,n){return r("code",{key:n,class:"item-"+e[0]},[t._v(t._s(e[1]))])})),r("code",{staticClass:"item-raw"},[r("a",{attrs:{href:t.rawFilePath,target:"_blank"}},[t._v(t._s(t.config.messages.raw))])])],2),!t.isRedirectPage&&t.redirectFrom[0].length>0?r("div",{attrs:{id:"redirect-from"}},[r("span",[t._v(t._s(t.config.messages.redirectFrom))]),t._l(t.redirectFrom[0],(function(e,n){return r("a",{key:e,attrs:{href:"#"+e}},[t._v(t._s(t.redirectFrom[1][n]))])}))],2):t._e(),r("header",[t._v(t._s(t.title))]),r("Article",{attrs:{fileData:t.fileData,query:t.query,redirectTo:t.redirectTo,showTime:t.showTime}}),t.isError?t._e():r("div",{attrs:{id:"backlinks"}},[t.hasLoadedBacklinks?t._e():r("span",{class:["icon",{sync:t.isLoadingBacklinks}],domProps:{innerHTML:t._s(t.isLoadingBacklinks?t.iconSync:t.iconBacklink)}}),t.isLoadingBacklinks?r("span",[t._v(t._s(t.config.messages.loading))]):t.hasLoadedBacklinks?[t.backlinkFiles.length>0?r("ul",t._l(t.backlinkFiles,(function(e){return r("li",{key:e.path,staticClass:"article",domProps:{innerHTML:t._s(t.getListHtml(e))}})})),0):r("span",[t._v(t._s(t.config.messages.noBacklinks))])]:r("a",{on:{click:t.loadBacklinks}},[t._v(t._s(t.config.messages.showBacklinks))])],2),t.isIndexFile?t._e():r("footer",[r("a",{staticClass:"home",attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.messages.returnHome))]),!t.isError&&t.startDate?[r("span",{staticClass:"filler"}),r("span",{staticClass:"date"},[t._v(t._s(t.endDate!==t.startDate?t.endDate+t.lastUpdatedMessage:t.startDate))])]:t._e()],2)],1):t.initing?r("div",{staticClass:"lds-ellipsis initing"},t._l(4,(function(t){return r("div",{key:t})})),0):t._e()])},a=[],i=(r("99af"),r("4de4"),r("4160"),r("caad"),r("d81d"),r("a434"),r("b64b"),r("d3b7"),r("07ac"),r("ac1f"),r("5377"),r("8a79"),r("2532"),r("3ca3"),r("5319"),r("841c"),r("18a5"),r("159b"),r("ddb0"),r("2909")),s=r("3835"),o=(r("96cf"),r("1da1")),c=r("d4ec"),l=r("bee2"),u=r("262e"),h=r("2caf"),d=r("9ab4"),f=r("bb76"),g=r("8964"),k=r("4c55"),b=r("35f0"),p=r("eb5f"),m=r("b00f"),v=r("1889"),y=r("72db"),j=r("8ef8"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{class:t.isRendering?"rendering":null,domProps:{innerHTML:t._s(t.html)}})},T=[],w=(r("a15b"),r("466d"),r("1b40")),S=function(t){Object(u["a"])(r,t);var e=Object(h["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.startTime=0,t.isRendering=!0,t.renderData="",t.asyncResults=[],t.resultsBeforeRendered=[],t}return Object(l["a"])(r,[{key:"filePath",get:function(){return m["state"].filePath}},{key:"anchor",get:function(){return m["state"].anchor}},{key:"queryContent",get:function(){return this.query.content||""}},{key:"isSearchFile",get:function(){return this.filePath===f["config"].paths.search}},{key:"html",get:function(){return this.renderData?this.markdownTs.renderMD(this.renderData)+"\x3c!-- "+this.showTime+" --\x3e":""}},{key:"created",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(y["a"])({articleSelf:this}),t.next=3,Object(j["b"])();case 3:this.markdownTs=t.sent,this.$watch((function(){return[e.fileData,e.showTime]}),(function(){return e.renderMD()})),this.$watch("html",(function(){e.$nextTick((function(){return Object(g["dispatchEvent"])(k["EEvent"].htmlChanged,(new Date).getTime())}))})),this.$watch("asyncResults",(function(){if(0!==e.asyncResults.length){var t=e.asyncResults[e.asyncResults.length-1];e.isRendering&&e.resultsBeforeRendered.push(t),e.markdownTs.updateAsyncScript(t)&&e.markdownTs.updateDom()}})),this.$watch("anchor",(function(){return e.scrollToAnchor()})),this.$watch("queryContent",(function(){return Object(b["changeQueryContent"])(e.queryContent)})),Object(g["dispatchEvent"])(k["EEvent"].articleCreated,(new Date).getTime()).then(),this.renderMD();case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"renderMD",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.fileData;if(this.isRendering=!0,this.startTime=(new Date).getTime(),e&&(e=this.markdownTs.updateInlineScript(this.filePath,e,this.asyncResults)),e){var r=e.match(Object(p["getMarkRegExp"])(k["EMark"].redirect));if(r&&(r=r[1].match(/^(\/\S+\.md)(?:#(\S+))?(?:\?(\S+))?$/),r)){var n=r,a=Object(s["a"])(n,4),i=a[1],o=a[2],c=a[3];if(this.redirectTo(i,o,c))return}(this.isSearchFile&&this.queryContent||Object(p["getMarkRegExp"])(k["EMark"].list).test(e))&&Object(j["a"])().then((function(t){return t.getFiles()}));var l=Object(g["getSyncSpan"])(),u=e.replace(Object(p["getSnippetRegExp"])("gm"),l).replace(Object(p["getMarkRegExp"])("(".concat([k["EMark"].list,k["EMark"].input,k["EMark"].result].join("|"),")"),!0,"img"),l).replace(Object(p["getMarkRegExp"])("(".concat([k["EMark"].number,k["EMark"].count,k["EMark"].time].join("|"),")"),!1,"ig"),l);this.updateRenderData(u).then((function(){t.markdownTs.updateDom(),t.markdownTs.updateSnippet(e,[t.filePath],t.asyncResults).then((function(e){e?t.markdownTs.updateList(e).then((function(e){e&&t.isSearchFile?t.updateRenderData(t.markdownTs.preprocessSearchPage(e)).then((function(){t.renderComplete(),t.markdownTs.updateSearchPage(t.queryContent).then((function(){return t.markdownTs.updateDom()}))})):t.updateRenderData(e).then((function(){return t.renderComplete()}))})):t.updateRenderData().then((function(){return t.renderComplete()}))}))}))}else this.updateRenderData().then((function(){return t.renderComplete()}))}},{key:"updateRenderData",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",this.renderData=e,t.next=4,this.$nextTick();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"renderComplete",value:function(){var t=this;this.markdownTs.updateDom().then((function(){if(t.isRendering=!1,t.$nextTick((function(){Object(g["removeClass"])(t.$el),Object(g["dispatchEvent"])(k["EEvent"].rendered,(new Date).getTime()-t.startTime,100),t.scrollToAnchor()})),0!==t.resultsBeforeRendered.length){var e=!1,r=t.resultsBeforeRendered.shift();while(r)t.markdownTs.updateAsyncScript(r)&&!e&&(e=!0),r=t.resultsBeforeRendered.shift();e&&t.markdownTs.updateDom()}}))}},{key:"scrollToAnchor",value:function(){if(Object(p["getAnchorRegExp"])().test(this.anchor)){var t=document.querySelector('article > *[id="'.concat(this.anchor,'"]'));t&&t.offsetTop>0&&(Object(g["scroll"])(t.offsetTop-6),Object(b["changeAnchor"])(this.anchor))}}}]),r}(w["Vue"]);Object(d["a"])([Object(w["Prop"])()],S.prototype,"fileData",void 0),Object(d["a"])([Object(w["Prop"])()],S.prototype,"query",void 0),Object(d["a"])([Object(w["Prop"])()],S.prototype,"showTime",void 0),Object(d["a"])([Object(w["Prop"])()],S.prototype,"redirectTo",void 0),S=Object(d["a"])([w["Component"]],S);var D=S,E=D,_=(r("027e"),r("2877")),x=Object(_["a"])(E,O,T,!1,null,null,null),R=x.exports;w["Component"].registerHooks(["beforeRouteUpdate"]);var F=function(t){Object(u["a"])(r,t);var e=Object(h["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.fileTs=null,t.fileData="",t.title="",t.tags=[],t.startDate="",t.endDate="",t.cover="",t.creator="",t.updater="",t.otherFlags=[],t.links=[],t.backlinks=[],t.backlinkFiles=[],t.isLoadingBacklinks=!1,t.hasLoadedBacklinks=!1,t.showTime=0,t.isShow=!1,t.isError=!1,t.isRedirectPage=!1,t.redirectFrom=[[],[]],t.initing=!0,t}return Object(l["a"])(r,[{key:"homePath",get:function(){return m["state"].homePath}},{key:"filePath",get:function(){var t=Object(b["parseRoute"])(this.$route),e=t.path,r=t.anchor,n=t.query;return m["state"].filePath=e,m["state"].anchor=r,m["state"].queryStr=n,m["state"].filePath}},{key:"anchor",get:function(){return m["state"].anchor}},{key:"queryStr",get:function(){return m["state"].queryStr}},{key:"shortFilePath",get:function(){return Object(b["shortenPath"])(this.filePath)}},{key:"rawFilePath",get:function(){return Object(b["addBaseUrl"])(this.filePath)}},{key:"query",get:function(){return Object(b["parseQuery"])(this.queryStr)}},{key:"config",get:function(){return f["config"]}},{key:"isIndexFile",get:function(){return this.filePath===this.config.paths.index}},{key:"lastUpdatedMessage",get:function(){return" | ".concat(this.config.messages.lastUpdated).concat(this.updater?" (".concat(this.updater,")"):"")}},{key:"iconSync",get:function(){return Object(g["getIcon"])(k["EIcon"].sync)}},{key:"iconBacklink",get:function(){return Object(g["getIcon"])(k["EIcon"].backlink,18)}},{key:"created",value:function(){var t=this,e=this.homePath,r=this.shortFilePath;if("prerender"===document.body.id){var n=e;return this.isIndexFile||(n+="#".concat(r)),void(location.href=n+location.search)}if(location.search){var a=location.search.substr(1)+(this.queryStr?"&".concat(this.queryStr):"");location.href=e+Object(b["buildHash"])({path:r,anchor:this.anchor,query:Object(b["formatQuery"])(Object(b["parseQuery"])(a))})}else{if(f["enableMultiConf"]){var i=this.query.conf;if(i&&f["confList"][0].includes(i)&&Object(f["getSelectConf"])()!==i)return localStorage.setItem("conf",i),void location.reload()}Object(y["a"])({mainSelf:this,reload:this.reload}),this.$watch("title",(function(){var e=t.title,r=t.config.siteName;r&&r!==t.title&&(e+=" - ".concat(r)),document.title=e})),this.$watch("cover",(function(){if(!t.cover){var e=t.$el.firstElementChild;e&&e.classList.contains("lds-ellipsis")&&e.remove()}})),Object(g["dispatchEvent"])(k["EEvent"].mainCreated,(new Date).getTime()),this.getData().then((function(e){t.setData(e),t.initing=!1}))}}},{key:"beforeRouteUpdate",value:function(t,e,r){var n=Object(b["parseRoute"])(t),a=Object(b["parseRoute"])(e);n.path!==a.path||n.query!==a.query?(this.isShow=!1,r(),this.isRedirectPage?this.isRedirectPage=!1:this.redirectFrom=[[],[]],this.reload(!0)):n.anchor!==a.anchor&&(m["state"].anchor=n.anchor)}},{key:"reload",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(g["cleanEventListenerDict"])(),this.getData().then((function(r){document.querySelectorAll(".custom").forEach((function(t){return t.remove()}));var n=v["destructors"].shift();while(n)"function"===typeof n&&n(),n=v["destructors"].shift();t.setData(r),e&&Object(g["scroll"])(0,!1)}))}},{key:"getData",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,i,o,c,l,u,h,d,f,g,b,m,y,O,T;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.fileTs){t.next=4;break}return t.next=3,Object(j["a"])();case 3:this.fileTs=t.sent;case 4:if(e=this.filePath,e.endsWith(".md")){t.next=9;break}return this.isError=!0,r=this.fileTs.createErrorFile(e),n=r.data,a=r.flags,t.abrupt("return",{data:n,flags:a,links:[]});case 9:return i=[],i.push(this.fileTs.getFile(e)),o=this.config.paths.common,o&&e!==o&&i.push(this.fileTs.getFile(o)),t.next=15,Promise.all(i);case 15:if(c=t.sent,l=c[0],u=l.data,h=l.flags,d=Object.values(l.links).filter((function(t){return t.isMarkdown&&!t.isError})).map((function(t){return t.href})),!l.isError){t.next=23;break}return this.isError=!0,t.abrupt("return",{data:u,flags:h,links:d});case 23:if(this.isError=!1,this.hasLoadedBacklinks&&this.loadBacklinks().then(),!Object(p["getMarkRegExp"])(k["EMark"].noCommon).test(u)){t.next=28;break}return u=u.replace(Object(p["getMarkRegExp"])(k["EMark"].noCommon,!0,"img"),""),t.abrupt("return",{data:u,flags:h,links:d});case 28:if(!(c.length<2||c[1].isError)){t.next=30;break}return t.abrupt("return",{data:u,flags:h,links:d});case 30:return f=c[1].data,g="",b=f,m=Object(v["chopStr"])(f,v["snippetMark"]),y=Object(s["a"])(m,2),O=y[0],T=y[1],null!==T&&(g=O,b=T),g&&(u=g+"\n\n\n"+u),b&&(u+="\n\n\n"+b),t.abrupt("return",{data:u,flags:h,links:d});case 38:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"setData",value:function(t){var e=this;t&&(this.setFlags(t.flags),this.fileData=t.data,this.links=t.links,this.isShow=!0,this.showTime=(new Date).getTime(),this.$nextTick((function(){return Object(g["dispatchEvent"])(k["EEvent"].mainShown,e.showTime)})))}},{key:"setFlags",value:function(t){var e=this;this.title=t.title,this.tags=t.tags?Object(i["a"])(t.tags):[],this.startDate=t.startDate||"",this.endDate=t.endDate||"",this.cover=t.cover||"",this.creator=t.creator||"",this.updater=t.updater||"",this.otherFlags=[],Object.keys(t).sort().forEach((function(r){v["definedFlags"].includes(r)||e.addFlag(r,t[r],!1)})),Object(y["a"])({title:this.title,filePath:this.filePath})}},{key:"addFlag",value:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.otherFlags.push([t,e]),r&&(this.otherFlags=this.otherFlags.sort((function(t,e){return t[0].localeCompare(e[0])})))}},{key:"removeFlag",value:function(t){for(var e=0;e<this.otherFlags.length;e++)if(this.otherFlags[e][0]===t){this.otherFlags.splice(e,1);break}}},{key:"redirectTo",value:function(t,e,r){return!this.redirectFrom[0].includes(this.filePath)&&(this.isRedirectPage=!0,this.redirectFrom[0].push(this.filePath),this.redirectFrom[1].push(this.title),location.hash=Object(b["buildHash"])({path:Object(b["shortenPath"])(t),anchor:e||this.anchor,query:r||this.queryStr}),!0)}},{key:"loadBacklinks",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isLoadingBacklinks=!0,this.fileTs){t.next=5;break}return t.next=4,Object(j["a"])();case 4:this.fileTs=t.sent;case 5:return t.next=7,this.fileTs.getFiles();case 7:e=t.sent,r=e.files,n=e.backlinks,a=n[this.filePath],a&&a.length>0?(this.backlinks=Object(i["a"])(a),this.backlinkFiles=a.map((function(t){var e=r[t];return{path:e.path,flags:JSON.parse(JSON.stringify(e.flags))}})).sort(this.fileTs.sortFiles)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getListHtml",value:function(t){return Object(g["createList"])(t).innerHTML}},{key:"getQueryTagLinks",value:function(t){return Object(g["getQueryTagLinks"])(t)}},{key:"returnHome",value:function(){Object(b["returnHome"])()}}]),r}(w["Vue"]);F=Object(d["a"])([Object(w["Component"])({components:{Article:R}})],F);var C=F,P=C,M=(r("d5f5"),Object(_["a"])(P,n,a,!1,null,null,null));e["default"]=M.exports},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"7b30":function(t,e,r){"use strict";r("1ffc")},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:a})},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,s=i.toString,o=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},d5f5:function(t,e,r){"use strict";r("3908")},eab5:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),s=r("23cb"),o=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),h=r("1dde"),d=r("ae40"),f=h("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),k=u("species"),b=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!f||!g},{slice:function(t,e){var r,n,u,h=c(this),d=o(h.length),f=s(t,d),g=s(void 0===e?d:e,d);if(i(h)&&(r=h.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[k],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(h,f,g);for(n=new(void 0===r?Array:r)(p(g-f,0)),u=0;f<g;f++,u++)f in h&&l(n,u,h[f]);return n.length=u,n}})},fead:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{attrs:{id:"toggle-dark"},on:{click:t.toggleDark}},[t._v(t._s(t.darkMarks[t.isDark?1:0]))]),r("span",{ref:"toggleZen",class:t.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:t.toggleZen}},[t._v(t._s(t.zenMark))]),r("span",{ref:"toTop",class:t.isScrolling?"spin":null,attrs:{id:"to-top"},on:{click:t.toTop}},[t._v(t._s(t.toTopMark))])])},a=[],i=r("d4ec"),s=r("bee2"),o=r("262e"),c=r("2caf"),l=r("9ab4"),u=r("8964"),h=r("4c55"),d=r("1889"),f=r("72db"),g=r("1b40"),k=function(t){Object(o["a"])(r,t);var e=Object(c["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.isDark=!1,t.isZen=!1,t.isScrolling=!1,t.darkMarks=["★","☆"],t.zenMark="▣",t.toTopMark="と",t}return Object(s["a"])(r,[{key:"metaThemeColor",get:function(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}},{key:"created",value:function(){var t=this;Object(f["a"])({gadgetSelf:this,toggleDark:this.toggleDark,toggleZen:this.toggleZen,toTop:this.toTop,toBottom:this.toBottom}),this.metaTheme=document.querySelector('meta[name="theme-color"]'),this.isDark=!!localStorage.getItem("dark"),this.isZen=!!localStorage.getItem("zen"),Object(d["addInputBinds"])({dark:this.toggleDark,zen:this.toggleZen,G:this.toTop,gg:function(){t.toBottom(),t.addToKeyInput("_")}}),this.$watch("isDark",(function(){t.metaTheme.setAttribute("content",t.metaThemeColor),t.isDark?(document.body.classList.add("dark"),localStorage.setItem("dark",String(!0))):(Object(u["removeClass"])(document.body,"dark"),localStorage.removeItem("dark")),t.$nextTick((function(){return Object(u["dispatchEvent"])(h["EEvent"].toggleDark,t.isDark)}))})),this.$watch("isZen",(function(){t.metaTheme.setAttribute("content",t.metaThemeColor),t.isZen?(document.body.classList.add("zen"),localStorage.setItem("zen",String(!0))):(t.$nextTick((function(){return Object(u["removeClass"])(t.$refs.toggleZen)})),Object(u["removeClass"])(document.body,"zen"),localStorage.removeItem("zen")),t.$nextTick((function(){return Object(u["dispatchEvent"])(h["EEvent"].toggleZen,t.isZen)}))}))}},{key:"toggleDark",value:function(){this.isDark=!this.isDark}},{key:"toggleZen",value:function(){this.isZen=!this.isZen}},{key:"toTop",value:function(){this.isScrolling||this.scroll()}},{key:"toBottom",value:function(){this.isScrolling||this.scroll(!0)}},{key:"scroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isScrolling=!0,Object(u["scroll"])(e?document.body.offsetHeight:0),setTimeout((function(){t.isScrolling=!1,t.$nextTick((function(){return Object(u["removeClass"])(t.$refs.toTop)}))}),500),this.$nextTick((function(){return Object(u["dispatchEvent"])(h["EEvent"].toTop,!e)}))}}]),r}(g["Vue"]);Object(l["a"])([Object(g["Prop"])()],k.prototype,"addToKeyInput",void 0),k=Object(l["a"])([g["Component"]],k);var b=k,p=b,m=(r("7b30"),r("2877")),v=Object(m["a"])(p,n,a,!1,null,null,null);e["default"]=v.exports}}]);