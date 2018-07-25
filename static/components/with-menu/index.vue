<template>
  <div class="c-menu-container">
    <div class="c-menu-container__menu">
      <left-menu :links="links" />
    </div>
    <div class="c-menu-container__body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'css/menu-container';
</style>

<script>
  import LeftMenu from '../left-menu'

  export default {
    props: {
      links: {
        type: Array,
        default: []
      }
    },
    components: {
      LeftMenu
    }
  }
</script>
