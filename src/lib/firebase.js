// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "crazy-chat-48740.firebaseapp.com",
  projectId: "crazy-chat-48740",
  storageBucket: "crazy-chat-48740.appspot.com",
  messagingSenderId: "864720583219",
  appId: "1:864720583219:web:0ed067f4a4833ccffd0146",
  measurementId: "G-6NTPHLP4C1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
