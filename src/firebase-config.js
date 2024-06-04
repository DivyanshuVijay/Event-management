import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJHBI98raDfw5KPaUzlvYrEnVJEMKJThI",
  authDomain: "event-management-1e61d.firebaseapp.com",
  projectId: "event-management-1e61d",
  storageBucket: "event-management-1e61d.appspot.com",
  messagingSenderId: "142798675412",
  appId: "1:142798675412:web:5ba7ae68f8fc008b120a41",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
