# markdown-it

@tags: 开发/依赖
@updated: 1610422050000, 1612966384000
@creator: AkrISrn
@updater: AkrISrn
@commit: 1267d71

v-no 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 渲染 Markdown 文件，它的打包体积在 100 kb 左右。

它包含以下几个插件：

- [markdown-it-container](https://github.com/markdown-it/markdown-it-container)：解析 `<details>` 标签语法标记（`:::`）。
- [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist)：解析 `<dl>` 标签语法标记（`:`）。
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)：解析脚注语法标记（`[^1]`）。
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists)：解析任务列表语法标记（`- [x]`）。

markdown-it 有着丰富的插件生态，我会较为克制地引入它们。对于在 GFM (GitHub Flavored Markdown) 标准之外的语法，如果它在渲染后只是一个简单 HTML 标签，我不太喜欢为它增加一个新的语法标记（现有的行内标记已经足够让人混淆了）。

v-no 主要通过[重写部分核心语法的渲染规则](https://github.com/akrisrn/v-no/blob/master/src/ts/async/markdown.ts)来达到扩展它的目的，不过更多的处理工作还是放在了[渲染之后的 DOM 更新](https://github.com/akrisrn/v-no/blob/master/src/ts/async/update.ts)上。
