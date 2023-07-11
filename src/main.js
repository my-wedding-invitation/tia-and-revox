import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { Plugin } from 'vue-fragment'
import SmartTable from 'vuejs-smart-table'
import { Simplert } from 'vue2-simplert-plugin'

import 'vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css'

import app from '@/layout/app.vue'
import router from '@/router'

Vue.use(PiniaVuePlugin)
Vue.use(Plugin)
Vue.use(SmartTable)
Vue.use(Simplert)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(app)
}).$mount('#app')
