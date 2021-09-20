const state = {
    name: "",
    isAvailable : false
  };
  
  const getters = {
    getAvailability: (state) => state.isAvailable,
    getName: (state) => state.name
  };
  
  const actions = {
    async setUserAvailibility({commit}, data){
      const { uid, availability } = data
      
      this.$fb.setUserAvailibility(uid, availability)
      .then(() => {
          commit('setAvailability', availability)
      })
      .catch((error) => {
          console.error(error)
      })
    },
  }
  
  const mutations = {
    setAvailability(state, availability) {
      state.isAvailable = availability
    },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  }