<template>
  <div>
    <ym-map :center="[20, 20]" :zoom="10" :width="100" :height="100" />
  </div>
</template>

<script>
  import { YmMap } from 'src/objects'

  export default {
    name: 'MainDemo',
    components: {
      YmMap
    }
  }
</script>
