import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dish } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import { Clock, Star, ArrowRight } from "lucide-react";
import React from "react";

interface SignatureDishesProps {
  dishes: Dish[];
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ dishes }) => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] space-y-6 sm:space-y-8 lg:space-y-10">
      <div className="flex flex-col items-start relative self-stretch w-full">
        <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
          Our Signature Dishes
        </h2>
        <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed mt-1 sm:mt-2 lg:mt-3">
          Masterfully crafted dishes that define our culinary excellence
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 self-stretch w-full">
        {dishes.map((dish, index) => (
          <Card
            key={dish.id}
            className="group items-start rounded-xl sm:rounded-2xl lg:rounded-3xl flex relative self-stretch w-full flex-[0_0_auto] overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] bg-white"
          >
            <CardContent className="p-0 flex w-full flex-col lg:flex-row">
              {dish.main_image && (
                <div className="relative lg:flex-1 lg:max-w-md xl:max-w-lg overflow-hidden">
                  <div 
                    className="relative h-48 sm:h-56 lg:h-72 xl:h-80 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${dish.main_image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 group-hover:to-black/20 transition-all duration-300" />
                  
                  {/* Floating badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col sm:flex-row gap-2">
                    <div className="bg-[#ed7f11] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                      Signature
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      4.8
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 xl:p-10 relative flex-1 grow">
                <div className="flex flex-col items-start relative self-stretch w-full space-y-2 sm:space-y-3 lg:space-y-4">
                  <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-tight leading-tight group-hover:text-[#ed7f11] transition-colors">
                    {dish.name}
                  </h3>
                  
                  <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base text-[#897560]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>15-20 mins</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">4.8 (124 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ed7f11] [font-family:'Epilogue-Bold',Helvetica]">
                      ${dish.price}
                    </span>
                    <span className="text-xs sm:text-sm lg:text-base text-[#897560]">per serving</span>
                  </div>
                  
                  <Button 
                    asChild
                    className="group/btn w-full sm:w-auto inline-flex min-w-[120px] lg:min-w-[140px] h-10 sm:h-11 lg:h-12 xl:h-14 items-center justify-center px-4 sm:px-6 lg:px-8 py-0 bg-[#ed7f11] hover:bg-[#d16d0a] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Link href={`/dish/${dish.slug}`}>
                      <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm sm:text-base lg:text-lg mr-2">
                        Learn More
                      </span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#161411] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
