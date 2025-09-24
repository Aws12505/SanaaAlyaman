import { Layout } from "@/components/Layout/Layout";
import { StorySection } from "@/components/About/StorySection";
import { PhilosophySection } from "@/components/About/PhilosophySection";
import { TeamCard } from "@/components/About/TeamCard";
import { Staff } from "@/types/StaffTypes";
import { ArrowRight } from "lucide-react";
import React from "react";

interface AboutProps {
  staff: Staff[];
}

const About: React.FC<AboutProps> = ({ staff }) => {
  return (
    <Layout title="About Us - The Golden Spoon">
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/20 to-white min-h-screen">
        <div className="flex flex-col max-w-7xl items-center relative flex-1 grow w-full space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center relative self-stretch w-full space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tight leading-tight">
                About Us
              </h1>
              
              <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mx-auto">
                Discover the story behind The Golden Spoon and meet the passionate team that makes every dining experience extraordinary.
              </p>
            </div>
          </div>

          <StorySection />
          <PhilosophySection />

          {/* Team Section */}
          <section className="flex flex-col items-center relative self-stretch w-full space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4 lg:gap-8 max-w-4xl">
              <div className="flex-1 text-center sm:text-left">
                <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
                  Meet Our Team
                </h2>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed mt-1 sm:mt-2 max-w-2xl mx-auto sm:mx-0">
                  The talented individuals who bring our culinary vision to life
                </p>
              </div>
            </div>

            {/* Team Cards */}
            <div className="w-full">
              {/* Mobile: Horizontal scroll */}
              <div className="block lg:hidden w-full overflow-x-auto scrollbar-hide">
                <div className="inline-flex items-start gap-4 sm:gap-6 pb-4 px-4 sm:px-6">
                  {staff.map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </div>
                
                {/* Mobile scroll indicator */}
                <div className="flex justify-center mt-4 sm:mt-6">
                  <div className="flex items-center gap-2 bg-stone-100 rounded-full px-3 py-1.5">
                    <div className="w-1.5 h-1.5 bg-[#ed7f11] rounded-full animate-pulse" />
                    <span className="text-xs text-[#897560] font-medium">Swipe to see all team members</span>
                  </div>
                </div>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8 px-4">
                {staff.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default About;
