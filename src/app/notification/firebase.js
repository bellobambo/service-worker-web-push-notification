// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC81Sggyl8ozcv1tVxUqxmrz8PcyZZpij8",
  authDomain: "nextjsserviceworker.firebaseapp.com",
  projectId: "nextjsserviceworker",
  storageBucket: "nextjsserviceworker.appspot.com",
  messagingSenderId: "1053369823231",
  appId: "1:1053369823231:web:9b66d6b8efc1f0a32901ca",
  measurementId: "G-6ZCP6VHPRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BIvG1YlktXMzqfq4Uhlm-L4raUAWolfJs18NVJE2G22Gc604xrYlShFQf1JMpKJKF8amjPtE71h-7Dk8rZ5fpPs",
    });
    console.log(token);
  }
};
