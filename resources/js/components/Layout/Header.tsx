import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@inertiajs/react";
import { UtensilsCrossed, Menu, X, Phone } from "lucide-react";
import React, { useState, useEffect } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className={`sticky top-0 z-50 items-center justify-between px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-3 sm:py-4 lg:py-5 flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e8ea] flex relative self-stretch w-full bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ${
      isScrolled ? 'shadow-lg bg-white/98' : ''
    }`}>
      <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-5 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto] p-2 sm:p-2.5 lg:p-3 bg-[#ed7f11] rounded-lg sm:rounded-xl transition-transform hover:scale-105">
          <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#161411]" />
        </div>

        <Link href="/" className="inline-flex flex-col items-start relative flex-[0_0_auto] group">
          <span className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base sm:text-lg lg:text-xl xl:text-2xl tracking-tight leading-6 whitespace-nowrap group-hover:text-[#ed7f11] transition-colors">
            The Golden Spoon
          </span>
          <span className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-xs sm:text-sm lg:text-base tracking-wide">
            FINE DINING
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 sm:p-3 hover:bg-stone-100 rounded-lg sm:rounded-xl transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#161411]" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#161411]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 2xl:gap-10 relative flex-1 grow">
        <NavigationMenu>
          <NavigationMenuList className="inline-flex h-10 xl:h-12 items-center gap-6 xl:gap-8 2xl:gap-10 relative flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="inline-flex flex-col items-start relative flex-[0_0_auto]"
              >
                <NavigationMenuLink
                  asChild
                  className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm lg:text-base xl:text-lg tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#ed7f11] transition-colors py-2 lg:py-3 px-2 lg:px-3 rounded-lg hover:bg-[#ed7f11]/5"
                >
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 lg:gap-4 xl:gap-5">

          <Button className="inline-flex min-w-[100px] lg:min-w-[120px] xl:min-w-[140px] h-10 lg:h-11 xl:h-12 2xl:h-14 items-center justify-center px-4 lg:px-6 xl:px-8 py-0 relative flex-[0_0_auto] bg-[#ed7f11] hover:bg-[#d16d0a] rounded-lg xl:rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
            <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm lg:text-base xl:text-lg text-center tracking-[0] leading-[21px] whitespace-nowrap">
              Order Now
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-[#e5e8ea] shadow-xl lg:hidden z-50">
          <div className="flex flex-col p-4 sm:p-6 gap-4 sm:gap-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-base sm:text-lg tracking-[0] leading-6 hover:text-[#ed7f11] transition-colors py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-[#ed7f11]/5 border border-transparent hover:border-[#ed7f11]/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#e5e8ea]">
              
              <Button className="inline-flex h-11 sm:h-12 items-center justify-center px-6 sm:px-8 py-0 bg-[#ed7f11] hover:bg-[#d16d0a] rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
                <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm sm:text-base">
                  Order Now
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
