// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPWNtKV4-xpi6PktAlP4I01xQZRHRpH3M",
  authDomain: "react-project1-quiz.firebaseapp.com",
  projectId: "react-project1-quiz",
  storageBucket: "react-project1-quiz.appspot.com",
  messagingSenderId: "834331061266",
  appId: "1:834331061266:web:fb76f5bcd44b358d883ccb",
  measurementId: "G-8HLN044894"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };