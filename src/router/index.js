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

export default router
