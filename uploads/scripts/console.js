(() => {
  new vno.Vue({
    el: '#console',
    data: {
      evalStr: '',
      results: [],
    },
    created() {
      this.reset();
    },
    methods: {
      reset() {
        this.evalStr = 'return ';
      },
      submit() {
        const evalStr = this.evalStr;
        const isAsync = evalStr.indexOf('await ') >= 0;
        const [value, isError] = vno.utils.evalFunction(evalStr, {
          path: vno.filePath,
          data: vno.mainSelf.fileData,
        }, vno.articleSelf.asyncResults);
        this.results.unshift({
          code: vno.markdown.renderMD(`\`\`\`js\n${evalStr}\n\`\`\``, false),
          isAsync, isError, value,
        });
        this.reset();
        this.$nextTick(() => {
          vno.articleSelf.asyncResults.forEach(result => {
            vno.markdown.updateAsyncScript(result);
          });
          vno.markdown.updateDom().then();
        });
      },
    },
  });
})();
