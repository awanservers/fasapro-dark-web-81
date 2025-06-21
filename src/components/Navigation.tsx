
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'IT Auditing', path: '/services/it-auditing' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-white text-xl font-bold">Fasapro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive('/') ? 'text-white' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive('/about') ? 'text-white' : ''
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border-b border-gray-700"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive('/gallery') ? 'text-white' : ''
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive('/blog') ? 'text-white' : ''
              }`}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 mb-4 p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="text-gray-400 hover:text-white transition-colors pl-4"
                >
                  {service.name}
                </Link>
              ))}
              <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
