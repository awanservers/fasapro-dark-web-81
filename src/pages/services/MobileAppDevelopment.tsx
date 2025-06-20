
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Users, Zap, Shield, ArrowRight, Check } from 'lucide-react';

const MobileAppDevelopment = () => {
  const features = [
    'Native iOS & Android Development',
    'Cross-Platform Solutions (Flutter/React Native)',
    'Custom UI/UX Design',
    'API Integration & Backend Services',
    'Push Notifications & Analytics',
    'App Store Optimization',
    'Offline Functionality',
    'Security & Data Protection'
  ];

  const platforms = [
    { name: 'iOS', description: 'Native Swift development for iPhone and iPad', color: 'from-blue-500 to-blue-600' },
    { name: 'Android', description: 'Native Kotlin/Java development for Android devices', color: 'from-green-500 to-green-600' },
    { name: 'Flutter', description: 'Cross-platform development with single codebase', color: 'from-cyan-500 to-cyan-600' },
    { name: 'React Native', description: 'Cross-platform apps with native performance', color: 'from-purple-500 to-purple-600' }
  ];

  const process = [
    {
      step: 1,
      title: 'Strategy & Planning',
      description: 'We analyze your app requirements, target audience, and market positioning to create a comprehensive development strategy.'
    },
    {
      step: 2,
      title: 'UI/UX Design',
      description: 'Our designers create intuitive, engaging interfaces that provide exceptional user experiences across all devices.'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'We build your app using best practices, implementing thorough testing to ensure quality and performance.'
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'After app store deployment, we provide ongoing maintenance, updates, and performance optimization.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-400 font-medium">Mobile App Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Native & Cross-Platform Mobile Apps
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build powerful mobile applications that engage users and drive business growth. 
                We create native iOS, Android, and cross-platform apps with exceptional user experiences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your App Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Mobile App Development"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Platform Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We develop for all major mobile platforms using the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 text-center"
              >
                <div className={`bg-gradient-to-r ${platform.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Mobile Apps?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mobile apps provide unique advantages for engaging customers and growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Better Engagement', description: 'Direct communication with users through push notifications' },
              { icon: Zap, title: 'Superior Performance', description: 'Faster loading times and smoother user experience' },
              { icon: Shield, title: 'Enhanced Security', description: 'Built-in security features and data protection' },
              { icon: Smartphone, title: 'Offline Access', description: 'Core functionality available without internet connection' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
              From concept to app store, we guide you through every step of mobile app development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
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
                Comprehensive App Features
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Every mobile app we develop includes essential features that ensure excellent 
                user experience, performance, and business success.
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Mobile app features"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Success Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              App Store Success
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We help ensure your app succeeds in the competitive app marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'App Store Optimization', description: 'Optimize your app listing for maximum visibility and downloads' },
              { title: 'Performance Monitoring', description: 'Track app performance and user engagement metrics' },
              { title: 'Regular Updates', description: 'Keep your app current with new features and improvements' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's create a mobile app that engages your users and drives business growth. 
            Contact us today to discuss your app idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
