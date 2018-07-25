import { fetchScript } from './fetch'

const onload = '__vue-yandex-maps-onload'
const onerror = '__vue-yandex-maps-onerror'

const callbacks = { onload, onerror }

const ns = '__vue-yandex-maps-api'
const lang = 'ru_RU'

class YmapsApiLoader {
  constructor () {
    this.api = typeof window !== 'undefined'
      ? window[ns] || null
      : null
    this.promise = null
  }

  getBaseUrl (version = '2.1', enterprise = false) {
    const protocol = 'https:'
    const host = enterprise
      ? 'enterprise.api-maps.yandex.ru'
      : 'api-maps.yandex.ru'

    return `${protocol}//${host}/${version}/`
  }

  getQuery (query) {
    const options = Object.assign({ ns, lang }, query, callbacks)
    return Object.keys(options)
      .reduce((prev, key) => {
        if (typeof options[key] === 'undefined') return prev
        return prev.concat(`${key}=${options[key]}`)
      }, [])
      .join('&')
  }

  load (query, version, enterprise) {
    if (this.promise) return this.promise

    this.promise = new Promise((resolve, reject) => {
      const baseUrl = this.getBaseUrl(version, enterprise)
      const urlQuery = this.getQuery(query)

      window[onload] = api => {
        resolve(api)
        window[onload] = null
      }
      window[onerror] = error => {
        reject(error)
        window[onerror] = null
      }
      fetchScript(`${baseUrl}?${urlQuery}`).catch(reject)
    })

    return this.promise
  }

  get (query, version, enterprise) {
    if (this.api) {
      return Promise.resolve(this.api)
    }
    return this.load(query, version, enterprise)
      .then(api => (this.api = api))
  }
}

export default new YmapsApiLoader()
