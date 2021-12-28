import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = () => {
  return firebase.auth()
}

export const fBInit = (config) => {
  return firebase.initializeApp(config)
}

export const messaging = (config, serviceWorker) => {
  const messaging = firebase.messaging()
  navigator.serviceWorker.register(serviceWorker)
  .then((registration) => {
    messaging.getToken({ vapidKey: config, serviceWorkerRegistration: registration}).then((currentToken) => {
      if (currentToken) {
        console.log('User token :' + currentToken)
        messaging.onMessage((payload) => {
          console.log('Message received. ', payload);
        });
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  });
  
  
}