import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/HomePage'
import DashBoard from './views/DashBoard'
import Register from './views/Register'
import Login from './views/Login'
import Reset from './views/Reset'

Vue.use(VueRouter);

export const router =new VueRouter({
  mode:   'history',
  routes:[
    {path:'',component:Home},
    {path:'/dashboard',component:DashBoard},
    {path:'/register', component:Register},
    {path:'/login', component:Login},
    {path:'/reset', component:Reset}
  ]
})
