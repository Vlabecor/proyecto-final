import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../molecules/ProductCard";
import useProductStore from "../../../store/productStore";
import Hero from "../Hero/Hero";

const ITEMS_PER_PAGE = 8;

export default function Gallery() {
  const { products, loading, fetchProducts } = useProductStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    
    return products.filter((product) => {
      const matchesSearch = !normalized || 
        product.title.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized);
      
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <section className="section-padding bg-bg-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-heading">Nuestros Productos</h2>
            <p className="text-sm text-text-body mt-2">
              Explora nuestra colección exclusiva ({filteredProducts.length} resultados)
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar por nombre o descripción..."
              className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white text-text-body border-gray-100 hover:border-primary hover:text-primary"
              }`}
            >
              {cat === "all" ? "Todo" : cat}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-16 text-center text-text-body shadow-sm">
            No se encontraron productos para esa búsqueda.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all duration-300 bg-white"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    page === currentPage
                      ? "border-primary bg-primary text-white shadow-lg scale-110"
                      : "border-gray-200 text-text-body hover:border-primary hover:text-primary bg-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all duration-300 bg-white"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
      </div>
    </section>
    </>
  );
}
