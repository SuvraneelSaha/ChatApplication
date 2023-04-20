// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqp2j-KwUetTOJfbVq2e3WJRAMNozF1lQ",
  authDomain: "chat-e4e72.firebaseapp.com",
  projectId: "chat-e4e72",
  storageBucket: "chat-e4e72.appspot.com",
  messagingSenderId: "16111954181",
  appId: "1:16111954181:web:697a0936a05f60a8d22f6c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
