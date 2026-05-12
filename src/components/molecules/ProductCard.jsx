import ProductImage from "../atoms/product/ProductImage";
import ProductTitle from "../atoms/product/ProductTitle";
import ProductRate from "../atoms/product/ProductRate";
import ProductPrice from "../atoms/product/ProductPrice";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

function ProductCard({ product }) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addItem(product);
    };

    return (
        <Link 
            to={`/product/${product.id}`} 
            className="group block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[280px] mx-auto"
        >
            <ProductImage src={product.image} alt={product.title} />
            <div className="p-5 text-center flex flex-col items-center">
                <ProductRate rate={product.rate} />
                <ProductTitle title={product.title} />
                <div className="mt-3 w-full flex flex-col items-center gap-3">
                    <ProductPrice price={product.price} />
                    <button 
                        type="button"
                        onClick={handleAddToCart}
                        className="bg-primary text-white w-full py-3 rounded-full hover:bg-text-heading transition-all duration-300 shadow-sm active:scale-95 flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                        title="Añadir al carrito"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Añadir
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
