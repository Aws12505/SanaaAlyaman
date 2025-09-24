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
    <section className="flex flex-col items-center relative self-stretch w-full space-y-8 sm:space-y-10 lg:space-y-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-4xl">
        <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
          Our Philosophy
        </h2>
        <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
          These core principles guide everything we do, from the way we select our ingredients to how we serve our guests.
        </p>
      </div>

      {/* Philosophy Cards */}
      <div className="w-full max-w-6xl">
        {/* Mobile: Vertical stack */}
        <div className="block sm:hidden space-y-6">
          {philosophyItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-[#ed7f11] rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg mb-3">
                  {item.title}
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] text-[#897560] text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {philosophyItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white rounded-2xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#ed7f11] rounded-xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl mb-4">
                  {item.title}
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] text-[#897560] text-base leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: 4 columns */}
        <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
          {philosophyItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white rounded-2xl">
              <CardContent className="p-6 xl:p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 xl:w-18 xl:h-18 bg-[#ed7f11] rounded-xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 xl:w-9 xl:h-9 text-white" />
                  </div>
                </div>
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg xl:text-xl mb-4 flex-shrink-0">
                  {item.title}
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] text-[#897560] text-sm xl:text-base leading-relaxed flex-1">
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
