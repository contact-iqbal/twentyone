import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Database, TrendingUp, Star, Clock, Users, Play, ArrowRight } from 'lucide-react';

const DataScience = () => {
  const courses = [
    {
      id: 1,
      title: 'Python for Data Science',
      description: 'Master Python programming for data analysis, visualization, and machine learning',
      duration: '38 hours',
      students: '18,750',
      rating: 4.9,
      level: 'Beginner to Intermediate',
      price: 129,
      instructor: 'Dr. Michael Chen',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Learn supervised and unsupervised learning algorithms with practical projects',
      duration: '45 hours',
      students: '12,890',
      rating: 4.8,
      level: 'Intermediate',
      price: 179,
      instructor: 'Dr. Lisa Park',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Data Visualization with Python',
      description: 'Create compelling visualizations using Matplotlib, Seaborn, and Plotly',
      duration: '24 hours',
      students: '9,560',
      rating: 4.7,
      level: 'Beginner to Intermediate',
      price: 99,
      instructor: 'Anna Rodriguez',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const skills = [
    { icon: BarChart3, name: 'Data Analysis', description: 'Pandas, NumPy, Statistical Analysis' },
    { icon: Brain, name: 'Machine Learning', description: 'Scikit-learn, TensorFlow, PyTorch' },
    { icon: Database, name: 'Data Management', description: 'SQL, NoSQL, Data Warehousing' },
    { icon: TrendingUp, name: 'Data Visualization', description: 'Matplotlib, Seaborn, Tableau' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Data Science Courses
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Unlock <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Data Science</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Transform raw data into actionable insights. Master Python, machine learning, 
              and statistical analysis to become a data science expert.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
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
              Comprehensive data science curriculum from basics to advanced machine learning
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
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-gray-600 font-medium">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Expert-designed courses to master data science and machine learning
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
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">Data Science</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
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
                    <span className="text-2xl font-black text-blue-600">${course.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
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

export default DataScience;