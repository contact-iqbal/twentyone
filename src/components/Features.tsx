import React from 'react';
import { Play, Users, Award, Clock, BookOpen, Headphones, Globe, Trophy, Zap, Target, Shield, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Play,
      title: 'Interactive Learning',
      description: 'Hands-on projects and real-world applications',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Industry-recognized completion certificates',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace, anytime',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Rich Content',
      description: 'Videos, quizzes, and downloadable resources',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners worldwide',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Trophy,
      title: 'Career Growth',
      description: 'Advance your career with new skills',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Zap,
      title: 'Fast Learning',
      description: 'Accelerated learning methodology',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Track your progress and achievements',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Lifetime Access',
      description: 'Access your courses forever',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Rocket,
      title: 'Career Boost',
      description: 'Launch your dream career',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-purple-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Twenty1</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">
            Experience the future of online learning with our comprehensive platform designed for success
          </p>
        </div>

        {/* Auto-scrolling horizontal features */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8" style={{
            animation: 'scroll 30s linear infinite',
            width: 'calc(300px * 12)'
          }}>
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-72 text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">50k+</div>
              <div className="text-gray-600 font-semibold">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-gray-600 font-semibold">Expert Courses</div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">4.9★</div>
              <div className="text-gray-600 font-semibold">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Features;