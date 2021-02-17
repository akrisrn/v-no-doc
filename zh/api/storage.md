# storage

@tags: API
@updated: 1613532791000
@creator: AkrISrn
@updater: AkrISrn
@commit: 575f9b2

[toc]

## getItem(key)

[+#1.2.8](/snippets/latest-version.md)

- 参数：
    - `key: string`：索引键。
- 返回值：`string | null`

同 `localStorage.getItem`。为了隔离同源地址下的多个站点储存，索引键含有 [`VUE_APP_PUBLIC_PATH`](/zh/docs/env-vars.md "#") 前缀。

## setItem(key, value)

[+#1.2.8](/snippets/latest-version.md)

- 参数：
    - `key: string`：索引键。
    - `value: string`：储存值。
- 返回值：无

同 `localStorage.setItem`。为了隔离同源地址下的多个站点储存，索引键含有 [`VUE_APP_PUBLIC_PATH`](/zh/docs/env-vars.md "#") 前缀。

## removeItem(key)

[+#1.2.8](/snippets/latest-version.md)

- 参数：
    - `key: string`：索引键。
- 返回值：无

同 `localStorage.removeItem`。为了隔离同源地址下的多个站点储存，索引键含有 [`VUE_APP_PUBLIC_PATH`](/zh/docs/env-vars.md "#") 前缀。
