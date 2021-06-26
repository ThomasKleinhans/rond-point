const state = {
  isAuthenticated: false,
  userToken: null,
};

const getters = {
  getUserStatus: (state) => state.isAuthenticated,
  getUserToken: (state) => state.userToken
};

const actions = {
  async loginUser({commit}, data){
    const $fb = this.$fb
    const { email, password } = data
    
    $fb.loginWithEmail(email, password)
    .then((response) => {
        commit('setUserToken')
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  },
  async logoutUser({commit}){
    const $fb = this.$fb
    $fb.logoutUser()
    .then((response) => {
        commit('destroyUser')
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }
}

const mutations = {
  setUserToken(state, data) {
    state.isAuthenticated = true
    //state.userToken = data.userToken
  },
  destroyUser(state) {
    state.isAuthenticated = false
    //state.userToken = null
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}