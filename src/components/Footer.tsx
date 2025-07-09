import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Play } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const footerLinks = {
    Courses: ['Web Development', 'Data Science', 'Design', 'Business', 'Marketing'],
    Programs: ['Bootcamp', 'Mentorship', 'Certification', 'Corporate Training', 'Career Path'],
    Resources: ['Blog', 'Community', 'Help Center', 'Career Guide', 'Success Stories'],
    Company: ['About Us', 'Careers', 'Press', 'Partners', 'Affiliate Program']
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">Twenty1</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering learners worldwide with cutting-edge online courses. Master new skills, advance your career, and unlock your potential with our expert-led programs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">support@Twenty1.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">+1 (555) 123-LEARN</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Twenty1. All rights reserved. Empowering minds, one course at a time.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;