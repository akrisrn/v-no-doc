# markdown

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## markdownIt

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`MarkdownIt`

`markdownIt` 对象。

## parseMD(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`Token[]`

解析 Markdown。

## renderMD(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`string`

渲染 Markdown。

## updateAsyncScript(result)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `result: TAsyncResult`
- 返回值：`boolean`

更新异步[](/docs/inline-script.md "#")。

## replaceInlineScript(path, data, asyncResults?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
    - `data: string`
    - `asyncResults?: TAsyncResult[]`
- 返回值：`string`

执行[](/docs/inline-script.md "#")。

## updateSnippet(data, updatedPaths, asyncResults?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
    - `updatedPaths: string[]`
    - `asyncResults?: TAsyncResult[]`
- 返回值：`Promise<string>`

合并嵌入文件。

## updateList(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`Promise<string>`

更新列表标记。

## preprocessSearchPage(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`string`

预处理搜索页的标记。

## updateSearchPage(content)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `content: string`
- 返回值：`Promise<void>`

更新搜索页。

## updateHighlight()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<void>`

更新代码高亮。

## updateDom()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<void>`

更新 `document`。
