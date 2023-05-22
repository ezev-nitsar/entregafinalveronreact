import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

//Configuración específica de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBl7k_OLcGT-4gpokzaAWtrAHGbCyMDVrI",
    authDomain: "entregafinalreactjs-e0d64.firebaseapp.com",
    projectId: "entregafinalreactjs",
    storageBucket: "entregafinalreactjs.appspot.com",
    messagingSenderId: "5187999148",
    appId: "1:5187999148:web:e187d7c182d0c6eb445609"
};

// Inicialización de la Base de Datos
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);