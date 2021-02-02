# API

@tags: API
@updated: 1609910685000, 1612245872000
@creator: AkrISrn
@updater: AkrISrn
@commit: db6d49b

转换自 [vno.d.ts](https://github.com/akrisrn/v-no/blob/master/src/vno.d.ts)。

[toc]

## [+](/zh/api/definition.md)

## Vue

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`Vue`

Vue 函数。

## axios

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.axios`

同 [`vno.utils.axios`](/zh/api/utils.md "#h2-1")。

## dayjs

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.dayjs`

同 [`vno.utils.dayjs`](/zh/api/utils.md "#h2-2")。

## markdownIt

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof markdown.markdownIt`

同 [`vno.markdown.markdownIt`](/zh/api/markdown.md "#h2-1")。

## version

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`string`

v-no 版本号。

## renderMD

[+#1.2.2](/zh/snippets/version-when-last-update.md)

- 类型：`(path: string, data: string, asyncResults?: TAsyncResult[]) => Promise<string>`

将 Markdown 字符串渲染为 HTML 的函数。

参数：

- `path: string`：文件路径。如果不需要就传入一个空字符串。
- `data: string`：Markdown 字符串。
- `asyncResults?: TAsyncResult[]`：异步[](/zh/docs/inline-script.md "#")的执行结果列表。

返回值：`Promise<string>`

## updateDom

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof markdown.updateDom`

同 [`vno.markdown.updateDom`](/zh/api/markdown.md "#h2-11")。

## destructors

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.destructors`

同 [`vno.utils.destructors`](/zh/api/utils.md "#h2-5")。

## addInputBinds

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.addInputBinds`

同 [`vno.utils.addInputBinds`](/zh/api/utils.md "#h2-7")。

## sleep

[+#1.2.3](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.sleep`

同 [`vno.utils.sleep`](/zh/api/utils.md "#h2-9")。

## waitFor

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.waitFor`

同 [`vno.utils.waitFor`](/zh/api/utils.md "#h2-15")。

## waitForEvent

[+#1.2.3](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.waitForEvent`

同 [`vno.utils.waitForEvent`](/zh/api/utils.md "#h2-16")。

## addEventListener

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.addEventListener`

同 [`vno.utils.addEventListener`](/zh/api/utils.md "#h2-17")。

## callAndListen

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.callAndListen`

同 [`vno.utils.callAndListen`](/zh/api/utils.md "#h2-18")。

## parseDate

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.parseDate`

同 [`vno.utils.parseDate`](/zh/api/utils.md "#h2-19")。

## formatDate

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof utils.formatDate`

同 [`vno.utils.formatDate`](/zh/api/utils.md "#h2-20")。

## toggleDark

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof gadgetSelf.toggleDark`

同 [`vno.gadgetSelf.toggleDark`](/zh/api/gadgetSelf.md "#h2-10")。

## toggleZen

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof gadgetSelf.toggleZen`

同 [`vno.gadgetSelf.toggleZen`](/zh/api/gadgetSelf.md "#h2-11")。

## toTop

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof gadgetSelf.toTop`

同 [`vno.gadgetSelf.toTop`](/zh/api/gadgetSelf.md "#h2-12")。

## toBottom

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof gadgetSelf.toBottom`

同 [`vno.gadgetSelf.toBottom`](/zh/api/gadgetSelf.md "#h2-13")。

## reload

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof mainSelf.reload`

同 [`vno.mainSelf.reload`](/zh/api/mainSelf.md "#h2-34")。

## filePath

[+#1.2.0](/zh/snippets/version-when-last-update.md)

- 类型：`typeof mainSelf.filePath`

同 [`vno.mainSelf.filePath`](/zh/api/mainSelf.md "#h2-23")。

## [+](/zh/api/file.md)

## [+](/zh/api/markdown.md)

## [+](/zh/api/config.md)

## [+](/zh/api/element.md)

## [+](/zh/api/enums.md)

## [+](/zh/api/path.md)

## [+](/zh/api/regexp.md)

## [+](/zh/api/store.md)

## [+](/zh/api/utils.md)

## [+](/zh/api/appSelf.md)

## [+](/zh/api/articleSelf.md)

## [+](/zh/api/gadgetSelf.md)

## [+](/zh/api/mainSelf.md)
