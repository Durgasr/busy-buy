// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
// Initialize Firebase and configure the firebase.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgcXSAu583b-969x1_yevMqIHsby_-Bu4",
  authDomain: "busybuy-ec7f7.firebaseapp.com",
  projectId: "busybuy-ec7f7",
  storageBucket: "busybuy-ec7f7.firebasestorage.app",
  messagingSenderId: "985767239963",
  appId: "1:985767239963:web:53323fcaf1a065caf433be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
