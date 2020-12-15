# 配置 v-no

@tags: 部署/配置
@updated: 1607966208000
@creator: AkrISrn
@updater: AkrISrn
@commit: 7b62f5b

v-no 的配置相当灵活，除了少数几个只能在编译前修改的环境变量，其它配置项都储存在 `assets/config.js` 文件的 `vnoConfig` 对象中。它随页面载入，并且暴露在全局供所有脚本访问。这意味着你只需刷新页面就可以让配置的更新生效（如果你比较在意浏览器缓存，可以看看[这里](/docs/cache.md "#")）。

这是默认的 `assets/config.js` 文件：

[+](/docs/vno-config.md)

它由主配置和多配置两部分组成，可以为空的配置项也可以省略不写。

[toc]

## [+](/docs/main-conf.md)

最后两个配置项属于多配置部分。

## [+](/docs/multi-conf.md)
