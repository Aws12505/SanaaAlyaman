import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/Layout/Layout";
import { Dish } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import { ArrowLeft, Star, Clock, Users, Heart, Share2 } from "lucide-react";
import React, { useState } from "react";

interface DishDetailProps {
  dish: Dish;
}

const DishDetail: React.FC<DishDetailProps> = ({ dish }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Layout title={`${dish.name} - The Golden Spoon`}>
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/20 to-white min-h-screen">
        <div className="flex flex-col max-w-7xl items-start relative flex-1 grow w-full space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 w-full">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#897560] hover:text-[#ed7f11] p-2 h-auto font-medium transition-colors rounded-lg hover:bg-[#ed7f11]/10"
                asChild
              >
                <Link href="/menu">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Back to Menu
                </Link>
              </Button>
              <span className="text-[#897560]">/</span>
              <span className="text-[#897560]">{dish.category?.name}</span>
              <span className="text-[#897560]">/</span>
              <span className="text-[#161411] font-medium">{dish.name}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className="w-10 h-10 sm:w-11 sm:h-11 hover:bg-[#ed7f11]/10 rounded-lg transition-colors"
              >
                <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-[#897560]'}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 sm:w-11 sm:h-11 hover:bg-[#ed7f11]/10 rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#897560]" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full">
            {/* Images Section */}
            <div className="space-y-4 sm:space-y-6">
              {dish.images && dish.images.length > 0 && (
                <>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <div
                      className={`h-80 sm:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center transition-all duration-500 ${
                        !imageLoaded ? 'bg-stone-200 animate-pulse' : ''
                      }`}
                      style={{ backgroundImage: imageLoaded ? `url(${dish.images[selectedImageIndex]})` : undefined }}
                    >
                      <img
                        src={dish.images[selectedImageIndex]}
                        alt={dish.name}
                        className="opacity-0"
                        onLoad={() => setImageLoaded(true)}
                      />
                    </div>
                    
                    {/* Image Badges */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-col gap-2">
                      {dish.is_signature && (
                        <div className="flex items-center gap-1.5 bg-[#ed7f11] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                          SIGNATURE
                        </div>
                      )}
                      <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                        {dish.category?.name}
                      </div>
                      {!dish.is_available && (
                        <div className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                          UNAVAILABLE
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  {dish.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {dish.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`relative h-16 sm:h-20 lg:h-24 bg-cover bg-center rounded-lg transition-all duration-300 border-2 overflow-hidden ${
                            selectedImageIndex === index
                              ? "border-[#ed7f11] ring-2 ring-[#ed7f11]/20 scale-105"
                              : "border-stone-200 hover:border-stone-300 hover:scale-102"
                          }`}
                          style={{ backgroundImage: `url(${image})` }}
                        >
                          {selectedImageIndex === index && (
                            <div className="absolute inset-0 bg-[#ed7f11]/20" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-6 sm:space-y-8">
              {/* Title and Price */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight mb-2">
                    {dish.name}
                  </h1>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ed7f11] [font-family:'Epilogue-Bold',Helvetica]">
                      ${dish.price}
                    </div>
                    <div className="flex items-center gap-4 text-sm sm:text-base text-[#897560]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>15-20 mins</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Serves 1</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                        <span className="font-medium">4.8 (124)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-stone-200" />

              {/* Description */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl lg:text-2xl">
                  Description
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {dish.ingredients && (
                <>
                  <Separator className="bg-stone-200" />
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl lg:text-2xl">
                      Ingredients
                    </h3>
                    <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                      {dish.ingredients}
                    </p>
                  </div>
                </>
              )}

              {dish.allergen_info && (
                <>
                  <Separator className="bg-stone-200" />
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl lg:text-2xl">
                      Allergen Information
                    </h3>
                    <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                      {dish.allergen_info}
                    </p>
                  </div>
                </>
              )}

              <Separator className="bg-stone-200" />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto inline-flex min-w-[160px] h-12 sm:h-14 lg:h-16 items-center justify-center px-6 sm:px-8 lg:px-10 bg-[#ed7f11] hover:bg-[#d16d0a] text-[#161411] font-bold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  disabled={!dish.is_available}
                >
                  {dish.is_available ? "Order Now" : "Currently Unavailable"}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto inline-flex min-w-[160px] h-12 sm:h-14 lg:h-16 items-center justify-center px-6 sm:px-8 lg:px-10 border-2 border-[#ed7f11] text-[#ed7f11] hover:bg-[#ed7f11] hover:text-[#161411] font-bold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">Make Reservation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DishDetail;
