import { useState, useEffect } from 'react';
import { Language } from '../types/language';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('sw');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('kunta-language') as Language;
    if (savedLanguage && (savedLanguage === 'sw' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'sw' ? 'en' : 'sw';
    setLanguage(newLanguage);
    localStorage.setItem('kunta-language', newLanguage);
  };

  const t = (content: { sw: string; en: string } | string): string => {
    if (typeof content === 'string') return content;
    return content[language] || content.sw;
  };

  return { language, toggleLanguage, t };
};