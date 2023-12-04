// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6vUQJhNkNelSpYSGbKlPGcVRy9VJp41A",
  authDomain: "fullstackfoodapp-5a427.firebaseapp.com",
  projectId: "fullstackfoodapp-5a427",
  storageBucket: "fullstackfoodapp-5a427.appspot.com",
  messagingSenderId: "1034079800438",
  appId: "1:1034079800438:web:f2698c56d9634cee122357",
  measurementId: "G-R6ELXQ7NRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;