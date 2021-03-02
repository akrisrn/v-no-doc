# parse-emoji.js

@tags: 自定义/脚本代码，snippet/code
@updated: 1608363717000, 1614594495000
@creator: AkrISrn
@updater: AkrISrn
@commit: 64a5b81

```js
(() => {
  vno.callAndListen(() => {
    twemoji.parse(document.body);
  }, vno.EEvent.htmlChanged);
  // // 驻留
  // }, vno.EEvent.htmlChanged, document, true);
})();
```
