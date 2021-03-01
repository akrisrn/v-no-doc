# render-math.js

@tags: 自定义/脚本，snippet/code
@updated: 1614595075000
@creator: AkrISrn
@updater: AkrISrn
@commit: 7dc469d

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
})();
```
