import firebase from 'firebase/app'
import 'firebase/messaging'



export const getFCMToken = async () => {
  if ('serviceWorker' in navigator) {
      return navigator.serviceWorker.register(process.env.SERVICE_WORKER_FILE).then(function(registration) {
        return firebase.messaging().getToken({vapidKey : "BCQ-qP_lbCpPr3PV1YU3F3wbcuWh2gbskJ4XBNJbSMRqmciKoPYtxYeTRLP99qSSMctEGAZJ_9N0SFNHHKSdSR4", serviceWorkerRegistration : registration	}).then((currentToken) => {
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
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
  }

  
}