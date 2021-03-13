# 自定义脚本

@tags: 自定义
@updated: 1610031739000, 1614662417000
@creator: AkrISrn
@updater: AkrISrn
@commit: fe50153

$$: title $$是由 `.md` 文件动态引入的代码文件，它们通常会随着页面的切换而挂载 / 销毁。

v-no 丰富的 [](/zh/api/index.md "#")（所有 Vue 实例、`export` 的变量和方法、使用的依赖库……当然还有 Vue 函数和 vue-property-decorator）是支撑它的基石，通过调用它们，$$: title $$可以和 v-no 核心代码高度集成，就像是 v-no 自身的延展，各类[](/zh/docs/external-plugins.md "#")也是通过这种方式集成到页面中。

你可以像这样引入一个$$: title $$（它是一个[](/zh/docs/links.md "#")扩展）：

```markdown
[$](/uploads/custom.js)
```

v-no 会将 `title` 部分的字符串放到 [`vno.utils.waitFor`](/zh/api/utils.md "#h2-16") 中 `eval`，它会尝试无限次数，直到成功执行才引入这个脚本。因为多条$$: title $$的执行顺序并不稳定，你可以通过等待前一个脚本暴露的对象，间接控制它们的加载顺序。

```markdown
[$](/uploads/custom.js "wait for some object")
```

另外，如果你在引用时使用多于一个的 `$` 标记，v-no 就会将它挂载为一个驻留脚本，不再自动销毁。

建议将你的脚本代码包裹在下面的代码块中，以避免污染全局环境。

```js
(() => {
  // 你的代码。
})();
```

更进一步，你还可以将它们分成一个单独的项目，用 Webpack 工具链进行构建。

这里搭好了一个[脚手架](https://github.com/akrisrn/v-no-script-template)（$$: ['vue', 'ts', 'babel', 'sass'].map(module => `\`${module}-loader\``).join('、') $$）帮助你快速开始，你也可以参考本文档的[脚本子模块](https://github.com/akrisrn/v-no-doc-script)来构建你自己的脚本。

## 页面组件

使用 v-no 导出的 Vue 函数编写的 Vue 单文件组件，经由$$: title $$ / [](/zh/docs/custom-style.md "#")引入到 `.md` 文件后，通过挂载在 Markdown 渲染的 HTML 元素上，就构成了一个 v-no 页面组件。

这里是它的几个应用：

- [](/console.md "#")：将输入的字符串作为[](/zh/docs/inline-script.md "#")执行。
- [](/sandbox.md "#")：用与渲染 `.md` 文件相同的逻辑，即时渲染输入的字符串。
- [](/graph.md "#")：`.md` 文件之间的网状链接关系图。

它们位于 [v-no-page-component](https://github.com/akrisrn/v-no-page-component) 仓库，那边也是一个收集箱，欢迎提出你的想法或是贡献代码！

## 清理副作用

有时你的$$: title $$会产生一些副作用，它们在脚本被销毁后依然可以作用在页面上，你需要手动清理它们。你可以将用于清理副作用的函数 `push` 进 [`vno.destructors`](/zh/api/vno.md "#h2-13")，它们会在页面重载前执行。

仅对于下面两种副作用，v-no 会自动清理：

- 通过 [`vno.addEventListener`](/zh/api/vno.md "#h2-18") 添加的事件监听器：它同时会将移除监听器的函数 `push` 进 [`vno.destructors`](/zh/api/vno.md "#h2-13")。
- 含有 `custom` 类的元素：它们会在页面重载前全部移除。
