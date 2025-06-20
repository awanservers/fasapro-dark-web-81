
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Shield, Search, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Create stunning, responsive websites that drive engagement and conversions. Our team specializes in modern web technologies including React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Custom CMS'],
      link: '/services/website-development',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Build powerful mobile applications for iOS and Android platforms. We develop native and cross-platform solutions using Flutter and React Native.',
      features: ['Native iOS & Android', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization'],
      link: '/services/mobile-app-development',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'IT Auditing',
      description: 'Comprehensive security assessments and compliance audits to protect your business. We specialize in ISO 27001 certification and regulatory compliance.',
      features: ['Security Assessments', 'ISO 27001 Compliance', 'Risk Analysis', 'Vulnerability Testing'],
      link: '/services/it-auditing',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Search,
      title: 'IT Consulting',
      description: 'Strategic IT guidance to help your business leverage technology effectively. Our consultants provide cybersecurity strategy and digital transformation roadmaps.',
      features: ['Cybersecurity Strategy', 'Digital Transformation', 'Technology Planning', 'Process Optimization'],
      link: '/services/it-consulting',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and ensure 
              digital excellence across all your technology initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700 group"
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs and technical requirements.' },
              { step: '02', title: 'Planning', description: 'Develop a comprehensive strategy and project roadmap.' },
              { step: '03', title: 'Implementation', description: 'Execute the solution with regular progress updates.' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization support.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized solution 
            that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
