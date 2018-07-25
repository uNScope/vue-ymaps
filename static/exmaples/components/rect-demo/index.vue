<template>
  <with-menu>
    <ym-map :center="[20, 20]" :zoom="6" :width="'100%'" :height="200">
      <ym-rectangle :coordinates="[[19.2, 19.2], [20,20]]" />
    </ym-map>
  </with-menu>
</template>

<script>
  import { YmMap, YmRectangle } from 'src/objects'
  import WithMenu from '../with-menu'

  export default {
    name: 'RectDemo',
    components: {
      YmMap,
      YmRectangle,
      WithMenu
    }
  }
</script>
