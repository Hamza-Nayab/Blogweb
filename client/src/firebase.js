// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebaseApi,
  authDomain: "mern-blog-9776f.firebaseapp.com",
  projectId: "mern-blog-9776f",
  storageBucket: "mern-blog-9776f.appspot.com",
  messagingSenderId: "23064966519",
  appId: "1:23064966519:web:80bb828b3d511a46915d72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
