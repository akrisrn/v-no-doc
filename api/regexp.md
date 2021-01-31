# regexp

@tags: API
@updated: 1609910685000, 1612093023000
@creator: AkrISrn
@updater: AkrISrn
@commit: fed4591

[toc]

## getHeadingRegExp(min?, max?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `min = 1`
    - `max = 6`
    - `flags?: string`
- 返回值：`RegExp`

获取匹配 Markdown 标题语法的正则表达式。

## getLinkRegExp(startWithSlash?, isImg?, isLine?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `startWithSlash = false`
    - `isImg = false`
    - `isLine = false`
    - `flags?: string`
- 返回值：`RegExp`

获取匹配 Markdown 链接语法的正则表达式。

## getSnippetRegExp(flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `flags?: string`
- 返回值：`RegExp`

获取匹配嵌入链接语法的正则表达式。

## getAnchorRegExp(isLine?, min?, max?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `isLine = true`
    - `min = 2`
    - `max = 6`
    - `flags?: string`
- 返回值：`RegExp`

获取匹配锚点语法的正则表达式。

## getMarkRegExp(mark, isLine?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `mark: string`
    - `isLine = true`
    - `flags = 'im'`
- 返回值：`RegExp`

获取匹配标记语法的正则表达式。

## getWrapRegExp(left, right?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `left: string`
    - `right = left`
    - `flags?: string`
- 返回值：`RegExp`

获取匹配被指定字符串包围的字符串的正则表达式。
