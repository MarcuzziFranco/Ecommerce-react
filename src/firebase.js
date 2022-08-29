import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGdM8S-0XE6XmuBAixykhCGQiGiPxFlvc",
  authDomain: "icommerce-react.firebaseapp.com",
  projectId: "icommerce-react",
  storageBucket: "icommerce-react.appspot.com",
  messagingSenderId: "926900061569",
  appId: "1:926900061569:web:3017db1f457d7319689480",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
