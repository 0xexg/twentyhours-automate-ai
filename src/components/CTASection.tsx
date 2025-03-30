
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to automate?</h2>
        <p className="text-xl text-gray-600 mb-10">
          We'll build your first AI agent or automation in 20 hours.
        </p>
        <Button 
          size="lg" 
          className="bg-[#a4ff90] hover:bg-[#8dff77] text-gray-800 px-8 py-6 text-lg h-auto"
        >
          Book a Call
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
