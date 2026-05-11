function ProductImage({ src, alt }) {
  return (
    <div className="w-full h-[200px] bg-white flex items-center justify-center p-4 rounded-t-lg overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
  );
}
export default ProductImage;