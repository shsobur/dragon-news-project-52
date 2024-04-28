// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgNw4FSAin95ls7_ElXbHDxs4BBc9TmTY",
  authDomain: "dragon-news-project-52.firebaseapp.com",
  projectId: "dragon-news-project-52",
  storageBucket: "dragon-news-project-52.appspot.com",
  messagingSenderId: "1037021993045",
  appId: "1:1037021993045:web:a907a8177ccf1bf3269cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;