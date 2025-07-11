import { BookingService, OfficeLocation } from '../types/booking';

export const bookingServices: BookingService[] = [
  {
    id: 'construction-consultation',
    name: {
      sw: 'Ushauri wa Ujenzi',
      en: 'Construction Consultation'
    },
    description: {
      sw: 'Mazungumzo ya kitaalamu kuhusu mradi wako wa ujenzi',
      en: 'Professional consultation about your construction project'
    },
    duration: 60,
    category: 'construction'
  },
  {
    id: 'site-inspection',
    name: {
      sw: 'Ukaguzi wa Eneo la Ujenzi',
      en: 'Construction Site Inspection'
    },
    description: {
      sw: 'Ukaguzi wa kitaalamu wa eneo la ujenzi',
      en: 'Professional construction site inspection'
    },
    duration: 120,
    category: 'construction'
  },
  {
    id: 'sanitary-assessment',
    name: {
      sw: 'Ukaguzi wa Usafi wa Mazingira',
      en: 'Sanitary Assessment'
    },
    description: {
      sw: 'Ukaguzi wa hali ya usafi wa mazingira na vyoo',
      en: 'Assessment of environmental sanitation and latrine conditions'
    },
    duration: 90,
    category: 'sanitary'
  },
  {
    id: 'latrine-consultation',
    name: {
      sw: 'Ushauri wa Ujenzi wa Vyoo',
      en: 'Latrine Construction Consultation'
    },
    description: {
      sw: 'Mazungumzo kuhusu ujenzi wa vyoo bora',
      en: 'Consultation about quality latrine construction'
    },
    duration: 45,
    category: 'sanitary'
  },
  {
    id: 'hygiene-training',
    name: {
      sw: 'Mafunzo ya Usafi - Dr. Uchafu',
      en: 'Hygiene Training - Dr. Uchafu'
    },
    description: {
      sw: 'Mafunzo ya elimu ya usafi kwa jamii',
      en: 'Community hygiene education training'
    },
    duration: 180,
    category: 'education'
  },
  {
    id: 'health-workshop',
    name: {
      sw: 'Warsha ya Afya na Usafi',
      en: 'Health and Hygiene Workshop'
    },
    description: {
      sw: 'Warsha ya kuelimisha kuhusu afya na usafi',
      en: 'Educational workshop on health and hygiene'
    },
    duration: 240,
    category: 'education'
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    id: 'dar-es-salaam-hq',
    name: {
      sw: 'Makao Makuu - Dar es Salaam',
      en: 'Headquarters - Dar es Salaam'
    },
    address: {
      sw: 'Barabara ya Nyerere, Kimara, Dar es Salaam',
      en: 'Nyerere Road, Kimara, Dar es Salaam'
    },
    phone: '+255 123 456 789',
    email: 'info@kuntaafrica.com',
    coordinates: {
      lat: -6.7924,
      lng: 39.2083
    },
    workingHours: {
      sw: 'Jumatatu - Ijumaa: 8:00 - 17:00, Jumamosi: 8:00 - 13:00',
      en: 'Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 1:00 PM'
    },
    services: ['construction', 'sanitary', 'education']
  },
  {
    id: 'mwanza-branch',
    name: {
      sw: 'Tawi la Mwanza',
      en: 'Mwanza Branch'
    },
    address: {
      sw: 'Barabara ya Kenyatta, Mwanza',
      en: 'Kenyatta Road, Mwanza'
    },
    phone: '+255 123 456 790',
    email: 'mwanza@kuntaafrica.com',
    coordinates: {
      lat: -2.5164,
      lng: 32.9175
    },
    workingHours: {
      sw: 'Jumatatu - Ijumaa: 8:00 - 17:00',
      en: 'Monday - Friday: 8:00 AM - 5:00 PM'
    },
    services: ['construction', 'sanitary']
  },
  {
    id: 'arusha-office',
    name: {
      sw: 'Ofisi ya Arusha',
      en: 'Arusha Office'
    },
    address: {
      sw: 'Barabara ya Sokoine, Arusha',
      en: 'Sokoine Road, Arusha'
    },
    phone: '+255 123 456 791',
    email: 'arusha@kuntaafrica.com',
    coordinates: {
      lat: -3.3869,
      lng: 36.6830
    },
    workingHours: {
      sw: 'Jumatatu - Ijumaa: 8:00 - 17:00',
      en: 'Monday - Friday: 8:00 AM - 5:00 PM'
    },
    services: ['construction', 'education']
  }
];