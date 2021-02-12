# 反向链接

@tags: 杂项
@updated: 1612155165000, 1612966734000
@creator: AkrISrn
@updater: AkrISrn
@commit: eb862ba

v-no 在解析 `.md` 文件的正向链接时，也会汇总它们的$$: title $$。和正向链接不同，如果你想要获取完整的$$: title $$列表，必须请求一次所有能被检索到的文件。

你可以通过点击位于页脚上方的链接来加载当前页面文件的$$: title $$文件列表，也可以调用 [`vno.file.getFiles`](/zh/api/file.md "#h2-6") 方法获取所有文件及其$$: title $$对象。
