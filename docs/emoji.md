# Emoji

v-no 没有内置任何版本的 Emoji 方案，你只能使用 [Unicode Emoji](https://en.wikipedia.org/wiki/Emoji#Unicode_blocks)。 

你可以直接输入 Emoji 字符 ❤，也能输入对应的 Unicode 代码 `\u2B50` \u2B50、`U+1F914` U+1F914。

不过 Unicode Emoji 依赖本地字体实现（`font-family: Apple Color Emoji, Segoe UI Emoji`），它在各个客户端的显示不一定一致。如果你比较在意这个问题，可以考虑引入 [Twemoji](https://github.com/twitter/twemoji) 脚本，使用 Twitter Emoji 替换它。

为了实现这个转换，你需要将两条[](/docs/custom-script.md "#")加到 [`config.paths.common`](/docs/conf-paths.md "#") 文件：

```markdown
[$](https://twemoji.maxcdn.com/v/latest/twemoji.min.js)
[$](/uploads/parse-emoji.js)
```

然后在 `/uploads` 目录新建 `parse-emoji.js` 文件，将下面的代码拷贝进去（你当然也可以选择其它你喜欢的`.js` 文件放置它，只要记得修改上面的引用路径就好）。

[+](/docs/parse-emoji.js.md)

这段自定义脚本代码有几处需要特别说明一下：

1. 它可能会在 Twemoji 脚本加载完成之前执行。所以这里有一个递归等待，每隔 0.1s 尝试引用一次 `twemoji` 对象。不过要是 Twemoji 加载失败了，它是不会知道的，循环永远不会结束。你可以考虑把这个脚本下载到你的网站目录，用站内链接引用它，这样能稍微缓解一下这个问题。
1. 因为页面有可能会进行两次渲染，如果你直接调用 `parseEmoji()`，它的执行结果会被第二次渲染覆盖掉。`rendered` 事件会在页面全部渲染完成后派发到 `document`，所以你需要监听它，在事件达到后再调用一次 `parseEmoji()`。
1. 添加到 `document` 的事件监听器如果不移除的话，会不断叠加在一起。v-no 导出了一个 `destructors` 数组帮助你依序调用在自定义脚本被销毁后需要执行的代码，所以你要把用于移除监听器的函数 `push` 给它。
