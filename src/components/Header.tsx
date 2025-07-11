import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { navigationItems } from '../data/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2 px-4 animate-slideDown">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Phone className="w-4 h-4" />
              <span>+255 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Mail className="w-4 h-4" />
              <span>info@kuntaafrica.com</span>
            </div>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 hover:text-green-200 hover:scale-105 transition-all duration-200"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'sw' ? 'English' : 'Kiswahili'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 lg:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 animate-fadeInLeft">
            {/* Logo Container - Replace with actual logo */}
            <div className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:rotate-3">
              {/* This can be replaced with <img src="/logo.png" alt="Kunta Africa Group" className="w-10 h-10" /> */}
              <span className="font-bold text-xl">KA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-200">Kunta Africa Group</h1>
              <p className="text-sm text-gray-600 animate-pulse">
                {t({ sw: 'Kujenga Maisha Bora', en: 'Building Better Lives' })}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fadeInRight">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group hover:scale-105"
              >
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-200 py-4 animate-slideDown">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 hover:translate-x-2"
              >
                {t(item.label)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;