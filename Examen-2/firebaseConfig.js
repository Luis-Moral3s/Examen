// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Copia aquí tus datos de Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAzY5HnMhLeHCehmyxX8MdbOw5RUl0YTpE",
  authDomain: "app-01-13fcf.firebaseapp.com",
  projectId: "app-01-13fcf",
  storageBucket: "app-01-13fcf.firebasestorage.app",
  messagingSenderId: "690051795289",
  appId: "1:690051795289:web:4f33bb4261e2b08adba448",
  measurementId: "G-58T9QNFPMJ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };