# KaTeX

@tags: 杂项
@updated: 1614594974000
@creator: AkrISrn
@updater: AkrISrn
@commit: 1091af4

引入 $$: title $$ 和转换 [](/zh/docs/emoji.md "#") 的方法非常相似，不多赘述了。

## Markdown

```markdown
[*](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css)
[$](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js)
[$](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.js "katex")
[$](/uploads/render-math.js "renderMathInElement")
```

- `auto-render.js` 会在 `katex.min.js` 加载完成后引入。
- `render-math.js` 会在 `auto-render.js` 加载完成后引入。

## JavaScript

[+](/zh/snippets/render-math.js.md)

$$: title $$ 默认的一组块级标记是两个 `$`，它和[](/zh/docs/custom-script.md "#")冲突了，这里把它调整为了 `${ }`。

## 示例

    ${ c = \pm\sqrt{a^2 + b^2} }

${ c = \pm\sqrt{a^2 + b^2} }

    $ c = \pm\sqrt{a^2 + b^2} $

$ c = \pm\sqrt{a^2 + b^2} $

    \\[ \sqrt{3x-1}+(1+x)^2 \\]

\\[ \sqrt{3x-1}+(1+x)^2 \\]

    \\( \sqrt{3x-1}+(1+x)^2 \\)

\\( \sqrt{3x-1}+(1+x)^2 \\)

[*](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css)
[$](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js)
[$](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.js "katex")
[$](/uploads/dist/scripts/render-math.js "renderMathInElement")
