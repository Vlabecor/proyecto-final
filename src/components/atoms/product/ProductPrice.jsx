function ProductPrice({ price }) {
    return (    
        <div className="text-lg font-bold text-primary mt-1">
            ${Number(price).toFixed(2)}
        </div>
    );
}
export default ProductPrice;