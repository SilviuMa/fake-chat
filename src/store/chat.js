
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
    SOCKET_SERVER_MESSAGE (state, message) {  
        try {  
          let messageInfo = JSON.parse(message);

          state.messageList = [ ...state.messageList,
                                {
                                  body : messageInfo.message,
                                  name : messageInfo.name
                                  } ];
        }
        finally {
        }
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }