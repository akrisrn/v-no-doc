# 环境变量

@tags: 开发/编译
@updated: 2020/12/12

v-no 有几个会影响编译结果的环境变量，它们储存在项目根目录下的 `.env` 文件中。

这是默认的 `.env` 文件：

[+](/docs/env.md)

变量说明：

| | |
| - | - |
| `VUE_APP_PUBLIC_PATH` | 应用的部署路径。如果部署到根域名（`http://localhost/`），它就是 `/`；如果部署到根域名下的某个目录（`http://localhost/v-no-doc/`），它是这个目录的路径（`/v-no-doc/`）。请避免让此项留空，或使用相对路径，这会让 v-no 产生许多预料之外的问题。 |
| `VUE_APP_INDEX_PATH` | 主页 HTML 文件的输出路径，它是应用的唯一入口。如果要进行预渲染，请避免让它和同名 `.md` 文件处于同一目录（同名 `.md` 文件的预渲染页面会把它覆盖掉）。通常建议在需要预渲染时把此项改为 `-/index.html`。 |
| `PRISM_LANGUAGES` | Prism.js 会高亮的语言列表，注意用英文逗号进行分隔。你可以参考 [Prism.js 支持的语言](https://prismjs.com/index.html#supported-languages)填写此项。 |

前两个变量直接传递给 `vue.config.js`，它们对应 [Vue CLI 文档](https://cli.vuejs.org/zh/config/)里的 `publicPath` 和 `indexPath`。

对了，一般不建议直接修改 `.env` 文件。你可以把它复制一份，改名为 `.env.local`，它会覆盖 `.env` 里的同名变量。这些文件都是交给 Vue CLI 解析，你也有[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)可以参考。
