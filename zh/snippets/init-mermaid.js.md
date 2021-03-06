# init-mermaid.js

@tags: 自定义/脚本代码，snippet/code

```js
(() => {
  vno.callAndListen(() => {
    mermaid.init();
  }, vno.EEvent.htmlChanged);
  // // 驻留
  // }, vno.EEvent.htmlChanged, document, true);
})();
```
