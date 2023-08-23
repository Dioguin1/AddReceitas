// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYaOVIauTUR_eR4GB0y47HcgW5fz5aqv8",
  authDomain: "receitas-802b7.firebaseapp.com",
  projectId: "receitas-802b7",
  storageBucket: "receitas-802b7.appspot.com",
  messagingSenderId: "63344166535",
  appId: "1:63344166535:web:a289170102c5304b09da22"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };