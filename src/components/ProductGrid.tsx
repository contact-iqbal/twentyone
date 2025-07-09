import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Clock, Users, Play, BookOpen } from 'lucide-react';

const ProductGrid = () => {
  const [likedCourses, setLikedCourses] = useState<number[]>([]);
  
  const courses = [
    {
      id: 1,
      name: 'Complete Web Development Bootcamp',
      price: 149,
      originalPrice: 199,
      category: 'Web Development',
      rating: 4.9,
      reviews: 2847,
      duration: '42 hours',
      students: 15420,
      level: 'Beginner to Advanced',
      badge: 'Bestseller',
      instructor: 'Sarah Johnson'
    },
    {
      id: 2,
      name: 'Python for Data Science',
      price: 129,
      category: 'Data Science',
      rating: 4.8,
      reviews: 1923,
      duration: '28 hours',
      students: 8750,
      level: 'Intermediate',
      badge: 'New',
      instructor: 'Dr. Michael Chen'
    },
    {
      id: 3,
      name: 'UI/UX Design Masterclass',
      price: 179,
      category: 'Design',
      rating: 4.9,
      reviews: 3156,
      duration: '35 hours',
      students: 12340,
      level: 'All Levels',
      badge: 'Popular',
      instructor: 'Emma Rodriguez'
    },
    {
      id: 4,
      name: 'Digital Marketing Strategy',
      price: 99,
      originalPrice: 149,
      category: 'Marketing',
      rating: 4.7,
      reviews: 1456,
      duration: '24 hours',
      students: 6890,
      level: 'Beginner',
      badge: 'Sale',
      instructor: 'James Wilson'
    },
    {
      id: 5,
      name: 'Machine Learning with Python',
      price: 199,
      category: 'AI & ML',
      rating: 4.8,
      reviews: 987,
      duration: '48 hours',
      students: 4560,
      level: 'Advanced',
      badge: 'Premium',
      instructor: 'Dr. Lisa Park'
    },
    {
      id: 6,
      name: 'Mobile App Development',
      price: 159,
      category: 'Mobile Dev',
      rating: 4.8,
      reviews: 2134,
      duration: '38 hours',
      students: 9870,
      level: 'Intermediate',
      badge: 'Trending',
      instructor: 'Alex Thompson'
    }
  ];

  const toggleLike = (courseId: number) => {
    setLikedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'bg-green-500';
      case 'New': return 'bg-blue-500';
      case 'Popular': return 'bg-purple-600';
      case 'Sale': return 'bg-red-500';
      case 'Premium': return 'bg-yellow-500';
      case 'Trending': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Courses</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Master in-demand skills with our expertly crafted courses designed for real-world success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
            {/* Course Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                <Play className="w-12 h-12 text-purple-600" />
              </div>
              
              {/* Badge */}
              {course.badge && (
                <div className={`absolute top-4 left-4 ${getBadgeColor(course.badge)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {course.badge}
                </div>
              )}
              
              {/* Like Button */}
              <button
                onClick={() => toggleLike(course.id)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group-hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    likedCourses.includes(course.id) 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                />
              </button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Preview</span>
                </button>
              </div>
            </div>

            {/* Course Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-600 font-medium uppercase tracking-wide">{course.category}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600 font-medium">{course.rating}</span>
                  <span className="text-sm text-gray-400">({course.reviews})</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                {course.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
              
              {/* Course Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
              </div>
              
              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-purple-600">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                  )}
                </div>
                
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Enroll</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;