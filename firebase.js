// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmeI9XT76dHFpATIDSYUw7nC68diUbldo",
  authDomain: "inventory-management-2c6d8.firebaseapp.com",
  projectId: "inventory-management-2c6d8",
  storageBucket: "inventory-management-2c6d8.appspot.com",
  messagingSenderId: "89154043465",
  appId: "1:89154043465:web:76653a5456898c355f0998",
  measurementId: "G-XNDF75NKW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
