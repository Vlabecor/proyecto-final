import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  
  // Aquí irán las acciones pronto...
}));

export default useProductStore;
