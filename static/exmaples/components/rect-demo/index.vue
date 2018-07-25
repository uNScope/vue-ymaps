<template>
  <div>
    <ym-map :center="[20, 20]" :zoom="6" :width="200" :height="200">
      <ym-rectangle :coordinates="[[19.7, 19.7], [20,20]]" />
    </ym-map>
  </div>
</template>

<script>
  import { YmMap, YmRectangle } from 'src/objects'

  export default {
    name: 'RectDemo',
    components: {
      YmMap,
      YmRectangle
    }
  }
</script>
