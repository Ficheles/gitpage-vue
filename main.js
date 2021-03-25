import Vue from 'vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue'
import Pages from './Layout/Wrappers/pagesLayout.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.component('DefaultLayout', Default)
Vue.component('UserpagesLayout', Pages)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
