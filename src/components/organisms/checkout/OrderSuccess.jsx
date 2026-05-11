import { Link } from "react-router-dom";

export default function OrderSuccess() {
  // Generamos un número de pedido aleatorio para que se vea real
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center pt-20 p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl shadow-primary/10 border border-gray-100">
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-text-heading mb-4 tracking-tight">¡Pedido Confirmado!</h1>
        <p className="text-text-body mb-8">
          Gracias por tu compra en MyStore. Hemos recibido tu pedido y estamos preparando el envío.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Número de Orden</p>
          <p className="text-2xl font-black text-primary tracking-tighter">#{orderNumber}</p>
        </div>

        <div className="space-y-4">
          <Link
            to="/gallery"
            className="primary-btn w-full !py-4 !rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
          >
            Seguir Comprando
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
          
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Recibirás un correo con los detalles
          </p>
        </div>
      </div>
    </div>
  );
}
