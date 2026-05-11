import ProductImage from "../atoms/product/ProductImage";
import ProductTitle from "../atoms/product/ProductTitle";
import ProductRate from "../atoms/product/ProductRate";
import ProductPrice from "../atoms/product/ProductPrice";
import { imageMap } from "../../assets/imageMap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const resolvedImage = imageMap[product.image] ?? product.image;

    return (
        <Link 
            to={`/product/${product.id}`} 
            className="group block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[280px]"
        >
            <ProductImage src={resolvedImage} alt={product.title} />
            <div className="p-5">
                <ProductRate rate={product.rate} />
                <ProductTitle title={product.title} />
                <ProductPrice price={product.price} />
                <div className="mt-4 flex items-center text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver detalle →
                </div>
            </div>
        </Link>
    );
}
export default ProductCard;

