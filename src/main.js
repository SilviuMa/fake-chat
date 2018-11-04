import Vue from 'vue';
import VueSocketio from 'vue-socket.io';

import App from './App.vue';
import { store } from './store/store';
import router from './router';


Vue.config.productionTip = false

Vue.use(VueSocketio, `//${window.location.host}`, store);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
