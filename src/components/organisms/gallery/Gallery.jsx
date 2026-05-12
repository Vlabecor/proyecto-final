import { useEffect, useMemo, useState, useRef } from "react";
import ProductCard from "../../molecules/ProductCard";
import useProductStore from "../../../store/productStore";
import Hero from "../Hero/Hero";

const ITEMS_PER_PAGE = 8;

export default function Gallery() {
  const {
    products,
    loading,
    fetchProducts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  } = useProductStore();
  const [currentPage, setCurrentPage] = useState(1);
  const galleryRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Scroll inteligente al cambiar de página
  useEffect(() => {
    if (galleryRef.current && currentPage > 1) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // Scroll automático al empezar a buscar si el usuario está arriba
  useEffect(() => {
    if (searchTerm.length > 0 && window.scrollY < 300) {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

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

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Hero />
      <section ref={galleryRef} className="pt-24 pb-16 md:pt-32 md:pb-24 bg-bg-light min-h-screen">
        <div className="container mx-auto px-4">
          <div id="filtros" className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
                  className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 shadow-sm bg-white"
                />
              </div>
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
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${selectedCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-white text-text-body border-gray-100 hover:border-primary hover:text-primary shadow-sm"
                  }`}
              >
                {cat === "all" ? "Todos" : cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Buscando productos...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-xl text-gray-400 mb-6">No encontramos lo que buscas</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setCurrentPage(1);
                }}
                className="text-primary font-bold uppercase tracking-widest text-[10px] hover:underline flex items-center gap-2 mx-auto"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limpiar todos los filtros
              </button>
            </div>
          ) : (
            <>
              <div id="productos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 md:gap-3 mt-16 flex-wrap">
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 md:px-6 py-2 rounded-full border border-gray-200 text-[12px] md:text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all duration-300 bg-white shadow-sm"
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
                      className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 border ${page === currentPage
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
                  className="px-4 md:px-6 py-2 rounded-full border border-gray-200 text-[12px] md:text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all duration-300 bg-white shadow-sm"
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
