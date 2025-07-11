import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { heroContent } from '../data/translations';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="African Construction"
          className="w-full h-full object-cover animate-slowZoom"
        />
        <div className="absolute inset-0 bg-black/50 animate-fadeIn"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 animate-fadeInUp">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slideInLeft">
            {t(heroContent.title)}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slideInLeft animation-delay-300">
            {t(heroContent.subtitle)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft animation-delay-600">
            <button
              onClick={scrollToProjects}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group hover:scale-105 hover:shadow-lg"
            >
              {t(heroContent.cta)}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group hover:scale-105 hover:shadow-lg">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {t({ sw: 'Angalia Video', en: 'Watch Video' })}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-200 cursor-pointer" onClick={scrollToProjects}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-green-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-blue-500/20 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-orange-500/20 rounded-full animate-float animation-delay-2000"></div>
    </section>
  );
};

export default Hero;