# 配置 v-no

@tags: 部署/配置
@updated: 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

v-no 的配置相当灵活，除了少数几个只能在编译前修改的[](/zh/docs/env-vars.md "#")，其它配置项都储存在 `assets/config.js` 文件的 `vnoConfig` 对象中。它随页面载入，并且暴露在全局供所有脚本访问。这意味着你只需刷新页面就可以让配置的更新生效（如果你比较在意浏览器缓存，可以先看看[这里](/zh/docs/browser-cache.md "#")）。

这是默认的 `assets/config.js` 文件：

[+](/zh/snippets/config.js.md)

它由主配置和多配置两部分组成，可以为空的配置项也可以省略不写。

[toc]

## [+](/zh/docs/main-conf.md)

最后两个配置项属于多配置部分。

## [+](/zh/docs/multi-conf.md)
