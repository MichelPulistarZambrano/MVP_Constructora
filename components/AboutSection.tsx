
import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordions = [
    {
      title: "Trayectoria y Confianza",
      content: "Con más de 15 años liderando el sector de la construcción, ConstruHogar se ha consolidado como el aliado estratégico de cientos de familias y empresas que buscan solidez y transparencia en sus proyectos de ingeniería."
    },
    {
      title: "Metodología de Trabajo",
      content: "Utilizamos la metodología BIM (Building Information Modeling) para asegurar que cada centímetro de tu proyecto esté planificado digitalmente antes de poner el primer ladrillo, reduciendo costos y tiempos muertos."
    },
    {
      title: "Sostenibilidad",
      content: "Estamos comprometidos con el medio ambiente. Integramos soluciones de eficiencia energética, recolección de aguas grises y materiales de bajo impacto ambiental en todas nuestras obras nuevas."
    },
    {
      title: "Garantía Post-Venta",
      content: "Nuestra relación no termina al entregar las llaves. Ofrecemos una garantía estructural de 10 años y un servicio de atención técnica 24/7 para cualquier requerimiento de mantenimiento."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Sobre ConstruHogar</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">La solidez de la experiencia, la visión del futuro</h3>
          
          <div className="space-y-4">
            {accordions.map((item, index) => (
              <div key={index} className="border-b border-slate-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
                >
                  <span className={`text-xl font-bold ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                    {item.title}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                  <p className="text-slate-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineers at work" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur shadow-xl p-6 rounded-2xl flex justify-between border border-primary/10">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">500+</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Obras</p>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center">
                <p className="text-2xl font-black text-primary">98%</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Satifacción</p>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center">
                <p className="text-2xl font-black text-primary">12</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Premios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
