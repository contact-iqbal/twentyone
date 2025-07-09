import React from 'react';
import { motion } from 'framer-motion';
import { User, Check, Star, ArrowRight } from 'lucide-react';

const Individual = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for getting started',
      features: [
        'Access to 50+ courses',
        'Basic certificates',
        'Community access',
        'Mobile app access',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: 59,
      description: 'Most popular for individuals',
      features: [
        'Access to 200+ courses',
        'Premium certificates',
        'Priority community access',
        'Mobile + desktop apps',
        'Live Q&A sessions',
        'Project reviews',
        'Career guidance'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 99,
      description: 'Complete learning experience',
      features: [
        'Unlimited course access',
        'Custom certificates',
        'Private community',
        'All platform features',
        '1-on-1 mentorship',
        'Custom learning paths',
        'Priority support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6"
            >
              <User className="w-4 h-4 mr-2" />
              Individual Plans
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Individual <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Pricing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Choose the perfect plan for your learning journey. All plans include lifetime access to purchased courses.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Pricing Plans */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                  plan.popular ? 'border-purple-600 ring-2 ring-purple-600 transform scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 font-medium">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 font-medium ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;