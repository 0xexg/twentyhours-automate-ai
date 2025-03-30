
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">20Hours</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Features
            </Link>
            <Link to="/solutions" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Solutions
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Resources
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
