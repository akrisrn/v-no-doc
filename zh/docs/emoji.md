# Emoji

@tags: 杂项
@updated: 1608363717000, 1614594495000
@creator: AkrISrn
@updater: AkrISrn
@commit: 718c25c

考虑到打包体积，v-no 没有内置任何版本的 Emoji 方案，你只能使用 [Unicode Emoji](https://en.wikipedia.org/wiki/Emoji#Unicode_blocks)。

你可以直接输入 Emoji 字符 ❤，也能输入对应的 [](/zh/docs/unicode.md "#") 代码 `\u2B50` \u2B50、`U+1F914` U+1F914。

不过 Unicode Emoji 依赖本地字体实现（`font-family: Apple Color Emoji, Segoe UI Emoji`），它在各个客户端的显示不一定一致。如果你比较在意这个问题，可以考虑引入 [Twemoji](https://github.com/twitter/twemoji) 脚本，用 Twitter Emoji 替换它。

为了实现这个转换，你需要将两条[](/zh/docs/custom-script.md "#")加到 `.md` 文件中，然后在 `/uploads` 目录新建 `parse-emoji.js` 文件，将下面展示的代码拷贝进去。

## [+](/zh/docs/twemoji.md)

## 注意

这里有几处需要特别说明一下：

1. 这是两条非驻留脚本，会随着页面的切换而销毁，`parse-emoji.js` 的代码也是默认为非驻留脚本编写的。如果你需要在所有页面启用转换，可以选择把它们加到 [`config.paths.common`](/zh/docs/conf-paths.md "#") 文件，使用驻留标记（多个 `$`）和注释部分的驻留代码。
1. 多条[](/zh/docs/custom-script.md "#")的执行顺序并不稳定，`parse-emoji.js` 有可能会在 `twemoji.min.js` 加载完成之前执行，所以它需要等待 `twemoji.min.js` 将 `twemoji` 对象暴露出来后再引入。
1. 页面有可能会进行两次渲染，如果你只调用一次 `twemoji.parse`，它的执行结果就会被第二次渲染覆盖掉。`htmlChanged` 事件会在 `<article>` 的 `innerHTML` 改变后派发给 `document`，所以你需要监听它，在事件达到后重新调用 `twemoji.parse`。因为首次调用后监听事件再调用的情况较为常见，v-no 将这两个步骤整合为了 `callAndListen` 方法。
