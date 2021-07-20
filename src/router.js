import Vue from 'vue';
import Router from 'vue-router';

import ApplicationsPage from './pages/ApplicationsPage.vue';
import AppManagementPage from './pages/AppManagementPage.vue';
import ScottPage from './pages/ScottPage.vue';
import ZiemovitPage from './pages/ZiemovitPage.vue';

Vue.use(Router);


export default new Router({
  //history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/applications' },
    { path: '/applications', component: ApplicationsPage,},
    { path: '/appmanagement', component: AppManagementPage },
    { path: '/scottpage', component: ScottPage },
    { path:  '/ziemovitpage', component: ZiemovitPage }
  ],
});

