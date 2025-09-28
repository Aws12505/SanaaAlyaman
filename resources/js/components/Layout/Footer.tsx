import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialIcons = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="items-start justify-center flex-[0_0_auto] flex relative self-stretch w-full bg-gradient-to-t from-stone-900 to-stone-800 text-white">
      <div className="flex flex-col max-w-7xl items-start relative flex-1 grow w-full">
        <div className="flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 lg:py-12 xl:py-16 flex-1 grow flex items-start relative self-stretch w-full">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full">
            {/* Brand Section */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="p-2 lg:p-3 bg-[#ed7f11] rounded-lg lg:rounded-xl">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 text-[#161411]">🍴</div>
                </div>
                <div>
                  <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-white text-base sm:text-lg lg:text-xl">
                    The Golden Spoon
                  </h3>
                  <p className="text-stone-400 text-xs lg:text-sm tracking-wide">FINE DINING</p>
                </div>
              </div>
              <p className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base leading-relaxed">
                Experience the art of dining with our exquisite dishes and elegant ambiance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <h4 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-white text-base lg:text-lg">
                Contact Us
              </h4>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#ed7f11] mt-1 flex-shrink-0" />
                  <span className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base leading-relaxed">
                    123 Fine Dining Street<br />New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#ed7f11]" />
                  <span className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base">
                    (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#ed7f11]" />
                  <span className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base">
                    hello@goldenspoon.com
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <h4 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-white text-base lg:text-lg">
                Opening Hours
              </h4>
              <div className="space-y-2 lg:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base">Mon - Thu</span>
                  <span className="[font-family:'Epilogue-Medium',Helvetica] text-white text-sm lg:text-base">5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base">Fri - Sat</span>
                  <span className="[font-family:'Epilogue-Medium',Helvetica] text-white text-sm lg:text-base">5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base">Sunday</span>
                  <span className="[font-family:'Epilogue-Medium',Helvetica] text-white text-sm lg:text-base">4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <h4 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-white text-base lg:text-lg">
                Stay Updated
              </h4>
              <p className="[font-family:'Epilogue-Regular',Helvetica] text-stone-300 text-sm lg:text-base">
                Subscribe to our newsletter for special offers and updates.
              </p>
              <Button className="w-full bg-[#ed7f11] hover:bg-[#d16d0a] text-[#161411] rounded-lg lg:rounded-xl transition-colors h-10 lg:h-11">
                <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-sm lg:text-base">
                  Subscribe
                </span>
              </Button>
            </div>
          </div>

          <Separator className="self-stretch w-full bg-stone-700" />

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-stone-300 text-sm lg:text-base hover:text-[#ed7f11] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social & Copyright */}
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                {socialIcons.map((social, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 lg:h-11 lg:w-11 text-stone-400 hover:text-[#ed7f11] hover:bg-[#ed7f11]/10 rounded-lg lg:rounded-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="text-center lg:text-right">
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-stone-400 text-sm lg:text-base">
                  © 2024 The Golden Spoon. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
