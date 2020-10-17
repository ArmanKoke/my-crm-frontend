import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
// import Auth from '@okta/okta-vue'

Vue.config.productionTip = false;

// Vue.use(Auth, { //todo change
//   issuer: 'https://{yourOktaDomain}/oauth2/default',
//   client_id: '{yourClientId}',
//   redirect_uri: 'http://localhost:8080/implicit/callback',
//   scope: 'openid profile email'
// })

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
});