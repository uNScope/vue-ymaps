<template>
  <with-menu>
    <ym-map :center="[20, 20]" :zoom="5" :width="'100%'" :height="200">
      <ym-point :coordinates="[20, 20]" />
    </ym-map>
  </with-menu>
</template>

<script>
  import { YmMap, YmPoint } from 'src/objects'
  import WithMenu from '../with-menu'

  export default {
    name: 'PointDemo',
    components: {
      YmMap,
      YmPoint,
      WithMenu
    }
  }
</script>
