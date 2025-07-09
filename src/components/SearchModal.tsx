import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, Book } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const mockCourses = [
    { id: 1, title: 'React Masterclass', category: 'Web Development', students: '15k', rating: 4.9 },
    { id: 2, title: 'Python for Data Science', category: 'Data Science', students: '8k', rating: 4.8 },
    { id: 3, title: 'UI/UX Design Fundamentals', category: 'Design', students: '12k', rating: 4.9 },
    { id: 4, title: 'Digital Marketing Strategy', category: 'Business', students: '6k', rating: 4.7 },
    { id: 5, title: 'Machine Learning with Python', category: 'Data Science', students: '4k', rating: 4.8 },
    { id: 6, title: 'Advanced JavaScript', category: 'Web Development', students: '10k', rating: 4.9 },
  ];

  const trendingSearches = [
    'React', 'Python', 'UI/UX Design', 'Machine Learning', 'JavaScript', 'Data Science'
  ];

  const recentSearches = [
    'Web Development', 'Digital Marketing', 'Python Basics'
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockCourses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses, topics, or instructors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all duration-200 font-medium"
                    autoFocus
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Search Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {searchQuery.trim() ? (
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-4">
                    Search Results ({searchResults.length})
                  </h3>
                  {searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-200 cursor-pointer group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                                {course.title}
                              </h4>
                              <p className="text-sm text-gray-600 font-medium">{course.category}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-gray-900">{course.students} students</div>
                              <div className="text-sm text-yellow-600">★ {course.rating}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Book className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">No courses found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Recent Searches */}
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-gray-600" />
                      Recent Searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setSearchQuery(search)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 font-medium"
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Trending Searches */}
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-gray-600" />
                      Trending Searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setSearchQuery(search)}
                          className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors duration-200 font-medium"
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;