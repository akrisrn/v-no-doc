(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"027e":function(t,e,s){"use strict";s("eab5")},"1ffc":function(t,e,s){},3908:function(t,e,s){},"615d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-fade"}},[t.isShow?s("main",{class:t.isError?"error":null},[t.cover?s("div",{staticClass:"center",attrs:{id:"cover"}},[s("img",{attrs:{src:t.cover,alt:"cover"}})]):t._e(),t.isError?t._e():s("div",{staticClass:"bar",attrs:{id:"bar"}},[t.isIndexFile?t._e():s("code",{staticClass:"item-home"},[s("a",{attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome.apply(null,arguments)}}},[t._v("«")])]),t.startDate?s("code",{staticClass:"item-date"},[t._v(t._s(t.isIndexFile?t.endDate:t.startDate))]):t._e(),t.creator?s("code",{staticClass:"item-creator"},[t._v(t._s(t.creator))]):t._e(),t._l(t.tags,(function(e,i){return s("code",{key:i,staticClass:"item-tag"},[t._l(t.getQueryTagLinks(e),(function(e,i){return[s("a",{key:i,attrs:{href:e.href}},[t._v(t._s(e.text))])]}))],2)})),t._l(t.otherFlags,(function(e,i){return s("code",{key:i,class:"item-"+e.key},[t._v(t._s(e.value))])})),s("code",{staticClass:"item-raw"},[s("a",{attrs:{href:t.rawFilePath,target:"_blank"}},[t._v(t._s(t.conf.messages.raw))])])],2),!t.isRedirectPage&&t.redirectFrom[0].length>0?s("div",{attrs:{id:"redirect-from"}},[s("span",[t._v(t._s(t.conf.messages.redirectFrom))]),t._l(t.redirectFrom[0],(function(e,i){return s("a",{key:i,attrs:{href:"#"+e}},[t._v(t._s(t.redirectFrom[1][i]))])}))],2):t._e(),s("header",[t._v(t._s(t.title))]),s("Article",{attrs:{fileData:t.fileData,query:t.query,redirectTo:t.redirectTo,showTime:t.showTime,title:t.title}}),t.isError?t._e():s("div",{attrs:{id:"backlinks"}},[t.hasLoadedBacklinks?t._e():s("span",{class:["icon",{sync:t.isLoadingBacklinks}],domProps:{innerHTML:t._s(t.isLoadingBacklinks?t.iconSync:t.iconBacklink)}}),t.isLoadingBacklinks?s("span",[t._v(t._s(t.conf.messages.loading))]):t.hasLoadedBacklinks?[t.backlinkFiles.length>0?s("ul",t._l(t.backlinkFiles,(function(e,i){return s("li",{key:i,staticClass:"article",domProps:{innerHTML:t._s(t.getListHtml(e))}})})),0):s("span",[t._v(t._s(t.conf.messages.noBacklinks))])]:s("a",{on:{click:t.loadBacklinks}},[t._v(t._s(t.conf.messages.showBacklinks))])],2),t.isIndexFile?t._e():s("footer",[s("a",{staticClass:"home",attrs:{href:t.homePath},on:{click:function(e){return e.preventDefault(),t.returnHome.apply(null,arguments)}}},[t._v(t._s(t.conf.messages.returnHome))]),!t.isError&&t.startDate?[s("span",{staticClass:"filler"}),s("span",{staticClass:"date"},[t._v(t._s(t.endDate!==t.startDate?t.endDate+t.lastUpdatedMessage:t.startDate))])]:t._e()],2)],1):t.initing?s("div",{staticClass:"lds-ellipsis initing"},t._l(4,(function(t){return s("div",{key:t})})),0):t._e()])},a=[],r=s("ade3"),n=s("9ab4"),o=s("bb76"),c=s("8964"),h=s("4c55"),l=s("35f0"),d=s("eb5f"),u=s("4397"),g=s("b00f"),f=s("1889"),m=s("72db"),b=s("8ef8"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{class:t.isRendering?"rendering":null,domProps:{innerHTML:t._s(t.html)}})},k=[],j=s("1b40");let O=class extends j["Vue"]{constructor(...t){super(...t),Object(r["a"])(this,"fileData",void 0),Object(r["a"])(this,"title",void 0),Object(r["a"])(this,"query",void 0),Object(r["a"])(this,"showTime",void 0),Object(r["a"])(this,"redirectTo",void 0),Object(r["a"])(this,"markdownTs",void 0),Object(r["a"])(this,"startTime",0),Object(r["a"])(this,"isRendering",!0),Object(r["a"])(this,"renderData",""),Object(r["a"])(this,"asyncResults",[]),Object(r["a"])(this,"resultsBeforeRendered",[])}get filePath(){return g["state"].filePath}get anchor(){return g["state"].anchor}get queryContent(){return this.query.content||""}get isSearchFile(){return this.filePath===o["config"].paths.search}get html(){return this.renderData?this.markdownTs.renderMD(this.renderData)+"\x3c!-- "+this.showTime+" --\x3e":""}async created(){Object(m["a"])({articleSelf:this,isSearchFile:this.isSearchFile}),this.markdownTs=await Object(b["b"])(),this.$watch(()=>[this.fileData,this.showTime],()=>this.renderMD()),this.$watch("html",()=>{this.$nextTick(()=>Object(c["dispatchEvent"])(h["EEvent"].htmlChanged,(new Date).getTime()))}),this.$watch("asyncResults",()=>{if(0===this.asyncResults.length)return;const t=this.asyncResults[this.asyncResults.length-1];this.isRendering&&this.resultsBeforeRendered.push(t),this.markdownTs.updateAsyncScript(t)&&this.markdownTs.updateDom()}),this.$watch("anchor",()=>this.scrollToAnchor()),this.$watch("queryContent",()=>Object(l["changeQueryContent"])(this.queryContent)),Object(c["dispatchEvent"])(h["EEvent"].articleCreated,(new Date).getTime()).then(),this.renderMD()}renderMD(t=this.fileData){if(this.isRendering=!0,this.startTime=(new Date).getTime(),t&&(t=this.markdownTs.updateInlineScript(this.filePath,this.title,t,!1,this.asyncResults)),!t)return void this.updateRenderData().then(()=>this.renderComplete());let e=t.match(Object(d["getMarkRegExp"])(h["EMark"].redirect));if(e&&(e=e[1].match(/^(\/\S+\.md)(?:#(\S+))?(?:\?(\S+))?$/),e)){const[,t,s,i]=e;if(this.redirectTo(t,s,i))return}(this.isSearchFile&&this.queryContent||Object(d["getMarkRegExp"])(h["EMark"].list).test(t))&&Object(b["a"])().then(t=>t.getFiles());const s=Object(c["getSyncSpan"])(),i=t.replace(Object(d["getSnippetRegExp"])("gm"),s).replace(Object(d["getMarkRegExp"])(`(${[h["EMark"].list,h["EMark"].input,h["EMark"].result].join("|")})`,!0,"img"),s).replace(Object(d["getMarkRegExp"])(`(${[h["EMark"].number,h["EMark"].count,h["EMark"].time].join("|")})`,!1,"ig"),s);this.updateRenderData(i).then(()=>{this.markdownTs.updateDom(),this.markdownTs.updateSnippet(t,[this.filePath],this.asyncResults).then(t=>{t?this.markdownTs.updateList(t).then(t=>{t&&this.isSearchFile?this.updateRenderData(this.markdownTs.preprocessSearchPage(t)).then(()=>{this.renderComplete(),this.markdownTs.updateSearchPage(this.queryContent).then(()=>this.markdownTs.updateDom())}):this.updateRenderData(t).then(()=>this.renderComplete())}):this.updateRenderData().then(()=>this.renderComplete())})})}async updateRenderData(t=""){this.renderData=t,await this.$nextTick()}renderComplete(){this.markdownTs.updateDom().then(()=>{if(this.isRendering=!1,this.$nextTick(()=>{Object(c["removeClass"])(this.$el),Object(c["dispatchEvent"])(h["EEvent"].rendered,(new Date).getTime()-this.startTime,100),this.scrollToAnchor()}),0===this.resultsBeforeRendered.length)return;let t=!1,e=this.resultsBeforeRendered.shift();while(e)this.markdownTs.updateAsyncScript(e)&&!t&&(t=!0),e=this.resultsBeforeRendered.shift();t&&this.markdownTs.updateDom()})}scrollToAnchor(){if(!Object(d["getAnchorRegExp"])().test(this.anchor))return;const t=document.querySelector(`article > *[id="${this.anchor}"]`);t&&t.offsetTop>0&&(Object(c["scroll"])(t.offsetTop-6),Object(l["changeAnchor"])(this.anchor))}};Object(n["a"])([Object(j["Prop"])()],O.prototype,"fileData",void 0),Object(n["a"])([Object(j["Prop"])()],O.prototype,"title",void 0),Object(n["a"])([Object(j["Prop"])()],O.prototype,"query",void 0),Object(n["a"])([Object(j["Prop"])()],O.prototype,"showTime",void 0),Object(n["a"])([Object(j["Prop"])()],O.prototype,"redirectTo",void 0),O=Object(n["a"])([j["Component"]],O);var v=O,T=v,y=(s("027e"),s("2877")),D=Object(y["a"])(T,p,k,!1,null,null,null),w=D.exports;j["Component"].registerHooks(["beforeRouteUpdate"]);let E=class extends j["Vue"]{constructor(...t){super(...t),Object(r["a"])(this,"fileTs",null),Object(r["a"])(this,"fileData",""),Object(r["a"])(this,"title",""),Object(r["a"])(this,"tags",[]),Object(r["a"])(this,"startDate",""),Object(r["a"])(this,"endDate",""),Object(r["a"])(this,"cover",""),Object(r["a"])(this,"creator",""),Object(r["a"])(this,"updater",""),Object(r["a"])(this,"otherFlags",[]),Object(r["a"])(this,"links",[]),Object(r["a"])(this,"backlinks",[]),Object(r["a"])(this,"backlinkFiles",[]),Object(r["a"])(this,"isLoadingBacklinks",!1),Object(r["a"])(this,"hasLoadedBacklinks",!1),Object(r["a"])(this,"showTime",0),Object(r["a"])(this,"isShow",!1),Object(r["a"])(this,"isError",!1),Object(r["a"])(this,"isRedirectPage",!1),Object(r["a"])(this,"redirectFrom",[[],[]]),Object(r["a"])(this,"initing",!0)}get homePath(){return g["state"].homePath}get filePath(){const{path:t,anchor:e,query:s}=Object(l["parseRoute"])(this.$route);return g["state"].filePath=t,g["state"].anchor=e,g["state"].queryStr=s,g["state"].filePath}get anchor(){return g["state"].anchor}get queryStr(){return g["state"].queryStr}get shortFilePath(){return Object(l["shortenPath"])(this.filePath)}get rawFilePath(){return Object(l["addBaseUrl"])(this.filePath)}get query(){return Object(l["parseQuery"])(this.queryStr)}get conf(){return o["config"]}get isIndexFile(){return this.filePath===this.conf.paths.index}get lastUpdatedMessage(){return` | ${this.conf.messages.lastUpdated}${this.updater?` (${this.updater})`:""}`}get iconSync(){return Object(c["getIcon"])(h["EIcon"].sync)}get iconBacklink(){return Object(c["getIcon"])(h["EIcon"].backlink,18)}created(){const t=this.homePath,e=this.shortFilePath;if("prerender"===document.body.id){let s=t;return this.isIndexFile||(s+="#"+e),void(location.href=s+location.search)}if(location.search){const s=location.search.substr(1)+(this.queryStr?"&"+this.queryStr:"");location.href=t+Object(l["buildHash"])({path:e,anchor:this.anchor,query:Object(l["formatQuery"])(Object(l["parseQuery"])(s))})}else{if(o["enableMultiConf"]){const t=this.query.conf;if(t&&o["confList"][0].includes(t)&&Object(o["getSelectConf"])()!==t)return u["setItem"]("conf",t),void location.reload()}Object(m["a"])({mainSelf:this,isIndexFile:this.isIndexFile,reload:this.reload}),this.$watch("title",()=>{let t=this.title;const e=this.conf.siteName;e&&e!==this.title&&(t+=" - "+e),document.title=t}),this.$watch("cover",()=>{if(this.cover)return;const t=this.$el.firstElementChild;t&&t.classList.contains("lds-ellipsis")&&t.remove()}),Object(c["dispatchEvent"])(h["EEvent"].mainCreated,(new Date).getTime()),this.getData().then(t=>{this.setData(t),this.initing=!1})}}beforeRouteUpdate(t,e,s){const i=Object(l["parseRoute"])(t),a=Object(l["parseRoute"])(e);i.path!==a.path||i.query!==a.query?(this.isShow=!1,s(),this.isRedirectPage?this.isRedirectPage=!1:this.redirectFrom=[[],[]],this.reload(!0)):i.anchor!==a.anchor&&(g["state"].anchor=i.anchor)}reload(t=!1){Object(c["cleanEventListenerDict"])(),this.getData().then(e=>{document.querySelectorAll(".custom").forEach(t=>t.remove());let s=f["destructors"].shift();while(s)"function"===typeof s&&s(),s=f["destructors"].shift();this.setData(e),t&&Object(c["scroll"])(0,!1)})}async getData(){this.fileTs||(this.fileTs=await Object(b["a"])());const t=this.filePath;if(!t.endsWith(".md")){this.isError=!0;const{data:e,flags:s}=this.fileTs.createErrorFile(t);return{data:e,flags:s,links:[]}}const e=[];e.push(this.fileTs.getFile(t));const s=this.conf.paths.common;s&&t!==s&&e.push(this.fileTs.getFile(s));const i=await Promise.all(e),a=i[0];let r=a.data;const n=a.flags,o=Object.values(a.links).filter(t=>t.isMarkdown).map(t=>t.href);if(a.isError)return this.isError=!0,{data:r,flags:n,links:o};if(this.isError=!1,this.hasLoadedBacklinks&&this.loadBacklinks().then(),Object(d["getMarkRegExp"])(h["EMark"].noCommon).test(r))return r=r.replace(Object(d["getMarkRegExp"])(h["EMark"].noCommon,!0,"img"),""),{data:r,flags:n,links:o};if(i.length<2||i[1].isError)return{data:r,flags:n,links:o};const c=i[1].data;let l="",u=c;const[g,m]=Object(f["chopStr"])(c,"--8<--");return null!==m&&(l=g,u=m),l&&(r=l+"\n\n\n"+r),u&&(r+="\n\n\n"+u),{data:r,flags:n,links:o}}setData(t){t&&(this.setFlags(t.flags),this.fileData=t.data,this.links=t.links,this.isShow=!0,this.showTime=(new Date).getTime(),this.$nextTick(()=>Object(c["dispatchEvent"])(h["EEvent"].mainShown,this.showTime)))}setFlags(t){this.title=t.title,this.tags=t.tags?[...t.tags]:[],this.startDate=t.startDate||"",this.endDate=t.endDate||"",this.cover=t.cover||"",this.creator=t.creator||"",this.updater=t.updater||"",this.otherFlags=[],Object.keys(t).sort().forEach(e=>{f["definedFlags"].includes(e)||this.addFlag(e,t[e])}),Object(m["a"])({title:this.title,filePath:this.filePath})}addFlag(t,e){const s={key:t,value:e};return this.otherFlags.push(s),s}removeFlag(t){for(let e=0;e<this.otherFlags.length;e++)if(this.otherFlags[e].key===t)return this.otherFlags.splice(e,1),e;return-1}redirectTo(t,e,s){return!this.redirectFrom[0].includes(this.filePath)&&(this.isRedirectPage=!0,this.redirectFrom[0].push(this.filePath),this.redirectFrom[1].push(this.title),location.hash=Object(l["buildHash"])({path:Object(l["shortenPath"])(t),anchor:e||this.anchor,query:s||this.queryStr}),!0)}async loadBacklinks(){this.isLoadingBacklinks=!0,this.fileTs||(this.fileTs=await Object(b["a"])());const{files:t,backlinks:e}=await this.fileTs.getFiles(),s=e[this.filePath];s&&s.length>0?(this.backlinks=[...s],this.backlinkFiles=s.map(e=>{const s=t[e];return{path:s.path,flags:JSON.parse(JSON.stringify(s.flags))}}).sort(this.fileTs.sortFiles)):(this.backlinks=[],this.backlinkFiles=[]),this.isLoadingBacklinks=!1,this.hasLoadedBacklinks||(this.hasLoadedBacklinks=!0)}getListHtml(t){return Object(c["createList"])(t).innerHTML}getQueryTagLinks(t){return Object(c["getQueryTagLinks"])(t)}returnHome(){Object(l["returnHome"])()}};E=Object(n["a"])([Object(j["Component"])({components:{Article:w}})],E);var _=E,F=_,S=(s("d5f5"),Object(y["a"])(F,i,a,!1,null,null,null));e["default"]=S.exports},"7b30":function(t,e,s){"use strict";s("1ffc")},d5f5:function(t,e,s){"use strict";s("3908")},eab5:function(t,e,s){},fead:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{attrs:{id:"toggle-dark"},on:{click:t.toggleDark}},[t._v(t._s(t.darkMarks[t.isDark?1:0]))]),s("span",{ref:"toggleZen",class:t.isZen?"spin":null,attrs:{id:"toggle-zen"},on:{click:t.toggleZen}},[t._v(t._s(t.zenMark))]),s("span",{ref:"toTop",class:t.isScrolling?"spin":null,attrs:{id:"to-top"},on:{click:t.toTop}},[t._v(t._s(t.toTopMark))])])},a=[],r=s("ade3"),n=s("9ab4"),o=s("8964"),c=s("4c55"),h=s("4397"),l=s("1889"),d=s("72db"),u=s("1b40");let g=class extends u["Vue"]{constructor(...t){super(...t),Object(r["a"])(this,"addToKeyInput",void 0),Object(r["a"])(this,"$refs",void 0),Object(r["a"])(this,"metaTheme",void 0),Object(r["a"])(this,"isDark",!1),Object(r["a"])(this,"isZen",!1),Object(r["a"])(this,"isScrolling",!1),Object(r["a"])(this,"darkMarks",["★","☆"]),Object(r["a"])(this,"zenMark","▣"),Object(r["a"])(this,"toTopMark","と")}get metaThemeColor(){return this.isDark?this.isZen?"#2b2b2b":"#3b3b3b":this.isZen?"#efefef":"#ffffff"}created(){Object(d["a"])({gadgetSelf:this,toggleDark:this.toggleDark,toggleZen:this.toggleZen,toTop:this.toTop,toBottom:this.toBottom}),this.metaTheme=document.querySelector('meta[name="theme-color"]'),this.isDark=!!h["getItem"]("dark"),this.isZen=!!h["getItem"]("zen"),Object(l["addInputBinds"])({dark:this.toggleDark,zen:this.toggleZen,G:this.toTop,gg:()=>{this.toBottom(),this.addToKeyInput("_")}}),this.$watch("isDark",()=>{this.metaTheme.setAttribute("content",this.metaThemeColor),this.isDark?(document.body.classList.add("dark"),h["setItem"]("dark",String(!0))):(Object(o["removeClass"])(document.body,"dark"),h["removeItem"]("dark")),this.$nextTick(()=>Object(o["dispatchEvent"])(c["EEvent"].toggleDark,this.isDark))}),this.$watch("isZen",()=>{this.metaTheme.setAttribute("content",this.metaThemeColor),this.isZen?(document.body.classList.add("zen"),h["setItem"]("zen",String(!0))):(this.$nextTick(()=>Object(o["removeClass"])(this.$refs.toggleZen)),Object(o["removeClass"])(document.body,"zen"),h["removeItem"]("zen")),this.$nextTick(()=>Object(o["dispatchEvent"])(c["EEvent"].toggleZen,this.isZen))})}toggleDark(){this.isDark=!this.isDark}toggleZen(){this.isZen=!this.isZen}toTop(){this.isScrolling||this.scroll()}toBottom(){this.isScrolling||this.scroll(!0)}scroll(t=!1){this.isScrolling=!0,Object(o["scroll"])(t?document.body.offsetHeight:0),setTimeout(()=>{this.isScrolling=!1,this.$nextTick(()=>Object(o["removeClass"])(this.$refs.toTop))},500),this.$nextTick(()=>Object(o["dispatchEvent"])(c["EEvent"].toTop,!t))}};Object(n["a"])([Object(u["Prop"])()],g.prototype,"addToKeyInput",void 0),g=Object(n["a"])([u["Component"]],g);var f=g,m=f,b=(s("7b30"),s("2877")),p=Object(b["a"])(m,i,a,!1,null,null,null);e["default"]=p.exports}}]);