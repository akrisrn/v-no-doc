(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"615d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-fade"}},[t.isShow?s("main",{class:t.isError?"error":null},[t.cover?s("div",{staticClass:"center",attrs:{id:"cover"}},[s("img",{attrs:{src:t.cover,alt:"cover"}})]):t._e(),t.isError?t._e():s("div",{staticClass:"bar",attrs:{id:"bar"}},[t.isIndexFile?t._e():s("code",{staticClass:"item-home"},[s("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v("«")])]),t.startDate?s("code",{staticClass:"item-date"},[t._v(t._s(t.isIndexFile?t.endDate:t.startDate))]):t._e(),t.creator?s("code",{staticClass:"item-creator"},[t._v(t._s(t.creator))]):t._e(),t._l(t.tags,(function(e){return s("code",{key:e,staticClass:"item-tag"},[t._l(t.getQueryTagLinks(e),(function(e){return[s("a",{key:e[0],attrs:{href:e[0]}},[t._v(t._s(e[1]))])]}))],2)})),t._l(t.otherFlags,(function(e,i){return s("code",{key:i,class:"item-"+e[0]},[t._v(t._s(e[1]))])})),s("code",{staticClass:"item-raw"},[s("a",{attrs:{href:t.rawFilePath,target:"_blank"}},[t._v(t._s(t.config.messages.raw))])])],2),!t.isRedirectPage&&t.redirectFrom[0].length>0?s("div",{attrs:{id:"redirect-from"}},[t._v(t._s(t.config.messages.redirectFrom)+" "),t._l(t.redirectFrom[0],(function(e,i){return s("a",{key:e,attrs:{href:"#"+e}},[t._v(t._s(t.redirectFrom[1][i]))])}))],2):t._e(),s("header",[t._v(t._s(t.title))]),s("Article",{attrs:{fileData:t.fileData,query:t.query,showTime:t.showTime}}),t.isError?t._e():s("div",{attrs:{id:"backlinks"}},[t.hasLoadedBacklinks?t._e():s("span",{class:["icon",{sync:t.isLoadingBacklinks}],domProps:{innerHTML:t._s(t.isLoadingBacklinks?t.iconSync:t.iconBacklink)}}),t.isLoadingBacklinks?s("span",[t._v(t._s(t.config.messages.loading))]):t.hasLoadedBacklinks?[t.backlinkFiles.length>0?s("ul",t._l(t.backlinkFiles,(function(e){return s("li",{key:e.path,staticClass:"article",domProps:{innerHTML:t._s(t.getListHtml(e))}})})),0):s("span",[t._v(t._s(t.config.messages.noBacklinks))])]:s("a",{on:{click:t.getBacklinks}},[t._v(t._s(t.config.messages.showBacklinks))])],2),t.isIndexFile?t._e():s("footer",[s("a",{staticClass:"home",attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome(e)}}},[t._v(t._s(t.config.messages.returnHome))]),!t.isError&&t.startDate?[s("span",{staticClass:"filler"}),s("span",{staticClass:"date"},[t._v(t._s(t.endDate!==t.startDate?t.endDate+t.lastUpdatedMessage:t.startDate))])]:t._e()],2)],1):t._e()])},a=[],r=(s("ddb0"),s("9ab4")),n=s("bb76"),h=s("8964"),o=s("4c55"),c=s("35f0"),l=s("eb5f"),d=s("b00f"),u=s("1889"),g=s("72db"),f=s("8ef8"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{class:t.isRendering?"rendering":null,domProps:{innerHTML:t._s(t.html)}})},p=[],k=(s("5319"),s("1b40"));let b=class extends k["c"]{constructor(){super(...arguments),this.startTime=0,this.isRendering=!0,this.renderData="",this.asyncResults=[],this.resultsBeforeRendered=[]}get filePath(){return d["state"].filePath}get anchor(){return d["state"].anchor}get queryContent(){return this.query.content||""}get html(){return this.renderData?this.markdownTs.renderMD(this.renderData)+"\x3c!-- "+this.showTime+" --\x3e":""}get isSearchFile(){return this.filePath===n["config"].paths.search}async created(){Object(g["a"])({articleSelf:this}),this.markdownTs=await Object(f["b"])(),Object(h["dispatchEvent"])(o["EEvent"].articleCreated,(new Date).getTime()).then(),this.renderMD()}renderMD(t=this.fileData){if(this.startTime=(new Date).getTime(),this.isRendering=!0,t&&(t=this.markdownTs.replaceInlineScript(this.filePath,t,this.asyncResults)),!t)return void this.updateRenderData().then(()=>this.renderComplete());const e=Object(h["getSyncSpan"])(),s=t.replace(this.markdownTs.getSnippetRegExp("gm"),e).replace(Object(l["b"])(`(${[o["EMark"].list,o["EMark"].input,o["EMark"].result].join("|")})`,!0,"img"),e).replace(Object(l["b"])(`(${[o["EMark"].number,o["EMark"].count,o["EMark"].time].join("|")})`,!1,"ig"),e);this.updateRenderData(s).then(()=>{this.markdownTs.updateDom(),this.markdownTs.updateSnippet(t,this.asyncResults).then(t=>{t?this.markdownTs.updateList(t).then(t=>{t&&this.isSearchFile?this.updateRenderData(this.markdownTs.preprocessSearchPage(t)).then(()=>{this.renderComplete(),this.markdownTs.updateSearchPage(this.queryContent).then(()=>this.markdownTs.updateDom())}):this.updateRenderData(t).then(()=>this.renderComplete())}):this.updateRenderData().then(()=>this.renderComplete())})})}async updateRenderData(t=""){this.renderData=t,await this.$nextTick()}renderComplete(){this.markdownTs.updateDom().then(()=>{if(this.isRendering=!1,this.$nextTick(()=>{Object(h["removeClass"])(this.$el),Object(h["dispatchEvent"])(o["EEvent"].rendered,(new Date).getTime()-this.startTime,100),this.scrollToAnchor()}),0===this.resultsBeforeRendered.length)return;let t=!1,e=this.resultsBeforeRendered.shift();while(e)this.markdownTs.updateAsyncScript(e)&&!t&&(t=!0),e=this.resultsBeforeRendered.shift();t&&this.markdownTs.updateDom()})}scrollToAnchor(){const t=Object(l["a"])();if(!t.test(this.anchor))return;const e=document.querySelector(`article > *[id="${this.anchor}"]`);e&&e.offsetTop>0&&(Object(h["scroll"])(e.offsetTop-6),Object(c["changeAnchor"])(this.anchor))}onAsyncResultsChanged(){if(0===this.asyncResults.length)return;const t=this.asyncResults[this.asyncResults.length-1];this.isRendering&&this.resultsBeforeRendered.push(t),this.markdownTs.updateAsyncScript(t)&&this.markdownTs.updateDom()}onQueryContentChanged(){Object(c["changeQueryContent"])(this.queryContent)}onShowTimeChanged(){this.isRendering||this.renderMD()}onHTMLChanged(){this.$nextTick(()=>Object(h["dispatchEvent"])(o["EEvent"].htmlChanged,(new Date).getTime()))}};Object(r["a"])([Object(k["b"])()],b.prototype,"fileData",void 0),Object(r["a"])([Object(k["b"])()],b.prototype,"query",void 0),Object(r["a"])([Object(k["b"])()],b.prototype,"showTime",void 0),Object(r["a"])([Object(k["d"])("anchor")],b.prototype,"scrollToAnchor",null),Object(r["a"])([Object(k["d"])("asyncResults")],b.prototype,"onAsyncResultsChanged",null),Object(r["a"])([Object(k["d"])("queryContent")],b.prototype,"onQueryContentChanged",null),Object(r["a"])([Object(k["d"])("fileData"),Object(k["d"])("showTime")],b.prototype,"onShowTimeChanged",null),Object(r["a"])([Object(k["d"])("html")],b.prototype,"onHTMLChanged",null),b=Object(r["a"])([k["a"]],b);var y=b,j=y,O=s("2877"),T=Object(O["a"])(j,m,p,!1,null,null,null),v=T.exports;k["a"].registerHooks(["beforeRouteUpdate"]);let w=class extends k["c"]{constructor(){super(...arguments),this.fileTs=null,this.fileData="",this.title="",this.tags=[],this.startDate="",this.endDate="",this.cover="",this.creator="",this.updater="",this.otherFlags=[],this.links=[],this.backlinks=[],this.backlinkFiles=[],this.isLoadingBacklinks=!1,this.hasLoadedBacklinks=!1,this.isShow=!1,this.showTime=0,this.isError=!1,this.isRedirectPage=!1,this.redirectFrom=[[],[]]}get config(){return n["config"]}get homePath(){return d["state"].homePath}get filePath(){const{path:t,anchor:e,query:s}=Object(c["parseRoute"])(this.$route);return d["state"].filePath=t,d["state"].anchor=e,d["state"].queryStr=s,d["state"].filePath}get anchor(){return d["state"].anchor}get queryStr(){return d["state"].queryStr}get shortFilePath(){return Object(c["shortenPath"])(this.filePath)}get rawFilePath(){return Object(c["addBaseUrl"])(this.filePath)}get query(){return Object(c["parseQuery"])(this.queryStr)}get isIndexFile(){return this.filePath===this.config.paths.index}get lastUpdatedMessage(){return` | ${this.config.messages.lastUpdated}${this.updater?` (${this.updater})`:""}`}get iconSync(){return Object(h["getIcon"])(o["EIcon"].sync)}get iconBacklink(){return Object(h["getIcon"])(o["EIcon"].backlink,18)}created(){const t=this.homePath,e=this.shortFilePath;if("prerender"===document.body.id){let s=t;return this.isIndexFile||(s+="#"+e),void(location.href=s+location.search)}if(location.search){const s=location.search.substr(1)+(this.queryStr?"&"+this.queryStr:"");location.href=t+Object(c["buildHash"])({path:e,anchor:this.anchor,query:Object(c["formatQuery"])(Object(c["parseQuery"])(s))})}else{if(n["enableMultiConf"]){const t=this.query.conf;if(t&&n["confList"][0].includes(t)&&Object(n["getSelectConf"])()!==t)return localStorage.setItem("conf",t),void location.reload()}Object(g["a"])({mainSelf:this,reload:this.reload,filePath:this.filePath}),this.getData().then(({data:t,flags:e,links:s})=>this.setData(t,e,s))}}beforeRouteUpdate(t,e,s){const i=Object(c["parseRoute"])(t),a=Object(c["parseRoute"])(e);i.path===a.path&&i.query===a.query||(this.isShow=!1,s(),Object(g["a"])({filePath:this.filePath}),this.isRedirectPage?this.isRedirectPage=!1:this.redirectFrom=[[],[]],this.reload(!0))}reload(t=!1){Object(h["cleanEventListenerDict"])(),this.getData().then(({data:e,flags:s,links:i})=>{document.querySelectorAll(".custom").forEach(t=>t.remove());let a=u["destructors"].shift();while(a)"function"===typeof a&&a(),a=u["destructors"].shift();this.setData(e,s,i),t&&Object(h["scroll"])(0,!1)})}async getData(){this.fileTs||(this.fileTs=await Object(f["a"])());const t=this.filePath;if(!t.endsWith(".md")){this.isError=!0;const{data:e,flags:s}=this.fileTs.createErrorFile(t);return{data:e,flags:s,links:[]}}const e=[];e.push(this.fileTs.getFile(t));const s=this.config.paths.common;s&&t!==s&&e.push(this.fileTs.getFile(s));const i=await Promise.all(e),a=i[0];let r=a.data;const n=a.flags,h=Object.values(a.links).filter(t=>t.isMarkdown).map(t=>t.href);if(a.isError)return this.isError=!0,{data:r,flags:n,links:h};this.isError=!1;let d=r.match(Object(l["b"])(o["EMark"].redirect));if(d&&(d=d[1].match(/^(\/\S+\.md)(?:#(\S+))?(?:\?(\S+))?$/),d&&!this.redirectFrom[0].includes(t))){this.isRedirectPage=!0,this.redirectFrom[0].push(t),this.redirectFrom[1].push(n.title);const[,e,s,i]=d;return location.hash=Object(c["buildHash"])({path:Object(c["shortenPath"])(e),anchor:s||this.anchor,query:i||this.queryStr}),{data:r,flags:n,links:h}}if(this.hasLoadedBacklinks&&this.getBacklinks().then(),i.length<2||i[1].isError)return{data:r,flags:n,links:h};const g=i[1].data;let m="",p=g;const[k,b]=Object(u["chopStr"])(g,u["snippetMark"]);return null!==b&&(m=k,p=b),m&&(r=m+"\n\n\n"+r),p&&(r+="\n\n\n"+p),{data:r,flags:n,links:h}}setData(t,e,s){this.setFlags(e),this.fileData=t,this.links=[...s],this.isShow=!0,this.showTime=(new Date).getTime(),this.$nextTick(()=>Object(h["dispatchEvent"])(o["EEvent"].mainShown,this.showTime))}setFlags(t){this.title=t.title,this.tags=t.tags?[...t.tags]:[],this.startDate=t.startDate||"",this.endDate=t.endDate||"",this.cover=t.cover||"",this.creator=t.creator||"",this.updater=t.updater||"",this.otherFlags=[],Object.keys(t).sort().forEach(e=>{o["definedFlags"].includes(e)||this.addFlag(e,t[e],!1)})}addFlag(t,e,s=!0){this.otherFlags.push([t,e]),s&&(this.otherFlags=this.otherFlags.sort((t,e)=>t[0].localeCompare(e[0])))}removeFlag(t){for(let e=0;e<this.otherFlags.length;e++)if(this.otherFlags[e][0]===t){this.otherFlags.splice(e,1);break}}async getBacklinks(){this.isLoadingBacklinks=!0,this.fileTs||(this.fileTs=await Object(f["a"])());const{files:t,backlinks:e}=await this.fileTs.getFiles(),s=e[this.filePath];s&&s.length>0?(this.backlinks=[...s],this.backlinkFiles=s.map(e=>JSON.parse(JSON.stringify(t[e]))).sort(this.fileTs.sortFiles)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0)}onTitleChanged(){document.title=this.title,this.config.siteName&&this.config.siteName!==this.title&&(document.title+=" - "+this.config.siteName)}onCoverChanged(){if(this.cover)return;const t=this.$el.firstElementChild;t&&t.classList.contains("lds-ellipsis")&&t.remove()}getListHtml(t){return Object(h["createList"])(t).innerHTML}getQueryTagLinks(t){return Object(h["getQueryTagLinks"])(t)}returnHome(){Object(c["returnHome"])()}};Object(r["a"])([Object(k["d"])("title")],w.prototype,"onTitleChanged",null),Object(r["a"])([Object(k["d"])("cover")],w.prototype,"onCoverChanged",null),w=Object(r["a"])([Object(k["a"])({components:{Article:v}})],w);var D=w,_=D,F=Object(O["a"])(_,i,a,!1,null,null,null);e["default"]=F.exports}}]);