import { Link } from "react-router-dom";
import useCartStore from "../../../store/cartStore";

export default function Checkout() {
  const { cart, getTotalPrice } = useCartStore();

  return (
    <div className="min-h-screen bg-bg-light pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/cart" className="hover:text-primary transition-colors">Carrito</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-text-heading">Checkout</span>
        </nav>

        <h1 className="text-4xl font-bold text-text-heading mb-12 tracking-tight">Finalizar Compra</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Formularios */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Información de Envío */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-gray-100">
              <h3 className="text-xl font-bold text-text-heading mb-8">Información de Envío</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Nombre Completo</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Ej. Juan Pérez" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Dirección de Entrega</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Calle, número, apto..." required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Ciudad</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Ej. Medellín" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Teléfono</label>
                  <input type="tel" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="300 000 0000" required />
                </div>
              </form>
            </div>

            {/* Información de Pago */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-text-heading">Método de Pago</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-gray-100 rounded-sm"></div>
                  <div className="w-8 h-5 bg-gray-100 rounded-sm"></div>
                  <div className="w-8 h-5 bg-gray-100 rounded-sm"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Número de Tarjeta</label>
                  <div className="relative">
                    <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="0000 0000 0000 0000" required />
                    <svg className="w-6 h-6 absolute right-4 top-2.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Expiración</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="MM / YY" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">CVV</label>
                  <input type="password" size="3" maxLength="3" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="***" required />
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Resumen */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-gray-100 sticky top-32">
              <h3 className="text-xl font-bold text-text-heading mb-6">Resumen del Pedido</h3>
              
              <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-text-heading line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-6">
                <div className="flex justify-between text-sm text-text-body font-medium">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-text-body font-medium">
                  <span>Envío</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest mt-1">Gratis</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-text-heading pt-3">
                  <span>Total</span>
                  <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest text-center">
                  Pago Seguro 100% Protegido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
