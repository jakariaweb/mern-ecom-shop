// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxWBFGYGPHpwSuROZQ5Q6kmv5d1Rb7lMI",
  authDomain: "ecommerce-b5403.firebaseapp.com",
  databaseURL: "https://ecommerce-b5403.firebaseapp.com",
  projectId: "ecommerce-b5403",
  storageBucket: "ecommerce-b5403.appspot.com",
  messagingSenderId: "1062814792528",
  appId: "1:1062814792528:web:eeb29e0424ac0f60ee4a55",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
