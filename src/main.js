import Vue from 'vue'
import App from './App.vue'
import './css/style.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')