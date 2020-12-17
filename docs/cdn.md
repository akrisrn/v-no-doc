# CDN

v-no 是个纯静态网站，这意味着你可以将所有文件都部署到 CDN。除了 `.html` 文件是无法从别的地方获取的，其它文件都能 CDN 化。

你可以将准备好的 CDN 地址填进配置文件的 [`cdn`](/docs/main-conf.md "#") 配置项，它被设计用来启用除 v-no 自身代码文件和配置文件以外的，所有以 `/` 开头的站内链接的 CDN。

这个特性一开始是为了配合 [jsDelivr](https://www.jsdelivr.com/) 提供的免费 CDN 而开发的。对于托管在 GitHub 上的公开仓库，使用 jsDelivr 也是个比较方便的选择，这里用它做个示例：

```js
cdn: 'https://cdn.jsdelivr.net/gh/user/repo/',
```

把 `user/repo` 换成你自己的仓库就大功告成了。你只需要注意填入的地址要以 `/` 结尾。

对了，你当然也可以写一条判断让它从本地访问时不启用 CDN：

```js
cdn: !['127.0.0.1', 'localhost'].includes(location.hostname) ? 'https://cdn.jsdelivr.net/gh/user/repo/' : '',
```

记得前面提到 v-no 自身代码文件和配置文件没有办法用这个方法启用 CDN，这是 Vue CLI 的构建性质决定的。如果你想做的极致一点，将它们也 CDN 化，那么你需要重新[](/docs/compile.md "#")。

这里提供了一个 [`VUE_APP_CDN_URL`](/docs/env-vars.md "#") 环境变量，它是 `cdn` 配置项的编译前版本，你可以把填在 `cdn` 的值移动过去，它会在启用 `VUE_APP_CDN_URL` 后被忽略。带上这个环境变量进行编译的代码就会对所有文件使用 CDN 链接。不过这样一来，启停更换 CDN 都需要你重新编译代码，这就是全站 CDN 的代价。 
