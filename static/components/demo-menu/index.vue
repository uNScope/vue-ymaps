<template>
  <ul class="c-demo-menu">
    <li v-for="(item, key) in menu"
        class="c-demo-menu__section"
        :key="key">

      <template v-if="item.path">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </template>
      <template v-else>
        <span> {{ item.title }}</span>
      </template>

      <ul v-if='item.items && item.items.length'>
        <li v-for="(child, childKey) in item.items" :key="childKey">
          <router-link :to="child.path">
            {{ child.title }}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss">
  @import 'css/demo-menu';
</style>

<script>
  import menu from 'static/menu'

  export default {
    data: () => ({ menu })
  }
</script>
