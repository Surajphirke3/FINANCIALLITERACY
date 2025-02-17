import React from 'react';
import { 
  PiggyBank, 
  TrendingUp, 
  BookOpen, 
  Calculator, 
  BrainCircuit,
  Target,
  Wallet,
  LineChart,
  Shield
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <PiggyBank className="h-12 w-12 text-blue-600" />,
      title: "Budgeting & Saving",
      description: "Learn effective strategies for budgeting your income and building a strong savings foundation. Master the 50/30/20 rule and other practical saving techniques."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Investment Basics",
      description: "Understand different investment vehicles, from stocks and bonds to mutual funds and ETFs. Learn how to build a diversified portfolio aligned with your goals."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Debt Management",
      description: "Get strategies for managing and reducing debt effectively. Learn about different types of debt and how to prioritize payments for optimal financial health."
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Goal Setting",
      description: "Set SMART financial goals and develop actionable plans to achieve them. Track your progress and adjust strategies as needed."
    },
    {
      icon: <Wallet className="h-12 w-12 text-blue-600" />,
      title: "Credit Building",
      description: "Learn how to build and maintain a strong credit score. Understand credit reports, factors affecting your score, and responsible credit use."
    },
    {
      icon: <LineChart className="h-12 w-12 text-blue-600" />,
      title: "Market Analysis",
      description: "Develop skills to analyze market trends and make informed investment decisions. Learn basic technical and fundamental analysis."
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Financial Calculators",
      description: "Access tools to calculate loans, mortgages, investments, and retirement savings. Make informed decisions with data-driven insights."
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-blue-600" />,
      title: "AI Financial Advisor",
      description: "Get personalized financial advice powered by advanced AI. Receive tailored recommendations based on your unique financial situation."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Educational Resources",
      description: "Access comprehensive learning materials, including articles, videos, and interactive courses on various financial topics."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services & Tools
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive financial education and tools to help you make informed decisions
          and achieve your financial goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;