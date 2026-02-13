
import React, { useState, useEffect } from 'react';
import { SERVICES, FINISH_MODIFIERS } from '../constants';
import { ServiceType, FinishLevel } from '../types';

const QuoteCalculator: React.FC = () => {
  const [service, setService] = useState<ServiceType>(ServiceType.CONSTRUCTION);
  const [area, setArea] = useState(100);
  const [finishes, setFinishes] = useState<FinishLevel>(FinishLevel.PREMIUM);
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  useEffect(() => {
    const basePrice = SERVICES.find(s => s.id === service)?.basePrice || 0;
    const modifier = FINISH_MODIFIERS[finishes];
    setEstimatedTotal(basePrice * area * modifier);
  }, [service, area, finishes]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Ingeniería en Tiempo Real</span>
        <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Cotizador de <span className="text-primary">Proyectos</span></h3>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">
          Configura los parámetros técnicos de tu obra y obtén una estimación instantánea con valores de mercado actualizados.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        {/* Controls Pane */}
        <div className="lg:col-span-7 bg-slate-800/50 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl shadow-2xl">
          <div className="space-y-10">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-6">1. Selecciona el Servicio</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`p-5 rounded-2xl border-2 transition-all text-left group ${service === s.id ? 'bg-primary/10 border-primary text-white shadow-[0_0_20px_rgba(230,112,0,0.15)]' : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full transition-all ${service === s.id ? 'bg-primary scale-125' : 'bg-slate-700'}`}></div>
                      <span className={`font-bold text-sm uppercase tracking-tight ${service === s.id ? 'text-primary' : ''}`}>{s.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">2. Superficie de Obra</label>
                  <p className="text-slate-500 text-xs">Desliza para ajustar los metros cuadrados</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-primary leading-none">{area}</span>
                  <span className="text-slate-500 font-bold ml-1 text-sm uppercase">m²</span>
                </div>
              </div>
              <div className="relative flex items-center">
                <input 
                  type="range" 
                  min="20" 
                  max="1000" 
                  step="5"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-900 rounded-full appearance-none cursor-pointer accent-primary border border-white/5"
                />
              </div>
            </div>

            {/* Finishes Selection */}
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-6">3. Estándar de Acabados</label>
              <div className="grid grid-cols-3 bg-slate-900 p-1.5 rounded-2xl border border-white/5">
                {(Object.keys(FinishLevel) as FinishLevel[]).map(level => (
                  <button
                    key={level}
                    onClick={() => setFinishes(level)}
                    className={`py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${finishes === level ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {level === FinishLevel.BASIC ? 'Básico' : level === FinishLevel.PREMIUM ? 'Premium' : 'Lujo'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Card - High Impact CRO */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex-1 bg-gradient-to-b from-primary to-primary-dark p-1 rounded-[3rem] shadow-[0_20px_50px_rgba(230,112,0,0.3)] group">
            <div className="h-full bg-slate-900 rounded-[2.8rem] p-10 flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <span className="bg-primary/20 text-primary-light px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/30">
                  Presupuesto Estimado
                </span>
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="mb-auto">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-slate-500 text-2xl font-bold">$</span>
                  <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                    {estimatedTotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Dólares Americanos (USD)</p>
              </div>

              <div className="space-y-6 my-12 pt-8 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Inversión por m²</span>
                  <span className="text-white font-bold">${(estimatedTotal / area).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Tiempo est. de obra</span>
                  <span className="text-white font-bold">{Math.ceil(area / 15)} - {Math.ceil(area / 10)} semanas</span>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar Presupuesto PDF
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex items-start gap-4 p-6 bg-slate-800/30 border border-white/5 rounded-3xl">
            <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-bold tracking-wider">
              Nota: Precios sujetos a factibilidad técnica y variaciones de costos de materiales. Esta cotización digital es preliminar y no constituye un contrato legal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;
