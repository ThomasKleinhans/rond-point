import firebase from 'firebase/app'
import 'firebase/firestore'


export const addUserData = async (uid, firstname, lastname, email, fcm_token) => {
    return firebase.firestore().collection("users").doc(uid).set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        availability: false,
        fcm_token: fcm_token
    })
}

export const setUserAvailability = async (uid, availability) => {
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
