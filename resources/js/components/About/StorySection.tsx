import React from "react";

export const StorySection: React.FC = () => {
  return (
    <section className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col w-full md:flex-row items-start gap-6 relative self-stretch flex-[0_0_auto]">
        <div className="flex flex-col w-full md:w-1/2 items-start gap-4 relative">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
            Our Story
          </h2>
          
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
              Founded in 2024, The Golden Spoon began as a dream to create an extraordinary dining experience that combines culinary excellence with warm hospitality.
            </p>
            
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
              From our carefully sourced ingredients to our meticulously crafted dishes, every aspect of The Golden Spoon reflects our commitment to quality and authenticity.
            </p>
            
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
              Today, we continue to evolve and innovate while staying true to our core values of excellence, hospitality, and community.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-64 md:h-80 rounded-lg object-cover"
            alt="Our Story"
            src="/about-story.jpg"
          />
        </div>
      </div>
    </section>
  );
};
