# parse-emoji.js

@tags: 自定义脚本，片段/代码
@updated: 1610010437000
@creator: AkrISrn
@updater: AkrISrn
@commit: 12e8a45

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
