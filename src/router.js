import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/interest',
      name: 'interest',
      component: () => import('./views/Interest.vue')
    },
    {
      path: '/inform',
      name: 'inform',
      component: () => import('./views/Inform.vue')
    }
  ]
})
