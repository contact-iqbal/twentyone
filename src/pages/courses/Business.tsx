import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Briefcase, Star, Clock, Play, ArrowRight } from 'lucide-react';

const Business = () => {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      description: 'Complete guide to digital marketing strategies and campaign optimization',
      duration: '32 hours',
      students: '16,890',
      rating: 4.8,
      level: 'All Levels',
      price: 149,
      instructor: 'James Wilson',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Business Strategy & Leadership',
      description: 'Develop strategic thinking and leadership skills for business success',
      duration: '28 hours',
      students: '9,750',
      rating: 4.9,
      level: 'Intermediate to Advanced',
      price: 179,
      instructor: 'Sarah Mitchell',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Entrepreneurship Fundamentals',
      description: 'Learn how to start, grow, and scale your own business venture',
      duration: '36 hours',
      students: '12,340',
      rating: 4.7,
      level: 'Beginner to Intermediate',
      price: 129,
      instructor: 'Michael Roberts',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const skills = [
    { icon: TrendingUp, name: 'Marketing Strategy', description: 'Digital Marketing, SEO, Social Media' },
    { icon: Target, name: 'Business Planning', description: 'Strategy, Operations, Financial Planning' },
    { icon: Users, name: 'Leadership', description: 'Team Management, Communication' },
    { icon: Briefcase, name: 'Entrepreneurship', description: 'Startup, Innovation, Scaling' }
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
              <Briefcase className="w-4 h-4 mr-2" />
              Business Courses
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Master <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Business</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Build essential business skills to advance your career or start your own venture. 
              Learn marketing, leadership, strategy, and entrepreneurship from industry experts.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
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
              Essential business skills for career advancement and entrepreneurial success
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
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <skill.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-gray-600 font-medium">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Learn from successful entrepreneurs and business leaders
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
                    <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-semibold uppercase tracking-wide">Business</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3 hover:text-green-600 transition-colors duration-300">
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
                    <span className="text-2xl font-black text-green-600">${course.price}</span>
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
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

export default Business;