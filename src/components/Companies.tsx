
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

const Companies = () => {
  const categories = [
    "E-commerce",
    "SaaS",
    "Consumer apps",
    "Financial Services"
  ];

  // Placeholder company logos
  const companyLogos = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
    { id: 4, name: "Company 4" },
    { id: 5, name: "Company 5" },
    { id: 6, name: "Company 6" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Companies We Work With</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by fast-growing B2B and B2C teams in:
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {categories.map((category, index) => (
              <React.Fragment key={category}>
                <span className="text-gray-700 font-medium">{category}</span>
                {index < categories.length - 1 && (
                  <span className="text-gray-400">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Carousel 
          className="max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {companyLogos.map((company) => (
              <CarouselItem key={company.id} className="md:basis-1/3 lg:basis-1/4">
                <Card className="h-32 flex items-center justify-center bg-white border border-gray-100">
                  <p className="text-gray-400">{company.name}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Companies;
