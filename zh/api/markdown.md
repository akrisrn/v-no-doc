# markdown

@tags: API
@updated: 1609910685000, 1613906715000
@creator: AkrISrn
@updater: AkrISrn
@commit: 26f1ac7

[toc]

## markdownIt

[+#1.2.0](/snippets/latest-version.md)

- 类型：`MarkdownIt`

`markdownIt` 对象。

## parseMD(data)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `data: string`：Markdown 字符串。
- 返回值：`Token[]`

解析 Markdown 字符串为 `markdownIt` 的 `Token` 列表。

## renderMD(data, replaceMark?)

[+#1.2.4](/snippets/latest-version.md)

- 参数：
    - `data: string`：Markdown 字符串。
    - `replaceMark = true`：是否替换标记。
- 返回值：`string`

将 Markdown 字符串渲染为 HTML。

## updateAsyncScript(asyncResult)

[+#1.2.9](/snippets/latest-version.md)

- 参数：
    - `asyncResult: TAsyncResult`：异步结果。
- 返回值：`boolean`

用异步结果更新页面。如果没找到元素则返回 `false`。

## updateInlineScript(path, title, data, isSnippet?, asyncResults?)

[+#1.2.9](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
    - `title: string`：文件标题。
    - `data: string`：Markdown 字符串。
    - `isSnippet = false`：是否执行在[](/zh/docs/snippets.md "#")中。
    - `asyncResults?: TAsyncResult[]`：异步[](/zh/docs/inline-script.md "#")的执行结果列表。
- 返回值：`string`

执行 Markdown 字符串中使用的[](/zh/docs/inline-script.md "#")，返回更新后的字符串。

## updateSnippet(data, updatedPaths, asyncResults?)

[+#1.2.9](/snippets/latest-version.md)

- 参数：
    - `data: string`：Markdown 字符串。
    - `updatedPaths: string[]`：已经更新过的文件路径列表。
    - `asyncResults?: TAsyncResult[]`：异步[](/zh/docs/inline-script.md "#")的执行结果列表。
- 返回值：`Promise<string>`

合并 Markdown 字符串中使用嵌入链接引用的文件，返回更新后的字符串。

## updateList(data)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `data: string`：Markdown 字符串。
- 返回值：`Promise<string>`

预处理 Markdown 字符串中使用的 `[list]` 标记，返回更新后的字符串。

## preprocessSearchPage(data)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `data: string`：Markdown 字符串。
- 返回值：`string`

预处理 Markdown 字符串中使用的搜索页相关标记，返回更新后的字符串。

## updateSearchPage(content)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `content: string`：查询内容。
- 返回值：`Promise<void>`

用查询内容更新搜索页。

## updateHighlight()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：`Promise<void>`

高亮代码块。

## updateDom()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：`Promise<void>`

用一堆函数更新 `document`。
