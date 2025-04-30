// src/api/firebaseGoogle.js
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseconfig";

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return {
      success: true,
      user: {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      }
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};
