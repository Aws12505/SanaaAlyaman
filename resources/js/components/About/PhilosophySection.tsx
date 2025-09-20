import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Leaf, Users } from "lucide-react";
import React from "react";

const philosophyItems = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "Every dish is crafted with love and attention to detail, ensuring an exceptional dining experience."
  },
  {
    icon: Leaf,
    title: "Fresh & Sustainable",
    description: "We source the finest local ingredients and maintain sustainable practices in everything we do."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building lasting relationships with our guests and supporting our local community is at our heart."
  },
  {
    icon: Award,
    title: "Culinary Innovation",
    description: "Constantly evolving our menu with creative dishes that honor tradition while embracing innovation."
  }
];

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#161411] mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-[#897560] max-w-2xl mx-auto">
            These core principles guide everything we do, from the way we select 
            our ingredients to how we serve our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyItems.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#ed7f11] rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#161411] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#897560] leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
