import Vue from 'vue'
import App from './App.vue'
import './css/style.css'
import {router} from './routes'
// import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http =Axios;
const token = localStorage.getItem('token')
if (token){
  Vue.prototype.$http.defaults.headers.common['Authorization']=token
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
