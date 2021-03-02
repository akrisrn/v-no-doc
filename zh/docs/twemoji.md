# Twemoji

@tags: 外部插件
@updated: 1614661230000
@creator: AkrISrn
@updater: AkrISrn
@commit: aa4e379

## Markdown

```markdown
[$](https://twemoji.maxcdn.com/v/latest/twemoji.min.js)
[$](/uploads/parse-emoji.js "twemoji")
```

- `parse-emoji.js` 会在 `twemoji.min.js` 加载完成后引入。

## [+](/zh/snippets/parse-emoji.js.md)

## 示例

$$: [...Array(16)].map((_, i) => `U+1F60${i.toString(16)}` ).join(' ') $$

$$: [...Array(16)].map((_, i) => `U+1F61${i.toString(16)}` ).join(' ') $$

$$: [...Array(16)].map((_, i) => `U+1F62${i.toString(16)}` ).join(' ') $$

$$: [...Array(16)].map((_, i) => `U+1F63${i.toString(16)}` ).join(' ') $$

$$: [...Array(5)].map((_, i) => `U+1F64${i.toString(16)}` ).join(' ') $$

[$](https://twemoji.maxcdn.com/v/latest/twemoji.min.js)
[$](/uploads/dist/scripts/parse-emoji.js "twemoji")
