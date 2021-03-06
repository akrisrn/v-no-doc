# init-mermaid.js

@tags: 自定义/脚本代码，snippet/code
@updated: 1608363717000, 1614991065000
@creator: AkrISrn
@updater: AkrISrn
@commit: 53d0fad

```js
(() => {
  vno.callAndListen(() => {
    mermaid.init();
  }, vno.EEvent.htmlChanged);
  // // 驻留
  // }, vno.EEvent.htmlChanged, document, true);
})();
```
