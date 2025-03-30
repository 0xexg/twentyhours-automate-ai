
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Announcement from '@/components/Announcement';
import AutomationFeatures from '@/components/AutomationFeatures';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <Hero />
      <Companies />
      <AutomationFeatures />
      <HowItWorks />
    </div>
  );
};

export default Index;
