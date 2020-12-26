(() => {
  const vm = new vno.Vue({
    data: {
      isZen: vno.gadgetSelf.isZen,
      logo: vno.path.addBaseUrl('/uploads/images/logo.png'),
      powered: ['https://github.com/akrisrn/v-no', '@akrisrn/v-no'],
      hosted: ['https://github.com/akrisrn/v-no-doc', 'GitHub Pages'],
    },
    render(h) {
      const ha = (href, text) => h('a', {
        attrs: { href, target: '_blank', rel: 'noopener noreferrer' },
      }, [text]);
      return h('div', {
        attrs: { id: 'provider' },
        class: this.isZen ? 'hidden' : null,
      }, [
        h('img', {
          attrs: { src: this.logo, height: 32 },
        }),
        h('br'),
        'Powered by ',
        ha(...this.powered),
        ', hosted on ',
        ha(...this.hosted),
      ]);
    },
    mounted() {
      document.addEventListener(vno.enums.EEvent.toggleZen, ({ detail }) => {
        if (detail === true) {
          setTimeout(() => {
            this.isZen = true;
          }, 500);
        } else {
          this.isZen = false;
          this.$nextTick(() => {
            if (this.$el.classList.length === 0) {
              this.$el.removeAttribute('class');
            }
          });
        }
      });
    },
  }).$mount();
  document.querySelector('main').parentElement.append(vm.$el);
})();
