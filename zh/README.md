# README

@tags: root
@updated: 1607595626000, 1614240502000
@creator: AkrISrn
@updater: AkrISrn
@commit: 645e804

[v-no](https://github.com/akrisrn/v-no) 是一个为 Markdown 准备的轻量级静态网站渲染 / 生成器，也是一个由 Vue.js 驱动的纯静态单页面应用。它主要通过识别 URL 的 Hash 部分记录的路径，异步请求 Markdown 文件对页面进行渲染。你可以只把它当作一个 Markdown 渲染器使用，也可以用它的子项目 [v-no-script](https://github.com/akrisrn/v-no-script) 生成预渲染 HTML 文件，或者启动一个支持热重载的 Web 服务。

这个轮子被造出来的目的是为了探索静态网站生成器的可能性，它会尝试在尽可能减少使用者负担的同时，提供足够丰富且自由的特性。如果你希望更加深入地了解它，可以看看 v-no 的[](/zh/docs/design-concept.md "#")。如果你对它不感兴趣、想要直接上手体验，建议去试试[](/zh/docs/download_&_deploy.md "#")。

v-no 是我非常喜欢的工具，我在这里将它推荐给你，希望它不仅对我，也能对更多的人有所帮助。要是你在使用它的过程中发现任何问题，又或是想要给它提建议，我都欢迎你发个 [Issue](https://github.com/akrisrn/v-no/issues/new) 告诉我。

## 主要特性

- 可切换的[](/zh/docs/multi-conf.md "#")组（以及借此实现的 l10n 和 i18n）。
- 可嵌入的[文件片段和模板](/zh/docs/snippets.md "#")（支持传递参数和切分文件）。
- 可执行的[](/zh/docs/inline-script.md "#")（执行结果会作为 Markdown 的一部分被渲染，支持 `await` 异步函数）。
- 动态引入的[](/zh/docs/custom-script.md "#")和样式（可选择暂留或者常驻）。
- 大量服务行内 / 自定义脚本的 [](/zh/api/index.md "#")（200+，不过还不太稳定）。
- Markdown 文件之间的[双向链接](/zh/docs/backlinks.md "#")（[可视化网状链接关系图](/graph.md "#")）。
- 扩展了部分 [Markdown 语法](/zh/docs/syntax.md "#")（自动填充链接文本、在图像链接中追加样式、折叠标题等）。
- 额外增加了多个[标记语法](/zh/docs/marks.md "#")（文件元数据、可嵌套标签、自动生成列表、重定向页面等）。
- 两种模式的[站内搜索](/zh/search.md "#")（关键词或元数据）。
- [暗色 / 禅模式](/zh/docs/gadget.md "#")。

## 谁有可能对它感兴趣？

- 希望 Markdown 拥有对页面内容的可编程能力。
- 希望细化 Markdown 文件的粒度，建立起它们之间的关联、增加复用。

## 谁会对它不感兴趣？

- 希望定制主题、更换布局（很遗憾你只能做一些样式上的调整）。
- ...

## 子项目

- [v-no-script](https://github.com/akrisrn/v-no-script)：一些需要在 Node.js 环境下执行的脚本位于这个仓库，它包含：
    - 预渲染页面的脚本（使用 Puppeteer，有同步队列和递归并发两种选择）。
    - 启动支持热重载的 Web 服务（express）的脚本（它会自动植入一个 WebSocket 客户端）。
    - 根据 `git log` 更新 Markdown 文件元数据的脚本。
    - 计算文件摘要，更新缓存键的脚本。
- [v-no-doc](https://github.com/akrisrn/v-no-doc)：文档仓库。
- [v-no-doc-script](https://github.com/akrisrn/v-no-doc-script)：文档使用的自定义脚本仓库。
- [v-no-page-component](https://github.com/akrisrn/v-no-page-component)：可以作为自定义脚本引入的 Vue 单文件组件仓库，它包含：
    - 在页面中执行行内脚本的[控制台](/console.md "#")。
    - 即时渲染 Markdown 的[沙盒](/sandbox.md "#")。
    - Markdown 文件之间的[网状链接关系图](/graph.md "#")。
- 项目模板:
    - [v-no-template](https://github.com/akrisrn/v-no-template)：使用默认环境变量进行编译的网站模板，开箱即用，能满足通常的部署需求。
    - [v-no-hash-template](https://github.com/akrisrn/v-no-hash-template)：为避免预渲染冲突而准备的网站模板。
    - [v-no-script-template](https://github.com/akrisrn/v-no-script-template)：用于搭建自定义脚本仓库的脚手架，使用 Webpack 打包，配置有：
        - `vue-loader`
        - `ts-loader`
        - `babel-loader`
        - `sass-loader`
