import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm8Fo9nJx65JUw2p8LVuVJl7iRm4wFypY",
  authDomain: "equirights-42a09.firebaseapp.com",
  projectId: "equirights-42a09",
  storageBucket: "equirights-42a09.firebasestorage.app",
  messagingSenderId: "13876243818",
  appId: "1:13876243818:web:c385b7c594294fc43fc913",
  measurementId: "G-W8JL1168QW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };