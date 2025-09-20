import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import React from "react";

interface FeaturedCategoriesProps {
  categories: Category[];
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ categories }) => {
  return (
    <>
      <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
          Featured Categories
        </h2>
      </section>

      <section className="flex items-start self-stretch w-full relative flex-[0_0_auto] overflow-x-auto">
        <div className="inline-flex items-start gap-3 p-4 relative flex-[0_0_auto] min-w-full">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/menu#${category.slug}`}>
              <Card className="flex flex-col min-w-[240px] w-60 items-start gap-4 relative flex-1 self-stretch grow rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0 w-full">
                  {category.image && (
                    <div
                      className="h-60 rounded-lg bg-cover bg-[50%_50%] relative self-stretch w-full"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                  )}

                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-4">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-base tracking-[0] leading-6">
                      {category.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
