import YmapsApiLoader from 'src/utils/api-loader'
import { EVENT_MAP_READY } from 'src/constants/events'

let mapInstance = {}
let clusterInstance = {}

export default (inject = true) => ({
  inject: inject ? ['mapId', 'clusterId'] : null,
  data: () => ({
    apiVersion: null,
    ymaps: null
  }),
  methods: {
    setYmapsVersion (version) {
      this.apiVersion = version
    },
    setMapInstance (mapId, instance) {
      mapInstance[mapId] = instance
    },
    getMapInstance () {
      return mapInstance[this.mapId]
    },
    setClusterInstance (clusterId, promise) {
      clusterInstance[clusterId] = promise
    },
    async getClusterInstance () {
      const instance = clusterInstance[this.clusterId] != null
        ? await clusterInstance[this.clusterId]
        : Promise.resolve(null)
      return instance
    },
    async getYmaps () {
      const ymaps = await YmapsApiLoader.get(null, this.apiVersion)
      if (this.ymaps == null) {
        this.ymaps = ymaps
      }
      return ymaps
    },
    onMapReady (callback) {
      this.getMapInstance()
        ? callback.call(this)
        : this.onEvent(EVENT_MAP_READY, callback)
    }
  }
})
