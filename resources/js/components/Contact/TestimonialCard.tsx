import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/types/TestimonialTypes";
import { Star } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="flex flex-col min-w-[240px] w-60 items-start gap-4 relative flex-[0_0_auto] rounded-lg">
      <CardContent className="p-4 w-full">
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-[#ed7f11] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {testimonial.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            
            <div className="flex flex-col items-start flex-1">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm tracking-[0] leading-[21px]">
                {testimonial.name}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
            "{testimonial.message}"
          </p>
          
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-xs tracking-[0] leading-[18px]">
            {testimonial.time_ago}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
