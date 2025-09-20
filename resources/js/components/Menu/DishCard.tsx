import { Card, CardContent } from "@/components/ui/card";
import { Dish } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import React from "react";

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <Link href={`/dish/${dish.slug}`}>
      <Card className="flex flex-col items-start p-4 self-stretch w-full relative flex-[0_0_auto] border-0 shadow-none hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] rounded-lg p-0 flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-[608px] items-start gap-1 relative">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base tracking-[0] leading-5">
                {dish.name}
              </h3>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                {dish.description}
              </p>
            </div>

            <div className="mt-2">
              <span className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#ed7f11] text-lg">
                ${dish.price}
              </span>
            </div>
          </div>

          {dish.main_image && (
            <div
              className="flex-1 md:flex-none md:w-[171px] rounded-lg bg-cover bg-[50%_50%] h-[200px] md:h-[171px] relative"
              style={{ backgroundImage: `url(${dish.main_image})` }}
            />
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
