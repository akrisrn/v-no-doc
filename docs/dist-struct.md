# 目录结构

@tags: 开发/编译
@updated: 1607752145000, 1608521345000
@creator: AkrISrn
@updater: AkrISrn
@commit: 9cfc31c

编译完成的文件会输出在 `dist` 目录下。这是默认的目录结构：

```text|2,15,18-19,22-26
dist
│   index.html
│   archives.md
│   categories.md
│   common.md
│   index.md
│   README.md
│   search.md
│
└─── uploads
│   │   favicon.png
│   │   logo.png
│
└─── assets
    │   config.js
    │
    └─── css
    │   │   app.[hash].css
    │   │   prismjs.[hash].css
    │
    └─── js
        │   app.[hash].js
        │   chunk-vendors.[hash].js
        │   file.[hash].js
        │   markdown.[hash].js
        │   prismjs.[hash].js
```

高亮的行指示的是路径固定的重要文件。

其中 `index.html`、`assets/css/*` 和 `assets/js/*` 是编译后的代码文件。

`assets/config.js` 包含应用的一些可配置项。它默认指定了 `favicon.png` 和 六个 `.md` 文件的路径。

`uploads/logo.png` 则是作为示例被 `index.md` 引用。
