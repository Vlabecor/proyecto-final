function ProductTitle({ title }) {
  return (
    <h3 className="text-base font-semibold text-text-heading mt-4 line-clamp-1 group-hover:text-primary transition-colors duration-300">
      {title}
    </h3>
  );
}
export default ProductTitle;