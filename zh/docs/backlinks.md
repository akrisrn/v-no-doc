# 反向链接

@tags: 杂项
@updated: 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

v-no 在解析 `.md` 文件的正向链接时，也会汇总它们的反向链接。和正向链接不同，如果你想要获取完整的反向链接列表，必须请求一次所有能被检索到的文件。

你可以通过点击位于页脚上方的链接来加载当前页面文件的反向链接文件列表，也可以调用 [`vno.file.getFiles`](/zh/api/file.md "#h2-6") 方法获取所有的反向链接。