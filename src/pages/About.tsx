
import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize cybersecurity and data protection in every solution we deliver.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships through trust and excellence.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in all our services and deliverables.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable results that drive business growth and efficiency.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b287?w=400&h=400&fit=crop&crop=face',
      description: 'Cybersecurity expert with 15+ years in IT consulting and ISO 27001 implementation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack developer specializing in modern web technologies and mobile applications.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Security Auditor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Certified ISO 27001 auditor with expertise in compliance and risk assessment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Fasapro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Founded with a mission to empower businesses through cutting-edge IT solutions, 
              Fasapro has been at the forefront of digital transformation and cybersecurity excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fasapro was born from a vision to bridge the gap between complex IT challenges and 
                practical business solutions. Our founders, with decades of combined experience in 
                cybersecurity and software development, recognized the need for a consulting firm 
                that truly understands both technology and business.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Since our inception, we've helped over 100 businesses strengthen their digital 
                infrastructure, achieve compliance standards, and accelerate their digital transformation 
                journey. Our commitment to excellence and innovation has made us a trusted partner 
                for companies across various industries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we continue to evolve with the rapidly changing technology landscape, 
                ensuring our clients stay ahead of the curve with cutting-edge solutions and 
                industry best practices.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                alt="Fasapro team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading IT consulting firm that empowers businesses to thrive in the 
                digital age through innovative, secure, and scalable technology solutions. We 
                envision a future where every business, regardless of size, has access to 
                enterprise-level IT expertise and cybersecurity protection.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver exceptional IT consulting services that drive digital transformation, 
                enhance cybersecurity, and ensure regulatory compliance. We are committed to 
                building long-term partnerships with our clients by providing personalized 
                solutions that align with their business objectives and growth strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-750 transition-colors duration-300 border border-gray-700"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
