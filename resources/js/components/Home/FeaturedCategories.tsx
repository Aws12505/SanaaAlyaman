import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import React from "react";

interface FeaturedCategoriesProps {
  categories: Category[];
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ categories }) => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="flex flex-col items-start relative self-stretch w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-4">
          <div className="flex-1">
            <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
              Featured Categories
            </h2>
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed mt-1 sm:mt-2">
              Discover our carefully curated selection of culinary delights
            </p>
          </div>
          
          <Link 
            href="/menu" 
            className="group flex items-center gap-2 text-[#ed7f11] hover:text-[#d16d0a] transition-colors self-start sm:self-center"
          >
            <span className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-sm sm:text-base">
              View All
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Mobile: Horizontal Scroll, Desktop: Grid */}
      <section className="flex items-start self-stretch w-full relative flex-[0_0_auto]">
        {/* Mobile & Tablet: Horizontal scroll */}
        <div className="block lg:hidden w-full overflow-x-auto scrollbar-hide">
          <div className="inline-flex items-start gap-4 sm:gap-6 pb-4 min-w-full">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/menu#${category.slug}`}>
                <Card className="group flex flex-col w-60 sm:w-72 items-start relative flex-shrink-0 rounded-xl sm:rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg overflow-hidden bg-white">
                  <CardContent className="p-0 w-full">
                    {category.image && (
                      <div className="relative overflow-hidden">
                        <div
                          className="h-40 sm:h-48 rounded-t-xl sm:rounded-t-2xl bg-cover bg-center relative self-stretch w-full group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${category.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}

                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-4 sm:p-6">
                      <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base sm:text-lg tracking-tight leading-6 group-hover:text-[#ed7f11] transition-colors">
                        {category.name}
                      </h3>
                      <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-xs sm:text-sm leading-5 mt-1">
                        Explore our selection
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8 w-full">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/menu#${category.slug}`}>
              <Card className="group flex flex-col items-start relative rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg overflow-hidden bg-white h-full">
                <CardContent className="p-0 w-full h-full flex flex-col">
                  {category.image && (
                    <div className="relative overflow-hidden flex-1">
                      <div
                        className="h-48 xl:h-56 2xl:h-64 rounded-t-2xl bg-cover bg-center relative self-stretch w-full group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}

                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-6 xl:p-8">
                    <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg xl:text-xl tracking-tight leading-6 group-hover:text-[#ed7f11] transition-colors">
                      {category.name}
                    </h3>
                    <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm xl:text-base leading-5 mt-2">
                      Explore our selection
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};
