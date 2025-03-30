
import React from 'react';
import Navbar from '@/components/Navbar';
import Announcement from '@/components/Announcement';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
        <p className="text-center text-gray-600 mt-4">Coming soon</p>
      </div>
    </div>
  );
};

export default Pricing;
