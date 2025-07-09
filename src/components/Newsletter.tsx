import React, { useState } from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay <span className="text-yellow-300">Ahead</span> of the Curve
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
            Get exclusive access to new courses, learning tips, and special offers. Join our community of lifelong learners.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 disabled:bg-green-500 disabled:text-white shadow-lg"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
        
        <div className="mt-8 flex items-center justify-center space-x-8 text-purple-200">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>Free resources</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>No spam</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;