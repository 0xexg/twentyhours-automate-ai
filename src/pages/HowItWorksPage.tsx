
import React from 'react';
import Navbar from '@/components/Navbar';
import Announcement from '@/components/Announcement';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import { Separator } from '@/components/ui/separator';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <HowItWorks />
      <Separator className="w-full border-t border-gray-100" />
      <CTASection />
    </div>
  );
};

export default HowItWorksPage;
