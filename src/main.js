import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import moment from 'moment'

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
  template: '<App/>',
  components: { App }
})
