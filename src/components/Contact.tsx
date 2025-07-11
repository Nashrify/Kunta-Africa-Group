import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Linkedin, Twitter, Instagram, Calendar } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import BookingSystem from './BookingSystem';
import OfficeLocations from './OfficeLocations';

const Contact = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Wasiliana Nasi', en: 'Contact Us' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              sw: 'Tupo tayari kukusaidia. Wasiliana nasi kwa maoni, maswali, au panga uteuzi wako.',
              en: 'We are ready to help you. Contact us for feedback, questions, or book your appointment.'
            })}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'contact'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {t({ sw: 'Wasiliana Nasi', en: 'Contact Us' })}
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
                activeTab === 'booking'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t({ sw: 'Panga Uteuzi', en: 'Book Appointment' })}
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'locations'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {t({ sw: 'Maeneo ya Ofisi', en: 'Office Locations' })}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'contact' && (
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t({ sw: 'Taarifa za Mawasiliano', en: 'Contact Information' })}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t({ sw: 'Simu', en: 'Phone' })}
                    </h4>
                    <p className="text-gray-600">+255 123 456 789</p>
                    <p className="text-gray-600">+255 123 456 790</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t({ sw: 'Barua Pepe', en: 'Email' })}
                    </h4>
                    <p className="text-gray-600">info@kuntaafrica.com</p>
                    <p className="text-gray-600">projects@kuntaafrica.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t({ sw: 'Anwani', en: 'Address' })}
                    </h4>
                    <p className="text-gray-600">
                      {t({
                        sw: 'Barabara ya Nyerere, Dar es Salaam, Tanzania',
                        en: 'Nyerere Road, Dar es Salaam, Tanzania'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                {t({ sw: 'Tufuate', en: 'Follow Us' })}
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <Facebook className="w-6 h-6 text-green-600" />
                </a>
                <a href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-green-600" />
                </a>
                <a href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <Twitter className="w-6 h-6 text-green-600" />
                </a>
                <a href="#" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                  <Instagram className="w-6 h-6 text-green-600" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">
                {t({ sw: 'Ramani ya Google itaongezwa hapa', en: 'Google Map will be added here' })}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t({ sw: 'Tutumie Ujumbe', en: 'Send us a Message' })}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ sw: 'Jina Kamili', en: 'Full Name' })}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ sw: 'Barua Pepe', en: 'Email Address' })}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ sw: 'Namba ya Simu', en: 'Phone Number' })}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ sw: 'Mada', en: 'Subject' })}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">
                      {t({ sw: 'Chagua mada', en: 'Select subject' })}
                    </option>
                    <option value="construction">
                      {t({ sw: 'Ujenzi', en: 'Construction' })}
                    </option>
                    <option value="sanitary">
                      {t({ sw: 'Suluhisho za Usafi', en: 'Sanitary Solutions' })}
                    </option>
                    <option value="education">
                      {t({ sw: 'Elimu ya Afya', en: 'Health Education' })}
                    </option>
                    <option value="other">
                      {t({ sw: 'Nyingine', en: 'Other' })}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t({ sw: 'Ujumbe', en: 'Message' })}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t({ sw: 'Tuma Ujumbe', en: 'Send Message' })}
              </button>
            </form>
          </div>
        </div>
        )}

        {activeTab === 'booking' && <BookingSystem />}
        
        {activeTab === 'locations' && <OfficeLocations />}
      </div>
    </section>
  );
};

export default Contact;