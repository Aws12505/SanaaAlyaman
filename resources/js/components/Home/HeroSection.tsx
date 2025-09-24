import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRight, Star, Play } from "lucide-react";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
        <div className="relative self-stretch w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-black/70 via-black/50 to-black/30 shadow-xl sm:shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 hover:scale-100 transition-transform duration-[3000ms] ease-out"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          
          {/* Floating Rating Badge */}
          <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 bg-white/95 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-amber-400 text-amber-400" />
            <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-900">4.9</span>
          </div>
          
          {/* Play Button (Desktop Only) */}
          <div className="hidden lg:block absolute top-4 left-4 xl:top-6 xl:left-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 xl:w-14 xl:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Play className="w-6 h-6 xl:w-7 xl:h-7 text-white fill-white" />
            </Button>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-xs sm:max-w-lg lg:max-w-3xl xl:max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight leading-tight sm:leading-tight lg:leading-tight animate-fade-in">
                  Welcome to The Golden Spoon
                </h1>
                
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-white/90 text-sm sm:text-base lg:text-xl xl:text-2xl leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
                  Experience the art of dining with our exquisite dishes and elegant ambiance. Where every meal tells a story.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-center pt-2 sm:pt-4 lg:pt-6">
                <Button 
                  asChild
                  className="group w-full sm:w-auto inline-flex min-w-[140px] lg:min-w-[160px] h-11 sm:h-12 lg:h-14 xl:h-16 items-center justify-center px-6 sm:px-8 lg:px-10 py-0 bg-[#ed7f11] hover:bg-[#d16d0a] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <Link href="/menu">
                    <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm sm:text-base lg:text-lg xl:text-xl mr-2">
                      View Menu
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#161411] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto inline-flex min-w-[140px] lg:min-w-[160px] h-11 sm:h-12 lg:h-14 xl:h-16 items-center justify-center px-6 sm:px-8 lg:px-10 py-0 border-2 border-white/40 bg-white/15 backdrop-blur-sm hover:bg-white/25 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 text-white hover:text-white"
                >
                  <Link href="/about">
                    <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-sm sm:text-base lg:text-lg xl:text-xl">
                      Our Story
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
