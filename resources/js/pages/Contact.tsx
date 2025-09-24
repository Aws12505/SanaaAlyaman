import { Layout } from "@/components/Layout/Layout";
import { ContactForm } from "@/components/Contact/ContactForm";
import { LocationMap } from "@/components/Contact/LocationMap";
import { TestimonialCard } from "@/components/Contact/TestimonialCard";
import { Testimonial } from "@/types/TestimonialTypes";
import { usePage } from "@inertiajs/react";
import { AlertCircle, CheckCircle } from "lucide-react";
import React from "react";

interface ContactProps {
  testimonials: Testimonial[];
}

const Contact: React.FC<ContactProps> = ({ testimonials }) => {
  const { flash } = usePage().props as any;

  return (
    <Layout title="Contact Us - The Golden Spoon">
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/20 to-white min-h-screen">
        <div className="flex flex-col max-w-7xl items-center relative flex-1 grow w-full space-y-10 sm:space-y-12 lg:space-y-16">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center relative self-stretch w-full space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                Contact Us
              </h1>
              
              <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                We'd love to hear from you. Get in touch with us for reservations, inquiries, or just to say hello.
              </p>
            </div>
          </div>

          {/* Flash Messages */}
          {flash?.success && (
            <div className="flex items-center p-4 sm:p-6 text-sm sm:text-base text-green-800 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl shadow-lg w-full max-w-2xl mx-auto" role="alert">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 flex-shrink-0" />
              <span className="sr-only">Success</span>
              <div className="font-medium">{flash.success}</div>
            </div>
          )}

          {flash?.error && (
            <div className="flex items-center p-4 sm:p-6 text-sm sm:text-base text-red-800 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl shadow-lg w-full max-w-2xl mx-auto" role="alert">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-3 flex-shrink-0" />
              <span className="sr-only">Error</span>
              <div className="font-medium">{flash.error}</div>
            </div>
          )}

          {/* Contact Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full max-w-6xl">
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>
            <div className="order-1 lg:order-2">
              <LocationMap />
            </div>
          </div>

          {/* Testimonials */}
          {testimonials.length > 0 && (
            <section className="flex flex-col items-center relative self-stretch w-full space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
                  What Our Guests Say
                </h2>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                  Hear from our valued customers about their dining experiences
                </p>
              </div>

              <div className="w-full">
                {/* Mobile: Horizontal scroll */}
                <div className="block lg:hidden w-full overflow-x-auto scrollbar-hide">
                  <div className="inline-flex items-start gap-4 sm:gap-6 pb-4 px-4 sm:px-6">
                    {testimonials.map((testimonial) => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                  </div>
                  
                  {/* Mobile scroll indicator */}
                  <div className="flex justify-center mt-4 sm:mt-6">
                    <div className="flex items-center gap-2 bg-stone-100 rounded-full px-3 py-1.5">
                      <div className="w-1.5 h-1.5 bg-[#ed7f11] rounded-full animate-pulse" />
                      <span className="text-xs text-[#897560] font-medium">Swipe to read more</span>
                    </div>
                  </div>
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8 px-4">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
