<template>
  <div>
    <demo-menu />
    <router-view/>
  </div>
</template>

<script>
  import DemoMenu from './components/demo-menu'
  import router from './router'

  export default {
    name: 'App',
    router,
    created () {
      console.log('created')
    },
    components: {
      DemoMenu
    }
  }
</script>
