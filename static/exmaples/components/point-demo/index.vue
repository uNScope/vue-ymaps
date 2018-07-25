<template>
  <div>
    <ym-map :center="[20, 20]" :zoom="10" :width="100" :height="100">
      <ym-point :coordinates="[20, 20]" />
    </ym-map>
  </div>
</template>

<script>
  import { YmMap, YmPoint } from 'src/objects'

  export default {
    name: 'PointDemo',
    components: {
      YmMap,
      YmPoint
    }
  }
</script>
