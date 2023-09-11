import { getFirebaseApp } from "../firebaseHelper";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const signUp = async (firstName, lastName, email, password) => {
  const app = getFirebaseApp();
  const auth = getAuth(app);

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
