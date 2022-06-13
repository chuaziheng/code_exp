import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, doc
} from 'firebase/firestore'
import {
    getAuth, 
    // GoogleAuthProvider
} from 'firebase/auth' 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm42WV6rwUdLCV_v1AJTFf96c9gbOw65k",
    authDomain: "skeeddos-code-exp.firebaseapp.com",
    projectId: "skeeddos-code-exp",
    storageBucket: "skeeddos-code-exp.appspot.com",
    messagingSenderId: "311190505872",
    appId: "1:311190505872:web:b3e8c4f94078b7c72a0b15",
    measurementId: "G-4VHG1HKVD3"
  };

// initialize app
initializeApp(firebaseConfig)