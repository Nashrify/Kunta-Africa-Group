import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { testimonials } from '../data/translations';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Maoni ya Wateja Wetu', en: 'What Our Clients Say' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              sw: 'Sikia maoni ya wateja wetu kuhusu uzoefu wao na huduma zetu.',
              en: 'Hear from our clients about their experience with our services.'
            })}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
              <div className="absolute top-6 right-6 text-green-600 opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{t(testimonial.content)}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {t(testimonial.position)}, {t(testimonial.company)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              {t({ sw: 'Jiunge na Wateja Wetu Walioridhika', en: 'Join Our Satisfied Clients' })}
            </h3>
            <p className="text-green-100 mb-6">
              {t({
                sw: 'Tunakaribisha fursa ya kujenga uhusiano wa muda mrefu na kufanya kazi pamoja.',
                en: 'We welcome the opportunity to build a long-term relationship and work together.'
              })}
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              {t({ sw: 'Anzisha Mradi', en: 'Start a Project' })}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;