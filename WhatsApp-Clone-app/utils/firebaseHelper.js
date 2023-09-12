// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCf9cdIb7nMkyxUY3Aa36tvkxp_E7WhSfw",
    authDomain: "whatsapp-d89da.firebaseapp.com",
    projectId: "whatsapp-d89da",
    storageBucket: "whatsapp-d89da.appspot.com",
    messagingSenderId: "173084586629",
    appId: "1:173084586629:web:bc57e99fffc4b3af506fec",
    measurementId: "G-EWD53TCBD5",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
