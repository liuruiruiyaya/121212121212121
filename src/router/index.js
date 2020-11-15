import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'left',
    component: () => import('../views/letf.vue'),
    children:[
      {
        path:'mine',
        component: () => import('../views/mine.vue')
      },
      {
        path:'list',
        component: () => import('../views/list.vue')
      },
      {
        path:'kf',
        component: () => import('../views/kf.vue')
      },
      {
        path:'content',
        component: () => import('../views/content.vue')
      }
    ]
  },
  {
    path:'/main',
    component: () => import('../views/main.vue')
  },
  {
    path:'/logon',
    component: () => import('../views/header.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
