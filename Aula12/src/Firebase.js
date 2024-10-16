import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBbMpPSySrV5bXEG6MGmG7cFKzAt871154",
  authDomain: "react58880.firebaseapp.com",
  projectId: "react58880",
  storageBucket: "react58880.appspot.com",
  messagingSenderId: "1042089610910",
  appId: "1:1042089610910:web:f1e442674548a224be758f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
