import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCcEZ8a71Ym8zHJwENqrzY3n-MpEbN9hqo",
  authDomain: "clone-8a1ca.firebaseapp.com",
  projectId: "clone-8a1ca",
  storageBucket: "clone-8a1ca.appspot.com",
  messagingSenderId: "1007767186941",
  appId: "1:1007767186941:web:17afcee5d2c8d797a67d94",
  measurementId: "G-D0CHNEB7EW"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export { db, auth };
