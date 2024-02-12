
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCiLaZXn22jEetz1SetmvVa6MnHqTZzyvU",
  authDomain: "store-shop1.firebaseapp.com",
  projectId: "store-shop1",
  storageBucket: "store-shop1.appspot.com",
  messagingSenderId: "726637741128",
  appId: "1:726637741128:web:b135d491f0ca617062c47d",
  measurementId: "G-2J4W7JGGPY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app )