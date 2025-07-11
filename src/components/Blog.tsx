import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { blogPosts } from '../data/translations';

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t({ sw: 'Blogu & Habari', en: 'Blog & News' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t({
              sw: 'Soma makala na habari mpya kuhusu maendeleo ya tasnia na miradi yetu.',
              en: 'Read articles and latest news about industry developments and our projects.'
            })}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={t(post.title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {t(post.title)}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {t(post.excerpt)}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center group">
                  {t({ sw: 'Soma Zaidi', en: 'Read More' })}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t({ sw: 'Jiunge na Jarida Letu', en: 'Subscribe to Our Newsletter' })}
            </h3>
            <p className="text-gray-600 mb-6">
              {t({
                sw: 'Pokea habari na makala mpya moja kwa moja kwenye barua pepe yako.',
                en: 'Receive latest news and articles directly to your email.'
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t({ sw: 'Barua pepe yako', en: 'Your email address' })}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {t({ sw: 'Jiunge', en: 'Subscribe' })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;