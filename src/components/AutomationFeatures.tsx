
import React from 'react';
import { 
  UserCheck, 
  BarChart, 
  Globe, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AutomationFeatures = () => {
  const categories = [
    {
      title: "Sales & CRM",
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      description: "Automate lead tracking, follow-ups, CRM data enrichment, and intelligent lead research.",
      features: [
        "Lead tracking & follow-up automations",
        "CRM data enrichment & cleanup",
        "Lead researcher"
      ]
    },
    {
      title: "Marketing & SEO",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      description: "Optimize content, improve search rankings, and monitor brand sentiment automatically.",
      features: [
        "Blog post repurposer",
        "SEO audit & keyword optimizer", 
        "Reddit sentiment tracker"
      ]
    },
    {
      title: "Web Scraping",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Extract valuable data from websites, LinkedIn, and other online resources effortlessly.",
      features: [
        "Scrape and categorise lead websites",
        "LinkedIn company page scraper",
        "URL metadata extractor"
      ]
    },
    {
      title: "Operations & Admin",
      icon: <FileText className="h-8 w-8 text-primary" />,
      description: "Streamline document processing, email management, and scheduling to save time.",
      features: [
        "Document processing (PDF extraction, data entry)",
        "Email triage & auto-responses",
        "Calendar & meeting scheduling"
      ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-3xl font-bold text-gray-900 italic">And many more...</p>
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;

