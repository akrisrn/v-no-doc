# 目前存在的一些问题

@tags: 杂项
@updated: 1609608091000
@creator: AkrISrn
@updater: AkrISrn
@commit: df2a568

[+#1.2.1](/snippets/version-when-last-update.md)

这里列出的问题在 v-no 的预期表现之外，并且还没能 / 无法解决。

1. 如果当前页面有图片正在加载，浏览器有可能会阻止 Hash 路由进行跳转（地址变了但是页面没有变）。这时你要么等待图片加载完成，要么就只能刷新页面。
    ::: open 复现
    无法复现，只有一定几率会出现。
    :::
