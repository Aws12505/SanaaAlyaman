import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/types/ContactTypes";
import { useForm } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const ContactForm: React.FC = () => {
  const { data, setData, post, processing, errors, reset } = useForm<ContactFormData>({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      onSuccess: () => reset(),
    });
  };

  return (
    <Card className="flex flex-col items-start relative flex-1 grow rounded-lg">
      <CardContent className="p-6 w-full">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg tracking-[0] leading-[23px]">
            Send us a Message
          </h3>
          
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex flex-col items-start gap-2 relative flex-1">
                <Label htmlFor="name" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm tracking-[0] leading-[21px]">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className={`h-10 px-3 py-2 bg-white rounded-lg border ${errors.name ? 'border-red-500' : 'border-[#e5e8ea]'} focus:border-[#ed7f11] focus:ring-[#ed7f11]`}
                  required
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col items-start gap-2 relative flex-1">
                <Label htmlFor="email" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm tracking-[0] leading-[21px]">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className={`h-10 px-3 py-2 bg-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#e5e8ea]'} focus:border-[#ed7f11] focus:ring-[#ed7f11]`}
                  required
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <Label htmlFor="phone" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm tracking-[0] leading-[21px]">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                className={`h-10 px-3 py-2 bg-white rounded-lg border ${errors.phone ? 'border-red-500' : 'border-[#e5e8ea]'} focus:border-[#ed7f11] focus:ring-[#ed7f11]`}
              />
              {errors.phone && (
                <span className="text-red-500 text-xs">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <Label htmlFor="message" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm tracking-[0] leading-[21px]">
                Message *
              </Label>
              <Textarea
                id="message"
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                rows={6}
                className={`min-h-32 px-3 py-2 bg-white rounded-lg border ${errors.message ? 'border-red-500' : 'border-[#e5e8ea]'} focus:border-[#ed7f11] focus:ring-[#ed7f11]`}
                placeholder="Tell us how we can help you..."
                required
              />
              {errors.message && (
                <span className="text-red-500 text-xs">{errors.message}</span>
              )}
            </div>

            <Button
              type="submit"
              disabled={processing}
              className="inline-flex min-w-[84px] max-w-[480px] h-10 items-center justify-center px-4 py-0 relative flex-[0_0_auto] bg-[#ed7f11] rounded-lg overflow-hidden hover:bg-[#d16d0a] transition-colors disabled:opacity-50"
            >
              <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                  {processing ? 'Sending...' : 'Send Message'}
                </div>
              </div>
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
