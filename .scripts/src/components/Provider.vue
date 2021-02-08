<template>
  <div id="provider" :class="isZen ? 'hidden' : null">
    <img :src="logo" alt="logo" height="32">
    <div>Powered by <a :href="powered[0]" rel="noopener noreferrer" target="_blank">{{
        powered[1]
      }}</a>, hosted on <a :href="hosted[0]" rel="noopener noreferrer" target="_blank">{{
        hosted[1]
      }}</a>
    </div>
  </div>
</template>

<script lang="ts">
  @vno.VPD.Component({
    el: document.createElement('div'),
  })
  export default class Provider extends vno.Vue {
    isZen = vno.gadgetSelf.isZen;
    logo = vno.path.addBaseUrl('/uploads/images/logo.png');
    powered = ['https://github.com/akrisrn/v-no', '@akrisrn/v-no'];
    hosted = ['https://github.com/akrisrn/v-no-doc', 'GitHub Pages'];

    mounted() {
      document.addEventListener(vno.EEvent.toggleZen, event => {
        if ((event as CustomEvent).detail === true) {
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
    }
  }
</script>

<style lang="scss" scoped>
  #provider {
    font-size: var(--font-size-s);
    margin: 40px 0;
    transition: opacity 0.5s, margin 0.5s;
    text-align: center;
    opacity: 1;
    color: var(--gray-font-color);

    &.hidden {
      visibility: hidden;
      height: 0;
      margin: 0;
    }

    @media screen and (max-width: 800px) {
      margin: 24px 0;
    }
  }

  body.zen #provider {
    opacity: 0;
  }
</style>
