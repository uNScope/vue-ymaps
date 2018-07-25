import Vue from 'vue'
const dispatcher = new Vue()

export default {
  data: () => ({
    dispatcher
  }),
  methods: {
    onEvent (event, callback) {
      const { mapId } = this
      this.dispatcher.$on(`${event}-${mapId}`, callback)
    },
    emitEvent (event, params) {
      const { mapId } = this
      this.dispatcher.$emit(`${event}-${mapId}`, params)
    }
  }
}
