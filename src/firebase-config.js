// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKxbY8SzzRR3jfAjOXeHH03mwgPyRLdOo",
  authDomain: "react-basic-demo.firebaseapp.com",
  projectId: "react-basic-demo",
  storageBucket: "react-basic-demo.appspot.com",
  messagingSenderId: "672292341666",
  appId: "1:672292341666:web:4169c3f22699c1667bd4fb",
  measurementId: "G-XVZPV1VQJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
