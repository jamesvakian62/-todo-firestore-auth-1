// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Import { getAuth } from 'firebase/auth"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB0P1LN25_uuTdrfz4mcxo3wsPW0qtj5bI",
  authDomain: "todo-app-e73c1.firebaseapp.com",
  projectId: "todo-app-e73c1",
  storageBucket: "todo-app-e73c1.appspot.com",
  messagingSenderId: "809613561059",
  appId: "1:809613561059:web:90b9ebb5b0ba2bd94c49d6",
  measurementId: "G-6BMBN5Z1ZQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export const auth = getAuth(app)

export default db
