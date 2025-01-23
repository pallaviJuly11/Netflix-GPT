/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-z8B7zAzdFD1RCFPtr0HBdWf1nxUYPmc",
  authDomain: "netflixgpt-e5fb1.firebaseapp.com",
  projectId: "netflixgpt-e5fb1",
  storageBucket: "netflixgpt-e5fb1.firebasestorage.app",
  messagingSenderId: "787296588697",
  appId: "1:787296588697:web:ba969fac09a182a3cfb908",
  measurementId: "G-KL1S16Y316",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
