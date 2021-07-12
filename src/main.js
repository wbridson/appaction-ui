import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';

import DatePicker from './components/UI/DatePicker.vue';

Vue.config.productionTip = false;

Vue.component('date-picker', DatePicker);
new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
});
