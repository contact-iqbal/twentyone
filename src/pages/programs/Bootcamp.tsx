import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Users, Award, Star, ArrowRight, Play } from 'lucide-react';

const Bootcamp = () => {
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
              <Zap className="w-4 h-4 mr-2" />
              Intensive Bootcamp Program
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              12-Week <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Bootcamp</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Transform your career with our intensive 12-week bootcamp program. 
              Get job-ready skills with hands-on projects, mentorship, and career support.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Program Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Program Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive curriculum designed to get you job-ready in just 12 weeks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '12 Weeks', description: 'Intensive full-time program' },
              { icon: Users, title: 'Small Cohorts', description: 'Maximum 20 students per batch' },
              { icon: Award, title: 'Job Guarantee', description: '90% job placement rate' },
              { icon: Star, title: 'Expert Mentors', description: 'Industry professionals' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
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

export default Bootcamp;