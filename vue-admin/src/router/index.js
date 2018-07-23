import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Main from '@/components/page/Main'
import CreateBlog from '@/components/page/CreateBlog'
import ManageBlog from '@/components/page/ManageBlog'
import LeavingMessage from '@/components/page/LeavingMessage'
import DashBoard from '@/components/page/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login},
    { 
      path: '/Main',
      component: Main,
      children:[
        {path:'/Main/CreateBlog',name:'CreateBlog',component:CreateBlog},
        {path:'/Main/ManageBlog',name:'ManageBlog',component:ManageBlog},
        {path:'/Main/LeavingMessage',name:'LeavingMessage',component:LeavingMessage},
        {path:'/Main/DashBoard',name:'DashBoard',component:DashBoard},
      ] 
    },
  ]
})
