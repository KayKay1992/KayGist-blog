// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "korrect-gist-blog.firebaseapp.com",
  projectId: "korrect-gist-blog",
  storageBucket: "korrect-gist-blog.firebasestorage.app",
  messagingSenderId: "821381688806",
  appId: "1:821381688806:web:0ddb1880ca759400e87a27"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

