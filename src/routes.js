import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/HomePage'
import DashBoard from './views/DashBoard'
Vue.use(VueRouter);

export const router =new VueRouter({
  mode:   'history',
  routes:[
    {path:'',component:Home},
    {path:'/dashboard',component:DashBoard},
  ]
})
