import Vue from 'vue'
import App from './main.vue'
import router from '@/router'
import store from '@/store'

// plugins
import ElementUI from '@/plugins/element-ui'

Vue.config.productionTip = false

// use plugins
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
