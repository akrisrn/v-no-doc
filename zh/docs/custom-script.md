# 自定义脚本

@tags: 自定义
@updated: 1610031739000, 1614047221000
@creator: AkrISrn
@updater: AkrISrn
@commit: 1a76bb6

$$: title $$是由 `.md` 文件动态引入的代码文件，它们通常会随着页面的切换而挂载 / 销毁。

v-no 丰富的 [](/zh/api/index.md "#")（所有 Vue 实例、`export` 的变量和方法、使用的依赖库……当然还有 Vue 函数和 vue-property-decorator）是支撑它的基石，通过调用它们，$$: title $$可以和 v-no 核心代码高度集成，就像是 v-no 自身的延展。

你可以像这样引入一个$$: title $$（它是一个[](/zh/docs/links.md "#")扩展）：

```markdown
[$](/uploads/custom.js)
```

如果你在引用时使用多于一个的 `$` 标记，v-no 就会将它挂载为一个驻留脚本，不再自动销毁。

建议将你的脚本代码包裹在下面的代码块中，以避免污染全局环境。

```js
(() => {
  // 你的代码。
})();
```

更进一步，你还可以将它们分成一个单独的项目，用 Webpack 工具链进行构建。

这里搭好了一个[脚手架](https://github.com/akrisrn/v-no-script-template)（$$: ['vue', 'ts', 'babel', 'sass'].map(module => `\`${module}-loader\``).join('、') $$）帮助你快速开始，你也可以参考本文档的[脚本子模块](https://github.com/akrisrn/v-no-doc-script)来构建你自己的脚本。

## 页面组件

使用 v-no 导出的 Vue 函数编写的 Vue 单文件组件，经由$$: title $$ / 样式引入到 `.md` 文件后，通过挂载在 Markdown 渲染的 HTML 元素上，就构成了一个 v-no 页面组件。

这里是它的几个应用：

- [](/console.md "#")：将输入的字符串作为[](/zh/docs/inline-script.md "#")执行。
- [](/sandbox.md "#")：用与渲染 `.md` 文件相同的逻辑，即时渲染输入的字符串。
- [](/graph.md "#")：`.md` 文件之间的网状链接关系图。

它们位于 [v-no-page-component](https://github.com/akrisrn/v-no-page-component) 仓库，那边也是一个收集箱，欢迎提出你的想法或是贡献代码！
