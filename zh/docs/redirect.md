# 重定向

@tags: 语法/标记
@updated: 1612366351000, 1613492963000
@creator: AkrISrn
@updater: AkrISrn
@commit: ee370c6

你可以使用单独占据一行的 `[redirect]` 标记（不区分大小写）将当前页面$$: title $$到其它页面。如果一个页面有多个 `[redirect]` 标记，只有第一个会生效。你需要将$$: title $$路径作为参数传给它。

$$: title $$路径以 `/` 开头，`.md` 结尾，锚点要在查询字符串前。

## 示例

- `[redirect#/index.md]`：$$: title $$到 `/index.md`。
- `[redirect#/zh/archives.md#h2-1]`：$$: title $$到 `/zh/archives.md`，并滚动到锚点。
- `[redirect#/zh/search.md?content=%40tags%3Aroot]`：$$: title $$到 `/zh/search.md`，并进行搜索。
- `[redirect#/zh/search.md#h2-1?content=%40tags%3Aroot]`：$$: title $$到 `/zh/search.md`，滚动到锚点并搜索。
