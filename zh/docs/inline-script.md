# 行内脚本

@tags: 语法/扩展
@updated: 1612334783000
@creator: AkrISrn
@updater: AkrISrn
@commit: 81d16a2

你可以通过编写可执行的行内代码，在一定程度上编程控制页面内容的展示。

行内脚本使用一对 `$$` 作为标记，所有被它们包裹的字符串都会被放进下面这个独立的函数上下文中被 `eval`：

```js
(function(path, data) {
  // 行内脚本
})(path, data)
```

- `path`：执行时的文件路径。
- `data`：执行时的文件内容。
- `isSnippet`：是否执行在嵌入文件中。

因此，你至少需要一条 `return` 语句才能得到有效的输出结果，它会作为 Markdown 文件的一部分被渲染。为一行代码写一堆 `return` 也挺麻烦，为了简化输入，v-no 会将字符串开头的 `: ` 替换为 `return `、`:: ` 替换为 `return vno.`。

你可以认为你能在浏览器控制台下执行的代码，对它来说也是同样有效的。只不过同步脚本会在文件渲染之前执行完毕，这意味着它查询不到渲染后的页面元素。这个问题就需要使用异步脚本来解决（见最后一个示例）。

没错，v-no 支持在行内脚本中等待异步函数，含有 `await ` 的字符串都会被包进上面那个函数的异步版本中。这让它可以游离在渲染过程之外，做完事再回来更新页面。

最后需要注意一点，行内脚本的执行优先级通常是最高的。不过在[](/zh/docs/snippets.md "#")中，它排在了参数传递和文件切分的后面，以便于你将传入的参数作为脚本的一部分。

示例（转义了第二个 `$` 以避免被执行，使用时请移除 `\`）：

- `$\$ return Math.random() $\$`：$$ return Math.random() $$
- `$\$: vno.filePath $\$`：$$: vno.filePath $$
- `$\$:: title $\$`：$$:: title $$
- `$\$ const date = vno.formatDate(new Date()); return date $\$`：$$ const date = vno.formatDate(new Date()); return date $$
- `$\$ await vno.sleep(1000); return vno.version $\$`：$$ await vno.sleep(1000); return vno.version $$
- `$\$: (await vno.file.getFile('/zh/index.md')).flags.title $\$`：$$: (await vno.file.getFile('/zh/index.md')).flags.title $$
- `$\$: await vno.waitForEvent(() => document.querySelector('article').childElementCount, vno.EEvent.rendered) $\$`：$$: await vno.waitForEvent(() => document.querySelector('article').childElementCount, vno.EEvent.rendered) $$
