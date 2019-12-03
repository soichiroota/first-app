import Vue from 'vue'
// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
// import store from './store'
import store from '@/store/index'


import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true


import VueAnalytics from 'vue-analytics'

import VueRaven from 'vue-raven'

import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(BootstrapVue)


// Sentry for logging frontend errors
Vue.use(VueRaven, {
  dsn: process.env.VUE_APP_SENTRY_PUBLIC_DSN,
  disableReport: process.env.NODE_ENV === 'development'
})


// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
})


new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
