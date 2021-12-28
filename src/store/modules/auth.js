const state = {
  isAuthenticated: false,
  uid: "",
  isReady: false
};

const getters = {
  getAuthStatus: ( state ) => state.isAuthenticated,
  getUserUID: ( state ) => state.uid
};

const actions = {
  async loginUser( { commit }, data ) {
    const { email, password } = data

    this.$fb.loginWithEmail( email, password )
      .then( ( user ) => {
        commit( 'setAuthState', user !== null )
        commit( 'setUserToken', user )
        this.$router.push( { name: 'homepage' } )
      } )
      .catch( ( error ) => {
        console.error( error )
      } )
  },
  async registerUser( { commit }, data ) {
    const { firstName, lastName, email, password } = data

    const token = this.$fb.getFCMToken();

    this.$fb.registerUser( email, password )
      .then( ( response ) => this.$fb.addUserData( response.user.uid, firstName, lastName, email, token )
        .then( () => console.log( "User successfully added" ) ) )
      .catch( ( error ) => {
        console.log( error )
      } )
  },
  async logoutUser( { commit } ) {
    this.$fb.logOut()
      .then( () => {
        commit( 'destroyUser' )
      } )
      .catch( ( error ) => {
        console.log( error )
      } )
  },
  async resetPassword( { commit }, data ) {

    const { email } = data

    this.$fb.resetPassword( email )
      .then( () => {
        this.$router.push( { name: 'login' } )
      } )
      .catch( ( error ) => {
        console.log( error )
      } )
  }
}

const mutations = {
  setAuthState( state, value ) {
    state.isAuthenticated = value
    state.isReady = value
  },
  setUserToken( state, user ) {
    state.uid = user.uid
  },
  destroyUser( state ) {
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
