import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/page/home'
import acountManage from '@/components/page/acountManage'
import orderManage from '@/components/page/orderManage'

import src from '@/components/page/src'
import myAcount from '@/components/page/myAcount'
import myOrder from '@/components/page/myOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: home,
      children:[
        {
          path:'/',
          component: acountManage
        },
        {
          path:'/order',
          component: orderManage
        }
      ]
    },
    {
      path: '/src',
      name: '资源',
      component: src,
      children:[
        {
          path:'/src',
          component: myAcount
        },
        {
          path:'/src/order',
          component: myOrder
        }
      ]
    }
  ]
})
