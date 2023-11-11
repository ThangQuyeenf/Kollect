
// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/pages/Index.vue'
import PageNotFound from '@/components/PageNotFound.vue'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: "Index",
    component: IndexPage,
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: PageNotFound
  }  
];

const router = new Router({
  history: 'history',
  routes
});

export default router;
