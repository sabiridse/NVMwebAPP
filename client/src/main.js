/* eslint-disable */

import '@babel/polyfill'
import Vue from 'vue'
// import './plugins/bootstrap-vue'//*****
import './plugins/vuetify'
import router from './router'
import store from './store/store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueCookie from 'vue-cookies'
Vue.use(VueCookie)
// import VueResource from 'vue-resource'

// Vue.use(VueResource);
// // import axios from "axios";
// import async from "async";
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@mdi/font/css/materialdesignicons.css'

// Vue.use(Vuetify, {
//  iconfont: 'mdi'
// })
// Vue.use(Vuetify)
Vue.config.productionTip = false
// Vue.use(ElementUI);
new Vue({
  	router,
  	store,
  render: h => h(App)
}).$mount('#app')