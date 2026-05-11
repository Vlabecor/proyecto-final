import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";

// --- Escuchar cambios de sesión en tiempo real ---
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      // Traer datos extra del usuario desde Firestore
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      const extraData = userDoc.exists() ? userDoc.data() : {};
      callback({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        name: firebaseUser.displayName,
        emailVerified: firebaseUser.emailVerified,
        ...extraData,
      });
    } else {
      callback(null);
    }
  });
};

// --- Login con Email y Contraseña ---
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        name: user.displayName,
      },
    };
  } catch (error) {
    let errorMsg = "Correo o contraseña incorrectos.";
    if (error.code === "auth/user-not-found") errorMsg = "Usuario no encontrado.";
    if (error.code === "auth/wrong-password") errorMsg = "Contraseña incorrecta.";
    if (error.code === "auth/invalid-email") errorMsg = "Correo inválido.";
    if (error.code === "auth/too-many-requests") errorMsg = "Demasiados intentos. Intenta más tarde.";
    return { success: false, error: errorMsg };
  }
};

// --- Registro con Email, Contraseña y datos extra ---
export const registerFullUser = async (userData) => {
  try {
    // Crear usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const user = userCredential.user;

    // Actualizar nombre en el perfil de Auth
    await updateProfile(user, { displayName: userData.name });

    // Guardar datos extra en Firestore (celular, dirección)
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: userData.name,
      email: userData.email,
      cellphone: userData.cellphone || "",
      address: userData.address || "",
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        name: userData.name,
        displayName: userData.name,
      },
    };
  } catch (error) {
    let errorMsg = "Error al registrar. Intenta de nuevo.";
    if (error.code === "auth/email-already-in-use") errorMsg = "El email ya está registrado.";
    if (error.code === "auth/weak-password") errorMsg = "La contraseña debe tener mínimo 6 caracteres.";
    if (error.code === "auth/invalid-email") errorMsg = "Correo inválido.";
    return { success: false, error: errorMsg };
  }
};

// --- Cerrar Sesión ---
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
