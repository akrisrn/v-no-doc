# Prism.js

@tags: 开发/依赖
@updated: 1608535980000, 1612966734000
@creator: AkrISrn
@updater: AkrISrn
@commit: eb862ba

v-no 使用 [Prism.js](https://github.com/PrismJS/prism) 对代码块进行高亮，需要高亮的语言越多，它的打包体积越大。如果你完全用不到它，最多只能将 `PRISM_LANGUAGES` [](/zh/docs/env-vars.md "#")设为空，目前还没有办法将它彻底移除（默认打包的 JS + CSS 体积在 42 KB 左右，[](/zh/docs/env-vars.md "#")设空后能减少到 7 KB）。

不过因为它是动态引入的，只在页面有需要高亮的代码块时才会被加载，所以你也不用担心体积太大的代码文件会影响到页面的加载速度。

它默认支持的语言：

- Markup：`markup`、`html`、`xml`、`svg`、`mathml`、`ssml`、`atom`、`rss`
- CSS：`css`
- C-like：`clike`
- JavaScript：`javascript`、`js`

使用的插件：

- [line-numbers](https://prismjs.com/plugins/line-numbers/)
- [line-highlight](https://prismjs.com/plugins/line-highlight/)（像这样把它们加到语言标记后 ` ```text|1-2,5,9-20`）
- [show-language](https://prismjs.com/plugins/show-language/)
- [copy-to-clipboard](https://prismjs.com/plugins/copy-to-clipboard/)

使用的主题：`tomorrow`。

## [+](/zh/docs/compile-prismjs.md "#")
