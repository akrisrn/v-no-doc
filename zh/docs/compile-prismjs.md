# 编译 Prism.js

@tags: 开发/编译
@updated: 1607752145000, 1612966734000
@creator: AkrISrn
@updater: AkrISrn
@commit: eb862ba

v-no 使用 [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs) 对 Prism.js 按需编译。它的相关代码会被单独打包在 `assets/js/prismjs.[hash].js` 文件，体积会随着 `PRISM_LANGUAGES` [](/zh/docs/env-vars.md "#")的改动而产生变化。

但我不知道为什么如果不修改导入了 Prism.js 的代码文件，它就不会使用新的[](/zh/docs/env-vars.md "#")进行编译。具体表现为编译后的 `prismjs.[hash].js` 文件的大小和 Hash 值都没有发生变化。

为了确保对 Prism.js 相关变量的更新能够生效，你需要在编译前对 `src/ts/async/prismjs.ts` 做出一点不影响代码逻辑的小改动。比如增加一个空行，等编译完成再把它删去。
