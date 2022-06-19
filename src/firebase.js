// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvWlROPqT3neXoh8Oan6VzvhsSubfYyno",
    authDomain: "react-restaurant-app-12abf.firebaseapp.com",
    projectId: "react-restaurant-app-12abf",
    storageBucket: "react-restaurant-app-12abf.appspot.com",
    messagingSenderId: "870606691536",
    appId: "1:870606691536:web:50d71fbdcd5d293ae752d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}