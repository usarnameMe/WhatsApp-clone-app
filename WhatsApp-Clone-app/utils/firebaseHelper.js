// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBi-C1sthLSkGwzFGJto9xWUAYmpu58dT0",
    authDomain: "whatsapp-cb01f.firebaseapp.com",
    projectId: "whatsapp-cb01f",
    storageBucket: "whatsapp-cb01f.appspot.com",
    messagingSenderId: "835439154846",
    appId: "1:835439154846:web:d3f259b409bcd57ee20d8f",
    measurementId: "G-R56NJ26563",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};

export default getFirebaseApp;
