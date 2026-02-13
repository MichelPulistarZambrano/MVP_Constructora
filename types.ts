// Fix: Import React to resolve React.ReactNode namespace error
import React from 'react';

export enum ServiceType {
  CONSTRUCTION = 'CONSTRUCTION',
  REMODEL = 'REMODEL',
  MAINTENANCE = 'MAINTENANCE',
  CUSTOM = 'CUSTOM'
}

export enum FinishLevel {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  LUXURY = 'LUXURY'
}

export interface Service {
  id: ServiceType;
  title: string;
  description: string;
  // Fix: Use React.ReactNode after importing React
  icon: React.ReactNode;
  basePrice: number;
}

export interface QuoteData {
  service: ServiceType;
  area: number;
  finishes: FinishLevel;
}