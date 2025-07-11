import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Download, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { bookingServices, officeLocations } from '../data/bookingData';
import { BookingRequest } from '../types/booking';

const BookingSystem = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingData, setBookingData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    message: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate booking ID
    const newBookingId = 'KAG-' + Date.now().toString().slice(-6);
    setBookingId(newBookingId);
    
    // Simulate booking submission
    const booking: BookingRequest = {
      id: newBookingId,
      serviceId: selectedService,
      clientName: bookingData.clientName,
      clientEmail: bookingData.clientEmail,
      clientPhone: bookingData.clientPhone,
      preferredDate: selectedDate,
      preferredTime: selectedTime,
      message: bookingData.message,
      status: 'pending',
      createdAt: new Date().toISOString(),
      language: 'sw'
    };

    console.log('Booking submitted:', booking);
    setBookingSubmitted(true);
  };

  const downloadBookingForm = () => {
    // Simulate PDF download
    const service = bookingServices.find(s => s.id === selectedService);
    const office = officeLocations.find(o => o.id === selectedOffice);
    
    const pdfContent = `
KUNTA AFRICA GROUP - BOOKING CONFIRMATION
==========================================

Booking ID: ${bookingId}
Date: ${new Date().toLocaleDateString()}

CLIENT INFORMATION:
Name: ${bookingData.clientName}
Email: ${bookingData.clientEmail}
Phone: ${bookingData.clientPhone}

SERVICE DETAILS:
Service: ${service ? t(service.name) : ''}
Date: ${selectedDate}
Time: ${selectedTime}
Office: ${office ? t(office.name) : ''}

MESSAGE:
${bookingData.message}

Thank you for choosing Kunta Africa Group!
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `KAG-Booking-${bookingId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (bookingSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-green-50 p-8 rounded-xl">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Booking Imekamilika!', en: 'Booking Completed!' })}
          </h2>
          <p className="text-gray-600 mb-6">
            {t({
              sw: `Booking yako imetumwa kwa mafanikio. Nambari ya booking ni: ${bookingId}`,
              en: `Your booking has been submitted successfully. Your booking number is: ${bookingId}`
            })}
          </p>
          <button
            onClick={downloadBookingForm}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto mb-4"
          >
            <Download className="w-5 h-5 mr-2" />
            {t({ sw: 'Pakua Fomu ya Booking', en: 'Download Booking Form' })}
          </button>
          <p className="text-sm text-gray-500">
            {t({
              sw: 'Tutawasiliana nawe ndani ya masaa 24 kuthibitisha booking yako.',
              en: 'We will contact you within 24 hours to confirm your booking.'
            })}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t({ sw: 'Panga Uteuzi Wako', en: 'Book Your Appointment' })}
        </h2>
        <p className="text-gray-600">
          {t({
            sw: 'Chagua huduma unayohitaji na upange uteuzi wako nasi',
            en: 'Choose the service you need and schedule your appointment with us'
          })}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Service Selection */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            {t({ sw: 'Chagua Huduma', en: 'Select Service' })}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {bookingServices.map((service) => (
              <label key={service.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={selectedService === service.id}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border-2 rounded-lg transition-all ${
                  selectedService === service.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t(service.name)}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {t(service.description)}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration} {t({ sw: 'dakika', en: 'minutes' })}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Office Selection */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-600" />
            {t({ sw: 'Chagua Ofisi', en: 'Select Office' })}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {officeLocations.map((office) => (
              <label key={office.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="office"
                  value={office.id}
                  checked={selectedOffice === office.id}
                  onChange={(e) => setSelectedOffice(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border-2 rounded-lg transition-all ${
                  selectedOffice === office.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t(office.name)}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {t(office.address)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {office.phone}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t({ sw: 'Chagua Tarehe', en: 'Select Date' })}
            </h3>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t({ sw: 'Chagua Muda', en: 'Select Time' })}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <label key={time} className="cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value={time}
                    checked={selectedTime === time}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-2 text-center border-2 rounded-lg transition-all ${
                    selectedTime === time
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-green-300'
                  }`}>
                    {time}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-green-600" />
            {t({ sw: 'Taarifa Zako', en: 'Your Information' })}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ sw: 'Jina Kamili', en: 'Full Name' })}
              </label>
              <input
                type="text"
                name="clientName"
                value={bookingData.clientName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ sw: 'Barua Pepe', en: 'Email Address' })}
              </label>
              <input
                type="email"
                name="clientEmail"
                value={bookingData.clientEmail}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t({ sw: 'Namba ya Simu', en: 'Phone Number' })}
            </label>
            <input
              type="tel"
              name="clientPhone"
              value={bookingData.clientPhone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t({ sw: 'Ujumbe wa Ziada (Hiari)', en: 'Additional Message (Optional)' })}
            </label>
            <textarea
              name="message"
              value={bookingData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={t({
                sw: 'Eleza maelezo yoyote ya ziada kuhusu ombi lako...',
                en: 'Describe any additional details about your request...'
              })}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={!selectedService || !selectedOffice || !selectedDate || !selectedTime || !bookingData.clientName || !bookingData.clientEmail || !bookingData.clientPhone}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {t({ sw: 'Tuma Ombi la Booking', en: 'Submit Booking Request' })}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingSystem;