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
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        title: '产品详情'
      },
      component: () => import('./views/Product.vue')
    },
    {
      path: '/interest',
      name: 'interest',
      meta: {
        title: '查看权益'
      },
      component: () => import('./views/Interest.vue')
    },
    {
      path: '/inform',
      name: 'inform',
      meta: {
        title: '告知项'
      },
      component: () => import('./views/Inform.vue')
    },
    {
      path: '/application',
      name: 'application',
      meta: {
        title: '投保单'
      },
      component: () => import('./views/Application.vue')
    },
    {
      path: '/company',
      name: 'company',
      meta: {
        title: '公司详情'
      },
      component: () => import('./views/Company.vue')
    },
    {
      path: '/agreement',
      name: 'agreement',
      meta: {
        title: '服务协议'
      },
      component: () => import('./views/Agreement.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      meta: {
        title: '隐私政策'
      },
      component: () => import('./views/Privacy.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      meta: {
        title: '欢迎页'
      },
      component: () => import('./views/Welcome.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      meta: {
        title: '欢迎页-百惠'
      },
      component: () => import('./views/Hello.vue')
    }
  ]
})
