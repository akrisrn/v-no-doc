# utils

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## axios

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`axios`

## dayjs

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`Dayjs`

## definedFlags

[+#1.2.2](/snippets/version-when-last-update.md)

- 类型：`enums.EFlag[]`

## snippetMark

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

## destructors

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`(() => void)[]`

## inputBinds

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`Dict<() => void>`

## addInputBinds(binds)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `binds: Dict<() => void>`
- 返回值：无

## chopStr(str, sep, trim?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `str: string`
    - `sep: string`
    - `trim = true`
- 返回值：`[string, string | null]`

## trimList(list, distinct?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `list: string[]`
    - `distinct = true`
- 返回值：`string[]`

## addCacheKey(path, needClean?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
    - `needClean = true`
- 返回值：`string`

## stringifyAny(value)

[+#1.2.1](/snippets/version-when-last-update.md)

- 参数：
    - `value: any`
- 返回值：`string`

## evalFunction(evalStr, params, asyncResults?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `evalStr: string`
    - `params: Dict<string>`
    - `asyncResults?: TAsyncResult[]`
- 返回值：`string`

## replaceByRegExp(regexp, data, callback)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `regexp: RegExp`
    - `data: string`
    - `callback: (matches: string[]) => string`
- 返回值：`string`

## waitFor(callback, maxCount?, timeout?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `callback: () => void`
    - `maxCount = 100`
    - `timeout = 100`
- 返回值：`Promise<boolean>`

## addEventListener(element, type, listener)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `element: Document | Element`
    - `type: string`
    - `listener: EventListenerOrEventListenerObject`
- 返回值：无

## callAndListen(callback, event, element?, reside?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `callback: () => void`
    - `event: enums.EEvent`
    - `element: Document | Element = document`
    - `reside = true`
- 返回值：无

## parseDate(date)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `date: string | number`
- 返回值：`Date`

## formatDate(date, format?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `date: string | number | Date | Dayjs`
    - `format?: string`
- 返回值：`string`
