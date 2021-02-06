# parse-emoji.js

@tags: 自定义/脚本，snippet/code
@updated: 1612334783000, 1612625605000
@creator: AkrISrn
@updater: AkrISrn
@commit: fdb95c9

```js
(() => {
  vno.callAndListen(() => vno.waitFor(() => {
    twemoji.parse(document.body);
  }), vno.EEvent.htmlChanged);
  // 非驻留
  // vno.callAndListen(() => vno.waitFor(() => {
  //   twemoji.parse(document.body);
  // }), vno.EEvent.htmlChanged, document, false);
})();
```
