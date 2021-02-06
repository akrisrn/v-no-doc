(() => {
  new vno.Vue({
    el: '#sandbox',
    data: {
      textarea: null,
      text: '',
      html: '',
      enableLS: true,
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
        if (this.enableLS) {
          if (this.text) {
            localStorage.setItem(this.item, this.text);
          } else {
            localStorage.removeItem(this.item);
          }
        }
      },
    },
    mounted() {
      this.textarea = this.$refs.textarea;
      const data = this.textarea.getAttribute('data');
      if (data) {
        this.enableLS = false;
        this.text = decodeURIComponent(data);
      } else {
        this.text = localStorage.getItem(this.item) || '';
      }
    },
    methods: {
      resize() {
        this.textarea.style.height = '';
        this.textarea.style.height = `${this.textarea.scrollHeight}px`;
      },
    },
  });
})();
