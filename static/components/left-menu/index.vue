<template>
  <ul class="c-left-menu">
    <li v-for="(item, key) in links"
        class="c-left-menu__section"
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
  @import 'css/left-menu';
</style>

<script>
  export default {
    props: {
      links: {
        type: Array,
        required: true
      }
    }
  }
</script>
