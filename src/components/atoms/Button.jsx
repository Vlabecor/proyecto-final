export default function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {
  const baseStyles = "inline-flex items-center justify-center font-medium px-8 py-3 rounded uppercase tracking-wider transition-all duration-300 border focus:outline-none";
  
  const variants = {
    primary: "bg-primary text-white border-primary hover:bg-white hover:text-primary",
    secondary: "bg-white text-primary border-primary hover:bg-primary hover:text-white",
    outline: "bg-transparent text-text-heading border-gray-300 hover:border-primary hover:text-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
