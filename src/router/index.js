import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login' //登录页
import setting from '@/components/setting/setting' //设置页
import message from '@/components/message/message' //消息页
import invitation from '@/components/invitation/invitation' //邀请页
import feedback from '@/components/feedback/feedback' //反馈页

import quote from '@/components/quotation/quote'
import chart from '@/components/quotation/chart'

import business from '@/components/transaction/business'
import entrust from '@/components/transaction/entrust'

import CNYAccount from '@/components/account/CNYAccount'
import BTCAccount from '@/components/account/BTCAccount'
import accountDetails from '@/components/account/accountDetails'

import sign from '@/components/active/sign'
import activity from '@/components/active/activity'
import reward from '@/components/active/reward'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'Login',component: Login},
    {path: '/setting',name: 'setting',component: setting},
    {path: '/message',name: 'message',component: message},
    {path: '/invitation',name: 'invitation',component: invitation},
    {path: '/feedback',name: 'feedback',component: feedback},
    {path: '/quote',name: 'quote',component: quote},
    {path: '/chart',name: 'chart',component: chart},
    {path: '/business',name: 'business',component: business},
    {path: '/entrust',name: 'entrust',component: entrust},
    {path: '/CNYAccount',name: 'CNYAccount',component: CNYAccount},
    {path: '/BTCAccount',name: 'BTCAccount',component: BTCAccount},
    {path: '/accountDetails',name: 'accountDetails',component: accountDetails},
    {path: '/sign',name: 'sign',component: sign},
    {path: '/activity',name: 'activity',component: activity},
    {path: '/reward',name: 'reward',component: reward},
  ]
})
