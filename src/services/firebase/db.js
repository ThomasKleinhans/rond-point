import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (uid, name, email) => {
    return firebase.firestore().collection("users").doc(uid).set({
        name: name,
        email: email,
        availability: false
    })
}

export const setUserAvailibility = async (uid, availability) => {
    return firebase.firestore().collection("users").doc(uid).update({
        availability: availability
    })
}

export const fetchAllOtherUsers = async (ownUID) => {
    return firebase.firestore()
      .collection("users")
      .where(firebase.firestore.FieldPath.documentId(), "!=", ownUID)
      .get()
}
