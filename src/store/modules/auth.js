const state = {
  isAuthenticated: false,
  uid: null,
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
        commit('setUserToken', response)
    })
    .catch((error) => {
        console.error(error)
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
  setUserToken(state, user) {
    state.isAuthenticated = true
    state.uid = user.uid
  },
  destroyUser(state) {
    state.isAuthenticated = false
    state.uid = null
  },  
};

export default {
  state,
  getters,
  actions,
  mutations
}