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
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/publish',
        name: 'Publish',
        component: () => import('@/views/detail/publish')
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/detail/article')
      },
      {
        path: '/comment',
        name: 'Comment',
        component: () => import('@/views/detail/comment')
      },
      {
        path: '/material',
        name: 'Material',
        component: () => import('@/views/detail/material')
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
// 路由拦截器 每个页面都要先经过这里
router.beforeEach((to, from, next) => {
  // 1. 先判断是不是登录页面
  if (to.path === '/login') {
    next()
    return
  }
  // 2. 如果不是登录页面
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
