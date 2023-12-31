
// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from '@/pages/Index.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import QRCodePage from '@/pages/QRCode.vue'
import LoadingPage from '@/pages/Loading.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "Index",
    component: IndexPage,
  },
  {
    path: '/loading',
    name: "Loading",
    component: LoadingPage,
  },
  {
    path: '/qrcode',
    name: "QRCode",
    component: QRCodePage,
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: PageNotFound
  }  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
