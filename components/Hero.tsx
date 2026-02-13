
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Dynamic Background with improved Industrial Orange Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        {/* Futuristic Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950"></div>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 blur-[150px] -rotate-12 translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-[slideIn_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary-light text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Líderes en Ingeniería Civil
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            PROYECTOS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
              QUE TRASCIENDEN
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            Transformamos la visión arquitectónica en realidades estructurales mediante procesos de construcción inteligentes y acabados de lujo.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="#quote" className="group px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-[0_15px_30px_rgba(230,112,0,0.4)] hover:shadow-[0_20px_40px_rgba(230,112,0,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-3">
              Cotizar Proyecto
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md rounded-2xl font-black uppercase tracking-widest text-sm transition-all border border-white/10 flex items-center justify-center">
              Servicios
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-10 justify-center md:justify-start border-t border-white/5 pt-10">
            <div>
              <span className="block text-4xl font-black text-white leading-none">500+</span>
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2 block">Proyectos OK</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <span className="block text-4xl font-black text-white leading-none">15</span>
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2 block">Años de Exp.</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative animate-[fadeIn_1.5s_ease-out]">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform rotate-2 hover:rotate-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Architecture" 
              className="w-full h-auto scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </div>
          {/* Decorative shapes with orange theme */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-700"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
