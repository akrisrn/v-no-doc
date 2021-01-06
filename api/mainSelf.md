# mainSelf

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## fileTs

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof vno.file | null`

## fileData

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## title

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## tags

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string[]`

## startDate

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## endDate

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## cover

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## creator

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## updater

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## otherFlags

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`TFlag[]`

## links

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string[]`

## backlinks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string[]`

## backlinkFiles

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`ISimpleFile[]`

## isLoadingBacklinks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

## hasLoadedBacklinks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

## showTime

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`number`

## isShow

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

## isError

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

## isRedirectPage

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

## redirectFrom

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`TRedirectList`

## initing

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`boolean`

## <mark>get</mark> homePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof vno.store.state.homePath`

## <mark>get</mark> filePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof vno.store.state.filePath`

## <mark>get</mark> anchor()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof vno.store.state.anchor`

## <mark>get</mark> queryStr()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof vno.store.state.queryStr`

## <mark>get</mark> shortFilePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## <mark>get</mark> rawFilePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## <mark>get</mark> query()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`TQuery`

## <mark>get</mark> config()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof vno.config.config`

## <mark>get</mark> isIndexFile()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

## <mark>get</mark> lastUpdatedMessage()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## <mark>get</mark> iconSync()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## <mark>get</mark> iconBacklink()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## reload(toTop?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `toTop = false`
- 返回值：无

## getData()

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<TFileData | undefined>`

## setData(fileData?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `fileData?: TFileData`
- 返回值：无

## setFlags(flags)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `flags: IFlags`
- 返回值：无

## addFlag(key, value, sort?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `key: string`
    - `value: string`
    - `sort = true`
- 返回值：无

## removeFlag(key)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `key: string`
- 返回值：无

## getBacklinks()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`Promise<void>`

## getListHtml(file)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `file: ISimpleFile`
- 返回值：`string`

## getQueryTagLinks(tag)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `tag: string`
- 返回值：`TAnchor[]`

## returnHome()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无
