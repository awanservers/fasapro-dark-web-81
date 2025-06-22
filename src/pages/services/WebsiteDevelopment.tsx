
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Search, Zap, ArrowRight, Check } from 'lucide-react';

const WebsiteDevelopment = () => {
  const features = [
    'Responsive Design for All Devices',
    'SEO Optimization & Performance',
    'Custom Content Management Systems',
    'E-commerce Integration',
    'Modern UI/UX Design',
    'Progressive Web App Development',
    'Third-party API Integration',
    'Analytics & Tracking Setup'
  ];

  const technologies = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Next.js', color: 'text-purple-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'TypeScript', color: 'text-blue-300' },
    { name: 'Tailwind CSS', color: 'text-cyan-400' },
    { name: 'MongoDB', color: 'text-green-500' }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your business requirements, target audience, and project goals to create a comprehensive development strategy.'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes and prototypes, ensuring the user experience aligns with your brand and objectives.'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'We build your website using modern technologies, implementing rigorous testing to ensure quality and performance.'
    },
    {
      step: 4,
      title: 'Launch & Optimization',
      description: 'After successful deployment, we provide ongoing support and optimization to maintain peak performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-blue-400 font-medium">Website Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Custom Website Development Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create stunning, high-performance websites that drive engagement and conversions. 
                Our expert team builds responsive, scalable solutions tailored to your business needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Website Development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive website development services that cover every aspect of your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: 'Responsive Design', description: 'Perfect experience across all devices and screen sizes' },
              { icon: Search, title: 'SEO Optimized', description: 'Built-in SEO best practices for better search rankings' },
              { icon: Zap, title: 'Fast Performance', description: 'Optimized for lightning-fast loading speeds' },
              { icon: Code, title: 'Clean Code', description: 'Maintainable, scalable, and well-documented code' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We leverage the latest technologies to build modern, scalable websites.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 px-6 py-3 rounded-full border border-gray-800 hover:border-gray-600 transition-colors duration-300"
              >
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive Website Features
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Every website we build includes a comprehensive set of features designed to 
                maximize performance, usability, and business results.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
                alt="Website features"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that drives results for your business. 
            Contact us today to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
