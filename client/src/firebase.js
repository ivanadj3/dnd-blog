// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dnd-forge-adcf9.firebaseapp.com",
  projectId: "dnd-forge-adcf9",
  storageBucket: "dnd-forge-adcf9.firebasestorage.app",
  messagingSenderId: "726144996873",
  appId: "1:726144996873:web:35b098c37985e561174ad8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // this initialization is based on the config above, has info of our app

