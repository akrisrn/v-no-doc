# parse-emoji.js

@tags: 自定义脚本，代码片段

```js
(() => {
  const parseEmoji = () => {
    try {
      twemoji.parse(document.body);
    } catch (e) {
      if (e.name === 'ReferenceError') {
        console.log('wait for loading twemoji...');
        setTimeout(() => parseEmoji(), 100);
      }
    }
  };
  parseEmoji();
  document.addEventListener('rendered', parseEmoji);
  vno.destructors.push(() => {
    document.removeEventListener('rendered', parseEmoji);
  });
})();
```
