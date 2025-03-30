
import React from 'react';
import Navbar from '@/components/Navbar';
import Announcement from '@/components/Announcement';
import AutomationFeatures from '@/components/AutomationFeatures';
import CTASection from '@/components/CTASection';
import { Separator } from '@/components/ui/separator';

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      <Announcement />
      <Navbar />
      <AutomationFeatures />
      <Separator className="w-full border-t border-gray-100" />
      <CTASection />
    </div>
  );
};

export default Features;
