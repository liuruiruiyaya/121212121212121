import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import url from './router/url'
import echarts from 'echarts'
import "./router/route"
Vue.config.productionTip = false
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.prototype.$url = url
Vue.prototype.$echarts = echarts
new Vue({
  url,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
