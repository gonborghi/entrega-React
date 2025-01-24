import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC_Pq2hFHl1QDOJ2J05HN6XWdLECYMTvq0",
  authDomain: "ecommerce-caslashop.firebaseapp.com",
  projectId: "ecommerce-caslashop",
  storageBucket: "ecommerce-caslashop.firebasestorage.app",
  messagingSenderId: "65504840408",
  appId: "1:65504840408:web:200e43e59cc62f4270e5ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db;