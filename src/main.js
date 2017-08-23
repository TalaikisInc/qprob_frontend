import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import moment from 'moment'
import axios from 'axios'
import vars from './variables'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

axios.defaults.baseURL = vars.apiUrl
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.utc(value).format('YYYY-MM-DD  hh:mm')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  PulseLoader,
  template: '<App/>',
  components: { App }
})
