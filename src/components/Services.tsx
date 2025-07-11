import React from 'react';
import { Building, Droplets, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { services } from '../data/translations';

const Services = () => {
  const { t } = useLanguage();

  const iconMap = {
    'Building': Building,
    'Droplets': Droplets,
    'GraduationCap': GraduationCap
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Huduma Zetu', en: 'Our Services' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              sw: 'Tunatoa huduma mbalimbali za ubora wa juu kwa maendeleo ya jamii na mazingira.',
              en: 'We provide various high-quality services for community and environmental development.'
            })}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building;
            return (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 animate-fadeInUp hover:scale-105 hover:-translate-y-2" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {t(service.title)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(service.description)}
                  </p>
                  <button className="text-green-600 hover:text-green-700 font-medium flex items-center group/btn hover:scale-105 transition-transform duration-200">
                    {t({ sw: 'Soma Zaidi', en: 'Learn More' })}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-50 p-8 rounded-xl hover:bg-green-100 transition-all duration-300 animate-fadeInUp hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t({ sw: 'Una Mradi Ambao Ungatuamini?', en: 'Have a Project You Trust Us With?' })}
            </h3>
            <p className="text-gray-600 mb-6">
              {t({
                sw: 'Wasiliana nasi kwa mazungumzo ya haraka na utayarishaji wa mradi wako.',
                en: 'Contact us for quick consultation and preparation of your project.'
              })}
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t({ sw: 'Wasiliana Nasi', en: 'Contact Us' })}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;