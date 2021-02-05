(() => {
  new vno.Vue({
    el: '#sandbox',
    data: {
      textarea: null,
      text: '',
      html: '',
      item: 'sandbox',
    },
    watch: {
      text() {
        this.resize();
        vno.renderMD(vno.filePath, this.text, vno.articleSelf.asyncResults).then(html => {
          this.html = html;
          this.$nextTick(() => {
            vno.updateDom().then();
          });
        });
        if (this.text) {
          localStorage.setItem(this.item, this.text);
        } else {
          localStorage.removeItem(this.item);
        }
      },
    },
    created() {
      this.text = localStorage.getItem(this.item) || '';
    },
    mounted() {
      this.textarea = this.$refs.textarea;
    },
    methods: {
      resize() {
        this.textarea.style.height = '';
        this.textarea.style.height = `${this.textarea.scrollHeight}px`;
      },
    },
  });
})();
