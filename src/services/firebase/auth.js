import firebase from 'firebase/app'
import 'firebase/auth'

export const createUserWithEmail = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const loginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const registerUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const logOut = () => {
  return firebase.auth().signOut()
}

export const isAuthenticated = (store) => {
  return store.state.auth.isAuthenticated
}

export const handleOnAuthStateChanged = async (store, currentUser) => {
  store.commit('setAuthState', currentUser !== null)
  if(currentUser){
    store.commit('setUserToken', currentUser)
  }
}

export const ensureAuthIsInitialized = async (store) => {
  if (store.state.auth.isReady) return true
  // Create the observer only once on init
  return new Promise((resolve, reject) => {
    // Use a promise to make sure that the router will eventually show the route after the auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      resolve()
      unsubscribe()
    }, () => {
      reject(new Error('Looks like there is a problem with the firebase service. Please try again later'))
    })
  })
}