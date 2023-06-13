import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyASq1ALTlPStqWOju-3LNjFWJj3eRGfv1k",
  authDomain: "bomway-21955.firebaseapp.com",
  projectId: "bomway-21955",
  storageBucket: "bomway-21955.appspot.com",
  messagingSenderId: "176057495819",
  appId: "1:176057495819:web:8990f846b869c69be2b20e",
  measurementId: "G-KBWKMYPCP5",
});

export const auth = app.auth();

export const db = app.firestore();

export default app;
