# 行内脚本

@tags: 语法/扩展
@updated: 1610031739000, 1614047221000
@creator: AkrISrn
@updater: AkrISrn
@commit: 1a76bb6

你可以通过编写可执行的行内代码，在一定程度上编程控制页面内容的展示。

$$: title $$使用一对 `$$` 作为标记，所有被它们包裹的字符串都会被放进下面这个独立的函数上下文中被 `eval`：

```js
(function(path, title, data, isSnippet) {
  // $$: title $$
})(path, title, data, isSnippet)
```

- `path`：执行时的文件路径。
- `title`：执行时的文件标题。
- `data`：执行时的文件内容。
- `isSnippet`：是否执行在[](/zh/docs/snippets.md "#")中。

因此，你至少需要一条 `return` 语句才能得到有效的输出结果，它会作为 Markdown 文件的一部分被渲染。

为一行代码写一堆 `return` 也挺麻烦，为了简化输入，v-no 会将字符串开头的 `: ` 替换为 `return `、`:: ` 替换为 `return vno.`。如果你使用三个冒号 `::: `，在它之后的字符串会构成 `return vno.getMessage()` 的 `getMessage` 函数实参。

你可以认为你能在浏览器控制台下执行的代码，对它来说也是同样有效的。只不过同步脚本会在文件渲染之前执行完毕，这意味着它查询不到渲染后的页面元素，而这个问题可以用异步脚本解决（见最后一个示例）。

没错，v-no 支持在$$: title $$中等待异步函数，含有 `await ` 的字符串都会被包进上面那个函数的异步版本中。这让它可以游离在渲染过程之外，做完事再回来更新页面。不过这也意味着浏览器需要支持 ES2017 的 `async / await` 关键字，它做不了任何转译。

最后需要注意一点，$$: title $$的执行优先级通常是最高的。不过在[](/zh/docs/snippets.md "#")中，它排在了参数传递和文件切分的后面，以便于你将传入的参数作为脚本代码的一部分。另外它也排在 [](/zh/docs/flags.md "#") 和 [`[noCommon]`](/zh/docs/other-marks.md "#h2-1") 标记后，其它语法标记前。

## 示例

[+#$$:: encodeParam('$\$ return Math.sqrt(2) $\$\n\n$\$: vno.filePath $\$\n\n$\$:: title $\$\n\n$\$::: "home" $\$\n\n$\$ const date = vno.formatDate("2020/12/31"); return date $\$\n\n$\$ aw\ait vno.sleep(1000); return vno.version $\$\n\n$\$: (aw\ait vno.file.getFile("/zh/index.md")).flags.title $\$\n\n$\$: aw\ait vno.waitForEvent(() => document.querySelector("article").childElementCount, vno.EEvent.rendered) $\$') $$](/snippets/sandbox.md)
