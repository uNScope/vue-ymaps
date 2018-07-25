<template>
  <div class="c-main-container">
    <div class="c-main-container__head">
      <div class="c-main-container__logo">
        <a href="#">
          <img src="https://pbs.twimg.com/profile_images/512910316858904576/SdwcpHHU_400x400.png"
               width="40" alt="" />
          <span>
            vue-<i>y</i>maps
          </span>
        </a>
      </div>
      <div class="c-main-container__top-menu">
        <top-menu />
      </div>
    </div>
    <div class="c-main-container__body">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import 'css/base';
  @import 'css/main-container';
</style>

<script>
  import TopMenu from './components/top-menu'
  import router from './router'

  export default {
    name: 'App',
    router,
    created () {},
    components: {
      TopMenu
    }
  }
</script>
