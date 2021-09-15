import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (uid, name, email) => {
    return firebase.firestore().collection("users").doc(uid).set({
        name: name,
        email: email
    })
}