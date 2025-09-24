import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/types/ContactTypes";
import { useForm } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
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
    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
      <CardContent className="p-6 sm:p-8 lg:p-10 w-full">
        <div className="space-y-6 sm:space-y-8">
          {/* Form Header */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#ed7f11]/10 rounded-xl">
                <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-[#ed7f11]" />
              </div>
              <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                Send us a Message
              </h3>
            </div>
            
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="name" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm sm:text-base flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className={`h-11 sm:h-12 lg:h-14 px-4 py-3 bg-white rounded-xl border-2 transition-all focus:ring-2 focus:ring-[#ed7f11]/20 ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-stone-200 focus:border-[#ed7f11] hover:border-stone-300'
                  }`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && (
                  <span className="text-red-500 text-xs sm:text-sm font-medium">{errors.name}</span>
                )}
              </div>

              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="email" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm sm:text-base flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className={`h-11 sm:h-12 lg:h-14 px-4 py-3 bg-white rounded-xl border-2 transition-all focus:ring-2 focus:ring-[#ed7f11]/20 ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-stone-200 focus:border-[#ed7f11] hover:border-stone-300'
                  }`}
                  placeholder="Enter your email address"
                  required
                />
                {errors.email && (
                  <span className="text-red-500 text-xs sm:text-sm font-medium">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="phone" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm sm:text-base flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                className={`h-11 sm:h-12 lg:h-14 px-4 py-3 bg-white rounded-xl border-2 transition-all focus:ring-2 focus:ring-[#ed7f11]/20 ${
                  errors.phone 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-stone-200 focus:border-[#ed7f11] hover:border-stone-300'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs sm:text-sm font-medium">{errors.phone}</span>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="message" className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm sm:text-base flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message *
              </Label>
              <Textarea
                id="message"
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                rows={6}
                className={`min-h-32 px-4 py-3 bg-white rounded-xl border-2 transition-all focus:ring-2 focus:ring-[#ed7f11]/20 resize-none ${
                  errors.message 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-stone-200 focus:border-[#ed7f11] hover:border-stone-300'
                }`}
                placeholder="Tell us how we can help you..."
                required
              />
              {errors.message && (
                <span className="text-red-500 text-xs sm:text-sm font-medium">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={processing}
              className="group w-full sm:w-auto inline-flex min-w-[160px] h-12 sm:h-14 lg:h-16 items-center justify-center px-8 lg:px-10 bg-[#ed7f11] hover:bg-[#d16d0a] text-[#161411] font-bold text-base sm:text-lg rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:translate-x-0.5 transition-transform" />
              <span className="[font-family:'Epilogue-Bold',Helvetica]">
                {processing ? 'Sending...' : 'Send Message'}
              </span>
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
