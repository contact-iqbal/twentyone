import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, TrendingUp, Award, Star, ArrowRight, Play } from 'lucide-react';

const CareerGuide = () => {
  const careerPaths = [
    {
      title: 'Frontend Developer',
      description: 'Build user interfaces and experiences',
      skills: ['React', 'JavaScript', 'CSS', 'HTML'],
      salary: '$70k - $120k',
      demand: 'High'
    },
    {
      title: 'Data Scientist',
      description: 'Analyze data to drive business decisions',
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      salary: '$90k - $150k',
      demand: 'Very High'
    },
    {
      title: 'UX Designer',
      description: 'Design intuitive user experiences',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      salary: '$65k - $110k',
      demand: 'High'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-orange-50 via-purple-50 to-blue-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6"
            >
              <Compass className="w-4 h-4 mr-2" />
              Career Guidance
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Career <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Guide</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Navigate your career journey with expert guidance. Discover in-demand roles, 
              required skills, and actionable steps to achieve your career goals.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-orange-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-orange-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Explore Careers</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <span>Career Assessment</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Career Paths */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Popular Career Paths</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Explore high-demand careers in tech and discover your perfect fit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-black text-gray-900 mb-3">{career.title}</h3>
                <p className="text-gray-600 mb-4 font-medium">{career.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Salary Range</div>
                    <div className="text-lg font-black text-gray-900">{career.salary}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Demand</div>
                    <div className="text-lg font-black text-green-600">{career.demand}</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-orange-700 hover:to-purple-700 transition-all duration-300">
                  View Career Path
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Services */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Career Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              Get personalized support to accelerate your career growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Career Planning', description: 'Personalized roadmaps' },
              { icon: TrendingUp, title: 'Skill Assessment', description: 'Identify growth areas' },
              { icon: Award, title: 'Resume Review', description: 'Professional feedback' },
              { icon: Star, title: 'Interview Prep', description: 'Practice with experts' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuide;