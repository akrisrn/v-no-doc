# path

@tags: API
@updated: 1609910685000, 1612093023000
@creator: AkrISrn
@updater: AkrISrn
@commit: fed4591

[toc]

## isExternalLink(href)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `href: string`
- 返回值：`boolean`

是否为外部链接。

## checkLinkPath(path)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`string`

检查链接地址是否符合要求。

## shortenPath(path, ext?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
    - `ext = 'md'`
- 返回值：`string`

缩短地址。

## baseUrl

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

URL 前缀。

## publicPath

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

URL 前缀。

## indexPath

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

`index.html` 路径。

## cdnUrl

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

CDN 前缀。

## homePath

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

主页路径。

## disableCDN()

[+#1.2.1](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

禁用 CDN。

## enableCDN()

[+#1.2.1](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

启用 CDN。

## addBaseUrl(path)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`string`

为地址添加 URL 前缀。

## cleanBaseUrl(path)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`string`

清除地址中的 URL 前缀。

## buildHash(hashPath)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `hashPath: THashPath`
- 返回值：`string`

构建 Hash 路径。

## buildQueryContent(content, isFull?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `content: string`
    - `isFull = false`
- 返回值：`string`

构建包含 `content` 参数的 URL 查询字符串。

## buildQueryFlagUrl(flag, text)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `flag: enums.EFlag`
    - `text: string`
- 返回值：`string`

构建查询 Flag 的 URL 地址。

## parseHash(hash, isShort?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `hash: string`
    - `isShort = false`
- 返回值：`THashPath`

解析 Hash 路径。

## changeAnchor(anchor)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `anchor: string`
- 返回值：无

更换 URL 锚点。

## changeQueryContent(content)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `content: string`
- 返回值：无

更换 URL 查询字符串。

## parseRoute(route)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `route: Route`
- 返回值：`THashPath`

解析 vue-router 的路由对象。

## parseQuery(queryStr)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `queryStr: string`
- 返回值：`TQuery`

解析 URL 查询字符串。

## formatQuery(query)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `query: TQuery`
- 返回值：`string`

格式化查询对象为 URL 查询字符串。

## returnHome()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

返回主页。
