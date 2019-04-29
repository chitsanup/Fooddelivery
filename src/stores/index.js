import Vue from 'vue'
import Vuex from 'vuex'

import food from './food'
import pathify from 'vuex-pathify'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins :[pathify.plugin],
  modules :{
      food : food
  }
})