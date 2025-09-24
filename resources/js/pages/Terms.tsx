import { Layout } from "@/components/Layout/Layout";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, CreditCard, Users, Shield, Clock } from "lucide-react";
import React from "react";

const Terms: React.FC = () => {
  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: "Acceptance of Terms",
      content: "By accessing and using The Golden Spoon website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      id: "reservations",
      icon: Calendar,
      title: "Reservations and Cancellations",
      content: "Reservations are subject to availability and restaurant policies. We require at least 2 hours notice for cancellations. No-shows or late cancellations may result in charges or restrictions on future reservations."
    },
    {
      id: "payment",
      icon: CreditCard,
      title: "Payment Terms",
      content: "Payment is due at the time of service. We accept cash and major credit cards. Gratuity is not included in menu prices and is at your discretion. A service charge may be added for parties of 6 or more."
    },
    {
      id: "conduct",
      icon: Users,
      title: "Conduct and Behavior",
      content: "We reserve the right to refuse service to anyone who behaves inappropriately, disrupts other guests, or violates our policies. This includes but is not limited to inappropriate dress, excessive noise, or intoxication."
    },
    {
      id: "liability",
      icon: Shield,
      title: "Limitation of Liability",
      content: "The Golden Spoon shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any errors or omissions in our content."
    }
  ];

  return (
    <Layout title="Terms of Service - The Golden Spoon">
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/20 to-white min-h-screen">
        <div className="flex flex-col max-w-4xl items-start relative flex-1 grow w-full space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center relative self-stretch w-full space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#ed7f11]/10 rounded-2xl lg:rounded-3xl">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#ed7f11]" />
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                Terms of Service
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-[#897560]">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Last updated: September 20, 2025</span>
              </div>
            </div>
            
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Please read these terms carefully before using our services. These terms govern your relationship with The Golden Spoon.
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
              Need Help or Have Questions?
            </h2>
            
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg leading-relaxed max-w-2xl">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@goldenspoon.com" className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors">
                legal@goldenspoon.com
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

export default Terms;
