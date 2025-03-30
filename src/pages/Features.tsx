
import React from 'react';
import Navbar from '@/components/Navbar';
import Announcement from '@/components/Announcement';
import AutomationFeatures from '@/components/AutomationFeatures';
import CTASection from '@/components/CTASection';

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <AutomationFeatures />
      <CTASection />
    </div>
  );
};

export default Features;
