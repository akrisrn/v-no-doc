# 自定义样式

@tags: 自定义
@updated: 1615643155000
@creator: AkrISrn
@updater: AkrISrn
@commit: b72eab7

$$: title $$和[](/zh/docs/custom-script.md "#")的机制非常相似。

你可以像这样引入一个$$: title $$（它是一个[](/zh/docs/links.md "#")扩展）：

```markdown
[*](/uploads/custom.css)
```

你也可以使用多于一个的 `*` 标记将它挂载为一个驻留样式。

## 可覆盖的 CSS 变量

```css
:root {
  --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --mono-font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  --font-size: 14px;
  --font-size-s: 12px;
  --font-color: #464646;
  --gray-font-color: #8d8d8d;
  --link-font-color: #2864dc;

  --mark-color: rgba(255, 255, 0, 0.3);

  --info-color: 0, 150, 255;
  --success-color: 0, 200, 100;
  --warning-color: 255, 150, 0;
  --danger-color: 255, 50, 100;
  --dark-color: 0, 0, 0;

  --background-color: #f1f1f1;
  --main-background-color: #ffffff;
  --code-background-color: rgba(150, 150, 150, 0.1);

  --dark-background-color: #2b2b2b;
  --dark-main-background-color: #3b3b3b;
  --dark-font-color: #bebebe;
  --dark-link-font-color: #82b4e6;
}
```

## 预定义的按钮和输入框样式

```html
<button class="btn">Button</button>
<button class="btn bold">Button</button>
<button class="btn success">Button</button>
<button class="btn warning">Button</button>
<button class="btn danger">Button</button>
<button class="btn dark">Button</button>
<button class="btn" disabled>Button</button>
```

<button class="btn">Button</button> <button class="btn bold">Button</button> <button class="btn success">Button</button> <button class="btn warning">Button</button> <button class="btn danger">Button</button> <button class="btn dark">Button</button> <button class="btn" disabled>Button</button>

```html
<input class="ipt" placeholder="Input"/>
<input class="ipt success" placeholder="Input"/>
<input class="ipt warning" placeholder="Input"/>
<input class="ipt danger" placeholder="Input"/>
<input class="ipt dark" placeholder="Input"/>
<input class="ipt" disabled placeholder="Input"/>
```

<input class="ipt" placeholder="Input"/>
<input class="ipt success" placeholder="Input"/>
<input class="ipt warning" placeholder="Input"/>
<input class="ipt danger" placeholder="Input"/>
<input class="ipt dark" placeholder="Input"/>
<input class="ipt" disabled placeholder="Input"/>

```html
<textarea class="ipt" placeholder="Textarea"></textarea>
<textarea class="ipt success" placeholder="Textarea"></textarea>
<textarea class="ipt warning" placeholder="Textarea"></textarea>
<textarea class="ipt danger" placeholder="Textarea"></textarea>
<textarea class="ipt dark" placeholder="Textarea"></textarea>
<textarea class="ipt" disabled placeholder="Textarea"></textarea>
```

<textarea class="ipt" placeholder="Textarea"></textarea>

<textarea class="ipt success" placeholder="Textarea"></textarea>

<textarea class="ipt warning" placeholder="Textarea"></textarea>

<textarea class="ipt danger" placeholder="Textarea"></textarea>

<textarea class="ipt dark" placeholder="Textarea"></textarea>

<textarea class="ipt" disabled placeholder="Textarea"></textarea>
