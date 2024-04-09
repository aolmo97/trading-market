// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; // Importa getFirestore para acceder a Firestore
import { mockPortfolioData } from "./components/constant/mockPortfolio";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs8lYJi6biWuiFkl6ULVHjszsKqVVODGY",
  authDomain: "trading-market-a8c3e.firebaseapp.com",
  projectId: "trading-market-a8c3e",
  storageBucket: "trading-market-a8c3e.appspot.com",
  messagingSenderId: "645127580912",
  appId: "1:645127580912:web:9977121ca6cb368d692635",
  measurementId: "G-YBF8T3EJEM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

async function savePortfolioData(portfolioData) {
  const portfolioCollection = collection(db, "portfolio");

  // Aquí estoy usando setDoc con un ID de documento específico. Si quieres generar un ID automáticamente, podrías usar addDoc en su lugar.
  for (const item of portfolioData) {
    const docRef = doc(portfolioCollection); // Esto generará un ID único para cada documento
    await setDoc(docRef, item);
  }
}

// Ejecutar la función para guardar los datos en Firestore
export const saveBD = () => savePortfolioData(mockPortfolioData);
