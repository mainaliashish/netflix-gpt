// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqTLfKJGugPAch3dkFKn7XGGCb2H86r8g",
  authDomain: "netflix-gpt-2cb15.firebaseapp.com",
  projectId: "netflix-gpt-2cb15",
  storageBucket: "netflix-gpt-2cb15.appspot.com",
  messagingSenderId: "65739467270",
  appId: "1:65739467270:web:512ece5889777d03e73187",
  measurementId: "G-HWV7WL2B9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();