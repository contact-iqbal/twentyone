import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Web Development',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Machine Learning for Beginners: A Complete Guide',
      excerpt: 'Start your machine learning journey with this comprehensive beginner-friendly guide.',
      author: 'Dr. Michael Chen',
      date: 'March 12, 2024',
      category: 'Data Science',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Design Systems: Building Consistent User Experiences',
      excerpt: 'Learn how to create and maintain design systems for scalable user interfaces.',
      author: 'Emma Rodriguez',
      date: 'March 10, 2024',
      category: 'Design',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
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
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Resources
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Twenty1 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Blog</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium"
            >
              Stay updated with the latest insights, tutorials, and industry trends. 
              Learn from experts and discover new opportunities in tech.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Blog Posts */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3 hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-medium">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{post.readTime}</span>
                    <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300 flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;