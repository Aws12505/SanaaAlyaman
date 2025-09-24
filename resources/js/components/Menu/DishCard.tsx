import { Card, CardContent } from "@/components/ui/card";
import { Dish } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import { Clock, Star, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface DishCardProps {
  dish: Dish;
  viewMode?: 'list' | 'grid';
}

export const DishCard: React.FC<DishCardProps> = ({ dish, viewMode = 'list' }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Grid view (Desktop only)
  if (viewMode === 'grid') {
    return (
      <Card className="group flex flex-col items-start relative w-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-xl lg:rounded-2xl overflow-hidden">
        <Link href={`/dish/${dish.slug}`} className="w-full">
          <CardContent className="p-0 w-full">
            {/* Image Section */}
            {dish.main_image && (
              <div className="relative overflow-hidden">
                <div
                  className={`h-48 xl:h-56 2xl:h-64 bg-cover bg-center relative self-stretch w-full group-hover:scale-110 transition-transform duration-500 ${
                    !imageLoaded ? 'bg-stone-200 animate-pulse' : ''
                  }`}
                  style={{ backgroundImage: imageLoaded ? `url(${dish.main_image})` : undefined }}
                >
                  <img
                    src={dish.main_image}
                    alt={dish.name}
                    className="opacity-0"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-[#ed7f11] text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>

                {/* Like button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
              </div>
            )}

            {/* Content Section */}
            <div className="flex flex-col p-6 xl:p-8 space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg xl:text-xl tracking-tight leading-tight group-hover:text-[#ed7f11] transition-colors">
                  {dish.name}
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm xl:text-base leading-relaxed line-clamp-2">
                  {dish.description}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex items-center justify-between text-xs xl:text-sm text-[#897560]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>15-20 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-2">
                <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#ed7f11] text-xl xl:text-2xl">
                  ${dish.price}
                </span>
                <ArrowRight className="w-5 h-5 text-[#897560] group-hover:text-[#ed7f11] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  }

  // List view (Mobile and Desktop)
  return (
    <Link href={`/dish/${dish.slug}`} className="block w-full">
      <Card className="group flex flex-col items-start relative self-stretch w-full border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:rounded-2xl overflow-hidden bg-white hover:bg-stone-50/50">
        <CardContent className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] p-4 sm:p-6 lg:p-8 flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
          
          {/* Content Section */}
          <div className="flex flex-col flex-1 items-start gap-2 sm:gap-3 lg:gap-4 relative min-w-0">
            <div className="flex flex-col items-start relative self-stretch w-full space-y-1 sm:space-y-2">
              <div className="flex items-start justify-between w-full gap-4">
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base sm:text-lg lg:text-xl xl:text-2xl tracking-tight leading-tight group-hover:text-[#ed7f11] transition-colors flex-1">
                  {dish.name}
                </h3>
                
                {/* Mobile like button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  className="sm:hidden w-8 h-8 hover:bg-stone-100 rounded-full flex-shrink-0"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </Button>
              </div>

              <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Meta information */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm lg:text-base text-[#897560]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>15-20 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                <span className="font-medium">4.8 (24 reviews)</span>
              </div>
              <div className="hidden sm:block bg-[#ed7f11] text-white px-2 py-1 rounded-full text-xs font-medium">
                Popular
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between w-full sm:w-auto">
              <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#ed7f11] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                ${dish.price}
              </span>
              
              {/* Mobile arrow */}
              <ArrowRight className="sm:hidden w-5 h-5 text-[#897560] group-hover:text-[#ed7f11] group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Image Section */}
          {dish.main_image && (
            <div className="relative flex-shrink-0 w-full sm:w-32 md:w-40 lg:w-48 xl:w-56 order-first sm:order-last">
              <div className="relative group/image overflow-hidden rounded-lg lg:rounded-xl">
                <div
                  className={`h-40 sm:h-24 md:h-32 lg:h-36 xl:h-40 bg-cover bg-center relative self-stretch w-full group-hover/image:scale-110 transition-transform duration-500 ${
                    !imageLoaded ? 'bg-stone-200 animate-pulse' : ''
                  }`}
                  style={{ backgroundImage: imageLoaded ? `url(${dish.main_image})` : undefined }}
                >
                  <img
                    src={dish.main_image}
                    alt={dish.name}
                    className="opacity-0"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Desktop like button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  className="hidden sm:flex absolute top-2 right-2 w-7 h-7 lg:w-8 lg:h-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className={`w-3 h-3 lg:w-4 lg:h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
              </div>

              {/* Desktop arrow indicator */}
              <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#ed7f11]" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
