import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKjvmVH_3IuJhUW2XHOcmNVMQti7hToPE",
  authDomain: "emotional-eaters.firebaseapp.com",
  projectId: "emotional-eaters",
  storageBucket: "emotional-eaters.appspot.com",
  messagingSenderId: "953761521525",
  appId: "1:953761521525:web:64e7679c5ec7d1ec9b3d3c",
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
