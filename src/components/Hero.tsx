import React from 'react';
import { ArrowRight, Play, Users, Award, Clock, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                🚀 New courses every week
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Master
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  New Skills
                </span>
                <br />
                <span className="text-gray-700 font-bold">Online</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-medium">
                Join thousands of learners mastering in-demand skills through our expert-led courses. From coding to design, advance your career today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg font-semibold">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900">50k+</div>
                <div className="text-sm text-gray-600 flex items-center justify-center space-x-1 font-medium">
                  <Users className="w-4 h-4" />
                  <span>Students</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900">200+</div>
                <div className="text-sm text-gray-600 flex items-center justify-center space-x-1 font-medium">
                  <Play className="w-4 h-4" />
                  <span>Courses</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600 flex items-center justify-center space-x-1 font-medium">
                  <Award className="w-4 h-4" />
                  <span>Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stacked Course Cards */}
          <div className="relative">
            <div className="relative">
              {/* Background Card */}
              <div className="absolute top-4 left-4 w-full h-full bg-white/60 rounded-2xl shadow-lg transform rotate-3"></div>
              <div className="absolute top-2 left-2 w-full h-full bg-white/80 rounded-2xl shadow-lg transform rotate-1"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">React Masterclass</h3>
                    <p className="text-gray-600 font-medium">Build modern web applications</p>
                  </div>
                </div>
                
                <div className="w-full h-40 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl mb-6 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-900">42h</span>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Duration</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-900">15k</span>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Students</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">4.9</span>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Rating</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;