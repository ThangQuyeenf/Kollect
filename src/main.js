import Vue from 'vue'
import liff from '@line/liff'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router';
import ContentLoading from '@/components/common/ContentLoading'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.component('content-loading', ContentLoading);

liff.init({ liffId: '2001602140-y3gZ0PPj' })
new Vue({
  vuetify,
  store,
  render: h => h(App),
  router
}).$mount('#app')
