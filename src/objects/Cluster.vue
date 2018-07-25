<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import {
  Dispatcher,
  YmapsProvider,
  TypedOptions,
  EventAttacher
} from 'src/mixins'

export default {
  provide () {
    return {
      clusterId: this._uid
    }
  },
  data: () => ({
    instance: null
  }),
  async created () {
    this.setClusterInstance(this._uid, new Promise(async (resolve) => {
      const ymaps = await this.getYmaps()
      const options = await this.getOptions()
      const cluster = new ymaps.Clusterer(options)

      this.addCluster(cluster)
      this.onMapReady(this.appendCluster)
      resolve(cluster)
    }))
  },
  methods: {
    addCluster (cluster) {
      this.instance = cluster
      this.setClusterInstance(this._uid, cluster)
    },
    appendCluster () {
      const mapInstance = this.getMapInstance()
      mapInstance.geoObjects.add(this.instance)
    }
  },
  mixins: [
    Dispatcher,
    YmapsProvider(),
    TypedOptions,
    EventAttacher('instance')
  ],
  props: {
    options: {
      type: Function
    }
  }
}
</script>
