import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Trophy, Star, ArrowRight, Play } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
            >
              <Users className="w-4 h-4 mr-2" />
              Join Our Community
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Learning <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Connect with fellow learners, share knowledge, and grow together. 
              Join thousands of passionate learners in our vibrant community.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Join Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <span>Community Tour</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Community Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Community Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Connect, learn, and grow with like-minded individuals from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Discussion Forums', description: 'Ask questions and share knowledge' },
              { icon: Heart, title: 'Peer Support', description: 'Get help from fellow learners' },
              { icon: Trophy, title: 'Challenges', description: 'Participate in coding challenges' },
              { icon: Star, title: 'Recognition', description: 'Earn badges and achievements' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
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

export default Community;