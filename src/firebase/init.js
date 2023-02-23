import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0n-rsOH8dJuEKGRUDyiEOR0bhoHGA-DI",
  authDomain: "fir-ffd1c.firebaseapp.com",
  projectId: "fir-ffd1c",
  storageBucket: "fir-ffd1c.appspot.com",
  messagingSenderId: "834192777672",
  appId: "1:834192777672:web:bc5e3117814b60e52ee0fd",
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db