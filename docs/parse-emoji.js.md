# parse-emoji.js

@tags: 自定义脚本，代码片段
@updated: 1608363717000
@creator: AkrISrn
@updater: AkrISrn
@commit: 6d245ce

[+#1.2.0](/snippets/version-when-last-update.md)

--8<--

```js
(() => {
  vno.callAndListen(() => vno.waitFor(() => {
    twemoji.parse(document.body);
  }), vno.enums.EEvent.htmlChanged);
  // 非驻留
  // vno.callAndListen(() => vno.waitFor(() => {
  //   twemoji.parse(document.body);
  // }), vno.enums.EEvent.htmlChanged, document, false);
})();
```
