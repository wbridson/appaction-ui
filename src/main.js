import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
});
