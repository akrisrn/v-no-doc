# 主配置

@tags: 部署/配置
@updated: 1607966041000, 1610010081000
@creator: AkrISrn
@updater: AkrISrn
@commit: ad10f15

| | |
| - | - |
| `siteName` | 站点名称。它会作为顶栏左侧图标旁指向主页的链接文本，也会被加到页面 `<title>` 后。如果此项为空，`messages.home` 会顶替上来，不过它不会被加进 `<title>`。 |
| `dateFormat` | 日期格式化字符串。v-no 使用 [Day.js](https://github.com/iamkun/dayjs) 格式化日期，你可以参考[支持的格式化占位符列表](https://day.js.org/docs/zh-CN/display/format)填写。如果此项为空，会使用 `Date` 对象的 `toDateString()` 方法进行格式化（`ddd MMM DD YYYY`）。 |
| `smartQuotes` | 用于将非开闭引号（`"'`）转换为开闭引号的字符串或字符串数组。它会直接传入 [markdown-it](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) 的 `quotes` 字段用于初始化。你需要为它提供四个字符或字符串，分别指示双开闭引号和单开闭引号（比如 `“”‘’`）。如果此项为空，或者长度小于四，都不会启用引号转换。 |
| `replacer` | 用于在渲染过程中对一般文本进行替换的二维字符串数组。v-no 会遍历外层数组，用内部数组的第一个值构建全局正则表达式，并用第二个值替换它匹配到的字符串。因为结果是递进的，你可能需要注意一下它们的排列顺序。如果此项为空，它会被忽略。 |
| `cdn` | 网站使用的 CDN 地址，需要以 `/` 结尾。它会被加到除 v-no 自身代码文件和配置文件以外的所有以 `/` 开头的站内链接的前面。你可以在[这里](/zh/docs/cdn.md "#")找到更多有关 CDN 的内容。如果此项为空，它会被忽略。 |
| `cacheKey` | 用于主动控制浏览器缓存的字符串或对象。如果这是一个字符串，它会被加到所有 `.md` 文件请求和自定义脚本/样式链接的后面；如果它是一个对象，会被加到链接后的就是以文件路径为键对它索引到的值。如果你启用了 CDN，它并不能保证 CDN 会刷新它的缓存。你可以在[这里](/zh/docs/browser-cache.md "#")找到更多有关浏览器缓存的内容。如果此项为空，它会被忽略。 |

## [+](/zh/docs/conf-paths.md)

## [+](/zh/docs/conf-messages.md)
