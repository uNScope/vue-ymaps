import YmapsProvider from './ymaps-provider'

export default {
  props: {
    options: {
      type: Function | Object
    }
  },
  methods: {
    async getOptions () {
      const { options } = this
      const ymaps = await this.getYmaps()
      return typeof options === 'function'
        ? options(ymaps)
        : options
    }
  },
  mixins: [
    YmapsProvider()
  ]
}
