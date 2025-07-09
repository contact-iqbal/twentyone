import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Globe, Star, ArrowRight, Play } from 'lucide-react';

const Certification = () => {
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
              <Award className="w-4 h-4 mr-2" />
              Industry Certification Program
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Get <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Certified</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Earn industry-recognized certifications that validate your skills and 
              boost your career prospects. Trusted by top employers worldwide.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Start Certification</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <span>View Certificates</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Certification Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Certification Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Industry-recognized credentials that employers trust and value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Verified Skills', description: 'Blockchain-verified certificates' },
              { icon: Globe, title: 'Global Recognition', description: 'Accepted worldwide' },
              { icon: CheckCircle, title: 'Skill Validation', description: 'Prove your expertise' },
              { icon: Star, title: 'Career Boost', description: 'Stand out to employers' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;