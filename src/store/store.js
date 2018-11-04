import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import chat from './chat'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  state: {
    errorMessage: null
  },
  getters: {    
    errorMessage: (state) => {
      return state.errorMessage;
    },
  },
  actions: {
    UpdateErrorMessage: ({ commit }, message) => {
      commit('UpdateErrorMessage', message)
    }, 
    ResetErrorMessage: ({ commit }) => {
      commit('ResetErrorMessage')
    },      
  },
  mutations: {
    UpdateErrorMessage: (state, message) => {
      state.errorMessage = message;
    }, 
    ResetErrorMessage: (state) => {
      state.errorMessage = null;
    },     
  },
  modules: {
    login,
    chat
  },
  strict: debug,
})