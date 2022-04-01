import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
//import {getFirestore,collection,getDoc, getDocs} from 'firebase/firestore';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmRjv75xzNGjQbgn8_c6FzTP5g028WE1c",
  authDomain: "webfirebase-be3ca.firebaseapp.com",
  projectId: "webfirebase-be3ca",
  storageBucket: "webfirebase-be3ca.appspot.com",
  messagingSenderId: "726922580000",
  appId: "1:726922580000:web:76106af1b540da60e2ac45",
  measurementId: "G-B1GGRG2CDK"
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fapp);
const auth = getAuth(fapp);
onAuthStateChanged(auth, user=>{
  if(user!=null){
    console.log('logged in');
  }else{
    console.log('logged in');
  }
})