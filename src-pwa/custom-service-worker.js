/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

import { precacheAndRoute } from 'workbox-precaching'

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

firebase.initializeApp(process.env.QENV.FIREBASE_CONFIG);


    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      // Customize notification here
      const notificationTitle =  payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: '/icons/icon-128x128.png'
      };
    
      self.registration.showNotification(notificationTitle,
        notificationOptions);
    });
    