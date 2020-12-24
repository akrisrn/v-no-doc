# 现代模式

@tags: 开发/编译
@updated: 1607752145000, 1608521418000
@creator: AkrISrn
@updater: AkrISrn
@commit: b5c8b2f

[现代模式](https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F)是 Vue CLI 提供的一种构建选择。

v-no 在这个模式下编译的 `.js` 文件体积能减少 16% ~ 18% 左右，执行性能也会相应提高。不过你也有必要同时提供一份为老旧浏览器准备的传统代码，以防遇到还用着祖传软件的访客们。v-no 的部署大小会因此变成原来的两倍，浏览器会选择其中一种版本的代码进行加载。

这是以现代模式进行构建的指令，你需要酌情考虑是否使用它：

```shell
yarn run build-modern
```

这是它输出的 `dist` 目录结构（省略了和普通构建没有区别的地方）：

```text|8,10,12,14,16,18
dist
│   index.html
│
└─── assets
    │
    └─── js
        │   app.[hash].js
        │   app-legacy.[hash].js
        │   chunk-vendors.[hash].js
        │   chunk-vendors-legacy.[hash].js
        │   file.[hash].js
        │   file-legacy.[hash].js
        │   markdown.[hash].js
        │   markdown-legacy.[hash].js
        │   prismjs.[hash].js
        │   prismjs-legacy.[hash].js
```

高亮的行指示的就是传统版本的代码文件。

如果你只想部署现代版本的代码，也可以手动清理掉它们。然后移除 `index.html` 中包含 `nomodule` 的相关代码。它们格式化后会是这个样子:

```html
<script>
  !function() {
    var e = document, t = e.createElement('script');
    if (!('noModule' in t) && 'onbeforeload' in t) {
      var n = !1;
      e.addEventListener('beforeload', function(e) {
        if (e.target === t) n = !0;
        else if (!e.target.hasAttribute('nomodule') || !n) return;
        e.preventDefault();
      }, !0), t.type = 'module', t.src = '.', e.head.appendChild(t), t.remove();
    }
  }();
</script>
<script src="/assets/js/chunk-vendors-legacy.[hash].js" nomodule></script>
<script src="/assets/js/app-legacy.[hash].js" nomodule></script>
```
