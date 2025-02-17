import React from 'react';
import { 
  Target, 
  Users, 
  Award,
  BookOpen,
  TrendingUp,
  Shield
} from 'lucide-react';

function About() {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Education First",
      description: "We believe in empowering individuals through comprehensive financial education."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Trust & Reliability",
      description: "Our advice and resources are backed by expert knowledge and proven methodologies."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community Focused",
      description: "We're committed to making financial literacy accessible to everyone."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Mission Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Mission
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          To empower individuals with the knowledge and tools they need to make
          informed financial decisions and achieve their financial goals.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div className="md:flex">
          <div className="md:flex-1 p-8">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, Financial Literacy was born from a simple observation:
              many people struggle with making informed financial decisions due to a
              lack of accessible, easy-to-understand financial education.
            </p>
            <p className="text-gray-600 mb-4">
              We started with a simple goal: to make financial education accessible
              to everyone. Today, we've grown into a comprehensive platform that
              combines educational resources, practical tools, and personalized
              guidance to help individuals achieve their financial goals.
            </p>
            <p className="text-gray-600">
              Our team of financial experts and educators works tirelessly to create
              content and tools that demystify complex financial concepts and make
              them applicable to real-life situations.
            </p>
          </div>
          <div className="md:flex-1">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900 mb-1">100K+</div>
          <div className="text-sm text-gray-600">Users Helped</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
          <div className="text-sm text-gray-600">Expert Articles</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
          <div className="text-sm text-gray-600">Support</div>
        </div>
      </div>
    </div>
  );
}

export default About;