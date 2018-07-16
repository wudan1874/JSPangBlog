import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/page/Login'
import Main from '@/components/page/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login},
    { path: '/Main', name:'Main',component: Main },
  ]
})
