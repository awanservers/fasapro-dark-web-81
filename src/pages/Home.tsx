import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, Smartphone, Search, Award, Clock, Users, FileText, Check, Star, Sparkles, Heart, Zap, CheckCircle, BadgeCheck } from 'lucide-react';
import { getRecentBlogPosts } from '../data/blogPosts';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom web solutions built with modern technologies for optimal performance and user experience.',
      link: '/services/website-development',
      gradient: 'from-green-400 to-green-600',
      hoverGradient: 'from-green-500 to-green-700',
      bgGradient: 'from-green-500/10 to-green-600/10',
      borderColor: 'border-green-500/20 hover:border-green-400/50'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications designed for iOS and Android platforms.',
      link: '/services/mobile-app-development',
      gradient: 'from-purple-400 to-purple-600',
      hoverGradient: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/20 hover:border-purple-400/50'
    },
    {
      icon: Shield,
      title: 'IT Auditing',
      description: 'Comprehensive security assessments and regulatory compliance including ISO 27001 certification.',
      link: '/services/it-auditing',
      gradient: 'from-emerald-400 to-emerald-600',
      hoverGradient: 'from-emerald-500 to-emerald-700',
      bgGradient: 'from-emerald-500/10 to-emerald-600/10',
      borderColor: 'border-emerald-500/20 hover:border-emerald-400/50'
    },
    {
      icon: Search,
      title: 'IT Consulting',
      description: 'Strategic cybersecurity guidance and digital transformation consulting services.',
      link: '/services/it-consulting',
      gradient: 'from-violet-400 to-violet-600',
      hoverGradient: 'from-violet-500 to-violet-700',
      bgGradient: 'from-violet-500/10 to-violet-600/10',
      borderColor: 'border-violet-500/20 hover:border-violet-400/50'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Certified & Experienced Team',
      description: 'Our professionals hold industry certifications and bring years of expertise to every project.'
    },
    {
      icon: Shield,
      title: 'Expertise in ISO 27001:2022',
      description: 'Specialized knowledge in implementing and maintaining ISO 27001:2022 compliance standards.'
    },
    {
      icon: Code,
      title: 'Secure, Scalable & Custom Solutions',
      description: 'Tailored IT solutions built with security and scalability at the core of every implementation.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround & Dedicated Support',
      description: 'Quick delivery times with ongoing support to ensure your systems run smoothly 24/7.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin by understanding your business needs, challenges, and objectives through comprehensive discovery sessions.'
    },
    {
      step: '02',
      title: 'Technical Assessment',
      description: 'Our experts conduct thorough analysis of your current systems and identify opportunities for improvement.'
    },
    {
      step: '03',
      title: 'Solution Development',
      description: 'We design and develop customized solutions tailored to your specific requirements and industry standards.'
    },
    {
      step: '04',
      title: 'Deployment & Ongoing Support',
      description: 'Implementation with minimal disruption, followed by continuous monitoring and dedicated support.'
    }
  ];

  const clientIndustries = [
    {
      icon: '/lovable-uploads/50257192-b5b4-4e40-b4af-c689859e1ff8.png',
      name: 'Technology & Startups',
      description: 'Innovation-driven companies'
    },
    {
      icon: '/lovable-uploads/dfe681f7-be47-4720-b512-9d43f5da363f.png',
      name: 'Retail & E-commerce',
      description: 'Digital commerce solutions'
    },
    {
      icon: '/lovable-uploads/299a883f-c704-46d8-876d-acec16bf6bed.png',
      name: 'Financial Services',
      description: 'Banking & finance sector'
    },
    {
      icon: '/lovable-uploads/c0945098-0a3a-484a-8ce4-53d2d2dce145.png',
      name: 'Education',
      description: 'Academic institutions'
    },
    {
      icon: '/lovable-uploads/25c4525d-2c34-4ce6-a5a9-bbdb065adbe1.png',
      name: 'Healthcare',
      description: 'Medical & healthcare providers'
    },
    {
      icon: '/lovable-uploads/226cb6bf-e34a-402b-ab98-02203c51c167.png',
      name: 'Professional Services',
      description: 'Consulting & business services'
    }
  ];

  const blogPosts = getRecentBlogPosts(3);

  const certifications = [
    {
      title: 'ISO/IEC 27001:2022 BSI Lead Implementer',
      description: 'Certified lead implementer for information security management systems',
      icon: Shield,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-500/10 to-green-600/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      title: 'MTCNA',
      description: 'MikroTik Certified Network Associate for advanced network administration',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'NIST Framework',
      description: 'National Institute of Standards and Technology cybersecurity framework expertise',
      icon: BadgeCheck,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-violet-600/10',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'COBIT',
      description: 'Control Objectives for Information and Related Technologies governance framework',
      icon: Award,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Base gradient with green/purple theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-purple-900/20 to-violet-900/30"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-purple-600/10 to-violet-600/10 animate-pulse"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Geometric shapes with green/purple theme */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Trust indicators */}
            <div className="flex items-center justify-center mb-8 space-x-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm font-medium">5.0 Client Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span className="text-white text-sm font-medium">100+ Happy Clients</span>
              </div>
            </div>

            {/* Main heading with enhanced styling */}
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Transform Your Business</span>
              <span className="block bg-gradient-to-r from-green-400 via-purple-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
                with Confidence
              </span>
            </h1>

            {/* Enhanced subtitle */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Partner with <span className="text-green-400 font-semibold">Fasapro</span> for cutting-edge IT solutions that 
              <span className="text-purple-400 font-semibold"> empower growth</span>, 
              <span className="text-emerald-400 font-semibold"> ensure security</span>, and 
              <span className="text-violet-400 font-semibold"> drive success</span> in the digital age.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-green-500 via-purple-500 to-violet-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:via-purple-600 hover:to-violet-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                Start Your Journey Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-purple-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              </Link>
              
              <Link
                to="/services"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                <Zap className="mr-3 h-6 w-6 group-hover:text-yellow-400 transition-colors" />
                Explore Our Services
              </Link>
            </div>

            {/* Social proof section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <p className="text-gray-300 text-lg mb-2">Trusted by industry leaders</p>
                  <div className="flex items-center justify-center lg:justify-start space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-white font-semibold">5.0 average rating</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="group">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-full px-6 py-2 border border-green-500/20 mb-6">
              <Sparkles className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">Our Core Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From cutting-edge development to robust security, we deliver end-to-end IT solutions 
              that transform businesses and drive digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}></div>
                
                <Link
                  to={service.link}
                  className={`relative block bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border ${service.borderColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full`}
                >
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8">
                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Enhanced CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    
                    {/* Floating indicator */}
                    <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}></div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                </Link>
              </div>
            ))}
          </div>

          {/* Enhanced CTA below services */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  Let's discuss how our comprehensive IT solutions can drive your success
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fasapro Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Fasapro
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover what sets us apart in delivering exceptional IT solutions and consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-bold text-lg w-12 h-12 rounded-lg flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We serve diverse sectors with specialized IT solutions tailored to each industry's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientIndustries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center justify-center h-16 mb-4">
                  <img 
                    src={industry.icon} 
                    alt={industry.name}
                    className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-green-400 transition-colors">
                  {industry.name}
                </h4>
                <p className="text-gray-400 text-xs">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Frameworks Section */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full px-6 py-2 border border-emerald-500/20 mb-6">
              <BadgeCheck className="h-4 w-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-medium">Professional Certifications</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Certified Excellence & 
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Industry Frameworks
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our expertise is validated by industry-leading certifications and frameworks, 
              ensuring the highest standards of security, governance, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}></div>
                
                <div className={`relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border ${cert.borderColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 h-full group-hover:border-opacity-60`}>
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8 flex justify-center">
                    <div className={`bg-gradient-to-r ${cert.color} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                      <cert.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} w-20 h-20 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm">
                      {cert.description}
                    </p>

                    {/* Verification badge */}
                    <div className="flex items-center justify-center">
                      <div className={`flex items-center bg-gradient-to-r ${cert.bgColor} rounded-full px-4 py-2 border ${cert.borderColor} group-hover:border-opacity-60 transition-all duration-300`}>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        <span className="text-emerald-400 text-sm font-medium">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-emerald-500/20 max-w-4xl">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                  <Star className="h-8 w-8 text-white fill-current" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Certified Professional Excellence
                  </h3>
                  <p className="text-gray-300">
                    Trust in our validated expertise and industry-standard frameworks
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">4+</div>
                  <div className="text-gray-400 text-sm">Professional Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Compliance Standards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Expert Support</div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-emerald-600 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:animate-spin" />
                Partner with Certified Experts
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Resources Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
              >
                {/* Featured Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expert IT solutions can help you achieve your business goals 
            and stay ahead of the competition.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
