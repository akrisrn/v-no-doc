# 生成列表

@tags: 语法/标记
@updated: 1610349073000, 1613492963000
@creator: AkrISrn
@updater: AkrISrn
@commit: ee370c6

你可以使用单独占据一行的 `[list]` 标记（不区分大小写）在你指定的位置为页面添加一组自动生成的文件列表。只要页面有一个无参数 `[list]` 标记，其它所有同类标记都会被剔除，含参数的写法（`[list#content]`）则没有个数限制。

如果你不传入任何参数，它会展示所有文件，并根据标签进行分类汇总（比如[分类页](/zh/categories.md "#")）。如果你在 `list` 后跟一个 `#`，相当于用它之后的部分对列表进行搜索过滤，它的写法和[搜索页](/zh/search.md "#")一致。

## 示例

:::
列出所有 `root` 标签下的文件（`[list#@tags:root]`）：
:::

[list#@tags:root]

:::
列出所有 `title` 包含 `v-no` 的文件（`[list#@title:v-no]`）：
:::

[list#@title:v-no]

:::
列出所有内容包含 `Vue.js` 的文件（`[list#Vue.js]`）：
:::

[list#Vue.js]
