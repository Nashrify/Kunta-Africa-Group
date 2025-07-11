import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { officeLocations } from '../data/bookingData';

const OfficeLocations = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Maeneo ya Ofisi Zetu', en: 'Our Office Locations' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              sw: 'Tupo karibu nawe. Tembelea ofisi yoyote ya Kunta Africa Group kwa huduma za kitaalamu.',
              en: 'We are close to you. Visit any Kunta Africa Group office for professional services.'
            })}
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {officeLocations.map((office, index) => (
            <div key={office.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:scale-105">
              {/* Map Placeholder */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.${Math.random().toString().slice(2,8)}!2d${office.coordinates.lng}!3d${office.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjMnMTIuOCJTIDM2wrA0MCc1OC44IkU!5e0!3m2!1sen!2stz!4v1234567890123`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-110 transition-transform duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {t(office.name)}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">
                      {t(office.address)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-green-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-green-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">
                      {t(office.workingHours)}
                    </p>
                  </div>
                </div>

                {/* Services Available */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {t({ sw: 'Huduma Zinazopatikana:', en: 'Available Services:' })}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service) => (
                      <span key={service} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        {service === 'construction' && t({ sw: 'Ujenzi', en: 'Construction' })}
                        {service === 'sanitary' && t({ sw: 'Usafi', en: 'Sanitary' })}
                        {service === 'education' && t({ sw: 'Elimu', en: 'Education' })}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Directions Button */}
                <div className="mt-4">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${office.coordinates.lat},${office.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm group/btn"
                  >
                    <MapPin className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                    {t({ sw: 'Pata Mwelekeo', en: 'Get Directions' })}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Interactive Map */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              {t({ sw: 'Ramani ya Ofisi Zetu Zote', en: 'Map of All Our Offices' })}
            </h3>
            <p className="text-gray-600 mt-2">
              {t({
                sw: 'Bonyeza alama kwenye ramani kuona maelezo ya ofisi',
                en: 'Click markers on the map to view office details'
              })}
            </p>
          </div>
          <div className="h-96 bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048576.3871674463!2d32.8175!3d-6.369028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184b4b4b4b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sTanzania!5e0!3m2!1sen!2stz!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              {t({ sw: 'Uko Tayari Kuanza?', en: 'Ready to Get Started?' })}
            </h3>
            <p className="text-green-100 mb-6">
              {t({
                sw: 'Tembelea ofisi yoyote au piga simu kwa mazungumzo ya haraka.',
                en: 'Visit any office or call us for a quick consultation.'
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                {t({ sw: 'Panga Uteuzi', en: 'Book Appointment' })}
              </button>
              <a href="tel:+255123456789" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                {t({ sw: 'Piga Simu Sasa', en: 'Call Now' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;