# 主配置

@tags: 部署/配置
@updated: 1607966041000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5993ec3

| | |
| - | - |
| `siteName` | 站点名称。它会作为顶栏左侧图标旁指向主页的链接文本，也会被加到页面 `<title>` 后。如果此项为空，`messages.home` 会顶替上来，不过它不会被加进 `<title>`。 |
| `dateFormat` | 日期格式化字符串。v-no 使用 [Day.js](https://github.com/iamkun/dayjs) 格式化日期，你可以参考[支持的格式化占位符列表](https://day.js.org/docs/zh-CN/display/format)填写。如果此项为空，会使用 `Date` 对象的 `toDateString()` 方法进行格式化。 |
| `cdn` | 网站使用的 CDN 地址，需要以 `/` 结尾。它会被加到除 v-no 自身代码文件和配置文件以外的所有以 `/` 开头的站内链接的前面。你可以在[这里](/docs/cdn.md "#")找到更多有关 CDN 的内容。如果此项为空，它会被忽略。 |
| `cacheKey` | 用于主动控制浏览器缓存的字符串。它会被加到 `.md` 文件请求和自定义脚本链接的后面。如果你启用了 CDN，它并不能保证 CDN 会刷新它的缓存。你可以在[这里](/docs/cache.md "#")找到更多有关缓存的内容。如果此项为空，它会被忽略。 |

## [+](/docs/conf-paths.md)

## [+](/docs/conf-messages.md)
