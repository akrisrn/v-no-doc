# appSelf

@tags: API
@updated: 1612334783000, 1612610932000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5812292

[toc]

## keyInput

[+#1.2.0](/snippets/latest-version.md)

- 类型：`string`

记录按键输入的字符串，v-no 会监听它来响应[](/zh/docs/custom-input-bind.md "#")，最大长度为 20。

## selectConf

[+#1.2.0](/snippets/latest-version.md)

- 类型：`string`

同 [`vno.config.getSelectConf`](/zh/api/config.md "#h2-1") 的返回值。

## otherLinks

[+#1.2.9](/snippets/latest-version.md)

- 类型：`TAnchor[]`

自定义顶栏链接列表。

## <mark>get</mark> initing()

[+#1.2.2](/snippets/latest-version.md)

- 类型：`typeof store.state.initing`

同 [`vno.store.state.initing`](/zh/api/store.md "#h2-1")。

## <mark>get</mark> homePath()

[+#1.2.0](/snippets/latest-version.md)

- 类型：`typeof store.state.homePath`

同 [`vno.store.state.homePath`](/zh/api/store.md "#h2-1")。

## <mark>get</mark> config()

[+#1.2.0](/snippets/latest-version.md)

- 类型：`typeof config.config`

同 [`vno.config.config`](/zh/api/config.md "#h2-2")。

## <mark>get</mark> confList()

[+#1.2.0](/snippets/latest-version.md)

- 类型：`typeof config.confList`

同 [`vno.config.confList`](/zh/api/config.md "#h2-3")。

## <mark>get</mark> enableMultiConf()

[+#1.2.0](/snippets/latest-version.md)

- 类型：`typeof config.enableMultiConf`

同 [`vno.config.enableMultiConf`](/zh/api/config.md "#h2-4")。

## <mark>get</mark> shortBaseFiles()

[+#1.2.0](/snippets/latest-version.md)

- 类型：`typeof config.shortBaseFiles`

同 [`vno.config.shortBaseFiles`](/zh/api/config.md "#h2-6")。

## <mark>get</mark> favicon()

[+#1.2.0](/snippets/latest-version.md)

- 类型：`string`

加上 URL 前缀后的 `favicon` 路径。

## addLink(href, text?)

[+#1.2.9](/snippets/latest-version.md)

- 参数：
    - `href: string`：链接地址，需要为以 `/` 开头的 `.md` 文件地址，可以省略 `index.md`。
    - `text = ''`：链接文本。
- 返回值：`TAnchor`

将指定链接添加到[自定义顶栏链接列表](/zh/api/appSelf.md "#h2-3")，返回被添加的链接对象。

如果省略 `text` 让 v-no 自动填充，要在 `$nextTick` 中更新 `document`：

```js
vno.appSelf.addLink('/index.md');
vno.appSelf.$nextTick(() => vno.updateDom());
```

## removeLink(href)

[+#1.2.9](/snippets/latest-version.md)

- 参数：
    - `href: string`：链接地址。
- 返回值：`number`

从[自定义顶栏链接列表](/zh/api/appSelf.md "#h2-3")中移除链接，返回被移除的链接索引。

## returnHome()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：无

同 [`vno.path.returnHome`](/zh/api/path.md "#h2-22")。
