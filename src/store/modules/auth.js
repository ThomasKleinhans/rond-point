const state = {
  isAuthenticated: false,
  uid: "",
  isReady: false
};

const getters = {
  getAuthStatus: (state) => state.isAuthenticated,
  getUserUID: (state) => state.uid
};

const actions = {
  async loginUser({commit}, data){
    const { email, password } = data
    
    $fb.loginWithEmail(email, password)
    .then((user) => {
        commit('setAuthState', user !== null)  
        commit('setUserToken', user)
    })
    .catch((error) => {
        console.error(error)
    })
  },
  async registerUser({commit}, data) {
    const {name, email, password} = data

    this.$fb.registerUser(email, password)
    .then(() => $fb.addUserData(name, email)
    .then(() => console.log("User successfully added")))
    .catch((error) => {
      console.log(error)
    })
  },  
  async logoutUser({commit}){
    const $fb = this.$fb
    $fb.logOut()
    .then(() => {
        commit('destroyUser')
    })
    .catch((error) => {
        console.log(error)
    })
  },
  async resetPassword({commit}, data){

    const { email } = data
    
    this.$fb.resetPassword(email)
  }
}

const mutations = {
  setAuthState (state, value) {
    state.isAuthenticated = value
    state.isReady = value
  },
  setUserToken(state, user) {
    state.uid = user.uid
  },
  destroyUser(state) {
    state.isAuthenticated = false
    state.isReady = false
    state.uid = ""
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}