import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { navigationItems } from '../data/translations';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  {/* Logo placeholder - replace with actual logo */}
                  {/* <img src="/logo-white.png" alt="Kunta Africa Group" className="w-10 h-10" /> */}
                  <span className="font-bold text-xl">KA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold hover:text-green-400 transition-colors duration-300">Kunta Africa Group</h3>
                  <p className="text-gray-400 text-sm">
                    {t({ sw: 'Kujenga Maisha Bora', en: 'Building Better Lives' })}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t({
                  sw: 'Kunta Africa Group ni shirika linalojishughulisha na ujenzi, suluhisho za usafi, na elimu ya afya kwa maendeleo endelevu ya Afrika.',
                  en: 'Kunta Africa Group is dedicated to construction, sanitation solutions, and health education for sustainable African development.'
                })}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t({ sw: 'Viungo vya Haraka', en: 'Quick Links' })}
              </h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      {t(item.label)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t({ sw: 'Mawasiliano', en: 'Contact Info' })}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="text-gray-400">
                      {t({
                        sw: 'Barabara ya Nyerere, Dar es Salaam, Tanzania',
                        en: 'Nyerere Road, Dar es Salaam, Tanzania'
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-gray-400">+255 123 456 789</p>
                    <p className="text-gray-400">+255 123 456 790</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-gray-400">info@kuntaafrica.com</p>
                    <p className="text-gray-400">projects@kuntaafrica.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kunta Africa Group. {t({ sw: 'Haki zote zimehifadhiwa', en: 'All rights reserved' })}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t({ sw: 'Sera ya Faragha', en: 'Privacy Policy' })}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t({ sw: 'Sheria na Masharti', en: 'Terms & Conditions' })}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;