import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import React from "react";

const milestones = [
  {
    icon: Calendar,
    label: "Founded",
    value: "2024"
  },
  {
    icon: Users,
    label: "Team Members",
    value: "25+"
  },
  {
    icon: Trophy,
    label: "Awards",
    value: "12"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "NYC"
  }
];

export const StorySection: React.FC = () => {
  return (
    <section className="flex flex-col items-center relative self-stretch w-full space-y-8 sm:space-y-10 lg:space-y-12">
      {/* Story Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full max-w-6xl items-center">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
              Our Story
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                Founded in 2024, The Golden Spoon began as a dream to create an extraordinary dining experience that combines culinary excellence with warm hospitality.
              </p>
              
              <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                From our carefully sourced ingredients to our meticulously crafted dishes, every aspect of The Golden Spoon reflects our commitment to quality and authenticity.
              </p>
              
              <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                Today, we continue to evolve and innovate while staying true to our core values of excellence, hospitality, and community.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#ed7f11]/10 rounded-xl mx-auto">
                  <milestone.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#ed7f11]" />
                </div>
                <div>
                  <div className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl lg:text-2xl">
                    {milestone.value}
                  </div>
                  <div className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-xs sm:text-sm">
                    {milestone.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
            <img
              className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              alt="Our Story - The Golden Spoon Restaurant Interior"
              src="/about-story.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 sm:px-6 sm:py-3">
              <div className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm sm:text-base">
                Est. 2024
              </div>
              <div className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-xs sm:text-sm">
                Fine Dining Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
