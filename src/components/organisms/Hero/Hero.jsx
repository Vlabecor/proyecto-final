import Button from "../../atoms/Button";

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("filtros");
    if (element) {
      // Calculamos la posición con un offset para que el NavBar no lo tape
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-primary to-blue-400 pt-12 pb-32 md:pt-16 md:pb-40 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white text-center md:text-left">
          <h5 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
            Ahora puedes sentir la pasión
          </h5>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Descubre el <br /> <span className="text-white">Nuevo Futuro</span>
          </h1>
          <p className="text-lg opacity-90 mb-10 max-w-lg font-light leading-relaxed mx-auto md:mx-0">
            Explora nuestra colección exclusiva de accesorios diseñados para elevar tu estilo de vida. Calidad y diseño en cada detalle.
          </p>
          <Button 
            variant="secondary" 
            className="!rounded-full !px-10 shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={scrollToProducts}
          >
            Comprar Ahora
          </Button>
        </div>
      </div>
      
      {/* Decoración circular de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
