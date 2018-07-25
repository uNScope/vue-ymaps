import { YMAPS_GEOOBJECT_TYPES } from 'src/constants/geoobjects'

import {
  Dispatcher,
  YmapsProvider,
  EventAttacher,
  TypedOptions
} from 'src/mixins'

const ON_ADD_EVENT = 'onAdd'
const ON_REMOVE_EVENT = 'onRemove'

export const createGeoObject = (type) => {
  if (YMAPS_GEOOBJECT_TYPES.indexOf(type) < 0) {
    return false
  }
  return {
    data: () => ({
      instance: null,
      type
    }),
    props: {
      coordinates: {
        type: Array,
        required: true
      },
      radius: {
        type: Number,
        default: 0
      },
      properties: {
        type: Object | Function
      },
      options: {
        type: Object | Function
      }
    },
    created () {
      this.onMapReady(this.createGeoObject.bind(this))
    },
    destroyed () {
      this.$emit(ON_REMOVE_EVENT, this.instance, this.ymaps)
      this.destroyGeoObject()
    },
    render () {
      return null
    },
    methods: {
      async createGeoObject () {
        const { geometry } = this
        const ymaps = await this.getYmaps()

        this.instance = new ymaps.GeoObject(geometry, await this.getOptions())

        await this.appendToMap()
        this.$emit(ON_ADD_EVENT, this.instance, this.ymaps)
      },
      async destroyGeoObject () {
        const collection = await this.getCollection()
        collection.events.fire('geometrychange')
        collection.remove(this.instance)
      },
      async appendToMap () {
        const collection = await this.getCollection()
        collection.events.fire('geometrychange')
        collection.add(this.instance)
      },
      async getCollection () {
        const cluster = await this.getClusterInstance()
        const mapInstance = this.getMapInstance()
        return cluster || mapInstance.geoObjects
      }
    },
    computed: {
      geometry () {
        const { properties, type, coordinates, radius } = this
        return {
          geometry: { type, coordinates, radius },
          properties
        }
      }
    },
    mixins: [
      Dispatcher,
      YmapsProvider(),
      TypedOptions,
      EventAttacher('instance')
    ]
  }
}
