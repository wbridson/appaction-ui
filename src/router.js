import Vue from 'vue';
import Router from 'vue-router';

import ApplicationsPage from './pages/ApplicationsPage.vue';
import TestPage from './pages/TestPage.vue';

Vue.use(Router);

export default new Router({
  //history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/applications' },
    { path: '/applications', component: ApplicationsPage },
    { path: '/testpage', component: TestPage },
  ],
});

