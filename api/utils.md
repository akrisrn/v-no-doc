# utils

@tags: API
@updated: 1609910685000, 1612093023000
@creator: AkrISrn
@updater: AkrISrn
@commit: fed4591

[toc]

## axios

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`axios`

`axios` 函数。

## dayjs

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`Dayjs`

`dayjs` 函数。

## definedFlags

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`enums.EFlag[]`

预定义的 Flag 列表。

## snippetMark

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

切片语法标记。

## destructors

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`(() => void)[]`

析构函数列表。

## inputBinds

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`Dict<() => void>`

包含所有[](/docs/custom-input-bind.md "#")的对象。

## addInputBinds(binds)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `binds: Dict<() => void>`
- 返回值：无

增加[](/docs/custom-input-bind.md "#")。

## chopStr(str, sep, trim?, last?)

[+#1.2.3](/snippets/version-when-last-update.md)

- 参数：
    - `str: string`
    - `sep: string`
    - `trim = true`
    - `last = false`
- 返回值：`[string, string | null]`

将字符串切成两半。

## sleep(timeout)

[+#1.2.3](/snippets/version-when-last-update.md)

- 参数：
    - `timeout: number`
- 返回值：`Promise<void>`

等待。

## trimList(list, distinct?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `list: string[]`
    - `distinct = true`
- 返回值：`string[]`

修整列表。

## addCacheKey(path, needClean?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
    - `needClean = true`
- 返回值：`string`

为地址添加缓存键。

## stringifyAny(value)

[+#1.2.1](/snippets/version-when-last-update.md)

- 参数：
    - `value: any`
- 返回值：`string`

字符串化任意类型值。

## evalFunction(evalStr, params, asyncResults?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `evalStr: string`
    - `params: Dict<string>`
    - `asyncResults?: TAsyncResult[]`
- 返回值：`string`

将字符串作为代码执行。

## replaceByRegExp(regexp, data, callback)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `regexp: RegExp`
    - `data: string`
    - `callback: (matches: string[]) => string`
- 返回值：`string`

替换正则表达式匹配到的值。

## waitFor(callback, maxCount?, timeout?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `callback: () => void`
    - `maxCount = 100`
    - `timeout = 100`
- 返回值：`Promise<boolean>`

等待回调函数成功执行。

## waitForEvent(callback, event, element?)

[+#1.2.3](/snippets/version-when-last-update.md)

- 参数：
    - `callback: () => any`
    - `event: enums.EEvent`
    - `element: Document | Element = document`
- 返回值：`Promise<any>`

等待指定事件被派发。

## addEventListener(element, type, listener)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `element: Document | Element`
    - `type: string`
    - `listener: EventListenerOrEventListenerObject`
- 返回值：无

添加事件监听器。它同时也会将移除监听器的函数添加到 [`vno.utils.destructors`](/api/utils.md "#h2-5")

## callAndListen(callback, event, element?, reside?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `callback: () => void`
    - `event: enums.EEvent`
    - `element: Document | Element = document`
    - `reside = true`
- 返回值：无

执行回调函数，并将它作为事件监听器添加到指定元素。

## parseDate(date)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `date: string | number`
- 返回值：`Date`

解析日期字符串。

## formatDate(date, format?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `date: string | number | Date | Dayjs`
    - `format?: string`
- 返回值：`string`

格式化日期。
