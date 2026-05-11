import { collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";

// --- Guardar un pedido en Firestore ---
export const saveOrder = async (cartItems, total) => {
  try {
    const user = auth.currentUser;

    const order = {
      userId: user ? user.uid : "guest",
      userEmail: user ? user.email : "guest",
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      total: total,
      status: "completado",
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    return { success: true, orderId: docRef.id };
  } catch (error) {
    console.error("Error guardando pedido:", error);
    return { success: false, error: error.message };
  }
};

// --- Traer pedidos del usuario actual ---
export const getUserOrders = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return { success: false, error: "No hay sesión activa." };

    const q = query(
      collection(db, "orders"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { success: true, orders };
  } catch (error) {
    console.error("Error obteniendo pedidos:", error);
    return { success: false, error: error.message };
  }
};
