# Emoji

@tags: 杂项
@updated: 1608363717000, 1610010437000
@creator: AkrISrn
@updater: AkrISrn
@commit: 12e8a45

考虑到打包体积，v-no 没有内置任何版本的 Emoji 方案，你只能直接使用 [Unicode Emoji](https://en.wikipedia.org/wiki/Emoji#Unicode_blocks)。

你可以直接输入 Emoji 字符 ❤，也能输入对应的 [](/docs/unicode.md "#") 代码 `\u2B50` \u2B50、`U+1F914` U+1F914。

不过 Unicode Emoji 依赖本地字体实现（`font-family: Apple Color Emoji, Segoe UI Emoji`），它在各个客户端的显示不一定一致。如果你比较在意这个问题，可以考虑引入 [Twemoji](https://github.com/twitter/twemoji) 脚本，用 Twitter Emoji 替换它。

为了实现这个转换，你需要将两条[](/docs/custom-script.md "#")加到 [`config.paths.common`](/docs/conf-paths.md "#") 文件：

```markdown
[$$](https://twemoji.maxcdn.com/v/latest/twemoji.min.js)
[$$](/uploads/parse-emoji.js)
```

然后在 `/uploads` 目录新建 `parse-emoji.js` 文件，将下面的代码拷贝进去（你当然也可以选择其它你喜欢的 `.js` 文件放置它，只要记得修改上面的引用路径就好）。

[+](/snippets/parse-emoji.js.md)

这里有几处需要特别说明一下：

1. 这是两条驻留脚本，加载后会一直保留在页面上，`parse-emoji.js` 的代码也是默认为驻留脚本编写的。如果你只需要在特定页面启用转换，可以选择不把它们加到 `config.paths.common`，使用非驻留引用标记（一个 `$`）和注释部分的非驻留代码。
1. 多条自定义脚本在初次加载时的执行顺序并不稳定，`parse-emoji.js` 有可能会在 Twemoji 脚本加载完成之前执行。v-no 为这种情况提供了 `waitFor` 方法，它接收一个回调函数，返回一个 `Promise<boolean>`。它会在回调函数抛出异常（比如 `ReferenceError`）后等待一段时间（默认 0.1s）重新执行它，直到正常退出（返回 `true`），或者达到重试次数的上限（默认 100，返回 `false`）。
1. 页面有可能会进行两次渲染，如果你只调用一次 `twemoji.parse`，它的执行结果就会被第二次渲染覆盖掉。`htmlChanged` 事件会在 `<article>` 的 `innerHTML` 改变后派发给 `document`，所以你需要监听它，在事件达到后重新调用 `twemoji.parse`。因为首次调用后监听事件再调用的情况较为常见，v-no 将这两个步骤整合为 `callAndListen` 方法。它没有返回值，默认脚本是驻留的，会将监听器加在 `document`。
