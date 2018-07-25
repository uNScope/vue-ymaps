<template>
  <with-menu>
    <ym-map :center="[20, 20]" :zoom="5" :width="'100%'" :height="'100%'" />
  </with-menu>
</template>

<script>
  import { YmMap } from 'src/objects'
  import WithMenu from '../with-menu'

  export default {
    name: 'MainDemo',
    components: {
      YmMap,
      WithMenu
    }
  }
</script>
