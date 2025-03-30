
import React from 'react';
import { Feature } from '@/types';
import { 
  Bot, 
  ArrowRight, 
  RefreshCw, 
  Sparkles, 
  Clock, 
  Zap,
  UserCheck,
  SearchCheck,
  FileSpreadsheet,
  BarChart,
  Search,
  Globe,
  FileText,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AutomationFeatures = () => {
  const categories = [
    {
      title: "Sales & CRM",
      features: [
        {
          icon: <UserCheck className="h-6 w-6 text-primary" />,
          title: 'Lead tracking & follow-up',
          description: 'Automatically track leads and schedule follow-ups to ensure no opportunity slips through the cracks.'
        },
        {
          icon: <RefreshCw className="h-6 w-6 text-primary" />,
          title: 'CRM data enrichment & cleanup',
          description: 'Keep your CRM data clean, updated, and enriched with relevant information automatically.'
        },
        {
          icon: <SearchCheck className="h-6 w-6 text-primary" />,
          title: 'Lead researcher',
          description: 'Intelligent research on potential leads to provide valuable insights for your sales team.'
        }
      ]
    },
    {
      title: "Marketing & SEO",
      features: [
        {
          icon: <FileSpreadsheet className="h-6 w-6 text-primary" />,
          title: 'Blog post repurposer',
          description: 'Convert existing content into multiple formats to maximize reach across different platforms.'
        },
        {
          icon: <BarChart className="h-6 w-6 text-primary" />,
          title: 'SEO audit & keyword optimizer',
          description: 'Analyze and optimize your content for better search engine visibility and rankings.'
        },
        {
          icon: <Search className="h-6 w-6 text-primary" />,
          title: 'Reddit sentiment tracker',
          description: 'Monitor and analyze sentiment about your brand or industry across Reddit communities.'
        }
      ]
    },
    {
      title: "Web Scraping",
      features: [
        {
          icon: <Globe className="h-6 w-6 text-primary" />,
          title: 'Lead website scraper',
          description: 'Scrape and categorize potential lead websites to build targeted prospect lists.'
        },
        {
          icon: <Bot className="h-6 w-6 text-primary" />,
          title: 'LinkedIn company page scraper',
          description: 'Extract valuable data from LinkedIn company pages to enhance your lead database.'
        },
        {
          icon: <Sparkles className="h-6 w-6 text-primary" />,
          title: 'URL metadata extractor',
          description: 'Automatically pull and organize metadata from URLs for research and analysis.'
        }
      ]
    },
    {
      title: "Operations & Admin",
      features: [
        {
          icon: <FileText className="h-6 w-6 text-primary" />,
          title: 'Document processing',
          description: 'Extract data from PDFs, perform data entry, and organize documents automatically.'
        },
        {
          icon: <Zap className="h-6 w-6 text-primary" />,
          title: 'Email triage & auto-responses',
          description: 'Sort incoming emails by priority and send automated responses to common inquiries.'
        },
        {
          icon: <Calendar className="h-6 w-6 text-primary" />,
          title: 'Calendar & meeting scheduling',
          description: 'Automate the scheduling process and eliminate back-and-forth emails for appointments.'
        }
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

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="bg-white border border-gray-100 hover:shadow-md transition-shadow">
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
        ))}
      </div>
    </section>
  );
};

export default AutomationFeatures;
