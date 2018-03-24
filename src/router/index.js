/**
* @description
*   + description
# cc @ 2018-03-23 14:37:39
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import Miner from '../components/Miner.vue';
import Spare from '../components/Spare.vue';
import Record from '../components/Record.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Miner},
  {path: '/spare', component: Spare},
  {path: '/record', component: Record},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

module.exports = router;
