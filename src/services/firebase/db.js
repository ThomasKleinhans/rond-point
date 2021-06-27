import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (name, email) => {
    return firebase.firestore().collection("users").add({
        name: name,
        email: email
    })
}