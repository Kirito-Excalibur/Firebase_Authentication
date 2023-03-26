import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBbIAESAP1v1jXx8O7POWOypK59Vqd6IU",
  authDomain: "cricketreg-d0e3d.firebaseapp.com",
  projectId: "cricketreg-d0e3d",
  storageBucket: "cricketreg-d0e3d.appspot.com",
  messagingSenderId: "1095986691499",
  appId: "1:1095986691499:web:4f37038d5e6c82a38ce6ee",
  measurementId: "G-4PRJW0T16N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//timestamp
const timestamp = Timestamp;

export { app, auth, db, timestamp };
