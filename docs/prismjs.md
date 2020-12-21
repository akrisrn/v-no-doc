# Prism.js

@tags: 开发/依赖
@updated: 1608535980000
@creator: AkrISrn
@updater: AkrISrn
@commit: 4d91852

v-no 使用 [Prism.js](https://prismjs.com/) 对代码块进行高亮。如果你不需要用到它，最多只能将 `PRISM_LANGUAGES` [](/docs/env-vars.md "#")设为空，目前还没有办法完全把它移除（默认打包的 JS + CSS 体积在 53 KB 左右，最小能把它们减到 8 KB）。

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

## [+](/docs/compile-prismjs.md "#")
