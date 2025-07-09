import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Star,
      description: 'Perfect for beginners',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Access to 50+ courses',
        'Basic certificates',
        'Community access',
        'Mobile app access',
        'Email support'
      ],
      color: 'border-gray-200',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      popular: false
    },
    {
      name: 'Professional',
      icon: Zap,
      description: 'Most popular choice',
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        'Access to 200+ courses',
        'Premium certificates',
        'Priority community access',
        'Mobile + desktop apps',
        'Live Q&A sessions',
        'Project reviews',
        'Career guidance'
      ],
      color: 'border-purple-600 ring-2 ring-purple-600',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For teams and organizations',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Unlimited course access',
        'Custom certificates',
        'Private community',
        'All platform features',
        '1-on-1 mentorship',
        'Custom learning paths',
        'Analytics dashboard',
        'Priority support'
      ],
      color: 'border-gray-200',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
          <Rocket className="w-4 h-4 mr-2" />
          Choose Your Learning Journey
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Simple <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Pricing</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg mb-8">
          Choose the perfect plan for your learning goals. All plans include lifetime access to purchased courses.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span className={`font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAnnual ? 'bg-purple-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`font-semibold ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              Save 17%
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${plan.color} ${
              plan.popular ? 'transform scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                <plan.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 font-medium">{plan.description}</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-black text-gray-900">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-600 font-medium ml-2">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              {isAnnual && (
                <p className="text-sm text-gray-500 mt-2 font-medium">
                  ${Math.round(plan.annualPrice / 12)}/month billed annually
                </p>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-600 font-medium mb-4">
          All plans include 30-day money-back guarantee
        </p>
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <span>✓ No setup fees</span>
          <span>✓ Cancel anytime</span>
          <span>✓ 24/7 support</span>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;