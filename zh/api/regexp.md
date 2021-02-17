# regexp

@tags: API
@updated: 1609910685000, 1613532791000
@creator: AkrISrn
@updater: AkrISrn
@commit: 575f9b2

[toc]

## getHeadingRegExp(min?, max?, flags?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `min = 1`：最小标题层级。
    - `max = 6`：最大标题层级。
    - `flags?: string`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配 Markdown 标题语法的正则表达式。

## getLinkRegExp(startWithSlash?, isImg?, isLine?, flags?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `startWithSlash = false`：链接地址是否以 `/` 开头。
    - `isImg = false`：是否为图片链接。
    - `isLine = false`：是否为行匹配。
    - `flags?: string`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配 Markdown 链接语法的正则表达式。

## getWrapRegExp(left, right?, flags?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
  - `left: string`：左侧字符串。
  - `right = left`：右侧字符串。
  - `flags?: string`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配被指定字符串包围的字符串的正则表达式。

## getMarkRegExp(mark, isLine?, flags?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
  - `mark: string`：标记字符串。
  - `isLine = true`：是否为行匹配。
  - `flags = 'im'`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配标记语法的正则表达式。

## getSnippetRegExp(flags?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `flags?: string`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配嵌入链接语法的正则表达式。

## getAnchorRegExp(isLine?, min?, max?, flags?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `isLine = true`：是否为行匹配。
    - `min = 2`：最小 Hash 锚点层级。
    - `max = 6`：最大 Hash 锚点层级。
    - `flags?: string`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配 Hash 锚点语法的正则表达式。

## getParamRegExp(flags?)

[+#1.2.6](/snippets/latest-version.md)

- 参数：
    - `flags = 'g'`：正则表达式的 `flags`。
- 返回值：`RegExp`

获取匹配[嵌入参数](/zh/docs/snippets.md "#h2-1")语法的正则表达式。
