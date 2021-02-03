# 性能优化

@tags: 杂项
@updated: 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

v-no 主要通过优化代码打包和网络请求来提高它的性能。

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
        - `prismjs.[hash].js`：打包了 Prism.js，只在必要时才会引入。
- `.css` 文件：
    - `app.[hash].css`：同步引入，`App.vue` 使用的样式。
    - `main.[hash].css`：异步引入，`Main.vue`、`Article.vue`、`Gadget.vue` 使用的样式。
    - `prismjs.[hash].css`：只在必要时才会引入的 Prism.js 主题样式。

只有需要同步引入的代码文件都加载完成后才会开始载入异步文件。

## 网络请求

首先要优化的是代码文件体积，然后尝试尽可能的并发请求和预载。

同步文件的整体体积很难有所调整，瓶颈在 Vue.js 上，v2.x 还没有办法压缩它。我期待 Vue 3.0 的 Tree Shaking 特性，但是尝试切换过去后，发现打包体积还增长了，文档也没有找到相关的说明，暂时搁置。

对于异步文件，代码打包已经分的很细致了。除了 Prism.js 是在页面渲染完成之后按需请求的，其它文件都会在第一时间同时加载。v-no 会在 `main.[hash].js` 和 `file.[hash].js` 都加载完成后，请求渲染当前页面必须的 `.md` 文件。在 `.md` 文件和 `markdown.[hash].js` 都加载完成后才会开始渲染页面，最后再处理其它的异步请求。

已经加载的 `.md` 文件会缓存在内存中，v-no 会保证一个文件在一个浏览器标签页下只会被请求一次。它也会提前加载被当前页面引用的其它文件，就算它们没有被渲染。

如果你访问了使用[](/zh/docs/list.md "#")的页面（比如 [](/zh/categories.md "#")）、进行搜索，或者查看页面反链，都会产生一次对所有文件的检索。v-no 使用层序遍历算法逐层请求文件引用树，它以配置文件里的基础 `.md` 文件作为递归起点，每一层的所有请求都会同时发出，在它们都完成后进入下一层，直到没有新的文件出现。

这里有一份 Chrome 对[](/zh/index.md "#")的网络请求分析图：

![](/uploads/images/disable-cache-fast-3g-no-cdn-performance.png)
: 禁用缓存 + Fast 3G 网络模拟 + 不使用 CDN。
