import { Layout } from "@/components/Layout/Layout";
import { DishCard } from "@/components/Menu/DishCard";
import { Category } from "@/types/DishTypes";
import React from "react";

interface MenuProps {
  categories: Category[];
}

const Menu: React.FC<MenuProps> = ({ categories }) => {
  return (
    <Layout title="Menu - The Golden Spoon">
      <main className="items-start justify-center px-4 md:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
          <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col min-w-72 items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex flex-col w-full items-start relative flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[32px] tracking-[0] leading-10">
                  Our Menu
                </h1>
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px]">
                  Explore our diverse menu, featuring dishes crafted with the freshest ingredients and inspired by global flavors.
                </p>
              </div>
            </div>
          </div>

          {categories.map((category, sectionIndex) => (
            <section key={category.id} id={category.slug} className="w-full">
              <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
                  {category.name}
                </h2>
              </div>

              {category.dishes?.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Menu;
