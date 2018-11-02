import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';

import App from './App.vue';
import { store } from './store/store';
import router from './router';


Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
