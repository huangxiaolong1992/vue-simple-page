import Vue from 'vue' 
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import store from './store/index.js'
import "./static/css/base.css"
import "./static/js/common.js"
import "./static/icon/iconfont-embedded.css"

import router from "./router/router.js"

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
