export type Language = 'sw' | 'en';

export interface TranslationContent {
  sw: string;
  en: string;
}

export interface NavigationItem {
  key: string;
  label: TranslationContent;
  href: string;
  children?: NavigationItem[];
}

export interface ServiceItem {
  title: TranslationContent;
  description: TranslationContent;
  icon: string;
  image: string;
}

export interface ProjectItem {
  title: TranslationContent;
  description: TranslationContent;
  image: string;
  category: string;
  client: TranslationContent;
  date: string;
}

export interface TeamMember {
  name: string;
  position: TranslationContent;
  image: string;
  bio: TranslationContent;
}

export interface Testimonial {
  name: string;
  position: TranslationContent;
  company: TranslationContent;
  content: TranslationContent;
  image: string;
}