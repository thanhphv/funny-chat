import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCSD2AWlV4MqENPY-HvWFU5xWfYo8qABE",
  authDomain: "chat-app-91ca0.firebaseapp.com",
  projectId: "chat-app-91ca0",
  storageBucket: "chat-app-91ca0.appspot.com",
  messagingSenderId: "815006232854",
  appId: "1:815006232854:web:6dca44ba63d2c667cde037",
  measurementId: "G-C2EYKY5352",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

// auth.useEmulator("http://localhost:9099");
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", "8080");
// }

export { db, auth };
export default firebase;
