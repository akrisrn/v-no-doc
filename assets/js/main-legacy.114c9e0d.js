(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"027e":function(t,e,n){"use strict";n("eab5")},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"1ffc":function(t,e,n){},2532:function(t,e,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||i(t)||Object(s["a"])(t)||o()}},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){a=!0,i=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw i}}return n}}var i=n("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){return r(t)||a(t,e)||Object(i["a"])(t,e)||s()}},3908:function(t,e,n){},"466d":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),s=n("1d80"),o=n("8aa5"),c=n("14c3");r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=a(t),u=String(this);if(!s.global)return c(s,u);var l=s.unicode;s.lastIndex=0;var h,d=[],f=0;while(null!==(h=c(s,u))){var g=String(h[0]);d[f]=g,""===g&&(s.lastIndex=o(u,i(s.lastIndex),l)),f++}return 0===f?null:d}]}))},"615d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[t.isShow?n("main",{class:t.isError?"error":null},[t.cover?n("div",{staticClass:"center",attrs:{id:"cover"}},[n("img",{attrs:{src:t.cover,alt:"cover"}})]):t._e(),t.isError?t._e():n("div",{staticClass:"bar",attrs:{id:"bar"}},[t.isIndexFile?t._e():n("code",{staticClass:"item-home"},[n("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v("«")])]),t.startDate?n("code",{staticClass:"item-date"},[t._v(t._s(t.isIndexFile?t.endDate:t.startDate))]):t._e(),t.creator?n("code",{staticClass:"item-creator"},[t._v(t._s(t.creator))]):t._e(),t._l(t.tags,(function(e,r){return n("code",{key:r,staticClass:"item-tag"},[t._l(t.getQueryTagLinks(e),(function(e,r){return[n("a",{key:r,attrs:{href:e.href}},[t._v(t._s(e.text))])]}))],2)})),t._l(t.otherFlags,(function(e,r){return n("code",{key:r,class:"item-"+e.key},[t._v(t._s(e.value))])})),n("code",{staticClass:"item-raw"},[n("a",{attrs:{href:t.rawFilePath,target:"_blank"}},[t._v(t._s(t.config.messages.raw))])])],2),!t.isRedirectPage&&t.redirectFrom[0].length>0?n("div",{attrs:{id:"redirect-from"}},[n("span",[t._v(t._s(t.config.messages.redirectFrom))]),t._l(t.redirectFrom[0],(function(e,r){return n("a",{key:r,attrs:{href:"#"+e}},[t._v(t._s(t.redirectFrom[1][r]))])}))],2):t._e(),n("header",[t._v(t._s(t.title))]),n("Article",{attrs:{fileData:t.fileData,query:t.query,redirectTo:t.redirectTo,showTime:t.showTime,title:t.title}}),t.isError?t._e():n("div",{attrs:{id:"backlinks"}},[t.hasLoadedBacklinks?t._e():n("span",{class:["icon",{sync:t.isLoadingBacklinks}],domProps:{innerHTML:t._s(t.isLoadingBacklinks?t.iconSync:t.iconBacklink)}}),t.isLoadingBacklinks?n("span",[t._v(t._s(t.config.messages.loading))]):t.hasLoadedBacklinks?[t.backlinkFiles.length>0?n("ul",t._l(t.backlinkFiles,(function(e,r){return n("li",{key:r,staticClass:"article",domProps:{innerHTML:t._s(t.getListHtml(e))}})})),0):n("span",[t._v(t._s(t.config.messages.noBacklinks))])]:n("a",{on:{click:t.loadBacklinks}},[t._v(t._s(t.config.messages.showBacklinks))])],2),t.isIndexFile?t._e():n("footer",[n("a",{staticClass:"home",attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.messages.returnHome))]),!t.isError&&t.startDate?n("span",{staticClass:"date"},[t._v(t._s(t.endDate!==t.startDate?t.endDate+t.lastUpdatedMessage:t.startDate))]):t._e()])],1):t.initing?n("div",{staticClass:"lds-ellipsis initing"},t._l(4,(function(t){return n("div",{key:t})})),0):t._e()])},a=[],i=(n("99af"),n("4de4"),n("4160"),n("caad"),n("d81d"),n("a434"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("5377"),n("8a79"),n("2532"),n("3ca3"),n("5319"),n("841c"),n("18a5"),n("159b"),n("ddb0"),n("2909")),s=n("3835"),o=(n("96cf"),n("1da1")),c=n("d4ec"),u=n("bee2"),l=n("262e"),h=n("2caf"),d=n("9ab4"),f=n("bb76"),g=n("8964"),k=n("4c55"),b=n("35f0"),m=n("eb5f"),p=n("4397"),v=n("b00f"),y=n("1889"),j=n("72db"),O=n("8ef8"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{class:t.isRendering?"rendering":null,domProps:{innerHTML:t._s(t.html)}})},w=[],D=(n("a15b"),n("466d"),n("1b40")),E=function(t){Object(l["a"])(n,t);var e=Object(h["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.startTime=0,t.isRendering=!0,t.renderData="",t.asyncResults=[],t.resultsBeforeRendered=[],t}return Object(u["a"])(n,[{key:"filePath",get:function(){return v["state"].filePath}},{key:"anchor",get:function(){return v["state"].anchor}},{key:"queryContent",get:function(){return this.query.content||""}},{key:"isSearchFile",get:function(){return this.filePath===f["config"].paths.search}},{key:"html",get:function(){return this.renderData?this.markdownTs.renderMD(this.renderData)+"\x3c!-- "+this.showTime+" --\x3e":""}},{key:"created",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(j["a"])({articleSelf:this,isSearchFile:this.isSearchFile}),t.next=3,Object(O["b"])();case 3:this.markdownTs=t.sent,this.$watch((function(){return[e.fileData,e.showTime]}),(function(){return e.renderMD()})),this.$watch("html",(function(){e.$nextTick((function(){return Object(g["dispatchEvent"])(k["EEvent"].htmlChanged,(new Date).getTime())}))})),this.$watch("asyncResults",(function(){if(0!==e.asyncResults.length){var t=e.asyncResults[e.asyncResults.length-1];e.isRendering&&e.resultsBeforeRendered.push(t),e.markdownTs.updateAsyncScript(t)&&e.markdownTs.updateDom()}})),this.$watch("anchor",(function(){return e.scrollToAnchor()})),this.$watch("queryContent",(function(){return Object(b["changeQueryContent"])(e.queryContent)})),Object(g["dispatchEvent"])(k["EEvent"].articleCreated,(new Date).getTime()).then(),this.renderMD();case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"renderMD",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.fileData;if(this.isRendering=!0,this.startTime=(new Date).getTime(),e&&(e=this.markdownTs.updateInlineScript(this.filePath,this.title,e,!1,this.asyncResults)),e){var n=e.match(Object(m["getMarkRegExp"])(k["EMark"].redirect));if(n&&(n=n[1].match(/^(\/\S+\.md)(?:#(\S+))?(?:\?(\S+))?$/),n)){var r=n,a=Object(s["a"])(r,4),i=a[1],o=a[2],c=a[3];if(this.redirectTo(i,o,c))return}(this.isSearchFile&&this.queryContent||Object(m["getMarkRegExp"])(k["EMark"].list).test(e))&&Object(O["a"])().then((function(t){return t.getFiles()}));var u=Object(g["getSyncSpan"])(),l=e.replace(Object(m["getSnippetRegExp"])("gm"),u).replace(Object(m["getMarkRegExp"])("(".concat([k["EMark"].list,k["EMark"].input,k["EMark"].result].join("|"),")"),!0,"img"),u).replace(Object(m["getMarkRegExp"])("(".concat([k["EMark"].number,k["EMark"].count,k["EMark"].time].join("|"),")"),!1,"ig"),u);this.updateRenderData(l).then((function(){t.markdownTs.updateDom(),t.markdownTs.updateSnippet(e,[t.filePath],t.asyncResults).then((function(e){e?t.markdownTs.updateList(e).then((function(e){e&&t.isSearchFile?t.updateRenderData(t.markdownTs.preprocessSearchPage(e)).then((function(){t.renderComplete(),t.markdownTs.updateSearchPage(t.queryContent).then((function(){return t.markdownTs.updateDom()}))})):t.updateRenderData(e).then((function(){return t.renderComplete()}))})):t.updateRenderData().then((function(){return t.renderComplete()}))}))}))}else this.updateRenderData().then((function(){return t.renderComplete()}))}},{key:"updateRenderData",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",this.renderData=e,t.next=4,this.$nextTick();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"renderComplete",value:function(){var t=this;this.markdownTs.updateDom().then((function(){if(t.isRendering=!1,t.$nextTick((function(){Object(g["removeClass"])(t.$el),Object(g["dispatchEvent"])(k["EEvent"].rendered,(new Date).getTime()-t.startTime,100),t.scrollToAnchor()})),0!==t.resultsBeforeRendered.length){var e=!1,n=t.resultsBeforeRendered.shift();while(n)t.markdownTs.updateAsyncScript(n)&&!e&&(e=!0),n=t.resultsBeforeRendered.shift();e&&t.markdownTs.updateDom()}}))}},{key:"scrollToAnchor",value:function(){if(Object(m["getAnchorRegExp"])().test(this.anchor)){var t=document.querySelector('article > *[id="'.concat(this.anchor,'"]'));t&&t.offsetTop>0&&(Object(g["scroll"])(t.offsetTop-6),Object(b["changeAnchor"])(this.anchor))}}}]),n}(D["Vue"]);Object(d["a"])([Object(D["Prop"])()],E.prototype,"fileData",void 0),Object(d["a"])([Object(D["Prop"])()],E.prototype,"title",void 0),Object(d["a"])([Object(D["Prop"])()],E.prototype,"query",void 0),Object(d["a"])([Object(D["Prop"])()],E.prototype,"showTime",void 0),Object(d["a"])([Object(D["Prop"])()],E.prototype,"redirectTo",void 0),E=Object(d["a"])([D["Component"]],E);var S=E,_=S,x=(n("027e"),n("2877")),F=Object(x["a"])(_,T,w,!1,null,null,null),R=F.exports;D["Component"].registerHooks(["beforeRouteUpdate"]);var P=function(t){Object(l["a"])(n,t);var e=Object(h["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.fileTs=null,t.fileData="",t.title="",t.tags=[],t.startDate="",t.endDate="",t.cover="",t.creator="",t.updater="",t.otherFlags=[],t.links=[],t.backlinks=[],t.backlinkFiles=[],t.isLoadingBacklinks=!1,t.hasLoadedBacklinks=!1,t.showTime=0,t.isShow=!1,t.isError=!1,t.isRedirectPage=!1,t.redirectFrom=[[],[]],t.initing=!0,t}return Object(u["a"])(n,[{key:"homePath",get:function(){return v["state"].homePath}},{key:"filePath",get:function(){var t=Object(b["parseRoute"])(this.$route),e=t.path,n=t.anchor,r=t.query;return v["state"].filePath=e,v["state"].anchor=n,v["state"].queryStr=r,v["state"].filePath}},{key:"anchor",get:function(){return v["state"].anchor}},{key:"queryStr",get:function(){return v["state"].queryStr}},{key:"shortFilePath",get:function(){return Object(b["shortenPath"])(this.filePath)}},{key:"rawFilePath",get:function(){return Object(b["addBaseUrl"])(this.filePath)}},{key:"query",get:function(){return Object(b["parseQuery"])(this.queryStr)}},{key:"config",get:function(){return f["config"]}},{key:"isIndexFile",get:function(){return this.filePath===this.config.paths.index}},{key:"lastUpdatedMessage",get:function(){return" | ".concat(this.config.messages.lastUpdated).concat(this.updater?" (".concat(this.updater,")"):"")}},{key:"iconSync",get:function(){return Object(g["getIcon"])(k["EIcon"].sync)}},{key:"iconBacklink",get:function(){return Object(g["getIcon"])(k["EIcon"].backlink,18)}},{key:"created",value:function(){var t=this,e=this.homePath,n=this.shortFilePath;if("prerender"===document.body.id){var r=e;return this.isIndexFile||(r+="#".concat(n)),void(location.href=r+location.search)}if(location.search){var a=location.search.substr(1)+(this.queryStr?"&".concat(this.queryStr):"");location.href=e+Object(b["buildHash"])({path:n,anchor:this.anchor,query:Object(b["formatQuery"])(Object(b["parseQuery"])(a))})}else{if(f["enableMultiConf"]){var i=this.query.conf;if(i&&f["confList"][0].includes(i)&&Object(f["getSelectConf"])()!==i)return p["setItem"]("conf",i),void location.reload()}Object(j["a"])({mainSelf:this,isIndexFile:this.isIndexFile,reload:this.reload}),this.$watch("title",(function(){var e=t.title,n=t.config.siteName;n&&n!==t.title&&(e+=" - ".concat(n)),document.title=e})),this.$watch("cover",(function(){if(!t.cover){var e=t.$el.firstElementChild;e&&e.classList.contains("lds-ellipsis")&&e.remove()}})),Object(g["dispatchEvent"])(k["EEvent"].mainCreated,(new Date).getTime()),this.getData().then((function(e){t.setData(e),t.initing=!1}))}}},{key:"beforeRouteUpdate",value:function(t,e,n){var r=Object(b["parseRoute"])(t),a=Object(b["parseRoute"])(e);r.path!==a.path||r.query!==a.query?(this.isShow=!1,n(),this.isRedirectPage?this.isRedirectPage=!1:this.redirectFrom=[[],[]],this.reload(!0)):r.anchor!==a.anchor&&(v["state"].anchor=r.anchor)}},{key:"reload",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(g["cleanEventListenerDict"])(),this.getData().then((function(n){document.querySelectorAll(".custom").forEach((function(t){return t.remove()}));var r=y["destructors"].shift();while(r)"function"===typeof r&&r(),r=y["destructors"].shift();t.setData(n),e&&Object(g["scroll"])(0,!1)}))}},{key:"getData",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i,o,c,u,l,h,d,f,g,b,p,v,j,T;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.fileTs){t.next=4;break}return t.next=3,Object(O["a"])();case 3:this.fileTs=t.sent;case 4:if(e=this.filePath,e.endsWith(".md")){t.next=9;break}return this.isError=!0,n=this.fileTs.createErrorFile(e),r=n.data,a=n.flags,t.abrupt("return",{data:r,flags:a,links:[]});case 9:return i=[],i.push(this.fileTs.getFile(e)),o=this.config.paths.common,o&&e!==o&&i.push(this.fileTs.getFile(o)),t.next=15,Promise.all(i);case 15:if(c=t.sent,u=c[0],l=u.data,h=u.flags,d=Object.values(u.links).filter((function(t){return t.isMarkdown})).map((function(t){return t.href})),!u.isError){t.next=23;break}return this.isError=!0,t.abrupt("return",{data:l,flags:h,links:d});case 23:if(this.isError=!1,this.hasLoadedBacklinks&&this.loadBacklinks().then(),!Object(m["getMarkRegExp"])(k["EMark"].noCommon).test(l)){t.next=28;break}return l=l.replace(Object(m["getMarkRegExp"])(k["EMark"].noCommon,!0,"img"),""),t.abrupt("return",{data:l,flags:h,links:d});case 28:if(!(c.length<2||c[1].isError)){t.next=30;break}return t.abrupt("return",{data:l,flags:h,links:d});case 30:return f=c[1].data,g="",b=f,p=Object(y["chopStr"])(f,"--8<--"),v=Object(s["a"])(p,2),j=v[0],T=v[1],null!==T&&(g=j,b=T),g&&(l=g+"\n\n\n"+l),b&&(l+="\n\n\n"+b),t.abrupt("return",{data:l,flags:h,links:d});case 38:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"setData",value:function(t){var e=this;t&&(this.setFlags(t.flags),this.fileData=t.data,this.links=t.links,this.isShow=!0,this.showTime=(new Date).getTime(),this.$nextTick((function(){return Object(g["dispatchEvent"])(k["EEvent"].mainShown,e.showTime)})))}},{key:"setFlags",value:function(t){var e=this;this.title=t.title,this.tags=t.tags?Object(i["a"])(t.tags):[],this.startDate=t.startDate||"",this.endDate=t.endDate||"",this.cover=t.cover||"",this.creator=t.creator||"",this.updater=t.updater||"",this.otherFlags=[],Object.keys(t).sort().forEach((function(n){y["definedFlags"].includes(n)||e.addFlag(n,t[n])})),Object(j["a"])({title:this.title,filePath:this.filePath})}},{key:"addFlag",value:function(t,e){var n={key:t,value:e};return this.otherFlags.push(n),n}},{key:"removeFlag",value:function(t){for(var e=0;e<this.otherFlags.length;e++)if(this.otherFlags[e].key===t)return this.otherFlags.splice(e,1),e;return-1}},{key:"redirectTo",value:function(t,e,n){return!this.redirectFrom[0].includes(this.filePath)&&(this.isRedirectPage=!0,this.redirectFrom[0].push(this.filePath),this.redirectFrom[1].push(this.title),location.hash=Object(b["buildHash"])({path:Object(b["shortenPath"])(t),anchor:e||this.anchor,query:n||this.queryStr}),!0)}},{key:"loadBacklinks",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isLoadingBacklinks=!0,this.fileTs){t.next=5;break}return t.next=4,Object(O["a"])();case 4:this.fileTs=t.sent;case 5:return t.next=7,this.fileTs.getFiles();case 7:e=t.sent,n=e.files,r=e.backlinks,a=r[this.filePath],a&&a.length>0?(this.backlinks=Object(i["a"])(a),this.backlinkFiles=a.map((function(t){var e=n[t];return{path:e.path,flags:JSON.parse(JSON.stringify(e.flags))}})).sort(this.fileTs.sortFiles)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getListHtml",value:function(t){return Object(g["createList"])(t).innerHTML}},{key:"getQueryTagLinks",value:function(t){return Object(g["getQueryTagLinks"])(t)}},{key:"returnHome",value:function(){Object(b["returnHome"])()}}]),n}(D["Vue"]);P=Object(d["a"])([Object(D["Component"])({components:{Article:R}})],P);var C=P,M=C,B=(n("d5f5"),Object(x["a"])(M,r,a,!1,null,null,null));e["default"]=B.exports},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"7b30":function(t,e,n){"use strict";n("1ffc")},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:a})},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,s=i.toString,o=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},d5f5:function(t,e,n){"use strict";n("3908")},eab5:function(t,e,n){},fead:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{attrs:{id:"toggle-dark"},on:{click:t.toggleDark}},[t._v(t._s(t.darkMarks[t.isDark?1:0]))]),n("span",{ref:"toggleZen",class:t.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:t.toggleZen}},[t._v(t._s(t.zenMark))]),n("span",{ref:"toTop",class:t.isScrolling?"spin":null,attrs:{id:"to-top"},on:{click:t.toTop}},[t._v(t._s(t.toTopMark))])])},a=[],i=n("d4ec"),s=n("bee2"),o=n("262e"),c=n("2caf"),u=n("9ab4"),l=n("8964"),h=n("4c55"),d=n("4397"),f=n("1889"),g=n("72db"),k=n("1b40"),b=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.isDark=!1,t.isZen=!1,t.isScrolling=!1,t.darkMarks=["★","☆"],t.zenMark="▣",t.toTopMark="と",t}return Object(s["a"])(n,[{key:"metaThemeColor",get:function(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}},{key:"created",value:function(){var t=this;Object(g["a"])({gadgetSelf:this,toggleDark:this.toggleDark,toggleZen:this.toggleZen,toTop:this.toTop,toBottom:this.toBottom}),this.metaTheme=document.querySelector('meta[name="theme-color"]'),this.isDark=!!d["getItem"]("dark"),this.isZen=!!d["getItem"]("zen"),Object(f["addInputBinds"])({dark:this.toggleDark,zen:this.toggleZen,G:this.toTop,gg:function(){t.toBottom(),t.addToKeyInput("_")}}),this.$watch("isDark",(function(){t.metaTheme.setAttribute("content",t.metaThemeColor),t.isDark?(document.body.classList.add("dark"),d["setItem"]("dark",String(!0))):(Object(l["removeClass"])(document.body,"dark"),d["removeItem"]("dark")),t.$nextTick((function(){return Object(l["dispatchEvent"])(h["EEvent"].toggleDark,t.isDark)}))})),this.$watch("isZen",(function(){t.metaTheme.setAttribute("content",t.metaThemeColor),t.isZen?(document.body.classList.add("zen"),d["setItem"]("zen",String(!0))):(t.$nextTick((function(){return Object(l["removeClass"])(t.$refs.toggleZen)})),Object(l["removeClass"])(document.body,"zen"),d["removeItem"]("zen")),t.$nextTick((function(){return Object(l["dispatchEvent"])(h["EEvent"].toggleZen,t.isZen)}))}))}},{key:"toggleDark",value:function(){this.isDark=!this.isDark}},{key:"toggleZen",value:function(){this.isZen=!this.isZen}},{key:"toTop",value:function(){this.isScrolling||this.scroll()}},{key:"toBottom",value:function(){this.isScrolling||this.scroll(!0)}},{key:"scroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isScrolling=!0,Object(l["scroll"])(e?document.body.offsetHeight:0),setTimeout((function(){t.isScrolling=!1,t.$nextTick((function(){return Object(l["removeClass"])(t.$refs.toTop)}))}),500),this.$nextTick((function(){return Object(l["dispatchEvent"])(h["EEvent"].toTop,!e)}))}}]),n}(k["Vue"]);Object(u["a"])([Object(k["Prop"])()],b.prototype,"addToKeyInput",void 0),b=Object(u["a"])([k["Component"]],b);var m=b,p=m,v=(n("7b30"),n("2877")),y=Object(v["a"])(p,r,a,!1,null,null,null);e["default"]=y.exports}}]);