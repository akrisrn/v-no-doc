# 反向链接

@tags: 杂项
@updated: 1612155165000, 1631113412000
@creator: AkrISrn
@updater: AkrISrn
@commit: 89643d9

v-no 在解析 `.md` 文件的正向链接时，也会汇总它们的$$: title $$。和正向链接不同，如果你想要获取完整的$$: title $$列表，必须请求一次所有能被检索到的文件。

你可以通过点击位于页脚上方的链接来加载当前页面文件的$$: title $$文件列表，也可以调用 [`vno.file.getFiles`](/zh/api/file.md "#h2-7") 方法获取所有文件及其$$: title $$对象，而 [](/graph.md "#") 页面则可以将它们可视化为一幅网状链接关系图。
