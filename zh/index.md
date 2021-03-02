# 文档主页

@tags: root
@cover: ![](/uploads/images/big-logo.png)
@updated: 1607595626000, 1614662436000
@creator: AkrISrn
@updater: AkrISrn
@commit: 784db13

这里由 [v-no](https://github.com/akrisrn/v-no) 自身驱动，源文件部署在 [GitHub Pages](https://github.com/akrisrn/v-no-doc)。

- 如果你不清楚 v-no 是什么，可以去 [](/zh/README.md "#") 看看（剧透：它是又一个静态网站生成器）。
- 要是你想纵览这里都有些什么内容，[](/zh/archives.md "#") 和 [](/zh/categories.md "#") 把它们列了出来。
- 又或者你带来了一两个关键词，试试拿到 [](/zh/search.md "#")。
- 而它们都固定在顶栏，那边也向你指引了其它几个有用的页面。
- 有时我们没有明确的方向，漫游于页面底部的反向链接怎么样？
- 对了，所有页面都拼接了 [](/common.md "#") 文件。

::: .warning.empty .
我会充分利用 v-no 的特性为它编写文档，以便你在浏览的过程中体验它们（建议多比较源文件和渲染后的页面）。

你在这里看到的页面都是一个个片段文件，它们之间会互相引用、嵌入，纵向组织成分层级的树状结构（构成一篇文章），也会自然形成以双向链接为基础的根茎状网图结构。在这之上，可嵌套的标签语法又从另一个维度将它们分类汇总，最终将整个文档以立体的形式呈现给你。

这是我比较喜欢的文档组织方式，也是我想展示给你的 v-no 用法之一。

我会尝试将我在这个项目中考虑过的想法都用这种方式记录下来。这其中就可能会有很多你并不关心的东西、一些无聊的废话，说不定还有过时的消息。

不过既然你能来到这里，那么我想在这堆杂七杂八的内容中，多少会有那么几处对你有所帮助。

希望它们找起来不会太麻烦。

祝愉快。
:::

::: .bold 因为启用了 CDN，页面更新可能会有一段时间的延迟。如果你觉得没必要使用 CDN，可以考虑禁用它。
你可以在浏览器控制台中输入下面这行代码来禁用 CDN：

```js
vno.path.disableCDN();
```

或许你会想要重新启用它：

```js
vno.path.enableCDN();
```

如果你不方便打开控制台，这里也有两个相同功能的按钮：

<button class="btn danger" onclick="vno.path.disableCDN();">disableCDN</button> <button class="btn success" onclick="vno.path.enableCDN();">enableCDN</button>
:::

::: .success.bold 最新版本更新记录
[+#slice=1](/zh/releases/index.md)
:::

: 因为很喜欢这幅[网状链接关系图](/graph.md "#")，请允许我在首页也放上一份。

[+](/snippets/graph.md)

[+](/snippets/badges.md)
