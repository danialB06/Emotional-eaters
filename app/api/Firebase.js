import * as firebase from "firebase";

// Your web app's Firebase configuration

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };