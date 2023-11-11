
// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from '@/pages/Index.vue'
import PageNotFound from '@/components/PageNotFound.vue'

Vue.use(VueRouter);

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

const router = new VueRouter({
  history: 'history',
  routes
});

export default router;
