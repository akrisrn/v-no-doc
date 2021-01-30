# mainSelf

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## fileTs

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof file | null`

[`vno.file`](/api/file.md "#") 模块实例。

## fileData

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

初步预处理过的页面文件内容。

## title

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

页面标题。

## tags

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string[]`

标签列表。

## startDate

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

最旧日期。

## endDate

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

最新日期。

## cover

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

题图地址。

## creator

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

创建者。

## updater

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

更新者。

## otherFlags

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`TFlag[]`

非预定义的 Flag 列表。

## links

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string[]`

页面文件所链接的其它文件地址列表。

## backlinks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string[]`

链接到页面文件的其它文件地址列表。

## backlinkFiles

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`ISimpleFile[]`

链接到页面文件的其它文件简易对象列表。

## isLoadingBacklinks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否正在加载反向链接。

## hasLoadedBacklinks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否已经加载过反向链接。

## showTime

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`number`

页面展示前的时间戳。

## isShow

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否展示页面。

## isError

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否为错误页面。

## isRedirectPage

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否为重定向页面。

## redirectFrom

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`TRedirectList`

重定向到页面文件的链接列表。

## initing

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`boolean`

页面初始化状态。

## <mark>get</mark> homePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof store.state.homePath`

同 [`vno.store.state.homePath`](/api/store.md "#h2-1")

## <mark>get</mark> filePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof store.state.filePath`

同 [`vno.store.state.filePath`](/api/store.md "#h2-1")

## <mark>get</mark> anchor()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof store.state.anchor`

同 [`vno.store.state.anchor`](/api/store.md "#h2-1")

## <mark>get</mark> queryStr()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof store.state.queryStr`

同 [`vno.store.state.queryStr`](/api/store.md "#h2-1")

## <mark>get</mark> shortFilePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

页面文件的短路径（省略 `index.md`）。

## <mark>get</mark> rawFilePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

页面文件的源路径。

## <mark>get</mark> query()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`TQuery`

[`vno.mainSelf.queryStr`](/api/mainSelf.md "#h2-25") 转换后的对象。

## <mark>get</mark> config()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof config.config`

同 [`vno.config.config`](/api/config.md "#h2-2")

## <mark>get</mark> isIndexFile()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否为主页。

## <mark>get</mark> lastUpdatedMessage()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

最后更新信息。

## <mark>get</mark> iconSync()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

Sync 图标元素。

## <mark>get</mark> iconBacklink()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

反向链接图标元素。

## reload(toTop?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `toTop = false`
- 返回值：无

重载页面。

## getData()

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<TFileData | undefined>`

获取页面文件的内容。

## setData(fileData?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `fileData?: TFileData`
- 返回值：无

更新页面。

## setFlags(flags)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `flags: IFlags`
- 返回值：无

更新 Flag。

## addFlag(key, value, sort?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `key: string`
    - `value: string`
    - `sort = true`
- 返回值：无

添加非预定义的 Flag。

## removeFlag(key)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `key: string`
- 返回值：无

移除非预定义的 Flag。

## getBacklinks()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<void>`

加载反向链接。

## getListHtml(file)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `file: ISimpleFile`
- 返回值：`string`

同 [`vno.element.createList`](/api/element.md "#h2-9") 的 `innerHTML`。

## getQueryTagLinks(tag)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `tag: string`
- 返回值：`TAnchor[]`

同 [`vno.element.getQueryTagLinks`](/api/element.md "#h2-8")。

## returnHome()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

同 [`vno.path.returnHome`](/api/path.md "#h2-22")。
