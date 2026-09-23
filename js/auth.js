/* Todo lo relacionado a "quién eres" vive aquí, separado de "qué
   datos existen" (eso es data.js). */
import {
  signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./firebase-init.js";

export const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);
export const watchAuth = (callback) => onAuthStateChanged(auth, callback);
