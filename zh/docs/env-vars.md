# 环境变量

@tags: 开发/编译
@updated: 1607752145000, 1613115194000
@creator: AkrISrn
@updater: AkrISrn
@commit: b2345cc

v-no 有几个会影响编译结果的$$: title $$，它们储存在项目根目录下的 `.env` 文件中。

这是默认的 `.env` 文件：

[+](/zh/snippets/env.md)

变量说明：

| | |
| - | - |
| `VUE_APP_PUBLIC_PATH` | 应用的部署路径。如果部署到根域名（`http://localhost/`），它就是 `/`；如果部署到根域名下的某个目录（`http://localhost/v-no-doc/`），它是这个目录的路径（`/v-no-doc/`）。请避免让此项留空，或使用相对路径，这会让 v-no 产生许多预料之外的问题。 |
| `VUE_APP_INDEX_PATH` | 主页 HTML 文件的输出路径，它是应用的唯一入口。如果要进行预渲染，请避免让它和同名 `.md` 文件处于同一目录（同名 `.md` 文件的预渲染页面会把它覆盖掉）。通常建议在需要预渲染时把此项改为 `-/index.html`。 |
| `VUE_APP_CDN_URL` | 网站使用的 CDN 地址，需要以 `/` 结尾。它可以让 v-no 自身代码文件和配置文件也能使用 CDN 链接，以达到全站 CDN 的目的。配置文件的 [`cdn`](/zh/docs/main-conf.md "#") 配置项会在启用它进行编译后失效。如果此项为空，它会被忽略。 |
| `PRISM_LANGUAGES` | Prism.js 会高亮的语言列表，注意用英文逗号进行分隔。你可以参考 [Prism.js 支持的语言](https://prismjs.com/index.html#supported-languages)填写。如果此项为空，会将 Prism.js 的打包体积压到最小。 |

`VUE_APP_PUBLIC_PATH` 和 `VUE_APP_INDEX_PATH` 直接传递给 `vue.config.js`，它们对应 [Vue CLI 文档](https://cli.vuejs.org/zh/config/)里的 `publicPath` 和 `indexPath`。

如果 `VUE_APP_CDN_URL` 不为空，它会在生产环境构建时替换掉 `VUE_APP_PUBLIC_PATH`。

一般不建议直接修改 `.env` 文件。你可以把它复制一份，改名为 `.env.local`，它会覆盖 `.env` 里的同名变量。这些文件都是交由 Vue CLI 解析的，你也有[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)可以参考。
