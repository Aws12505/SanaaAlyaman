import { Layout } from "@/components/Layout/Layout";
import { ContactForm } from "@/components/Contact/ContactForm";
import { TestimonialCard } from "@/components/Contact/TestimonialCard";
import { Testimonial } from "@/types/TestimonialTypes";
import { usePage } from "@inertiajs/react";
import React from "react";

interface ContactProps {
  testimonials: Testimonial[];
}

const Contact: React.FC<ContactProps> = ({ testimonials }) => {
  const { flash } = usePage().props as any;

  return (
    <Layout title="Contact Us - The Golden Spoon">
      <main className="items-start justify-center px-4 md:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
          
          {/* Header Section */}
          <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col min-w-72 items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-full items-start relative flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[32px] tracking-[0] leading-10">
                  Contact Us
                </h1>
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  We'd love to hear from you. Get in touch with us for reservations, inquiries, or just to say hello.
                </p>
              </div>
            </div>
          </div>

          {/* Flash Messages */}
          {flash?.success && (
            <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 mx-4" role="alert">
              <span className="sr-only">Success</span>
              <div>{flash.success}</div>
            </div>
          )}

          {flash?.error && (
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 mx-4" role="alert">
              <span className="sr-only">Error</span>
              <div>{flash.error}</div>
            </div>
          )}

          {/* Contact Form Section */}
          <section className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto]">
            <ContactForm />
          </section>

          {/* Contact Information */}
          <section className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex flex-col items-start gap-2 flex-1">
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base tracking-[0] leading-6">
                  Address
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  123 Main Street<br />
                  Anytown, USA 12345
                </p>
              </div>
              
              <div className="flex flex-col items-start gap-2 flex-1">
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base tracking-[0] leading-6">
                  Phone
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  (555) 123-4567
                </p>
              </div>
              
              <div className="flex flex-col items-start gap-2 flex-1">
                <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base tracking-[0] leading-6">
                  Hours
                </h3>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  Mon-Fri: 11:00 AM - 10:00 PM<br />
                  Sat-Sun: 10:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          {testimonials.length > 0 && (
            <>
              <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                  What Our Guests Say
                </h2>
              </section>

              <section className="flex items-start self-stretch w-full relative flex-[0_0_auto] overflow-x-auto">
                <div className="inline-flex items-start gap-3 p-4 relative flex-[0_0_auto] min-w-full">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </section>
            </>
          )}

        </div>
      </main>
    </Layout>
  );
};

export default Contact;
