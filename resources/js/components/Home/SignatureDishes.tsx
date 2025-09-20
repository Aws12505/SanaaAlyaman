import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dish } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import React from "react";

interface SignatureDishesProps {
  dishes: Dish[];
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ dishes }) => {
  return (
    <>
      <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
          Our Signature Dishes
        </h2>
      </section>

      {dishes.map((dish, index) => (
        <section
          key={dish.id}
          className="flex flex-col items-start p-4 self-stretch w-full relative flex-[0_0_auto]"
        >
          <Card className="items-start rounded-lg flex relative self-stretch w-full flex-[0_0_auto]">
            <CardContent className="p-0 flex w-full flex-col md:flex-row">
              {dish.main_image && (
                <div className="relative flex-1 grow h-48 md:h-64 rounded-lg bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${dish.main_image})` }}
                />
              )}

              <div className="flex flex-col min-w-0 md:min-w-72 items-start justify-center gap-1 p-4 relative flex-1 grow">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg tracking-[0] leading-[23px]">
                    {dish.name}
                  </h3>
                </div>

                <div className="flex items-end justify-between flex-[0_0_auto] relative self-stretch w-full flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full md:w-[344px] items-start relative">
                    <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-base tracking-[0] leading-6">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="text-xl font-bold text-[#ed7f11] [font-family:'Epilogue-Bold',Helvetica]">
                      ${dish.price}
                    </span>
                    <Button 
                      asChild
                      className="inline-flex min-w-[84px] max-w-[480px] h-8 items-center justify-center px-4 py-0 relative flex-[0_0_auto] bg-[#ed7f11] rounded-lg overflow-hidden hover:bg-[#d16d0a] transition-colors"
                    >
                      <Link href={`/dish/${dish.slug}`}>
                        <div className="items-center inline-flex flex-col relative flex-[0_0_auto]">
                          <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Medium',Helvetica] font-medium text-[#161411] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                            Learn More
                          </div>
                        </div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </>
  );
};
