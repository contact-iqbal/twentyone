import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Check, Star, ArrowRight } from 'lucide-react';

const Student = () => {
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
              <GraduationCap className="w-4 h-4 mr-2" />
              Student Discounts
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Student <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Pricing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Special pricing for students and educators. Get access to premium courses at affordable rates with valid student ID.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Verify Student Status</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Student Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Student Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Exclusive perks and discounts for students and educators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Student Plan</h3>
                <p className="text-gray-600 font-medium">50% off regular pricing</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-black text-gray-900">$19</span>
                  <span className="text-gray-600 font-medium ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 font-medium">Regular price: $39/month</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Access to all courses',
                  'Student certificates',
                  'Community access',
                  'Mobile app access',
                  'Email support',
                  'Career resources'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                Get Student Discount
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-black text-gray-900 mb-4">Eligibility Requirements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Currently enrolled student</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Valid student ID or enrollment letter</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Educational email address (.edu)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Faculty and staff eligible</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-black text-gray-900 mb-4">How to Apply</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-600 font-medium">Click "Verify Student Status"</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-600 font-medium">Upload student verification</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-600 font-medium">Get approved within 24 hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-gray-600 font-medium">Start learning at student price</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;