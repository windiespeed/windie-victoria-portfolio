// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsEtZyWt5Ae6DMkxz9u00-vOZ_VZecCKY",
    authDomain: "windie-victoria-portfolio.firebaseapp.com",
    projectId: "windie-victoria-portfolio",
    storageBucket: "windie-victoria-portfolio.firebasestorage.app",
    messagingSenderId: "210273206223",
    appId: "1:210273206223:web:1b35c454382738ec6adcba",
    measurementId: "G-WXK1M89TCN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
