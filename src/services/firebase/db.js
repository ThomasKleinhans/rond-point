import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (name, email) => {
    return firebase.firestore().collection("users").add({
        name: name,
        email: email,
        availability: false
    })
}

export const setUserAvailibility = async (uid, availability) => {
    return firebase.firestore().collection("users").doc(uid).update({
        availability
    })
}