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

// 全局注册
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
