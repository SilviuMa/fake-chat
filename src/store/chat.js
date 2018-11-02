import { getLoggedInUserName } from '../utils/auth';

const state = {
    messageToBeSent: '',
    messageList: []
  }
  
  // getters
  const getters = {
    messageToBeSent: (state) => {
      return state.messageToBeSent;
    },
    messageList: (state) => {
      return state.messageList;
    },
  }
  
  // actions
  const actions = {
    updateMessageToBeSent ({ commit }, message) {
        commit('updateMessageToBeSent', message)
    },
    sendMessage ({ commit }) {
        commit('sendMessage')
    },
  }
  
  // mutations
  const mutations = {
    updateMessageToBeSent (state, message) {
        state.messageToBeSent = message;
    },
    sendMessage (state) {    
        state.messageList = [ ...state.messageList,
                              {
                                body : state.messageToBeSent,
                                name : getLoggedInUserName()
                                } ];
        state.messageToBeSent = '';
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }