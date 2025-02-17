import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Financial Literacy</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/services" className={`${isActive('/services')} transition-colors duration-200`}>
              Services/Tools
            </Link>
            <Link to="/ai-agent" className={`${isActive('/ai-agent')} transition-colors duration-200`}>
              AI Agent
            </Link>
            <Link to="/calculator" className={`${isActive('/calculator')} transition-colors duration-200`}>
              Calculator
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
              Contact
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar