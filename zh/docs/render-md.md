# 渲染 Markdown

@tags: 杂项
@updated: 1615656274000, 1615880319000
@creator: AkrISrn
@updater: AkrISrn
@commit: 6accca5

v-no 用于$$: title $$ 的 [](/zh/api/index.md "#") 有三个，它们分别对应三种不同的场景，最后都会将数据交由 [](/zh/docs/markdown-it.md "#") 的 `render` 函数渲染（[重写了部分核心语法的渲染规则](https://github.com/akrisrn/v-no/blob/master/src/ts/async/markdown.ts)）。

[toc]

## [`vno.markdown.renderMD`](/zh/api/markdown.md "#")

这个函数最接近 [](/zh/docs/markdown-it.md "#") 的 `render` 函数，它基本上只是预处理了[](/zh/docs/slice.md "#")和[](/zh/docs/toc.md "#")这两个语法标记，下面两个函数最后也是通过调用它来取得渲染数据。

如果你只是想简单渲染一个 Markdown 字符串，它最适合不过了。

## [`vno.articleSelf.renderMD`](/zh/api/articleSelf.md "#")

它是 v-no 最核心的渲染函数，渲染结果会直接展示在页面上，你可以调用它来用指定字符串渲染页面。

这里简单描述一下它的渲染逻辑：

<div class="mermaid" style="text-align: center">
graph TD
    classDef key fill:#f96;
    classDef key2 fill:#f69;
    A[执行行内脚本]:::key --> B{是否为空}
    B --> |是| C[$$: title $$]:::key2
    D --> |是| E[重定向页面]
    B --> |否| D{是否为重定向}
    D --> |否| F[预处理异步语法标记]
    F --> G[$$: title $$]:::key2
    G --> H[拼接嵌入文件]:::key
    H --> I{是否为空}
    I --> |是| C
    I --> |否| J[更新生成列表]:::key
    J --> K{是否为空}
    K --> |是| C
    K --> |否| L{是否为搜索页}
    L --> |否| C
    L --> |是| M[预处理搜索页语法标记]
    M --> C
</div>

## [`vno.renderMD`](/zh/api/vno.md "#")

它是上面那个函数的逻辑简化版，只保留了必要的处理，可以脱离页面得到渲染数据。

这里简单描述一下它的渲染逻辑：

<div class="mermaid" style="text-align: center">
graph TD
    classDef key fill:#f96;
    classDef key2 fill:#f69;
    A[trim 数据] --> B{是否为空}
    B --> |是| C[返回数据]
    B --> |否| D[执行行内脚本]:::key
    D --> E{是否为空}
    E --> |是| C
    E --> |否| F[拼接嵌入文件]:::key
    F --> G{是否为空}
    G --> |是| C
    G --> |否| H[更新生成列表]:::key
    H --> I{是否为空}
    I --> |是| C
    I --> |否| J[$$: title $$]:::key2
    J --> C
</div>

: 流程图由 [](/zh/docs/mermaid.md "#") 绘制。

[$](https://cdn.jsdelivr.net/npm/mermaid@8.9.1/dist/mermaid.min.js)
[$](/uploads/dist/scripts/init-mermaid.js "mermaid")
