import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'home',
      meta: {
        title: '测试'
      },
      component: () => import('./views/Test.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      // redirect: '/download',
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
        title: '服务协议-现保'
      },
      component: () => import('./views/Agreement.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      meta: {
        title: '隐私政策-现保'
      },
      component: () => import('./views/Privacy.vue')
    },
    {
      path: '/agreementHuaSheng',
      name: 'agreementHuaSheng',
      meta: {
        title: '注册协议-华圣'
      },
      component: () => import('./views/AgreementHuaSheng.vue')
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
    },
    {
      path: '/download',
      name: 'download',
      meta: {
        title: '下载现保app'
      },
      component: () => import('./views/Download.vue')
    },
    {
      path: '/downloads',
      name: 'downloads',
      meta: {
        title: '下载华圣app'
      },
      component: () => import('./views/DownloadHuaSheng.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      meta: {
        title: '品牌详情'
      },
      component: () => import('./views/Brand.vue')
    }
  ]
})
