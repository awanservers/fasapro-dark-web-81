

import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'IT Auditing', path: '/services/it-auditing' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50">
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
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 mb-4 p-4 shadow-xl border border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-700"
                onClick={handleMobileMenuItemClick}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-700"
                onClick={handleMobileMenuItemClick}
              >
                About
              </Link>
              
              {/* Mobile Services Section */}
              <div className="border-t border-gray-700 pt-2">
                <button
                  onClick={toggleMobileServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-700"
                >
                  <span>Services</span>
                  <ChevronRight 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {/* Collapsible Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-600 pl-4">
                    <Link
                      to="/services"
                      className="block text-gray-400 hover:text-white transition-colors py-2 px-2 rounded-md hover:bg-gray-700/50 text-sm"
                      onClick={handleMobileMenuItemClick}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block text-gray-400 hover:text-white transition-colors py-2 px-2 rounded-md hover:bg-gray-700/50 text-sm"
                        onClick={handleMobileMenuItemClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link 
                to="/gallery" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-700"
                onClick={handleMobileMenuItemClick}
              >
                Gallery
              </Link>
              
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-2 rounded-md hover:bg-gray-700"
                onClick={handleMobileMenuItemClick}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center mt-4 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                onClick={handleMobileMenuItemClick}
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

