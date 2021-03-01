# parse-emoji.js

@tags: 自定义/脚本，snippet/code
@updated: 1608363717000, 1612625605000
@creator: AkrISrn
@updater: AkrISrn
@commit: fdb95c9

```js
(() => {
  vno.callAndListen(() => {
    twemoji.parse(document.body);
  }, vno.EEvent.htmlChanged);
  // // 驻留
  // vno.callAndListen(() => {
  //   twemoji.parse(document.body);
  // }, vno.EEvent.htmlChanged, document, true);
})();
```
