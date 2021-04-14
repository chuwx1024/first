import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import mainstyle
import './styles/index.less'
// import axios
import axios from 'axios'
//  import nprogress
import 'nprogress/nprogress.css'
// import bigint
import JSONbig from 'json-bigint'

// 全局注册
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.transformResponse = [function (data) {
  try {
    JSONbig.parse(data)
  } catch (err) {
    return data
  }
}]

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
