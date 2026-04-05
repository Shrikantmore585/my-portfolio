import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Replace with your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB9VwolLLDBc-WHXb7tizpYXR3eTg8TQJY",
  authDomain: "my-portfolio-228d0.firebaseapp.com",
  databaseURL: "https://my-portfolio-228d0-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-228d0",
  storageBucket: "my-portfolio-228d0.firebasestorage.app",
  messagingSenderId: "287076355538",
  appId: "1:287076355538:web:fe6588419507c0c5e54c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Realtime Database
export const realtimeDB = getDatabase(app);
