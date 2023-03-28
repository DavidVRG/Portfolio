import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBAsl2BDxl40Ql5RBgmIDtiDkXTVe-y2lk",
  authDomain: "portfolio-58e01.firebaseapp.com",
  projectId: "portfolio-58e01",
  storageBucket: "portfolio-58e01.appspot.com",
  messagingSenderId: "575936464207",
  appId: "1:575936464207:web:62159545a4dbd1fead713a"
};
initializeApp(firebaseConfig);
export const db = getFirestore()