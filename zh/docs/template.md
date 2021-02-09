# 网站模板

@tags: 部署
@updated: 1608370400000, 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

v-no 选择不发布 Release，取而代之的是两个随版本号更新的 GitHub 模板仓库：

- [v-no-template](https://github.com/akrisrn/v-no-template)：使用默认[](/zh/docs/env-vars.md "#")进行编译的版本，能满足最常见的部署需求。
- [v-no-hash-template](https://github.com/akrisrn/v-no-hash-template)：为预渲染准备的版本，和上面仓库的区别只有 `index.html` 文件路径不一样。它将 `index.html` 文件移动到了`-/` 目录，以避免预渲染时的冲突。你仍然需要执行预渲染脚本才能获得预渲染页面。

为了方便你开箱即用，它们都包含了已经初始化的默认文件，你可以在之后详细[配置](/zh/docs/config.md "#")它们。

::: open .danger.readonly.bold 注意
这两个模板都会假定你将它们部署到根域名，如果你要部署到根域名下的某个目录，它们就不适合你。你需要将这个目录填写到 `VUE_APP_PUBLIC_PATH` [](/zh/docs/env-vars.md "#")，然后重新[](/zh/docs/compile.md "#")。
:::

如果你想将它们[](/zh/docs/deploy-to-github-pages.md "#")，这里有个简单的步骤说明：

[+#clip=1](/zh/docs/deploy-to-github-pages.md)
