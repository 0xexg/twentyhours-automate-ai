
import React from 'react';
import Navbar from '@/components/Navbar';
import Announcement from '@/components/Announcement';
import PricingSection from '@/components/PricingSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <PricingSection />
    </div>
  );
};

export default Pricing;
