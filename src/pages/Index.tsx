
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Announcement from '@/components/Announcement';
import AutomationFeatures from '@/components/AutomationFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <Hero />
      <Companies />
      <AutomationFeatures />
    </div>
  );
};

export default Index;
