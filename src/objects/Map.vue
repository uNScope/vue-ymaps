<template>
  <div :id="'ymaps-container-'+_uid"
       :style="mapStyles"
       ref="container">
    <slot></slot>
  </div>
</template>

<script>
import { YMAPS_VERSIONS } from 'src/constants/map'
import { EVENT_MAP_READY } from 'src/constants/events'
import { Dispatcher, YmapsProvider } from 'src/mixins'
import { pxSize } from 'src/utils/sizes'

const defaultState = {
  controls: []
}

const defaultOptions = {
  suppressMapOpenBlock: true
}

export default {
  data () {
    return {
      mapId: this._uid
    }
  },
  provide () {
    return {
      mapId: this._uid,
      clusterId: null
    }
  },
  created () {
    this.setYmapsVersion(this.version)

    this.getYmaps().then(ymaps => {
      window.ymaps = ymaps
      this.mount()
    })
  },
  props: {
    version: {
      type: String,
      validator: (val) => YMAPS_VERSIONS.indexOf(val) >= 0,
      default: '2.1'
    },
    center: {
      type: Array,
      required: true,
      default: () => [1, 1]
    },
    zoom: {
      default: 5
    },
    width: {
      type: Number | String,
      default: '100%'
    },
    height: {
      type: Number | String,
      default: 300
    }
  },
  methods: {
    mount () {
      const { state, ymaps, options } = this
      if (ymaps == null) return false

      const instance = new ymaps.Map(
        this.$refs.container,
        { ...defaultState, ...state },
        { ...defaultOptions, ...options }
      )

      this.setMapInstance(this._uid, instance)
      this.$emit('onReady', instance, ymaps)
      this.emitEvent(EVENT_MAP_READY)
    }
  },
  watch: {
    center (coords) {
      const instance = this.getMapInstance()
      if (instance && instance.panTo) {
        instance.panTo(coords)
      }
    }
  },
  computed: {
    state () {
      const { zoom, center } = this
      return { zoom, center }
    },
    mapStyles () {
      const { width, height } = this
      return {
        width: pxSize(width),
        height: pxSize(height)
      }
    }
  },
  mixins: [
    YmapsProvider(false),
    Dispatcher
  ]
}
</script>
