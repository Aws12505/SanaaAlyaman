import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialIcons = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="items-start justify-center flex-[0_0_auto] flex relative self-stretch w-full">
      <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow">
        <div className="flex-col gap-6 px-5 py-10 flex-1 grow flex items-start relative self-stretch w-full">
          <nav className="flex flex-wrap items-center justify-between gap-[24px_24px] relative self-stretch w-full flex-[0_0_auto]">
            {footerLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col w-40 items-center relative"
              >
                <Link
                  href={link.href}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base text-center tracking-[0] leading-6 hover:text-[#161411] transition-colors"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          <Separator className="self-stretch w-full relative flex-[0_0_auto]" />

          <div className="items-center self-stretch w-full flex-[0_0_auto] flex flex-col relative gap-4">
            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-[#897560] hover:text-[#897560]/80"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>

            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base text-center tracking-[0] leading-6">
              @2024 The Golden Spoon. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
