import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Layout from '@/views/layout'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },
  // 一级路由
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
