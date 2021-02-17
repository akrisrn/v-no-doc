# utils

@tags: API
@updated: 1609910685000, 1613532791000
@creator: AkrISrn
@updater: AkrISrn
@commit: 575f9b2

[toc]

## axios

[+#1.2.0](/snippets/latest-version.md)

- 类型：`axios`

`axios` 函数。

## dayjs

[+#1.2.0](/snippets/latest-version.md)

- 类型：`Dayjs`

`dayjs` 函数。

## definedFlags

[+#1.2.2](/snippets/latest-version.md)

- 类型：`enums.EFlag[]`

预定义的 Flag 列表。

## destructors

[+#1.2.0](/snippets/latest-version.md)

- 类型：`(() => void)[]`

在页面重载前执行的析构函数列表。

## inputBinds

[+#1.2.0](/snippets/latest-version.md)

- 类型：`Dict<() => void>`

包含所有[](/zh/docs/custom-input-bind.md "#")的字典。

## addInputBinds(binds)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `binds: Dict<() => void>`：函数字典，键为需要响应的输入字符串，值为被执行的事件函数。
- 返回值：无

增加[](/zh/docs/custom-input-bind.md "#")。

## chopStr(str, sep, trim?, last?)

[+#1.2.3](/snippets/latest-version.md)

- 参数：
    - `str: string`：任意字符串。
    - `sep: string`：分隔符。
    - `trim = true`：是否移除分隔符两边的空白字符。
    - `last = false`：是否倒序查找分隔符。
- 返回值：`[string, string | null]`

用指定分隔符将字符串切成两半。

## sleep(timeout)

[+#1.2.3](/snippets/latest-version.md)

- 参数：
    - `timeout: number`：毫秒数。
- 返回值：`Promise<void>`

等待指定的毫秒数。

## trimList(list, distinct?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `list: string[]`：字符串列表。
    - `distinct = true`：是否去重。
- 返回值：`string[]`

移除列表项前后的空白字符和空列表项。

## addCacheKey(path, needClean?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `path: string`：文件路径。
    - `needClean = true`：是否需要清除文件路径中的 URL 前缀。
- 返回值：`string`

为指定文件路径添加缓存键。

## stringifyAny(value)

[+#1.2.1](/snippets/latest-version.md)

- 参数：
    - `value: any`：任意类型值。
- 返回值：`string`

将任意类型值转换为字符串。

## evalFunction(evalStr, params, asyncResults?)

[+#1.2.4](/snippets/latest-version.md)

- 参数：
    - `evalStr: string`：字符串代码。
    - `params: Dict<any>`：用于包裹字符串代码的函数的参数字典。
    - `asyncResults?: TAsyncResult[]`：异步[](/zh/docs/inline-script.md "#")的执行结果列表。
- 返回值：`[string, boolean]`

将指定字符串包裹进如下闭包函数执行：

```js
eval(`(function(${Object.keys(params).join()}){${evalStr}})`)(...Object.values(params));
```

返回执行结果和是否遇到异常。如果遇到异常，返回结果为异常信息。

## replaceByRegExp(regexp, data, callback)

[+#1.2.6](/snippets/latest-version.md)

- 参数：
    - `regexp: RegExp`：正则表达式。
    - `data: string`：需要进行替换的字符串。
    - `callback: (match: RegExpExecArray) => string`：接收正则表达式执行结果列表的回调函数，返回替换值。
- 返回值：`string`

替换正则表达式匹配到的值。

用法：

```js
vno.utils.replaceByRegExp(vno.regexp.getParamRegExp(), '{{ 0 }}llo Wo{{ 1 }}', ([, match]) => {
  return ['He', 'rld'][parseInt(match)];
});
```

## waitFor(callback, maxCount?, timeout?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `callback: () => void`：回调函数。
    - `maxCount = 100`：最大重试次数。
    - `timeout = 100`：失败后等待的毫秒数。
- 返回值：`Promise<boolean>`

重复执行回调函数，直到无异常抛出或达到重试次数的上限。

## waitForEvent(callback, event, element?)

[+#1.2.3](/snippets/latest-version.md)

- 参数：
    - `callback: () => any`：回调函数。
    - `event: enums.EEvent`：事件类型。
    - `element: Document | Element = document`：添加事件监听器的元素。
- 返回值：`Promise<any>`

等待指定事件被派发给指定元素后再执行回调函数，返回回调函数的返回值。

## addEventListener(element, type, listener)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `element: Document | Element`：添加事件监听器的元素。
    - `type: string`：事件类型。
    - `listener: EventListenerOrEventListenerObject`：监听器函数。
- 返回值：无

为元素添加事件监听器。它同时也会将移除监听器的函数 `push` 进 [`vno.utils.destructors`](/zh/api/utils.md "#h2-4")。

## callAndListen(callback, event, element?, reside?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `callback: () => void`：回调函数。
    - `event: enums.EEvent`：事件类型。
    - `element: Document | Element = document`：添加事件监听器的元素。
    - `reside = true`：是否在页面重载时保留监听器。
- 返回值：无

执行回调函数，并将它作为事件监听器添加到指定元素。

## encodeParam(value)

[+#1.2.5](/snippets/latest-version.md)

- 参数：
    - `value: string`：参数值。
- 返回值：`string`

基本等同于 `encodeURIComponent`，只不过额外转义了单引号。可以用于在[嵌入链接](/zh/docs/links.md "#")中编码[嵌入参数](/zh/docs/snippets.md "#h2-1")。

## getMessage(key, params?)

[+#1.2.8](/snippets/latest-version.md)

- 参数：
    - `key: string`：索引键，可以深入对象（`a.b.c`）或列表（`a.0.c`）。
    - `params?: TMessage`：需要嵌入的参数列表或字典。如果列表长度为 1，可以直接传入列表项。
- 返回值：`string`

根据索引键从当前[配置对象](/zh/api/config.md "#h2-2")的 [](/zh/docs/conf-messages.md "#")取出对应的字符串，支持使用[嵌入参数](/zh/docs/snippets.md "#h2-1")语法占位，不过不识别默认值。

## parseDate(date)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `date: string | number`：日期字符串或时间戳。
- 返回值：`Date`

解析日期字符串或时间戳为 `Date` 对象。

## formatDate(date, format?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `date: string | number | Date | Dayjs`：日期字符串、时间戳、`Date` 对象、`Dayjs` 对象。
    - `format?: string`：日期格式化字符串。
- 返回值：`string`

格式化日期。
