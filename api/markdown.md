# markdown

@tags: API

[toc]

## markdownIt

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`MarkdownIt`

## parseMD(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`Token[]`

## renderMD(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`string`

## updateAsyncScript(result)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `result: TAsyncResult`
- 返回值：`boolean`

## replaceInlineScript(path, data, asyncResults?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
    - `data: string`
    - `asyncResults?: TAsyncResult[]`
- 返回值：`string`

## updateSnippet(data, updatedPaths, asyncResults?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
    - `updatedPaths: string[]`
    - `asyncResults?: TAsyncResult[]`
- 返回值：`Promise<string>`

## updateList(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`Promise<string>`

## preprocessSearchPage(data)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data: string`
- 返回值：`string`

## updateSearchPage(content)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `content: string`
- 返回值：`Promise<void>`

## updateHighlight()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<void>`

## updateDom()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<void>`
