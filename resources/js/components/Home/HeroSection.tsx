import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-start p-4 relative flex-1 self-stretch w-full grow">
        <div className="relative self-stretch w-full h-[320px] md:h-[480px] rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          
          <div className="inline-flex flex-col items-start gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-white text-3xl md:text-5xl text-center tracking-[-2.00px] leading-[40px] md:leading-[60px] whitespace-nowrap">
                Welcome to The Golden Spoon
              </h1>
            </div>

            <div className="flex flex-col w-full max-w-[772px] items-center relative flex-[0_0_auto] px-4">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-white text-sm md:text-base text-center tracking-[0] leading-5 md:leading-6">
                Experience the art of dining with our exquisite dishes and elegant ambiance.
              </p>
            </div>

            <Button 
              asChild
              className="inline-flex min-w-[84px] max-w-[480px] h-10 md:h-12 items-center justify-center px-4 md:px-5 py-0 mt-4 bg-[#ed7f11] rounded-lg overflow-hidden hover:bg-[#d16d0a] transition-colors"
            >
              <Link href="/menu">
                <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm md:text-base text-center tracking-[0] leading-[21px] md:leading-6 whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    View Menu
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
