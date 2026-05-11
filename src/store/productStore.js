import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getProducts } from "../services/productService";

const useProductStore = create(
  persist(
    (set) => ({
      products: [],
      loading: false,
      error: null,
      searchTerm: "",
      selectedCategory: "all",

      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedCategory: (cat) => set({ selectedCategory: cat }),
      
      fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
          const data = await getProducts();
          set({ products: data, loading: false });
        } catch (err) {
          set({ error: "Error al cargar productos", loading: false });
        }
      },
    }),
    {
      name: "mystore-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProductStore;
