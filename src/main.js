import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router';
import ContentLoading from '@/components/common/ContentLoading'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.component('content-loading', ContentLoading);

new Vue({
  vuetify,
  store,
  render: h => h(App),
  router
}).$mount('#app')
