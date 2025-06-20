import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "###########################", // Firebaseden alınan bilgiler eklenecek.
  authDomain: "#####################", // Firebaseden alınan bilgiler eklenecek.
  projectId: "####################", // Firebaseden alınan bilgiler eklenecek.
  storageBucket: "###########################", // Firebaseden alınan bilgiler eklenecek.
  messagingSenderId: "###########################", // Firebaseden alınan bilgiler eklenecek.
  appId: "###########################", // Firebaseden alınan bilgiler eklenecek.
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
