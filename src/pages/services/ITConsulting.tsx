
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Target, Lightbulb, TrendingUp, ArrowRight, Check } from 'lucide-react';

const ITConsulting = () => {
  const services = [
    'Cybersecurity Strategy Development',
    'Digital Transformation Roadmaps',
    'Technology Assessment & Planning',
    'Cloud Migration Strategy',
    'IT Infrastructure Optimization',
    'Business Process Automation',
    'Vendor Selection & Management',
    'Change Management Support'
  ];

  const expertise = [
    { name: 'Cybersecurity', description: 'Strategic security planning and risk management', color: 'from-purple-500 to-purple-600' },
    { name: 'Cloud Strategy', description: 'Cloud adoption and migration planning', color: 'from-blue-500 to-blue-600' },
    { name: 'Digital Transformation', description: 'Technology-driven business transformation', color: 'from-green-500 to-green-600' },
    { name: 'Process Optimization', description: 'Streamlining operations through technology', color: 'from-orange-500 to-orange-600' }
  ];

  const process = [
    {
      step: 1,
      title: 'Business Analysis',
      description: 'We analyze your current business processes, technology landscape, and strategic objectives to understand your needs.'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Develop customized IT strategies that align with your business goals and support long-term growth.'
    },
    {
      step: 3,
      title: 'Implementation Planning',
      description: 'Create detailed roadmaps with timelines, milestones, and resource requirements for successful execution.'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout the implementation process and beyond.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <span className="text-purple-400 font-medium">IT Consulting</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Strategic IT Consulting Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Navigate digital transformation with expert guidance. Our IT consulting services help you 
                leverage technology strategically to drive business growth and operational efficiency.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="IT Consulting Strategy"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Expertise Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide strategic guidance across all aspects of IT and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 text-center"
              >
                <div className={`bg-gradient-to-r ${area.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{area.name}</h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Consulting?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We bring deep technical expertise and business acumen to help you make informed technology decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Strategic Thinking', description: 'Technology strategies aligned with business objectives' },
              { icon: TrendingUp, title: 'Growth Focus', description: 'Solutions designed to scale with your business' },
              { icon: Target, title: 'Results-Driven', description: 'Measurable outcomes and tangible business value' },
              { icon: Search, title: 'Deep Analysis', description: 'Thorough assessment of current state and opportunities' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
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
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers actionable insights and strategic recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
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

      {/* Services List Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive Consulting Services
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From cybersecurity strategy to digital transformation, we provide expert guidance 
                across all aspects of IT planning and implementation.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="Strategic consulting"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Focus Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Digital Transformation Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We help organizations navigate the complexities of digital transformation with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Technology Roadmaps', description: 'Strategic plans for technology adoption and implementation' },
              { title: 'Change Management', description: 'Support for organizational change and user adoption' },
              { title: 'ROI Analysis', description: 'Comprehensive analysis of technology investment returns' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Transform Your Business with Strategic IT Guidance
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let our expert consultants help you develop a technology strategy that drives growth, 
            improves efficiency, and positions your business for future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Meet Our Consultants
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
