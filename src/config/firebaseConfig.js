import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs5MMLjUNCnh4_tUK0PRbN8m0xmphBS_c",
  authDomain: "mystore-36edf.firebaseapp.com",
  projectId: "mystore-36edf",
  storageBucket: "mystore-36edf.firebasestorage.app",
  messagingSenderId: "839514666915",
  appId: "1:839514666915:web:c9df1efb2413c9694b8c16",
  measurementId: "G-DM451BB7DJ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios que usaremos
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
