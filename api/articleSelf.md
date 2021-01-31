# articleSelf

@tags: API
@updated: 1609910685000, 1612093023000
@creator: AkrISrn
@updater: AkrISrn
@commit: fed4591

[toc]

## <mark>@Prop()</mark> fileData

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

同 [`vno.mainSelf.fileData`](/api/mainSelf.md "#h2-2")。

## <mark>@Prop()</mark> query

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`TQuery`

同 [`vno.mainSelf.query`](/api/mainSelf.md "#h2-28")。

## <mark>@Prop()</mark> showTime

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`number`

同 [`vno.mainSelf.showTime`](/api/mainSelf.md "#h2-16")。

## markdownTs

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof markdown`

[`vno.markdown`](/api/markdown.md "#") 模块实例。

## startTime

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`number`

渲染开始前的时间戳。

## isRendering

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否正在渲染。

## renderData

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

被渲染的字符串。

## asyncResults

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`TAsyncResult[]`

异步[](/docs/inline-script.md "#")的执行结果列表。v-no 会监听它，在列表发生变化后取最后一项更新页面。

## resultsBeforeRendered

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`TAsyncResult[]`

渲染完成前得出的异步结果列表，是暂存区。

## <mark>get</mark> filePath()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof store.state.filePath`

同 [`vno.store.state.filePath`](/api/store.md "#h2-1")。

## <mark>get</mark> anchor()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`typeof store.state.anchor`

同 [`vno.store.state.anchor`](/api/store.md "#h2-1")。

## <mark>get</mark> queryContent()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

URL 查询字符串中的 `content` 参数值。

## <mark>get</mark> isSearchFile()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否为搜索页。

## <mark>get</mark> html()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

渲染后的 HTML 字符串。

## renderMD(data?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data = this.fileData`
- 返回值：无

渲染 Markdown。

## updateRenderData(data?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `data = ''`
- 返回值：`Promise<void>`

更新 [renderData](/api/articleSelf.md "#h2-7")。

## renderComplete()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

渲染完成后执行的方法。

## scrollToAnchor()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

滚动到锚点所在位置。
