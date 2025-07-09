import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, Book, MessageCircle, Star, ArrowRight } from 'lucide-react';

const HelpCenter = () => {
  const faqItems = [
    {
      question: 'How do I access my courses?',
      answer: 'Once enrolled, you can access your courses through your dashboard. Simply log in and click on "My Courses".'
    },
    {
      question: 'Can I download course materials?',
      answer: 'Yes, most course materials including videos, PDFs, and resources can be downloaded for offline viewing.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all courses. Contact support for refund requests.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Get Help & Support
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Help <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Center</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Find answers to common questions, browse our knowledge base, 
              or contact our support team for personalized assistance.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200 font-medium shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Quick answers to the most common questions about our platform
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-all duration-300"
              >
                <h3 className="text-lg font-black text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 font-medium">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Need More Help?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Choose the support option that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Book, title: 'Knowledge Base', description: 'Browse our comprehensive guides', action: 'Browse Articles' },
              { icon: MessageCircle, title: 'Live Chat', description: 'Chat with our support team', action: 'Start Chat' },
              { icon: Star, title: 'Premium Support', description: '24/7 priority support for premium users', action: 'Contact Support' }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                  <option.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6 font-medium">{option.description}</p>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 mx-auto">
                  <span>{option.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;