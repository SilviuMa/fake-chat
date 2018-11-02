import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import chat from './chat'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    login,
    chat
  },
  strict: debug,
})