import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import routes from './routes'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({ mode: 'history', routes })
