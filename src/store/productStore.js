import { create } from "zustand";
import { getProducts } from "../services/productService";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getProducts();
      set({ products: data, loading: false });
    } catch (err) {
      set({ error: "Error al cargar productos", loading: false });
    }
  },
}));

export default useProductStore;
