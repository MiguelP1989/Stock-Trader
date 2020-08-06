import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

import {store} from "./store/store" 
import { routes } from "./routes"



Vue.use(VueRouter);
Vue.use(VueResource)

Vue.http.options.root = 'https://stock-trader-ef3c9.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '£' + value.toLocaleString()
})

const router = new VueRouter({
  routes,
  mode: 'history',
  
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
