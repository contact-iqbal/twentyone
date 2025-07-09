import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ChevronDown, Menu, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from './SearchModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const categories = [
    { 
      name: 'Courses', 
      items: [
        { name: 'Web Development', description: 'Frontend & Backend', path: '/courses/web-development' },
        { name: 'Data Science', description: 'Python & Machine Learning', path: '/courses/data-science' },
        { name: 'Design', description: 'UI/UX & Graphics', path: '/courses/design' },
        { name: 'Business', description: 'Marketing & Management', path: '/courses/business' }
      ]
    },
    { 
      name: 'Programs', 
      items: [
        { name: 'Bootcamp', description: 'Intensive 12-week program', path: '/programs/bootcamp' },
        { name: 'Mentorship', description: '1-on-1 guidance', path: '/programs/mentorship' },
        { name: 'Certification', description: 'Industry recognized', path: '/programs/certification' },
        { name: 'Corporate', description: 'Team training', path: '/programs/corporate' }
      ]
    },
    { 
      name: 'Resources', 
      items: [
        { name: 'Blog', description: 'Latest insights', path: '/resources/blog' },
        { name: 'Community', description: 'Join discussions', path: '/resources/community' },
        { name: 'Help Center', description: 'Get support', path: '/resources/help-center' },
        { name: 'Career Guide', description: 'Job preparation', path: '/resources/career-guide' }
      ]
    },
    { 
      name: 'Pricing', 
      items: [
        { name: 'Individual', description: 'Personal learning', path: '/pricing/individual' },
        { name: 'Team', description: 'Small groups', path: '/pricing/team' },
        { name: 'Enterprise', description: 'Large organizations', path: '/pricing/enterprise' },
        { name: 'Student', description: 'Special discounts', path: '/pricing/student' }
      ]
    }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="ml-2 text-xl font-black text-gray-900">Twenty1</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2 font-semibold">
                    <span>{category.name}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === category.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  
                  {/* Centered Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50"
                      >
                        {category.items.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={item.path}
                              className="block px-6 py-3 hover:bg-purple-50 transition-colors duration-150 group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-150">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1 font-medium">
                                {item.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:block p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <User className="w-5 h-5" />
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-100 py-4 overflow-hidden"
              >
                {categories.map((category, categoryIndex) => (
                  <motion.div 
                    key={category.name} 
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <button className="w-full text-left px-4 py-2 text-gray-700 font-semibold">
                      {category.name}
                    </button>
                    <div className="pl-6 space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        >
                          <Link
                            to={item.path}
                            className="block py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-150">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500 font-medium">
                              {item.description}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navigation;