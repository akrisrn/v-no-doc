# render-math.js

@tags: 自定义/脚本代码，snippet/code
@updated: 1614595075000, 1614661845000
@creator: AkrISrn
@updater: AkrISrn
@commit: 178ca9a

```js
(() => {
  vno.callAndListen(() => {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '${', right: '}', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false },
      ],
    });
  }, vno.EEvent.htmlChanged);
  // // 驻留
  // }, vno.EEvent.htmlChanged, document, true);
})();
```
