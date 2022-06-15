// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeWHeWYvywlPPupg6Ki4q9FSqYDr9c14k",
  authDomain: "emotionaleatersdevelopmentdb.firebaseapp.com",
  projectId: "emotionaleatersdevelopmentdb",
  storageBucket: "emotionaleatersdevelopmentdb.appspot.com",
  messagingSenderId: "675345892959",
  appId: "1:675345892959:web:966ea5bd48e7b5da3d7dea",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };