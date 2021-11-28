import { getAllOtherUsers } from "src/services/firebase/db";

const state = {
  name: "",
  isAvailable : false,
  users: []
};

const getters = {
  getAvailability: (state) => state.isAvailable,
  getName: (state) => state.name,
  getAllOtherUsers: (state) => state.users
};

const actions = {
  async setUserAvailability({commit}, data){
    const { uid, availability } = data

    this.$fb.setUserAvailability(uid, availability)
    .then(() => {
        commit('setAvailability', availability)
    })
    .catch((error) => {
        console.error(error)
    })
  },

  async fetchAllOtherUsers({commit, getters}){
    const ownUID = getters.getUserUID

    if(ownUID){
      commit('resetUser')
      this.$fb.fetchAllOtherUsers(ownUID)
      .then((response) => {
        response.forEach((doc) => {
          commit('addUser', doc.data())
        })
      })
      .catch((error) => {
          console.error(error)
      })
    }
  }
}

const mutations = {
  setAvailability(state, availability) {
    state.isAvailable = availability
  },

  addUser(state, user) {
    state.users.push(user)
  },

  resetUser(state) {
    state.users = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
