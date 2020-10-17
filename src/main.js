import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
});