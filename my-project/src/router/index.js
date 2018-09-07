import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//郭美杰页面
import reimbursement from '../pages/Home/MainRightSidebar/reimbursement'
import NewApplication from '../pages/Home/MainRightSidebar/NewApplication'
import NewLoan from '../pages/Home/MainRightSidebar/NewLoan'
import shenPi from '../components/commen/shenPi'
import showReimbursement from '../pages/Home/MainRightSidebar/showReimbursement'
import showLoan from '../pages/Home/MainRightSidebar/showLoan'
//刘峰页面

import examine from '@/components/examine'
import report from '@/components/report'
import picXq from '../components/echarts/picXq'
import barXq from '../components/echarts/barXq'
import piccXq from '../components/echarts/piccXq'

// 孙国盛页面
import jurisdiction from '@/components/jurisdiction'
import parent from '../components/addressBook/parent'
import compile from '../components/addressBook/compile'
import homepage from '../components/addressBook/homepage'
import add from '../components/addressBook/add'
import roleManagement from '../components/roleManagement'

import homepages from '../components/homepage'
import homepages1 from '../components/homepage1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld,
      children:[
        {path:'/reimbursement',component: reimbursement },
        {path:'/NewApplication',component:NewApplication  },
        {path:'/NewLoan',component: NewLoan  },
        {path:'/shenPi',component: shenPi  },
        {path:'/showReimbursement', component:showReimbursement},
        {path:'/showLoan', component:showLoan},
]
    },
    //郭美杰


{
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/examine',
      component: examine
    },
    {
      path: '/report',
      component: report
    },
    {
      path: '/picXq',
      component: picXq
    },

    // {path:'/reimbursement',component: reimbursement }
    // 孙国盛页面
    {
      path:'/jurisdiction',
      component:jurisdiction
    },
    {
      path:'/parent',
      component:parent,
      children:[
        // {path: '/', redirect: 'homepage'},
        {path:'/',component:homepage},
        {path:'/compile',component:compile},
        {path:'/add',component:add}
      ]
    },
    {
      path:'/roleManagement',
      component:roleManagement,
      children:[
        {path:'/homepages',component:homepages},
        {path:'/homepages1',component:homepages1}
      ]
    },
    {
      path: '/picXq',
      component: picXq
    },
    {
      path:'/barXq',
      component:barXq
    },
    {
      path:'/piccXq',
      component:piccXq
    },
  ]
})
