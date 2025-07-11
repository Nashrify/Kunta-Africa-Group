import React, { useState } from 'react';
import { Star, Edit, Trash2, Eye, MessageCircle, Plus, Check, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface AdminTestimonial {
  id: string;
  clientName: string;
  clientPosition: { sw: string; en: string };
  clientCompany: { sw: string; en: string };
  content: { sw: string; en: string };
  rating: number;
  image: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  adminResponse?: { sw: string; en: string };
}

const AdminTestimonials = () => {
  const { t } = useLanguage();
  const [testimonials, setTestimonials] = useState<AdminTestimonial[]>([
    {
      id: '1',
      clientName: 'Mheshimiwa Fatma Ally',
      clientPosition: { sw: 'Mbunge wa Kinondoni', en: 'Member of Parliament for Kinondoni' },
      clientCompany: { sw: 'Bunge la Tanzania', en: 'Parliament of Tanzania' },
      content: {
        sw: 'Kunta Africa Group imekuwa mshirika mzuri katika maendeleo ya jamii zetu. Miradi yao ni ya ubora wa juu na inafikiwa kwa wakati.',
        en: 'Kunta Africa Group has been an excellent partner in our community development. Their projects are high quality and delivered on time.'
      },
      rating: 5,
      image: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'approved',
      submittedAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      clientName: 'John Mwalimu',
      clientPosition: { sw: 'Mkurugenzi wa Ujenzi', en: 'Construction Director' },
      clientCompany: { sw: 'Shirika la Maendeleo', en: 'Development Corporation' },
      content: {
        sw: 'Huduma za ujenzi za Kunta Africa ni za hali ya juu sana. Tunapendekeza kwa kila mtu.',
        en: 'Kunta Africa construction services are of very high quality. We recommend them to everyone.'
      },
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'pending',
      submittedAt: '2024-01-20T14:15:00Z'
    }
  ]);

  const [selectedTestimonial, setSelectedTestimonial] = useState<AdminTestimonial | null>(null);
  const [responseText, setResponseText] = useState({ sw: '', en: '' });
  const [showResponseModal, setShowResponseModal] = useState(false);

  const handleStatusChange = (id: string, newStatus: 'approved' | 'rejected') => {
    setTestimonials(prev => 
      prev.map(testimonial => 
        testimonial.id === id 
          ? { ...testimonial, status: newStatus }
          : testimonial
      )
    );
  };

  const handleAddResponse = (id: string) => {
    setTestimonials(prev => 
      prev.map(testimonial => 
        testimonial.id === id 
          ? { ...testimonial, adminResponse: responseText }
          : testimonial
      )
    );
    setResponseText({ sw: '', en: '' });
    setShowResponseModal(false);
    setSelectedTestimonial(null);
  };

  const openResponseModal = (testimonial: AdminTestimonial) => {
    setSelectedTestimonial(testimonial);
    setResponseText(testimonial.adminResponse || { sw: '', en: '' });
    setShowResponseModal(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t({ sw: 'Usimamizi wa Maoni ya Wateja', en: 'Testimonials Management' })}
          </h1>
          <p className="text-gray-600 mt-2">
            {t({
              sw: 'Simamia na ukague maoni ya wateja kabla ya kuchapishwa',
              en: 'Manage and review customer testimonials before publishing'
            })}
          </p>
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          {t({ sw: 'Ongeza Ushahidi', en: 'Add Testimonial' })}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-gray-900">{testimonials.length}</div>
          <div className="text-gray-600">{t({ sw: 'Jumla ya Maoni', en: 'Total Testimonials' })}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-green-600">
            {testimonials.filter(t => t.status === 'approved').length}
          </div>
          <div className="text-gray-600">{t({ sw: 'Yameidhinishwa', en: 'Approved' })}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-yellow-600">
            {testimonials.filter(t => t.status === 'pending').length}
          </div>
          <div className="text-gray-600">{t({ sw: 'Yasubiri', en: 'Pending' })}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-bold text-red-600">
            {testimonials.filter(t => t.status === 'rejected').length}
          </div>
          <div className="text-gray-600">{t({ sw: 'Yamekataliwa', en: 'Rejected' })}</div>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {t({ sw: 'Maoni ya Wateja', en: 'Customer Testimonials' })}
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{testimonial.clientName}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(testimonial.status)}`}>
                        {testimonial.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {t(testimonial.clientPosition)}, {t(testimonial.clientCompany)}
                    </p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-3">"{t(testimonial.content)}"</p>
                    {testimonial.adminResponse && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-900 mb-1">
                          {t({ sw: 'Jibu la Admin:', en: 'Admin Response:' })}
                        </p>
                        <p className="text-sm text-blue-800">"{t(testimonial.adminResponse)}"</p>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {t({ sw: 'Imetumwa:', en: 'Submitted:' })} {new Date(testimonial.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  {testimonial.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(testimonial.id, 'approved')}
                        className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                        title={t({ sw: 'Idhinisha', en: 'Approve' })}
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(testimonial.id, 'rejected')}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        title={t({ sw: 'Kataa', en: 'Reject' })}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => openResponseModal(testimonial)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                    title={t({ sw: 'Jibu', en: 'Respond' })}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Modal */}
      {showResponseModal && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t({ sw: 'Jibu Ushahidi', en: 'Respond to Testimonial' })}
            </h3>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">{selectedTestimonial.clientName}</p>
              <p className="text-gray-600 text-sm">"{t(selectedTestimonial.content)}"</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t({ sw: 'Jibu kwa Kiswahili', en: 'Response in Swahili' })}
                </label>
                <textarea
                  value={responseText.sw}
                  onChange={(e) => setResponseText({ ...responseText, sw: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t({ sw: 'Jibu kwa Kiingereza', en: 'Response in English' })}
                </label>
                <textarea
                  value={responseText.en}
                  onChange={(e) => setResponseText({ ...responseText, en: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowResponseModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                {t({ sw: 'Ghairi', en: 'Cancel' })}
              </button>
              <button
                onClick={() => handleAddResponse(selectedTestimonial.id)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {t({ sw: 'Tuma Jibu', en: 'Send Response' })}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;