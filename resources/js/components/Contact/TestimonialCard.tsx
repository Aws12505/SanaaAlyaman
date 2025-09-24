import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/types/TestimonialTypes";
import { Star, Quote } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="group flex flex-col w-72 sm:w-80 lg:w-full items-start relative flex-shrink-0 lg:flex-shrink rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg overflow-hidden bg-white h-full">
      <CardContent className="p-6 lg:p-8 w-full h-full flex flex-col">
        <div className="space-y-4 sm:space-y-6 h-full flex flex-col">
          
          {/* Quote Icon */}
          <div className="flex items-start justify-between">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#ed7f11]/10 rounded-xl group-hover:bg-[#ed7f11]/20 transition-colors duration-300">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#ed7f11]" />
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                    i < testimonial.rating
                      ? "text-amber-400 fill-current"
                      : "text-stone-300"
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Testimonial Text */}
          <blockquote className="flex-1">
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed italic">
              "{testimonial.message}"
            </p>
          </blockquote>
          
          {/* Customer Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
              />
            ) : (
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#ed7f11] to-[#d16d0a] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-base sm:text-lg">
                  {testimonial.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <div className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base sm:text-lg truncate">
                {testimonial.name}
              </div>
              <div className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base">
                {testimonial.time_ago}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
