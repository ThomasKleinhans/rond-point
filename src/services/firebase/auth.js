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

export const resetPassword = (email) => {
  return firebase.auth().sendPasswordResetEmail(
    email); 
}