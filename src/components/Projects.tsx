import React, { useState } from 'react';
import { Calendar, User, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data/translations';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { key: 'All', label: { sw: 'Yote', en: 'All' } },
    { key: 'Construction', label: { sw: 'Ujenzi', en: 'Construction' } },
    { key: 'Sanitary', label: { sw: 'Usafi', en: 'Sanitary' } },
    { key: 'Education', label: { sw: 'Elimu', en: 'Education' } }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Miradi Yetu', en: 'Our Projects' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              sw: 'Angalia baadhi ya miradi yetu ya mafanikio ambayo yamebadilisha maisha ya jamii.',
              en: 'View some of our successful projects that have transformed community lives.'
            })}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {t(filter.label)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group animate-fadeInUp hover:scale-105 hover:-translate-y-2" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {t(project.title)}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(project.description)}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    {t(project.client)}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center group/btn hover:scale-105 transition-transform duration-200">
                  {t({ sw: 'Angalia Mradi', en: 'View Project' })}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fadeInUp hover:scale-105 transition-transform duration-300" style={{animationDelay: '100ms'}}>
            <div className="text-3xl font-bold text-green-600 mb-2 hover:text-green-700 transition-colors duration-300">50+</div>
            <div className="text-gray-600">
              {t({ sw: 'Miradi Iliyokamilika', en: 'Projects Completed' })}
            </div>
          </div>
          <div className="text-center animate-fadeInUp hover:scale-105 transition-transform duration-300" style={{animationDelay: '200ms'}}>
            <div className="text-3xl font-bold text-green-600 mb-2 hover:text-green-700 transition-colors duration-300">10,000+</div>
            <div className="text-gray-600">
              {t({ sw: 'Watu Waliofaidika', en: 'People Benefited' })}
            </div>
          </div>
          <div className="text-center animate-fadeInUp hover:scale-105 transition-transform duration-300" style={{animationDelay: '300ms'}}>
            <div className="text-3xl font-bold text-green-600 mb-2 hover:text-green-700 transition-colors duration-300">5</div>
            <div className="text-gray-600">
              {t({ sw: 'Miaka ya Uzoefu', en: 'Years Experience' })}
            </div>
          </div>
          <div className="text-center animate-fadeInUp hover:scale-105 transition-transform duration-300" style={{animationDelay: '400ms'}}>
            <div className="text-3xl font-bold text-green-600 mb-2 hover:text-green-700 transition-colors duration-300">100%</div>
            <div className="text-gray-600">
              {t({ sw: 'Uridhisho wa Wateja', en: 'Client Satisfaction' })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;