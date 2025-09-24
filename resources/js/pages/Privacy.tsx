import { Layout } from "@/components/Layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, UserCheck, Clock } from "lucide-react";
import React from "react";

const Privacy: React.FC = () => {
  const sections = [
    {
      id: "information-collection",
      icon: UserCheck,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a reservation, contact us, or participate in any of our services. This may include your name, email address, phone number, and any other information you choose to provide."
    },
    {
      id: "information-use", 
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process reservations, communicate with you, and provide customer support. We may also use your information to send you promotional materials and updates about our restaurant."
    },
    {
      id: "information-sharing",
      icon: Shield,
      title: "Information Sharing", 
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business."
    },
    {
      id: "data-security",
      icon: Lock,
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
    }
  ];

  return (
    <Layout title="Privacy Policy - The Golden Spoon">
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/20 to-white min-h-screen">
        <div className="flex flex-col max-w-4xl items-start relative flex-1 grow w-full space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center relative self-stretch w-full space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#ed7f11]/10 rounded-2xl lg:rounded-3xl">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#ed7f11]" />
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                Privacy Policy
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-[#897560]">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Last updated: September 20, 2025</span>
              </div>
            </div>
            
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          <Separator className="bg-stone-200" />

          {/* Content Sections */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 w-full">
            {sections.map((section, index) => (
              <div key={section.id} className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#ed7f11]/10 rounded-xl lg:rounded-2xl flex-shrink-0">
                    <section.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#ed7f11]" />
                  </div>
                  
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                      {section.title}
                    </h2>
                    
                    <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
                
                {index < sections.length - 1 && (
                  <Separator className="bg-stone-100 mt-6 sm:mt-8" />
                )}
              </div>
            ))}
          </div>

          <Separator className="bg-stone-200" />

          {/* Contact Section */}
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 p-6 sm:p-8 lg:p-10 bg-stone-50 rounded-2xl lg:rounded-3xl">
            <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
              Questions About This Policy?
            </h2>
            
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed max-w-2xl">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@goldenspoon.com" className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors">
                privacy@goldenspoon.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+15551234567" className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors">
                (555) 123-4567
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Privacy;
