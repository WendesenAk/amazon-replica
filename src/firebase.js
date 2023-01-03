// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);
export {auth}