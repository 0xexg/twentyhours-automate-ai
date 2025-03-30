
import React from 'react';
import Navbar from '@/components/Navbar';
import Announcement from '@/components/Announcement';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default HowItWorksPage;
