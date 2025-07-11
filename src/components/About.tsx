import React from 'react';
import { Target, Eye, Heart, Leaf } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { companyInfo, teamMembers } from '../data/translations';

const About = () => {
  const { t } = useLanguage();

  const iconMap = {
    'Ubora': Target,
    'Excellence': Target,
    'Uaminifu': Eye,
    'Integrity': Eye,
    'Maendeleo': Heart,
    'Development': Heart,
    'Uvumilivu': Leaf,
    'Sustainability': Leaf
  };

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors duration-300">
            {t({ sw: 'Kuhusu Kunta Africa Group', en: 'About Kunta Africa Group' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(companyInfo.mission)}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slideInLeft hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4 hover:bg-green-200 transition-colors duration-300 hover:rotate-12">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t({ sw: 'Dhamira Yetu', en: 'Our Mission' })}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t(companyInfo.mission)}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slideInRight hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 hover:bg-blue-200 transition-colors duration-300 hover:rotate-12">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t({ sw: 'Dira Yetu', en: 'Our Vision' })}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t(companyInfo.vision)}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 animate-fadeInUp">
            {t({ sw: 'Maadili Yetu', en: 'Our Values' })}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((value, index) => {
              const IconComponent = iconMap[t(value.title) as keyof typeof iconMap] || Target;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-all duration-300 animate-fadeInUp hover:scale-105 group" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="bg-green-100 p-3 rounded-full inline-block mb-4 group-hover:bg-green-200 transition-colors duration-300 group-hover:rotate-12">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(value.title)}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t(value.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 animate-fadeInUp">
            {t({ sw: 'Timu Yetu', en: 'Our Team' })}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-all duration-300 animate-fadeInUp hover:scale-105 group" style={{animationDelay: `${index * 200}ms`}}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300 hover:rotate-3"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-green-600 font-medium mb-3">
                  {t(member.position)}
                </p>
                <p className="text-gray-600 text-sm">
                  {t(member.bio)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;