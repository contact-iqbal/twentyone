import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Figma, Layers, Zap, Star, Clock, Users, Play, ArrowRight } from 'lucide-react';

const Design = () => {
  const courses = [
    {
      id: 1,
      title: 'UI/UX Design Masterclass',
      description: 'Complete guide to user interface and user experience design principles',
      duration: '35 hours',
      students: '14,230',
      rating: 4.9,
      level: 'All Levels',
      price: 159,
      instructor: 'Emma Rodriguez',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Figma for Designers',
      description: 'Master Figma from basics to advanced prototyping and collaboration',
      duration: '28 hours',
      students: '11,560',
      rating: 4.8,
      level: 'Beginner to Advanced',
      price: 119,
      instructor: 'Alex Thompson',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Create compelling brand identities from concept to final execution',
      duration: '32 hours',
      students: '8,940',
      rating: 4.7,
      level: 'Intermediate',
      price: 139,
      instructor: 'Sofia Martinez',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const skills = [
    { icon: Palette, name: 'Visual Design', description: 'Color Theory, Typography, Layout' },
    { icon: Figma, name: 'Design Tools', description: 'Figma, Sketch, Adobe Creative Suite' },
    { icon: Layers, name: 'User Experience', description: 'User Research, Wireframing, Testing' },
    { icon: Zap, name: 'Prototyping', description: 'Interactive Prototypes, Animations' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-6"
            >
              <Palette className="w-4 h-4 mr-2" />
              Design Courses
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Master <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Design</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Create beautiful, user-centered designs that solve real problems. 
              Learn UI/UX design, branding, and visual communication from industry experts.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <span>Watch Preview</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Skills You'll Master</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive design curriculum covering all aspects of modern digital design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-pink-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-4">
                  <skill.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-gray-600 font-medium">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Learn from award-winning designers and build a stunning portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-pink-600 font-semibold uppercase tracking-wide">Design</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3 hover:text-pink-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-medium">{course.description}</p>
                  
                  <p className="text-sm text-gray-600 mb-4 font-medium">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{course.students}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-pink-600">${course.price}</span>
                    <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;