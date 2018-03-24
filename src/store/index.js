/**
* @description
*   + description
# cc @ 2018-03-23 17:51:05
*/

import Vue from 'vue';
import Vuex from 'vuex';

import storeState from './storeState';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: storeState,
  getters: {},
  mutations: {},
  actions: {}
});

module.exports = store;
