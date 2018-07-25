<template>
  <with-menu :links="links">
    <slot></slot>
  </with-menu>
</template>

<script>
  import WithMenu from 'static/components/with-menu'
  import { examplesMenu } from "static/exmaples/routes"

  export default {
    data: () => ({
      links: examplesMenu
    }),
    components: {
      WithMenu
    }
  }
</script>
