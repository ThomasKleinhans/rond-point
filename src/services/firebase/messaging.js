import firebase from 'firebase/app'
import 'firebase/messaging'



export const getFCMToken = async () => firebase.messaging().getToken().then((currentToken) => {
    if (currentToken) {
        return currentToken;
    } else {
        console.log('No registration token available. Request permission to generate one.');
        return null;
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    return null;
  });