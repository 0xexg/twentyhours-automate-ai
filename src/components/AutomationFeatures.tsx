
import React from 'react';
import { Feature } from '@/types';
import { Bot, ArrowRight, RefreshCw, Sparkles, Clock, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AutomationFeatures = () => {
  const features: Feature[] = [
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: 'AI Agents',
      description: 'Our AI agents handle complex tasks like customer service and data analysis autonomously.'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
      title: 'Workflow Automations',
      description: 'Connect tools and automate repetitive processes to save hours of manual work.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: 'Custom Solutions',
      description: 'We build personalized automations tailored to your unique business needs.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Quick Implementation',
      description: 'Get your first automation up and running in just 20 hours.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Instant ROI',
      description: 'See immediate impact on productivity and efficiency.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Agents & Automations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your business with intelligent AI agents and workflow automations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;
