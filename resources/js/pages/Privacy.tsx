import { Layout } from "@/components/Layout/Layout";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <Layout title="Privacy Policy - The Golden Spoon">
      <main className="items-start justify-center px-4 md:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
          
          {/* Header Section */}
          <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col min-w-72 items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-full items-start relative flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[32px] tracking-[0] leading-10">
                  Privacy Policy
                </h1>
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  Last updated: September 20, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <section className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto] gap-6">
            
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Information We Collect
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                We collect information you provide directly to us, such as when you create an account, make a reservation, contact us, or participate in any of our services. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                How We Use Your Information
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                We use the information we collect to provide, maintain, and improve our services, process reservations, communicate with you, and provide customer support. We may also use your information to send you promotional materials and updates about our restaurant.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Information Sharing
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Data Security
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Contact Us
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@goldenspoon.com or call us at (555) 123-4567.
              </p>
            </div>

          </section>

        </div>
      </main>
    </Layout>
  );
};

export default Privacy;
