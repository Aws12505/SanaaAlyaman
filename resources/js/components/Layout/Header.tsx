import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@inertiajs/react";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="items-center justify-between px-4 md:px-10 py-3 flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e8ea] flex relative self-stretch w-full">
      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="relative flex-1 w-4 grow">
            <UtensilsCrossed className="absolute top-px left-0.5 w-3 h-[13px]" />
          </div>
        </div>

        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <Link href="/" className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg tracking-[0] leading-[23px] whitespace-nowrap">
            The Golden Spoon
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-[#161411]" />
        ) : (
          <Menu className="w-5 h-5 text-[#161411]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-start justify-end gap-8 relative flex-1 grow">
        <NavigationMenu>
          <NavigationMenuList className="inline-flex h-10 items-center gap-9 relative flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="inline-flex flex-col items-start relative flex-[0_0_auto]"
              >
                <NavigationMenuLink
                  asChild
                  className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#ed7f11] transition-colors"
                >
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="inline-flex min-w-[84px] max-w-[480px] h-10 items-center justify-center px-4 py-0 relative flex-[0_0_auto] bg-[#ed7f11] rounded-lg overflow-hidden hover:bg-[#d66d0a] transition-colors">
          <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
              Order Now
            </div>
          </div>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e5e8ea] shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4 gap-4">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm tracking-[0] leading-[21px] hover:text-[#ed7f11] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="inline-flex min-w-[84px] h-10 items-center justify-center px-4 py-0 bg-[#ed7f11] rounded-lg overflow-hidden hover:bg-[#d66d0a] transition-colors mt-2">
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                  Order Now
                </div>
              </div>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
