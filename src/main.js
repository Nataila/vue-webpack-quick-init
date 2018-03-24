/**
* @description
*   + description
# cc @ 2018-03-22 15:49:20
*/

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

import App from './App.vue';
import store from './store';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
