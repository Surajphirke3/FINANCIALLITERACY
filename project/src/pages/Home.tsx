import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PiggyBank, TrendingUp, BookOpen } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Master Your Money, Shape Your Future
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empower yourself with financial knowledge and tools to make informed decisions
          about your money and secure your financial future.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={() => navigate('/services')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <PiggyBank className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Budgeting Basics</h3>
          <p className="text-gray-600">
            Learn how to create and maintain a budget that helps you achieve your financial goals.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Investment Knowledge</h3>
          <p className="text-gray-600">
            Understand different investment options and strategies for long-term wealth building.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Financial Education</h3>
          <p className="text-gray-600">
            Access comprehensive resources to improve your financial literacy and decision-making.
          </p>
        </div>
      </div>

      {/* Featured Content */}
      <div className="bg-gray-100 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">Why Financial Literacy Matters</h2>
        <div className="aspect-video w-full max-w-3xl mx-auto mb-6">
          <img
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80"
            alt="Financial Planning"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Financial literacy is the foundation of personal financial success. It empowers you to make
          informed decisions about saving, spending, and investing. With proper financial education,
          you can better understand how to manage debt, build wealth, and secure your financial future.
        </p>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/about')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Learn more about our mission
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home