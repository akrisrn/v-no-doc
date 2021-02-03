# parse-emoji.js

@tags: 自定义脚本，snippet/code
@updated: 1612334783000, 1612335423000
@creator: AkrISrn
@updater: AkrISrn
@commit: e876fb2

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
