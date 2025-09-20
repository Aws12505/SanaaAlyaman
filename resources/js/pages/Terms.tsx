import { Layout } from "@/components/Layout/Layout";
import React from "react";

const Terms: React.FC = () => {
  return (
    <Layout title="Terms of Service - The Golden Spoon">
      <main className="items-start justify-center px-4 md:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
          
          {/* Header Section */}
          <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col min-w-72 items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-full items-start relative flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[32px] tracking-[0] leading-10">
                  Terms of Service
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
                Acceptance of Terms
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                By accessing and using The Golden Spoon website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Reservations and Cancellations
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                Reservations are subject to availability and restaurant policies. We require at least 2 hours notice for cancellations. No-shows or late cancellations may result in charges or restrictions on future reservations.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Payment Terms
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                Payment is due at the time of service. We accept cash and major credit cards. Gratuity is not included in menu prices and is at your discretion. A service charge may be added for parties of 6 or more.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Conduct and Behavior
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                We reserve the right to refuse service to anyone who behaves inappropriately, disrupts other guests, or violates our policies. This includes but is not limited to inappropriate dress, excessive noise, or intoxication.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Limitation of Liability
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                The Golden Spoon shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any errors or omissions in our content.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                Contact Information
              </h2>
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                For questions about these Terms of Service, please contact us at legal@goldenspoon.com or call us at (555) 123-4567.
              </p>
            </div>

          </section>

        </div>
      </main>
    </Layout>
  );
};

export default Terms;
