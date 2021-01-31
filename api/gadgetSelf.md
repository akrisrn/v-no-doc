# gadgetSelf

@tags: API
@updated: 1609910685000, 1612093023000
@creator: AkrISrn
@updater: AkrISrn
@commit: fed4591

[toc]

## <mark>@Prop()</mark> addToKeyInput

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`(key: string) => void`

往 [`keyInput`](/api/appSelf.md "#h2-1") 追加字符串的函数。

## metaTheme

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`HTMLMetaElement`

`meta[name="theme-color"]` 元素。

## isDark

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否为暗色模式。

## isZen

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否为禅模式。

## isScrolling

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`boolean`

是否正在滚动。

## darkMarks

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`[string, string]`

切换暗色模式使用的两个标记字符。

## zenMark

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

切换禅模式使用的标记字符。

## toTopMark

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

滚动到页面顶部使用的标记字符。

## <mark>get</mark> metaThemeColor()

[+#1.2.0](/snippets/version-when-last-update.md)

- 类型：`string`

`meta[name="theme-color"]` 元素的 `content` 属性值。

## toggleDark()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

切换暗色模式。

## toggleZen()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

切换禅模式。

## toTop()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

滚动到页面顶部。

## toBottom()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

滚动到页面底部。

## scroll(toBottom?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `toBottom = false`
- 返回值：无

滚动到页面顶部或底部。
