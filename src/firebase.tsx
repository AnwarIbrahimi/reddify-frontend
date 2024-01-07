// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATrhQ0WmzMZidru3yXfAe_L_p-Y0o8wUs",
  authDomain: "reddify-19be6.firebaseapp.com",
  projectId: "reddify-19be6",
  storageBucket: "reddify-19be6.appspot.com",
  messagingSenderId: "603956328709",
  appId: "1:603956328709:web:e446df44db4e1b31659f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);