# 自定义输入绑定

@tags: 自定义
@updated: 1612093023000, 1612610931000
@creator: AkrISrn
@updater: AkrISrn
@commit: ea5e205

$$:: title $$是一组响应特定按键输入的事件函数。

聚焦在页面时（输入框（`input`、`textarea`）除外）输入的按键会记录在 [`vno.appSelf.keyInput`](/zh/api/appSelf.md "#h2-1")，v-no 会在它发生变化时遍历绑定列表匹配字符串结尾，执行第一个匹配到的函数。

你可以使用 [`vno.utils.addInputBinds`](/zh/api/utils.md "#h2-7") 增加输入绑定，[`vno.utils.inputBinds`](/zh/api/utils.md "#h2-6") 记录了所有绑定。

示例：

```js
vno.utils.addInputBinds({
  hello: () => {
    alert('Greeting');
  }
})
```

默认绑定：

- `home`：返回主页。
- `dark`：切换暗色模式。
- `zen`：切换禅模式。
- `G`：滚动到页面顶部。
- `gg`：滚动到页面底部。
- `Backspace`：按下退格键就好，移除最后一个输入字符。
