// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3w33UjYHvUW6_mH6ADxAsHb2a2Z5K6u0",
  authDomain: "mitiyal-deco.firebaseapp.com",
  projectId: "mitiyal-deco",
  storageBucket: "mitiyal-deco.appspot.com",
  messagingSenderId: "138626173964",
  appId: "1:138626173964:web:f992be3117298f396ef229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);