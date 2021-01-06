# regexp

@tags: API

[toc]

## getHeadingRegExp(min?, max?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `min = 1`
    - `max = 6`
    - `flags?: string`
- 返回值：`RegExp`

## getLinkRegExp(startWithSlash?, isImg?, isLine?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `startWithSlash = false`
    - `isImg = false`
    - `isLine = false`
    - `flags?: string`
- 返回值：`RegExp`

## getSnippetRegExp(flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `flags?: string`
- 返回值：`RegExp`

## getAnchorRegExp(isLine?, min?, max?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `isLine = true`
    - `min = 2`
    - `max = 6`
    - `flags?: string`
- 返回值：`RegExp`

## getMarkRegExp(mark, isLine?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `mark: string`
    - `isLine = true`
    - `flags = 'im'`
- 返回值：`RegExp`

## getWrapRegExp(left, right?, flags?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `left: string`
    - `right = left`
    - `flags?: string`
- 返回值：`RegExp`
