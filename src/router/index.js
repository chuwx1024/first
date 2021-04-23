import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Nprogress from 'nprogress'

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
      },
      {
        path: '/publish/:Articleid',
        name: 'ArticleDetails',
        component: () => import('@/views/detail/publish')
      },
      {
        path: '/fans',
        name: 'Fans',
        component: () => import('@/views/fans')
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
  Nprogress.start()

  // 1. 先判断是不是登录页面
  if (to.path === '/login') {
    Nprogress.done()
    next()
    return
  }
  // 2. 如果不是登录页面
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    // 如果在登录页面,token为false 访问内部网页,需要关掉nprogress
    Nprogress.done()
    next('/login')
  }
})

router.afterEach((to, from, next) => {
  Nprogress.done()
})

export default router
