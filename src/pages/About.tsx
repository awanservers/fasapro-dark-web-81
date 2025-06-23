import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Globe, Shield, Code, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every solution we deliver, ensuring your business data and systems are protected.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. We build lasting partnerships based on trust and results.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'With over 15 years in IT consulting, John leads our strategic vision and client relationships.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      bio: 'Sarah brings deep technical expertise in cybersecurity and enterprise architecture.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      bio: 'Michael specializes in modern web technologies and mobile app development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      position: 'Security Consultant',
      bio: 'Emily is our ISO 27001 expert, helping clients achieve and maintain compliance.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const certifications = [
    {
      title: 'ISO 27001:2022 Lead Implementer',
      description: 'Certified expertise in implementing and maintaining Information Security Management Systems',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'CISSP Certified',
      description: 'Certified Information Systems Security Professional with advanced cybersecurity knowledge',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'AWS Solutions Architect',
      description: 'Professional certification in designing and deploying scalable cloud solutions',
      icon: Code,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Project Management Professional',
      description: 'PMP certified for effective project management and delivery excellence',
      icon: Clock,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section with Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Modern office building"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-purple-900/20"></div>
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              About
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fasapro
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking IT consulting firm dedicated to empowering businesses 
              through innovative technology solutions, cybersecurity expertise, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center backdrop-blur-sm"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex technology and business success, 
                  Fasapro has grown from a small consultancy to a trusted partner for organizations 
                  seeking digital transformation.
                </p>
                <p>
                  Our journey began when we recognized that many businesses struggle to navigate 
                  the rapidly evolving technology landscape while maintaining security and compliance. 
                  We set out to change that by providing expert guidance, cutting-edge solutions, 
                  and unwavering support.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in IT consulting, 
                  helping our clients not just adapt to change, but lead it in their industries.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional certifications and expertise that validate our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-blue-500/50 text-center"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business 
            and achieve your technology goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start the Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
