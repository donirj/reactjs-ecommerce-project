// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFireStore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8JZlnMI1vEawns4ENXPpP2iSLKyQ9ArI",
  authDomain: "rj-1294.firebaseapp.com",
  projectId: "rj-1294",
  storageBucket: "rj-1294.appspot.com",
  messagingSenderId: "332621258035",
  appId: "1:332621258035:web:2ac129842b834bdadb3246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app)
