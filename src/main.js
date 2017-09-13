// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// 引入动画库
import 'animate.css'
// 引入兼容语法插件
import 'babel-polyfill'
// 引入echarts图表库
import Echarts from 'echarts'
Vue.prototype.$Echarts = Echarts
// 引入全局过滤器
import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
// 引入状态管理
import  store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  template: '<App/>',
  components: { App }
})

router.afterEach((to, from, next)=>{
  window.scrollTo(0, 0)
})

// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(m=>m.meta.anth)){
//     if(store.state.loginState){
//       next()
//     }else{
//       next({path:'/login',query:{Rurl:to.fullPath}})
//     }
//   }else {
//     next()
//   }
// })