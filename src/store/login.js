const state = {
  user: {
      nickname: ''
  }
}

// getters
const getters = {
  getNickname: (state) => {
    return state.user.nickname;
  },
  getUserInfo: (state) => {
    return state.user;
  },
}

// actions
const actions = {
    updateNicknameInput ({ commit }, nickname) {
        commit('updateNicknameInput', nickname)
    },
}

// mutations
const mutations = {
    updateNicknameInput (state, nickname) {
        state.user.nickname = nickname;
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}