<template>
  <ul class="c-top-menu">
    <li class="c-top-menu__item" v-for="(link, index) in links" :key="index">
      <route-link :to="link.href">{{ link.text }}</route-link>
    </li>
  </ul>
</template>

<style lang="scss">
  @import 'css/top-menu';
</style>

<script>
  export default {
    data: () => ({
      links: [
        {
          text: 'Документация',
          href: '/docs/'
        }, {
          text: 'Примеры',
          href: '/examples/'
        }
      ]
    })
  }
</script>
