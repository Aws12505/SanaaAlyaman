import { Layout } from "@/components/Layout/Layout";
import { StorySection } from "@/components/About/StorySection";
import { TeamCard } from "@/components/About/TeamCard";
import { Staff } from "@/types/StaffTypes";
import React from "react";

interface AboutProps {
  staff: Staff[];
}

const About: React.FC<AboutProps> = ({ staff }) => {
  return (
    <Layout title="About Us - The Golden Spoon">
      <main className="items-start justify-center px-4 md:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
          
          {/* Header Section */}
          <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col min-w-72 items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-full items-start relative flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[32px] tracking-[0] leading-10">
                  About Us
                </h1>
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  Discover the story behind The Golden Spoon and meet the passionate team that makes every dining experience extraordinary.
                </p>
              </div>
            </div>
          </div>

          <StorySection />

          {/* Team Section */}
          <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
              Meet Our Team
            </h2>
          </section>

          <section className="flex items-start self-stretch w-full relative flex-[0_0_auto] overflow-x-auto">
            <div className="inline-flex items-start gap-3 p-4 relative flex-[0_0_auto] min-w-full">
              {staff.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
};

export default About;
