# articleSelf

@tags: API
@updated: 1612334783000, 1612435944000
@creator: AkrISrn
@updater: AkrISrn
@commit: 0fbc7c0

[toc]

## <mark>@Prop()</mark> fileData

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

同 [`vno.mainSelf.fileData`](/zh/api/mainSelf.md "#h2-2")。

## <mark>@Prop()</mark> query

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`TQuery`

同 [`vno.mainSelf.query`](/zh/api/mainSelf.md "#h2-28")。

## <mark>@Prop()</mark> showTime

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`number`

同 [`vno.mainSelf.showTime`](/zh/api/mainSelf.md "#h2-16")。

## <mark>@Prop()</mark> redirectTo

[+#1.2.4|zh](/snippets/latest-version.md)

- 类型：`(path: string, anchor?: string, query?: string) => boolean`

同 [`vno.mainSelf.redirectTo`](/zh/api/mainSelf.md "#h2-40")。

## markdownTs

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`typeof markdown`

[`vno.markdown`](/zh/api/markdown.md "#") 模块的实例。

## startTime

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`number`

渲染开始前的时间戳，每次重新渲染都会重置。

## isRendering

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`boolean`

是否正在渲染。

## renderData

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

实际渲染的字符串。

## asyncResults

[+#1.2.2|zh](/snippets/latest-version.md)

- 类型：`TAsyncResult[]`

异步[](/zh/docs/inline-script.md "#")会在执行完成后将它的结果 `push` 进这个列表。v-no 会监听它，在列表发生变化后取最后一项更新页面。

你也可以不经由异步[](/zh/docs/inline-script.md "#")，直接用它手动控制需要异步加载的内容。

用法：

- 将下面这行代码作为[](/zh/docs/inline-script.md "#")，在页面上生成一个有 ID 的 Sync 元素占位：

```js
return vno.element.getSyncSpan('async-script-999');
```

- 将上一步的 ID 和结果字符串一起 `push` 进 `asyncResults`：

```js
vno.articleSelf.asyncResults.push(['async-script-999', 'Hello World']);
```

这里为你准备了一个 Sync 元素，你可以在浏览器控制台中输入这行代码让它不要再转了 --> $$:: element.getSyncSpan('async-script-999') $$。

## resultsBeforeRendered

[+#1.2.2|zh](/snippets/latest-version.md)

- 类型：`TAsyncResult[]`

渲染完成前得出的异步结果列表。它作为一个暂存区，会在渲染完成后再次被用来更新页面。

## <mark>get</mark> filePath()

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`typeof store.state.filePath`

同 [`vno.store.state.filePath`](/zh/api/store.md "#h2-1")。

## <mark>get</mark> anchor()

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`typeof store.state.anchor`

同 [`vno.store.state.anchor`](/zh/api/store.md "#h2-1")。

## <mark>get</mark> queryContent()

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

URL 查询字符串中的 `content` 参数值，用作搜索页的查找内容。

## <mark>get</mark> isSearchFile()

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`boolean`

是否为搜索页。

## <mark>get</mark> html()

[+#1.2.0|zh](/snippets/latest-version.md)

- 类型：`string`

[renderData](/zh/api/articleSelf.md "#h2-8") 渲染后的 HTML 字符串。

## renderMD(data?)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `data = this.fileData`：Markdown 字符串。
- 返回值：无

将 Markdown 字符串渲染为 HTML。

## updateRenderData(data?)

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：
    - `data = ''`：新的 [renderData](/zh/api/articleSelf.md "#h2-8") 值。
- 返回值：`Promise<void>`

更新 [renderData](/zh/api/articleSelf.md "#h2-8")。

## renderComplete()

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：无
- 返回值：无

渲染完成后需要执行的函数。

## scrollToAnchor()

[+#1.2.0|zh](/snippets/latest-version.md)

- 参数：无
- 返回值：无

将页面滚动到 Hash 锚点所在位置。
