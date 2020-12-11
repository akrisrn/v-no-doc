# 编译 Prism.js

@tags: 开发/编译
@updated: 2020/12/12

v-no 使用 [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs) 对 Prism.js 按需编译。

我不知道为什么如果不修改导入了 Prism.js 的代码文件，它就不会使用新的环境变量对 Prism.js 进行编译。具体表现为前后两次编译的文件大小和 Hash 值都没有发生变化。

为了确保对 Prism.js 相关变量的更新能够生效，你需要在编译前对 `src/ts/dom.ts` 做出一点小改动。比如增加一个空行，等编译完成再把它删去。
