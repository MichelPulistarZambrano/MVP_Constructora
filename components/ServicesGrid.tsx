
import React from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Nuestras Soluciones</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experiencia que Transforma</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Cubrimos todo el ciclo de vida de tu propiedad, asegurando calidad estructural y diseño vanguardista en cada etapa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            className="group relative p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
            
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              {service.icon}
            </div>
            
            <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h4>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>
            
            <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/btn">
              Saber más
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
