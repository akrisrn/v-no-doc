# parse-emoji.js

@tags: 自定义脚本，片段/代码
@updated: 1608363717000, 1609510722000
@creator: AkrISrn
@updater: AkrISrn
@commit: f4f5d47

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
