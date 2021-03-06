# 浏览器缓存

@tags: 部署
@updated: 1608187630000, 1615656775000
@creator: AkrISrn
@updater: AkrISrn
@commit: facbd1d

v-no 是个纯静态网站，除了 `.html` 文件不用顾及到缓存问题，其它路径固定的静态资源都必然会面临$$: title $$。如果配置文件被缓存，更新的配置不会生效；如果 `.md` 文件被缓存，页面得不到更新。你通常可以使用 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> 硬性重载页面，以确保浏览器会请求最新的文件。

如果你期望部署更新后，访客的浏览器能够自动刷新缓存，那么你可能需要为文件分别计算 Hash 摘要。v-no 自身的代码文件在编译时已经把摘要加到文件名中了，你可以不用管它。对于其它文件，每次更新重新计算一次摘要再重命名实在有些不现实，你可以选择把它们的摘要加在 URL 查询字符串里。

更新配置文件的摘要需要你修改 `index.html` 链接配置文件的 `<script>` 标签。至于 `.md` 文件和[](/zh/docs/custom-script.md "#") / [](/zh/docs/custom-style.md "#")，你可以构建一个以它们的路径为键、摘要为值的对象，把它传入配置文件的 [`cacheKey`](/zh/docs/main-conf.md "#") 配置项，然后通过更新它来完成摘要的更新。

v-no-script 有个[脚本](https://github.com/akrisrn/v-no-script/blob/master/src/update-cache-key.ts)帮你完成这几件事。为了编程方便，它会将 `cacheKey` 对象写入 `assets/cacheKey.js` 文件，再把它嵌入到 `index.html`，然后你就可以在 `assets/config.js` 中使用 `cacheKey` 变量引用这个对象。

为了确保引用不会出错，建议在调用 `cacheKey` 之前处理一下可能存在的异常：

```js
try {
  cacheKey;
} catch {
  cacheKey = '';
}
```

不过 `cacheKey` 也有一个问题。如果你需要计算摘要的文件很多（数百或成千上万（虽然我认为不太可能会达到这个文件量）），`cacheKey` 对象会非常庞大，以至于显著拖慢页面加载。要是真的遇到这种情况，你可能需要考虑使用更新时的时间戳字符串替代包含每个文件摘要的对象。

最后，对于图片之类的其它资源文件，因为处理它们的开销较大，v-no 选择不去主动控制它们的缓存。
