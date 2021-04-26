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
// import JSONbig from 'json-bigint'
import moment from 'moment'

// 全局注册
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.filter('formatDate', date => {
  return moment(date).format('YYYY-DD-MM')
})
// axios.defaults.transformResponse = [function (data) {
//   try {
//     // return JSONbig.parse(data)
//   } catch (err) {
//     return data
//   }
// }]
// 配置请求拦截器
axios.interceptors.request.use(function (config) {
  const tokan = window.localStorage.getItem('user-token')
  if (tokan) {
    config.headers = { Authorization: `Bearer ${tokan}` }
  }
  return config
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
