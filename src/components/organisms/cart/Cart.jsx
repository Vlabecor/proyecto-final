import { Link } from "react-router-dom";
import useCartStore from "../../../store/cartStore";
import { imageMap } from "../../../assets/imageMap";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm max-w-md mx-auto">
          <div className="w-20 h-20 bg-bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-text-heading mb-3">Tu carrito está vacío</h2>
          <p className="text-text-body mb-8">
            ¡Parece que aún no has añadido nada! Explora nuestra colección y encuentra algo especial para ti.
          </p>
          <Link
            to="/gallery"
            className="primary-btn !rounded-full w-full"
          >
            Explorar Productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-bg-light min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-heading mb-10 tracking-tight text-center md:text-left">Mi Carrito</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Lista de Productos */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div className="col-span-6">Producto</div>
                <div className="col-span-3 text-center">Cantidad</div>
                <div className="col-span-3 text-right">Subtotal</div>
              </div>

              <div className="divide-y divide-gray-100">
                {items.map(({ product, quantity }) => {
                  const resolvedImage = imageMap[product.image] ?? product.image;
                  const itemSubtotal = Number(product.price) * Number(quantity);
                  return (
                    <article key={product.id} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-6 flex gap-6 items-center">
                        <div className="w-24 h-24 bg-bg-light rounded-xl overflow-hidden flex-shrink-0 border border-gray-50">
                          <img
                            src={resolvedImage}
                            alt={product.title}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-text-heading truncate text-lg">{product.title}</h3>
                          <p className="text-primary font-semibold">${Number(product.price).toFixed(2)}</p>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            className="text-[10px] uppercase tracking-wider font-bold text-red-500 hover:text-red-600 mt-2 flex items-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Eliminar
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-3 flex justify-center">
                        <div className="flex items-center bg-bg-light rounded-full p-1 border border-gray-100">
                          <button
                            type="button"
                            onClick={() => decrementItem(product.id)}
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm hover:text-primary transition-colors text-lg font-bold"
                          >
                            -
                          </button>
                          <span className="w-10 text-center text-sm font-bold">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => incrementItem(product.id)}
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm hover:text-primary transition-colors text-lg font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-3 text-right">
                        <p className="text-xl font-bold text-text-heading">${itemSubtotal.toFixed(2)}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            
            <Link to="/gallery" className="inline-flex items-center text-sm font-bold text-primary hover:underline gap-2 mt-4">
              ← Seguir comprando
            </Link>
          </div>

          {/* Resumen de Compra */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-28">
              <h3 className="text-xl font-bold text-text-heading mb-8 pb-4 border-b border-gray-50 uppercase tracking-widest text-xs">Resumen de Pedido</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-text-body">
                  <span>Productos ({items.reduce((acc, curr) => acc + curr.quantity, 0)})</span>
                  <span className="font-semibold text-text-heading">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-body">
                  <span>Envío</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Gratis</span>
                </div>
                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-lg font-bold text-text-heading">Total</span>
                  <span className="text-3xl font-bold text-primary tracking-tighter">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="primary-btn w-full !py-4 !rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
              >
                Finalizar Compra
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <div className="mt-6 flex justify-center gap-4 grayscale opacity-40">
                <span className="text-[10px] font-bold">VISA</span>
                <span className="text-[10px] font-bold">MASTERCARD</span>
                <span className="text-[10px] font-bold">PAYPAL</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
