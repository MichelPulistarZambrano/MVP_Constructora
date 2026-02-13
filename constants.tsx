
import React from 'react';
import { Service, ServiceType, FinishLevel } from './types';

export const SERVICES: Service[] = [
  {
    id: ServiceType.CONSTRUCTION,
    title: 'Construcción Integral',
    description: 'Levantamos tus sueños desde los cimientos con tecnología de punta y estándares internacionales.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    basePrice: 850 // USD per m2
  },
  {
    id: ServiceType.REMODEL,
    title: 'Remodelaciones',
    description: 'Transformamos espacios existentes en ambientes modernos, funcionales y estéticos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    basePrice: 450
  },
  {
    id: ServiceType.MAINTENANCE,
    title: 'Mantenimiento Preventivo',
    description: 'Cuidamos el valor de tu propiedad con planes de mantenimiento técnico especializado.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    basePrice: 200
  },
  {
    id: ServiceType.CUSTOM,
    title: 'Proyectos Especiales',
    description: 'Arquitectura de autor para quienes buscan exclusividad y diseño sin límites.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    basePrice: 1200
  }
];

export const FINISH_MODIFIERS = {
  [FinishLevel.BASIC]: 1,
  [FinishLevel.PREMIUM]: 1.35,
  [FinishLevel.LUXURY]: 1.8
};
