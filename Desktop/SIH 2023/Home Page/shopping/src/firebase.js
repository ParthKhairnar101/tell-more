import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBkslHNuIQsSGesHQOgU2YiSqXWUucYwVU",
  authDomain: "sih-college-round.firebaseapp.com",
  projectId: "sih-college-round",
  storageBucket: "sih-college-round.appspot.com",
  messagingSenderId: "854776640292",
  appId: "1:854776640292:web:52f0366bb9c9807bf3f9b1",
  measurementId: "G-850FL0CNX8"
};
  
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export { db, auth };
