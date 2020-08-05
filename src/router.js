import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import allshow from './pages/allshow'
import detailall from './pages/detailall'
import product from './pages/product.vue'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
        }, {
          path: '/product',
          name: 'product',
          component:product,
        }, {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('./pages/detail.vue')
        },{
          path: '/detailall',
          name: 'detailall',
          component:detailall
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login.vue')
    },
    {
      path: '/allshow',
      name: 'allshow',
      component:allshow
    },
    
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./pages/cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./pages/order.vue'),
      children:[
        {
          path: 'list',
          name: 'order-list',
          component: () => import('./pages/orderList.vue')
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import('./pages/orderConfirm.vue')
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import('./pages/orderPay.vue')
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: () => import('./pages/alipay.vue')
        }
      ]
    }
  ]
});