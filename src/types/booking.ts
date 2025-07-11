export interface BookingService {
  id: string;
  name: TranslationContent;
  description: TranslationContent;
  duration: number; // in minutes
  category: 'construction' | 'sanitary' | 'education';
  price?: number;
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  serviceId: string;
}

export interface BookingRequest {
  id?: string;
  serviceId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  language: 'sw' | 'en';
}

export interface OfficeLocation {
  id: string;
  name: TranslationContent;
  address: TranslationContent;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  workingHours: TranslationContent;
  services: string[];
}

import { TranslationContent } from './language';