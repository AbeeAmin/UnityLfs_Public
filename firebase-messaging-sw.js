// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
/*
importScripts('/__/firebase/8.6.1/firebase-app.js');
importScripts('/__/firebase/8.6.1/firebase-messaging.js');
importScripts('/__/firebase/init.js');
const messaging = firebase.messaging();
*/

// Import and configure the Firebase SDK
// These scripts are made available when the app is not hosted on Firebase Hosting
// https://firebase.google.com/docs/web/setup#config-object
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage((payload)=>{
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = 'Background Message Title';
  const notificationOptions = { body: 'Background Message body.', icon: '/firebase-logo.png' };

  onFirebaseBackgroundMessage(payload);
  self.registration.showNotification(notificationTitle, notificationOptions);
});
