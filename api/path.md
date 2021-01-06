# path

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## isExternalLink(href)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `href: string`
- 返回值：`boolean`

## checkLinkPath(path)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`string`

## shortenPath(path, ext?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
    - `ext = 'md'`
- 返回值：`string`

## baseUrl

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## publicPath

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## indexPath

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## cdnUrl

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## homePath

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## disableCDN()

[+#1.2.1](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

## enableCDN()

[+#1.2.1](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

## addBaseUrl(path)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`string`

## cleanBaseUrl(path)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`string`

## buildHash(hashPath)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `hashPath: THashPath`
- 返回值：`string`

## buildQueryContent(content, isFull?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `content: string`
    - `isFull = false`
- 返回值：`string`

## buildQueryFlagUrl(flag, text)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `flag: enums.EFlag`
    - `text: string`
- 返回值：`string`

## parseHash(hash, isShort?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `hash: string`
    - `isShort = false`
- 返回值：`THashPath`

## changeAnchor(anchor)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `anchor: string`
- 返回值：无

## changeQueryContent(content)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `content: string`
- 返回值：无

## parseRoute(route)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `route: Route`
- 返回值：`THashPath`

## parseQuery(queryStr)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `queryStr: string`
- 返回值：`TQuery`

## formatQuery(query)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `query: TQuery`
- 返回值：`string`

## returnHome()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无
