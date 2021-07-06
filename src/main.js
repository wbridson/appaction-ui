import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';
import TheToolBar from './components/layout/TheToolBar.vue';
import TheFooter from './components/layout/TheFooter.vue';

Vue.config.productionTip = false;
Vue.component('the-tool-bar', TheToolBar);
Vue.component('the-footer', TheFooter);

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
});
