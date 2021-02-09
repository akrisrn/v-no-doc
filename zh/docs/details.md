# details 语法

@tags: 语法/扩展
@updated: 1612106269000, 1612610931000
@creator: AkrISrn
@updater: AkrISrn
@commit: ea5e205

details 语法是用 `:::` 包围的块级语法，它可以帮助你生成 `<details>` 标签。

它的第一行由三部分组成：

- `open`：是否默认展开，可以省略。
-  `class` 列表：以 `.` 开头，用 `.` 相连，可以省略。有几个特殊 `class`：
   - `readonly`：禁用 `<summary>` 的点击事件。
   - `empty`：不显示 `<summary>`，默认展开。
   - `bold`：`<summary>` 的字体为粗体。
   - 主题色：
      - `success`：绿。
      - `warning`：黄。
      - `danger`：红。
      - `dark`：黑。
-  `<summary>` 标签的 `innerHTML`：支持 Markdown 语法，可以省略（不过因为它的优先级最高，如果你需要使用前两项，就不能省略它）。

示例：

```text
::: summary
content
:::
```

::: summary
content
:::

```text
::: .readonly summary
content
:::
```

::: .readonly summary
content
:::

```text
::: .readonly.bold summary
content
:::
```

::: .readonly.bold summary
content
:::

```text
::: open summary
content
:::
````

::: open summary
content
:::

```text
::: open .readonly summary
content
:::
````

::: open .readonly summary
content
:::

```text
::: .empty summary
content
:::
```

::: .empty summary
content
:::

```text
:::
content
:::
```

:::
content
:::

```text
::: open .success summary
content
:::
```

::: open .success summary
content
:::

```text
::: open .warning summary
content
:::
```

::: open .warning summary
content
:::

```text
::: open .danger summary
content
:::
```

::: open .danger summary
content
:::

```text
::: open .dark summary
content
:::
```

::: open .dark summary
content
:::

```text
::: .success.empty summary
content
:::
```

::: .success.empty summary
content
:::

```text
::: .warning.empty summary
content
:::
```
::: .warning.empty summary
content
:::

```text
::: .danger.empty summary
content
:::
```

::: .danger.empty summary
content
:::

```text
::: .dark.empty summary
content
:::
```

::: .dark.empty summary
content
:::
