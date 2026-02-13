
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">CH</div>
              <span className="text-xl font-bold tracking-tight">
                CONSTRU<span className="text-primary">HOGAR</span>
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed">
              Líderes en ingeniería y construcción con un enfoque en la innovación tecnológica y la satisfacción del cliente. Transformando ideas en estructuras sólidas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Nuestra Empresa</a></li>
              <li><a href="#quote" className="hover:text-primary transition-colors">Cotizador Digital</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Casas a Medida</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reformas de Lujo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mantenimiento Industrial</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Arquitectura Sustentable</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Suscríbete</h4>
            <p className="text-slate-500 text-sm mb-4">Recibe noticias de arquitectura y ofertas especiales.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email"
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:border-primary flex-1 transition-all text-sm"
              />
              <button className="bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} ConstruHogar S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-slate-600 text-sm">
            <a href="#" className="hover:text-slate-400">Privacidad</a>
            <a href="#" className="hover:text-slate-400">Términos</a>
            <a href="#" className="hover:text-slate-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
