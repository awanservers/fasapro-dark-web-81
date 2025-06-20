
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Search, Award, ArrowRight, Check } from 'lucide-react';

const ITAuditing = () => {
  const services = [
    'ISO 27001:2022 Implementation & Certification',
    'Security Risk Assessments',
    'Vulnerability Testing & Analysis',
    'Compliance Gap Analysis',
    'Data Protection Impact Assessments (DPIA)',
    'Business Continuity Planning',
    'Incident Response Planning',
    'Security Policy Development'
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management Systems', color: 'from-red-500 to-red-600' },
    { name: 'ISO 27017', description: 'Cloud Security Controls', color: 'from-blue-500 to-blue-600' },
    { name: 'GDPR', description: 'General Data Protection Regulation', color: 'from-purple-500 to-purple-600' },
    { name: 'SOC 2', description: 'Service Organization Control 2', color: 'from-green-500 to-green-600' }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We evaluate your current security posture and identify areas for improvement through comprehensive analysis.'
    },
    {
      step: 2,
      title: 'Gap Analysis',
      description: 'Compare your existing controls against industry standards and regulatory requirements to identify gaps.'
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap for addressing identified gaps and achieving compliance objectives.'
    },
    {
      step: 4,
      title: 'Certification Support',
      description: 'Guide you through the certification process and provide ongoing compliance monitoring.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-red-400 font-medium">IT Auditing</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive IT Security Auditing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with thorough security assessments and compliance auditing. 
                We specialize in ISO 27001 certification and regulatory compliance to safeguard your digital assets.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop"
                alt="IT Security Auditing"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We help you achieve and maintain compliance with international standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 text-center"
              >
                <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IT Auditing Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why IT Auditing Matters
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Regular IT auditing is essential for maintaining security, compliance, and business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Risk Mitigation', description: 'Identify and address security vulnerabilities before they become threats' },
              { icon: FileText, title: 'Regulatory Compliance', description: 'Meet industry standards and avoid costly compliance violations' },
              { icon: Search, title: 'Process Improvement', description: 'Optimize security processes and operational efficiency' },
              { icon: Award, title: 'Competitive Advantage', description: 'Demonstrate security commitment to clients and partners' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
              >
                <div className="bg-gradient-to-r from-red-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
              Our Auditing Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A systematic approach to evaluating and improving your organization's security posture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-red-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
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
                Comprehensive Audit Services
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our IT auditing services cover all aspects of information security management, 
                helping you build a robust security framework that protects your business.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Security audit services"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 Focus Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ISO 27001:2022 Specialization
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We are certified experts in ISO 27001 implementation and certification support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Gap Analysis', description: 'Comprehensive assessment of your current state against ISO 27001 requirements' },
              { title: 'Implementation Support', description: 'Step-by-step guidance through the implementation process' },
              { title: 'Certification Preparation', description: 'Thorough preparation for external certification audits' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
                <div className="bg-gradient-to-r from-red-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a security incident. Let us help you build a robust security framework 
            that protects your business and ensures compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all duration-300"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAuditing;
