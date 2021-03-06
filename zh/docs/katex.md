# KaTeX

@tags: 外部插件
@updated: 1614594974000, 1614990964000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5653475

## Markdown

```markdown
[*](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css)
[$](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js)
[$](https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.js "katex")
[$](/uploads/render-math.js "renderMathInElement")
```

- `auto-render.js` 会在 `katex.min.js` 加载完成后引入。
- `render-math.js` 会在 `auto-render.js` 加载完成后引入。

## [+](/zh/snippets/render-math.js.md)

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
