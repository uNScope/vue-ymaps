import { events as geoEvents } from 'src/utils/events'

export default (keyWatch, events = geoEvents) => ({
  watch: {
    [keyWatch] (value) {
      if (!value) return false
      this.attachEvents()
    }
  },
  methods: {
    attachEvents () {
      Object.keys(events).forEach((eventName) => {
        const event = this.$listeners[eventName]
        const alias = events[eventName]

        if (event !== undefined && typeof event === 'function') {
          this[keyWatch].events.add(alias, () => {
            this.$emit(eventName, this[keyWatch], this.ymaps)
          })
        }
      })
    }
  }
})
