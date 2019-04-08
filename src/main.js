// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import Routes from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App';
import router from './router';
import {store} from './store';

Axios.defaults.baseURL = 'http://localhost:3000/users';
Axios.defaults.headers['Access-Control-Allow-Origin'] = '*'; 
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(BootstrapVue)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
