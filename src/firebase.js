import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAD_EHEdTW8EZ2BgjSEir8PhJhwRMSqhRA",
//   authDomain: "replica-3c221.firebaseapp.com",
//   projectId: "replica-3c221",
//   storageBucket: "replica-3c221.appspot.com",
//   messagingSenderId: "35494746519",
//   appId: "1:35494746519:web:878cbce8cf64e49cf1ccd2",
//   measurementId: "G-YHEW9P8VM1"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD_EHEdTW8EZ2BgjSEir8PhJhwRMSqhRA",
  authDomain: "replica-3c221.firebaseapp.com",
  projectId: "replica-3c221",
  storageBucket: "replica-3c221.appspot.com",
  messagingSenderId: "35494746519",
  appId: "1:35494746519:web:878cbce8cf64e49cf1ccd2",
  measurementId: "G-YHEW9P8VM1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = app.firestore()

export { auth, db }