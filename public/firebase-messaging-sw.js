// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyC81Sggyl8ozcv1tVxUqxmrz8PcyZZpij8",
    authDomain: "nextjsserviceworker.firebaseapp.com",
    projectId: "nextjsserviceworker",
    storageBucket: "nextjsserviceworker.appspot.com",
    messagingSenderId: "1053369823231",
    appId: "1:1053369823231:web:9b66d6b8efc1f0a32901ca",
    measurementId: "G-6ZCP6VHPRS",
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();



messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });