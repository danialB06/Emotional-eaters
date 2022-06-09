// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeWHeWYvywlPPupg6Ki4q9FSqYDr9c14k",
  authDomain: "emotionaleatersdevelopmentdb.firebaseapp.com",
  projectId: "emotionaleatersdevelopmentdb",
  storageBucket: "emotionaleatersdevelopmentdb.appspot.com",
  messagingSenderId: "675345892959",
  appId: "1:675345892959:web:966ea5bd48e7b5da3d7dea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);