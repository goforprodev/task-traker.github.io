import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
// const router = new VueRouter({
//   routes
// })
new Vue({
  router,
  el: "#app",
  render: h => h(App)
})