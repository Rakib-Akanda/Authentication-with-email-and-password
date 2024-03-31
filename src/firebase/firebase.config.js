// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzz6HmW1F4gtvDQJGDEAJ6H0_yqFit7MI",
  authDomain: "user-email-pass-auth-33603.firebaseapp.com",
  projectId: "user-email-pass-auth-33603",
  storageBucket: "user-email-pass-auth-33603.appspot.com",
  messagingSenderId: "641006453989",
  appId: "1:641006453989:web:8b15e3d6bc6aa5635a000c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;