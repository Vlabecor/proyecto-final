export default function Footer() {
  return (
    <footer className="bg-text-heading text-white py-16 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              MyStore<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              El mejor lugar para encontrar tus productos favoritos con calidad, estilo y confianza.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-500">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#/gallery" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Redes Sociales - ¡CENTRADOS EN MÓVIL! */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-500">Síguenos</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5m0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7m5 3a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6m5-1a1 1 0 110 2 1 1 0 010-2z"/></svg>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.18c0 1.25-.19 2.31-.57 3.19s-1 1.63-1.85 2.22-2.12.89-3.8.89h-5.26V7.52h5.26c1.68 0 2.91.29 3.7.87s1.4 1.34 1.71 2.29c.14.44.2.94.2 1.5zm-4.34-1.25c0-.62-.16-1.07-.49-1.36s-.81-.43-1.44-.43h-2.1v3.53h2.1c.63 0 1.11-.14 1.44-.42s.49-.74.49-1.32zm-.11 2.5c0 .58.16 1.03.49 1.35s.81.48 1.44.48h2.1v-3.66h-2.1c-.63 0-1.11.16-1.44.48s-.49.77-.49 1.35zM21.52 6.14h-7.66v-1h7.66v1z"/></svg>
              </a>
            </div>
          </div>

          {/* Boletín */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-500">Boletín</h4>
            <p className="text-sm text-gray-400 mb-6">Suscríbete para recibir ofertas exclusivas.</p>
            <div className="flex max-w-sm mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Tu correo" 
                className="bg-gray-800 border-none px-6 py-3 text-sm w-full rounded-l-full focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary px-6 py-3 text-white rounded-r-full hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} Todos los derechos reservados | Hecho con ❤️ por Vladimir Bejarano
          </p>
          <div className="flex space-x-8 text-gray-500 grayscale opacity-50">
            <span className="text-[10px] font-bold tracking-widest uppercase">Visa</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">Mastercard</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">Paypal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
