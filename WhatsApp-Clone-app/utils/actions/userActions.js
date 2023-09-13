import { child, getDatabase, ref } from "firebase/database";
import { async } from "validate.js";

export const getUserData = async (userId) => {
  try {
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, `users/${userId}`);

    const snapshot = await get(userRef);
  } catch (error) {}
};
