# 排字

@tags: 杂项
@updated: 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

markdown-it 内置了一组[替换规则](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js)帮助你进行排字：

| 匹配 | 替换 |
| - | - |
| `+-` | `±` |
| `..`（两个及以上） | `…` |
| `?…` | `?..` |
| `!…` | `!..` |
| `????`（四个及以上） | `???` |
| `!!!!`（四个及以上） | `!!!` |
| `,,`（两个及以上） | `,` |
| `---` | `—`（`&mdash;`，`\u2014`） |
| `--` | `–`（`&ndash;`，`\u2013`） |
| `(c)`（不区分大小写） | `©` |
| `(r)`（不区分大小写） | `®` |
| `(tm)`（不区分大小写） | `™` |
| `(p)`（不区分大小写） | `§` |

所有替换都是在渲染过程中执行的，只会应用在普通文本。如果你不希望让某个字符串被替换掉，通常可以像这样 `(p\)` 转义最后一个字符来打断匹配。

markdown-it 还能将非开闭引号（`"'`）都转换为开闭引号，不过这样一来普通文本就不会显示非开闭引号了。你可以使用配置文件的 [`smartQuotes`](/zh/docs/main-conf.md "#") 配置项对它进行配置，v-no 默认不会启用这个功能。

另外，`replacer` 配置项被设计用来做一些自定义正则替换，它和 markdown-it 内置的替换规则是相同的原理。你当然也可以用它处理引号转换和其它的排字需求。

比如，你可以把~~容易弄反还很难区分的~~英式开闭引号都换成中式直角引号：

```js
replacer: [
  ['“', '『'],
  ['”', '』'],
  ['‘', '「'],
  ['’', '」'],
],
```

也可以将非开闭引号换成开闭引号：

```js
replacer: [
  ['"(.*?)"', '“$1”'],
  ['\'(.*?)\'', '‘$1’'],
],
```

它们可以组合使用（对非开闭引号的转换要排在前面），进而将所有引号都换成直角的。

不过你要注意这几个匹配非常简单粗暴，无法覆盖一些特殊情况，这里仅作 `replacer` 的用法示例。对于非开闭引号，你应该始终用 `smartQuotes` 进行转换（不过它也有一个小问题，对于 `I'm` 这类在中间的单引号，它只会转成英式单闭引号（`’`））。