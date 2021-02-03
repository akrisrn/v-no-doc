# path

@tags: API
@updated: 1609910685000, 1612245872000
@creator: AkrISrn
@updater: AkrISrn
@commit: db6d49b

[toc]

## isExternalLink(href)

[+#1.2.2|zh](/snippets/latest-version.md)

- 参数：
    - `href: string`：链接地址。
- 返回值：`boolean`

判断链接地址是否为外部链接。

## checkLinkPath(path)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
- 返回值：`string`

检查文件路径是否符合要求。

## shortenPath(path, ext?)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
    - `ext = 'md'`：`index.` 的扩展名。
- 返回值：`string`

缩短文件路径。

## baseUrl

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

URL 前缀。如果生产环境下的 [`cdnUrl`](/zh/api/path.md "#h2-7") 不为空，它就是 `cdnUrl`，否则为 [`publicPath`](/zh/api/path.md "#h2-5")。

## publicPath

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

URL 前缀。

## indexPath

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

`index.html` 路径。

## cdnUrl

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

CDN 前缀。

## homePath

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

主页路径。

## disableCDN()

[+#1.2.1|zh](/snippets/latest-version.md)

- 参数：无
- 返回值：无

禁用 CDN。

## enableCDN()

[+#1.2.1|zh](/snippets/latest-version.md)

- 参数：无
- 返回值：无

启用 CDN。

## addBaseUrl(path)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
- 返回值：`string`

为文件路径添加 URL 前缀。

## cleanBaseUrl(path)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
- 返回值：`string`

清除文件路径中的 URL 前缀。

## buildHash(hashPath)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `hashPath: THashPath`：Hash 路径对象。
- 返回值：`string`

根据 Hash 路径对象构建 Hash 地址。

## buildQueryContent(content, isFull?)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `content: string`：`content` 参数值。
    - `isFull = false`：是否为完整 Hash 地址。
- 返回值：`string`

构建包含 `content` 参数的 URL 查询字符串。

## buildQueryFlagUrl(flag, text)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `flag: enums.EFlag`：Flag 类型。
    - `text: string`：Flag 值。
- 返回值：`string`

构建查询 Flag 的 Hash 地址。

## parseHash(hash, isShort?)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `hash: string`：Hash 字符串。
    - `isShort = false`：是否缩短地址。
- 返回值：`THashPath`

解析 Hash 字符串为 Hash 路径对象。

## changeAnchor(anchor)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `anchor: string`：Hash 锚点。
- 返回值：无

更改 URL Hash 锚点。

## changeQueryContent(content)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `content: string`：`content` 参数值。
- 返回值：无

更改 URL 查询字符串。

## parseRoute(route)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `route: Route`：vue-router 的路由对象。
- 返回值：`THashPath`

解析 vue-router 的路由对象为 Hash 路径对象。

## parseQuery(queryStr)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `queryStr: string`：URL 查询字符串。
- 返回值：`TQuery`

解析 URL 查询字符串为查询对象。

## formatQuery(query)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `query: TQuery`：查询对象。
- 返回值：`string`

格式化查询对象为 URL 查询字符串。

## returnHome()

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：无
- 返回值：无

返回主页。
