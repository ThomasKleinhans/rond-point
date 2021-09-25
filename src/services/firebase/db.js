import firebase from 'firebase/app'
import 'firebase/firestore'

export const addUserData = async ( uid, firstname, lastname, email ) => {
  return firebase.firestore().collection( "users" ).doc( uid ).set( {
    firstname: firstname,
    lastname: lastname,
    email: email,
    availability: false
  } )
}

export const setUserAvailibility = async ( uid, availability ) => {
  return firebase.firestore().collection( "users" ).doc( uid ).update( {
    availability: availability
  } )
}

export const getAllOtherUsers = async ( ownUID ) => {
  return firebase.firestore().collection( "users" ).where( firebase.firestore.FieldPath.documentId(), "!=", ownUID )
    .get()
    .then( ( querySnapshot ) => {
      querySnapshot.forEach( ( doc ) => {
        // doc.data() is never undefined for query doc snapshots
        console.log( doc.id, " => ", doc.data() );
      } );
    } )
    .catch( ( error ) => {
      console.log( "Error getting documents: ", error );
    } );
}
