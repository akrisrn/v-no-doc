(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"027e":function(t,e,s){"use strict";s("eab5")},"1ffc":function(t,e,s){},3908:function(t,e,s){},"615d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-fade"}},[t.isShow?s("main",{class:t.isError?"error":null},[t.cover?s("div",{staticClass:"center",attrs:{id:"cover"}},[s("img",{attrs:{src:t.cover,alt:"cover"}})]):t._e(),t.isError?t._e():s("div",{staticClass:"bar",attrs:{id:"bar"}},[t.isIndexFile?t._e():s("code",{staticClass:"item-home"},[s("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v("«")])]),t.startDate?s("code",{staticClass:"item-date"},[t._v(t._s(t.isIndexFile?t.endDate:t.startDate))]):t._e(),t.creator?s("code",{staticClass:"item-creator"},[t._v(t._s(t.creator))]):t._e(),t._l(t.tags,(function(e){return s("code",{key:e,staticClass:"item-tag"},[t._l(t.getQueryTagLinks(e),(function(e){return[s("a",{key:e[0],attrs:{href:e[0]}},[t._v(t._s(e[1]))])]}))],2)})),t._l(t.otherFlags,(function(e,i){return s("code",{key:i,class:"item-"+e[0]},[t._v(t._s(e[1]))])})),s("code",{staticClass:"item-raw"},[s("a",{attrs:{href:t.rawFilePath,target:"_blank"}},[t._v(t._s(t.config.messages.raw))])])],2),!t.isRedirectPage&&t.redirectFrom[0].length>0?s("div",{attrs:{id:"redirect-from"}},[t._v(t._s(t.config.messages.redirectFrom)+" "),t._l(t.redirectFrom[0],(function(e,i){return s("a",{key:e,attrs:{href:"#"+e}},[t._v(t._s(t.redirectFrom[1][i]))])}))],2):t._e(),s("header",[t._v(t._s(t.title))]),s("Article",{attrs:{fileData:t.fileData,query:t.query,redirectTo:t.redirectTo,showTime:t.showTime}}),t.isError?t._e():s("div",{attrs:{id:"backlinks"}},[t.hasLoadedBacklinks?t._e():s("span",{class:["icon",{sync:t.isLoadingBacklinks}],domProps:{innerHTML:t._s(t.isLoadingBacklinks?t.iconSync:t.iconBacklink)}}),t.isLoadingBacklinks?s("span",[t._v(t._s(t.config.messages.loading))]):t.hasLoadedBacklinks?[t.backlinkFiles.length>0?s("ul",t._l(t.backlinkFiles,(function(e){return s("li",{key:e.path,staticClass:"article",domProps:{innerHTML:t._s(t.getListHtml(e))}})})),0):s("span",[t._v(t._s(t.config.messages.noBacklinks))])]:s("a",{on:{click:t.loadBacklinks}},[t._v(t._s(t.config.messages.showBacklinks))])],2),t.isIndexFile?t._e():s("footer",[s("a",{staticClass:"home",attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.messages.returnHome))]),!t.isError&&t.startDate?[s("span",{staticClass:"filler"}),s("span",{staticClass:"date"},[t._v(t._s(t.endDate!==t.startDate?t.endDate+t.lastUpdatedMessage:t.startDate))])]:t._e()],2)],1):t.initing?s("div",{staticClass:"lds-ellipsis initing"},t._l(4,(function(t){return s("div",{key:t})})),0):t._e()])},a=[],r=(s("5319"),s("ddb0"),s("9ab4")),n=s("bb76"),o=s("8964"),h=s("4c55"),c=s("35f0"),l=s("eb5f"),d=s("b00f"),u=s("1889"),g=s("72db"),f=s("8ef8"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{class:t.isRendering?"rendering":null,domProps:{innerHTML:t._s(t.html)}})},k=[],p=s("1b40");let b=class extends p["c"]{constructor(){super(...arguments),this.startTime=0,this.isRendering=!0,this.renderData="",this.asyncResults=[],this.resultsBeforeRendered=[]}get filePath(){return d["state"].filePath}get anchor(){return d["state"].anchor}get queryContent(){return this.query.content||""}get isSearchFile(){return this.filePath===n["config"].paths.search}get html(){return this.renderData?this.markdownTs.renderMD(this.renderData)+"\x3c!-- "+this.showTime+" --\x3e":""}async created(){Object(g["a"])({articleSelf:this}),this.markdownTs=await Object(f["b"])(),this.$watch(()=>[this.fileData,this.showTime],()=>this.renderMD()),this.$watch("html",()=>{this.$nextTick(()=>Object(o["dispatchEvent"])(h["EEvent"].htmlChanged,(new Date).getTime()))}),this.$watch("asyncResults",()=>{if(0===this.asyncResults.length)return;const t=this.asyncResults[this.asyncResults.length-1];this.isRendering&&this.resultsBeforeRendered.push(t),this.markdownTs.updateAsyncScript(t)&&this.markdownTs.updateDom()}),this.$watch("anchor",()=>this.scrollToAnchor()),this.$watch("queryContent",()=>Object(c["changeQueryContent"])(this.queryContent)),Object(o["dispatchEvent"])(h["EEvent"].articleCreated,(new Date).getTime()).then(),this.renderMD()}renderMD(t=this.fileData){if(this.isRendering=!0,this.startTime=(new Date).getTime(),t&&(t=this.markdownTs.updateInlineScript(this.filePath,t,this.asyncResults)),!t)return void this.updateRenderData().then(()=>this.renderComplete());let e=t.match(Object(l["getMarkRegExp"])(h["EMark"].redirect));if(e&&(e=e[1].match(/^(\/\S+\.md)(?:#(\S+))?(?:\?(\S+))?$/),e)){const[,t,s,i]=e;if(this.redirectTo(t,s,i))return}(this.isSearchFile&&this.queryContent||Object(l["getMarkRegExp"])(h["EMark"].list).test(t))&&Object(f["a"])().then(t=>t.getFiles());const s=Object(o["getSyncSpan"])(),i=t.replace(Object(l["getSnippetRegExp"])("gm"),s).replace(Object(l["getMarkRegExp"])(`(${[h["EMark"].list,h["EMark"].input,h["EMark"].result].join("|")})`,!0,"img"),s).replace(Object(l["getMarkRegExp"])(`(${[h["EMark"].number,h["EMark"].count,h["EMark"].time].join("|")})`,!1,"ig"),s);this.updateRenderData(i).then(()=>{this.markdownTs.updateDom(),this.markdownTs.updateSnippet(t,[this.filePath],this.asyncResults).then(t=>{t?this.markdownTs.updateList(t).then(t=>{t&&this.isSearchFile?this.updateRenderData(this.markdownTs.preprocessSearchPage(t)).then(()=>{this.renderComplete(),this.markdownTs.updateSearchPage(this.queryContent).then(()=>this.markdownTs.updateDom())}):this.updateRenderData(t).then(()=>this.renderComplete())}):this.updateRenderData().then(()=>this.renderComplete())})})}async updateRenderData(t=""){this.renderData=t,await this.$nextTick()}renderComplete(){this.markdownTs.updateDom().then(()=>{if(this.isRendering=!1,this.$nextTick(()=>{Object(o["removeClass"])(this.$el),Object(o["dispatchEvent"])(h["EEvent"].rendered,(new Date).getTime()-this.startTime,100),this.scrollToAnchor()}),0===this.resultsBeforeRendered.length)return;let t=!1,e=this.resultsBeforeRendered.shift();while(e)this.markdownTs.updateAsyncScript(e)&&!t&&(t=!0),e=this.resultsBeforeRendered.shift();t&&this.markdownTs.updateDom()})}scrollToAnchor(){if(!Object(l["getAnchorRegExp"])().test(this.anchor))return;const t=document.querySelector(`article > *[id="${this.anchor}"]`);t&&t.offsetTop>0&&(Object(o["scroll"])(t.offsetTop-6),Object(c["changeAnchor"])(this.anchor))}};Object(r["a"])([Object(p["b"])()],b.prototype,"fileData",void 0),Object(r["a"])([Object(p["b"])()],b.prototype,"query",void 0),Object(r["a"])([Object(p["b"])()],b.prototype,"showTime",void 0),Object(r["a"])([Object(p["b"])()],b.prototype,"redirectTo",void 0),b=Object(r["a"])([p["a"]],b);var T=b,v=T,j=(s("027e"),s("2877")),O=Object(j["a"])(v,m,k,!1,null,null,null),y=O.exports;p["a"].registerHooks(["beforeRouteUpdate"]);let D=class extends p["c"]{constructor(){super(...arguments),this.fileTs=null,this.fileData="",this.title="",this.tags=[],this.startDate="",this.endDate="",this.cover="",this.creator="",this.updater="",this.otherFlags=[],this.links=[],this.backlinks=[],this.backlinkFiles=[],this.isLoadingBacklinks=!1,this.hasLoadedBacklinks=!1,this.showTime=0,this.isShow=!1,this.isError=!1,this.isRedirectPage=!1,this.redirectFrom=[[],[]],this.initing=!0}get homePath(){return d["state"].homePath}get filePath(){const{path:t,anchor:e,query:s}=Object(c["parseRoute"])(this.$route);return d["state"].filePath=t,d["state"].anchor=e,d["state"].queryStr=s,d["state"].filePath}get anchor(){return d["state"].anchor}get queryStr(){return d["state"].queryStr}get shortFilePath(){return Object(c["shortenPath"])(this.filePath)}get rawFilePath(){return Object(c["addBaseUrl"])(this.filePath)}get query(){return Object(c["parseQuery"])(this.queryStr)}get config(){return n["config"]}get isIndexFile(){return this.filePath===this.config.paths.index}get lastUpdatedMessage(){return` | ${this.config.messages.lastUpdated}${this.updater?` (${this.updater})`:""}`}get iconSync(){return Object(o["getIcon"])(h["EIcon"].sync)}get iconBacklink(){return Object(o["getIcon"])(h["EIcon"].backlink,18)}created(){const t=this.homePath,e=this.shortFilePath;if("prerender"===document.body.id){let s=t;return this.isIndexFile||(s+="#"+e),void(location.href=s+location.search)}if(location.search){const s=location.search.substr(1)+(this.queryStr?"&"+this.queryStr:"");location.href=t+Object(c["buildHash"])({path:e,anchor:this.anchor,query:Object(c["formatQuery"])(Object(c["parseQuery"])(s))})}else{if(n["enableMultiConf"]){const t=this.query.conf;if(t&&n["confList"][0].includes(t)&&Object(n["getSelectConf"])()!==t)return localStorage.setItem("conf",t),void location.reload()}Object(g["a"])({mainSelf:this,reload:this.reload,filePath:this.filePath}),this.$watch("title",()=>{let t=this.title;const e=this.config.siteName;e&&e!==this.title&&(t+=" - "+e),document.title=t}),this.$watch("cover",()=>{if(this.cover)return;const t=this.$el.firstElementChild;t&&t.classList.contains("lds-ellipsis")&&t.remove()}),Object(o["dispatchEvent"])(h["EEvent"].mainCreated,(new Date).getTime()),this.getData().then(t=>{this.setData(t),this.initing=!1})}}beforeRouteUpdate(t,e,s){const i=Object(c["parseRoute"])(t),a=Object(c["parseRoute"])(e);i.path!==a.path||i.query!==a.query?(this.isShow=!1,s(),Object(g["a"])({filePath:this.filePath}),this.isRedirectPage?this.isRedirectPage=!1:this.redirectFrom=[[],[]],this.reload(!0)):i.anchor!==a.anchor&&(d["state"].anchor=i.anchor)}reload(t=!1){Object(o["cleanEventListenerDict"])(),this.getData().then(e=>{document.querySelectorAll(".custom").forEach(t=>t.remove());let s=u["destructors"].shift();while(s)"function"===typeof s&&s(),s=u["destructors"].shift();this.setData(e),t&&Object(o["scroll"])(0,!1)})}async getData(){this.fileTs||(this.fileTs=await Object(f["a"])());const t=this.filePath;if(!t.endsWith(".md")){this.isError=!0;const{data:e,flags:s}=this.fileTs.createErrorFile(t);return{data:e,flags:s,links:[]}}const e=[];e.push(this.fileTs.getFile(t));const s=this.config.paths.common;s&&t!==s&&e.push(this.fileTs.getFile(s));const i=await Promise.all(e),a=i[0];let r=a.data;const n=a.flags,o=Object.values(a.links).filter(t=>t.isMarkdown&&!t.isError).map(t=>t.href);if(a.isError)return this.isError=!0,{data:r,flags:n,links:o};if(this.isError=!1,this.hasLoadedBacklinks&&this.loadBacklinks().then(),Object(l["getMarkRegExp"])(h["EMark"].noCommon).test(r))return r=r.replace(Object(l["getMarkRegExp"])(h["EMark"].noCommon,!0,"img"),""),{data:r,flags:n,links:o};if(i.length<2||i[1].isError)return{data:r,flags:n,links:o};const c=i[1].data;let d="",g=c;const[m,k]=Object(u["chopStr"])(c,u["snippetMark"]);return null!==k&&(d=m,g=k),d&&(r=d+"\n\n\n"+r),g&&(r+="\n\n\n"+g),{data:r,flags:n,links:o}}setData(t){t&&(this.setFlags(t.flags),this.fileData=t.data,this.links=t.links,this.isShow=!0,this.showTime=(new Date).getTime(),this.$nextTick(()=>Object(o["dispatchEvent"])(h["EEvent"].mainShown,this.showTime)))}setFlags(t){this.title=t.title,this.tags=t.tags?[...t.tags]:[],this.startDate=t.startDate||"",this.endDate=t.endDate||"",this.cover=t.cover||"",this.creator=t.creator||"",this.updater=t.updater||"",this.otherFlags=[],Object.keys(t).sort().forEach(e=>{u["definedFlags"].includes(e)||this.addFlag(e,t[e],!1)})}addFlag(t,e,s=!0){this.otherFlags.push([t,e]),s&&(this.otherFlags=this.otherFlags.sort((t,e)=>t[0].localeCompare(e[0])))}removeFlag(t){for(let e=0;e<this.otherFlags.length;e++)if(this.otherFlags[e][0]===t){this.otherFlags.splice(e,1);break}}redirectTo(t,e,s){return!this.redirectFrom[0].includes(this.filePath)&&(this.isRedirectPage=!0,this.redirectFrom[0].push(this.filePath),this.redirectFrom[1].push(this.title),location.hash=Object(c["buildHash"])({path:Object(c["shortenPath"])(t),anchor:e||this.anchor,query:s||this.queryStr}),!0)}async loadBacklinks(){this.isLoadingBacklinks=!0,this.fileTs||(this.fileTs=await Object(f["a"])());const{files:t,backlinks:e}=await this.fileTs.getFiles(),s=e[this.filePath];s&&s.length>0?(this.backlinks=[...s],this.backlinkFiles=s.map(e=>{const s=t[e];return{path:s.path,flags:JSON.parse(JSON.stringify(s.flags))}}).sort(this.fileTs.sortFiles)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0)}getListHtml(t){return Object(o["createList"])(t).innerHTML}getQueryTagLinks(t){return Object(o["getQueryTagLinks"])(t)}returnHome(){Object(c["returnHome"])()}};D=Object(r["a"])([Object(p["a"])({components:{Article:y}})],D);var E=D,w=E,_=(s("d5f5"),Object(j["a"])(w,i,a,!1,null,null,null));e["default"]=_.exports},"7b30":function(t,e,s){"use strict";s("1ffc")},d5f5:function(t,e,s){"use strict";s("3908")},eab5:function(t,e,s){},fead:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{attrs:{id:"toggle-dark"},on:{click:t.toggleDark}},[t._v(t._s(t.darkMarks[t.isDark?1:0]))]),s("span",{ref:"toggleZen",class:t.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:t.toggleZen}},[t._v(t._s(t.zenMark))]),s("span",{ref:"toTop",class:t.isScrolling?"spin":null,attrs:{id:"to-top"},on:{click:t.toTop}},[t._v(t._s(t.toTopMark))])])},a=[],r=(s("ddb0"),s("9ab4")),n=s("8964"),o=s("4c55"),h=s("1889"),c=s("72db"),l=s("1b40");let d=class extends l["c"]{constructor(){super(...arguments),this.isDark=!1,this.isZen=!1,this.isScrolling=!1,this.darkMarks=["★","☆"],this.zenMark="▣",this.toTopMark="と"}get metaThemeColor(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}created(){Object(c["a"])({gadgetSelf:this,toggleDark:this.toggleDark,toggleZen:this.toggleZen,toTop:this.toTop,toBottom:this.toBottom}),this.metaTheme=document.querySelector('meta[name="theme-color"]'),this.isDark=!!localStorage.getItem("dark"),this.isZen=!!localStorage.getItem("zen"),Object(h["addInputBinds"])({dark:this.toggleDark,zen:this.toggleZen,G:this.toTop,gg:()=>{this.toBottom(),this.addToKeyInput("_")}}),this.$watch("isDark",()=>{this.metaTheme.setAttribute("content",this.metaThemeColor),this.isDark?(document.body.classList.add("dark"),localStorage.setItem("dark",String(!0))):(Object(n["removeClass"])(document.body,"dark"),localStorage.removeItem("dark")),this.$nextTick(()=>Object(n["dispatchEvent"])(o["EEvent"].toggleDark,this.isDark))}),this.$watch("isZen",()=>{this.metaTheme.setAttribute("content",this.metaThemeColor),this.isZen?(document.body.classList.add("zen"),localStorage.setItem("zen",String(!0))):(this.$nextTick(()=>Object(n["removeClass"])(this.$refs.toggleZen)),Object(n["removeClass"])(document.body,"zen"),localStorage.removeItem("zen")),this.$nextTick(()=>Object(n["dispatchEvent"])(o["EEvent"].toggleZen,this.isZen))})}toggleDark(){this.isDark=!this.isDark}toggleZen(){this.isZen=!this.isZen}toTop(){this.isScrolling||this.scroll()}toBottom(){this.isScrolling||this.scroll(!0)}scroll(t=!1){this.isScrolling=!0,Object(n["scroll"])(t?document.body.offsetHeight:0),setTimeout(()=>{this.isScrolling=!1,this.$nextTick(()=>Object(n["removeClass"])(this.$refs.toTop))},500),this.$nextTick(()=>Object(n["dispatchEvent"])(o["EEvent"].toTop,!t))}};Object(r["a"])([Object(l["b"])()],d.prototype,"addToKeyInput",void 0),d=Object(r["a"])([l["a"]],d);var u=d,g=u,f=(s("7b30"),s("2877")),m=Object(f["a"])(g,i,a,!1,null,null,null);e["default"]=m.exports}}]);