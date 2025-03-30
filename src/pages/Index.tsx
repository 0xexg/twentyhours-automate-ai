
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Announcement from '@/components/Announcement';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
};

export default Index;
