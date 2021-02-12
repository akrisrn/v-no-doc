# 性能优化

@tags: 开发
@updated: 1610346176000, 1612966734000
@creator: AkrISrn
@updater: AkrISrn
@commit: eb862ba

这里记录了我对 v-no 的$$: title $$思路，它的代码执行效率没有太大可优化空间，主要还是通过优化代码打包和网络请求来提高页面响应速度。

## 代码打包

- `.js` 文件：
    - 同步引入（`preload`）：
        - `config.js`
        - `chunk-vendors.[hash].js`：打包了 Vue.js、vue-router、vue-class-component，以及一些 Polyfill。
        - `app.[hash].js`：打包了 `App.vue`，以及 Vue 组件之外需要预载的代码。
    - 异步引入（`prefetch`）：
        - `main.[hash].js`：打包了 `Main.vue`、`Article.vue`、`Gadget.vue`。
        - `file.[hash].js`：打包了 axios、Day.js，以及处理 `.md` 文件相关的代码。
        - `markdown.[hash].js`：打包了 markdown-it 及其插件，以及渲染页面相关的代码。
        - `prismjs.[hash].js`：打包了 Prism.js 及其插件，只在必要时才会引入。
- `.css` 文件：
    - `app.[hash].css`：同步引入，`App.vue` 使用的样式。
    - `main.[hash].css`：异步引入，`Main.vue`、`Article.vue`、`Gadget.vue` 使用的样式。
    - `prismjs.[hash].css`：Prism.js 主题样式，只在必要时才会引入。

只有当需要同步引入的代码文件都加载完成后，才会开始载入异步文件。

同步文件的最大构建体积（启用运行时编译 + 非现代模式）在 233 KB 左右，为了不超过 Webpack 建议的 244 KB 上限，我可是很努力的分割代码了（所有代码文件的总体积是它两倍）。作为对比，相同配置下的一个空应用体积为 150 KB。

这个体积很难有所调整，瓶颈在 Vue.js 及其插件上。Vue.js 不用多说，3.0 的 Tree Shaking 特性应该有所帮助，等它正式发布后我会尝试迁移过去。vue-router 和 vue-class-component 目前还无法割舍，因为 v-no 只有一个匹配所有路径的通配符路由，我可能会考虑自己实现一个 router 替换掉前者。不过后者不行，移除它实在影响开发效率和我的心情。

其它外部依赖主要打包在异步文件中。我以后说不定会用 fetch API 替换掉 axios，而 Day.js、markdown-it（超大，它占了 100 KB）、Prism.js（需要高亮的语言越多越大）还没有替代方案。虽然造轮子很开心，我也没精力全部自己实现。

## 网络请求

优化完文件体积，之后就是要尽可能预载、并发请求它们，要是能加上缓存那就更好了。

对同步文件的请求会同时发出，对异步文件的预载也会一并进行，不过它们的优先级不高。在同步文件都加载完成后（最后等的一定是 `chunk-vendors.[hash].js`），对异步文件的请求正式发出。除了 Prism.js 相关代码文件是在页面渲染完成之后按需请求的，其它文件都会在第一时间同时加载。

v-no 会在 `main.[hash].js` 和 `file.[hash].js` 都加载完成后，请求渲染当前页面所必须的 `.md` 文件。在 `.md` 文件和 `markdown.[hash].js` 都加载完成后才会开始渲染页面，最后再处理其它异步请求。所以我尽可能减少了 `file.[hash].js` 的体积，让它的加载时间加上 `.md` 文件的加载时间尽量接近 `markdown.[hash].js` 的加载时间，最理想的情况当然是两边同时加载完成。

请求过的 `.md` 文件会缓存在内存中，v-no 会保证一个文件在一个浏览器标签页下只会被请求一次（除非你用 [`vno.file.disableCache()`](/zh/api/file.md "#h2-3") 临时禁用它）。它也会在解析 `.md` 文件时提前加载用 `text` 部分留空的 Markdown 链接语法引用的其它 `.md` 文件，就算它们没有被渲染。我承认这样做有些浪费资源的嫌疑，不过考虑到检索全文件还是蛮常见的，就让它提前做点微小的工作吧。

只要你访问了使用[](/zh/docs/list.md "#")的页面（比如[分类页](/zh/categories.md "#")）、进行搜索，或者查看页面反链，就会产生一次对所有 `.md` 文件的检索。v-no 使用层序遍历算法逐层请求文件引用树，它以配置文件里的基础 `.md` 文件作为递归起点，每一层的所有请求都会同时发出，在它们都完成后进入下一层，直到没有新的文件出现。

说这么多，不如来一份 Chrome 对[](/zh/index.md "#")的网络请求分析图：

![](/uploads/images/disable-cache-fast-3g-no-cdn-performance.png)
: 禁用缓存 + Fast 3G 网络模拟 + 不使用 CDN。

这里只需要注意两个时间点：2000 ms 和 3500 ms。在前者时间点上，同步文件加载完成，正在请求异步文件。后者则是渲染结束、页面开始显现的时间点，在它之后就只有对页面的异步更新了。

当然，这个图仅供参考，真实情况没有这么慢，请求顺序也不会像它这样清晰，甚至都不一定会一致。我还没有完全理清 Chrome 到底是怎么个请求逻辑，只能一边分析一边做出上面的优化。如果你有更好的想法，请一定要告诉我！
