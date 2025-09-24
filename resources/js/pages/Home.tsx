import { FeaturedCategories } from "@/components/Home/FeaturedCategories";
import { HeroSection } from "@/components/Home/HeroSection";
import { PhotoGallery } from "@/components/Home/PhotoGallery";
import { SignatureDishes } from "@/components/Home/SignatureDishes";
import { Layout } from "@/components/Layout/Layout";
import { Category, Dish } from "@/types/DishTypes";
import React from "react";

interface HomeProps {
  featuredCategories: Category[];
  signatureDishes: Dish[];
}

const Home: React.FC<HomeProps> = ({ featuredCategories, signatureDishes }) => {
  return (
    <Layout title="Home - The Golden Spoon">
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/30 to-white">
        <div className="flex flex-col max-w-7xl items-center relative flex-1 grow space-y-8 sm:space-y-12 lg:space-y-16 xl:space-y-20 w-full">
          <HeroSection />
          <FeaturedCategories categories={featuredCategories} />
          <SignatureDishes dishes={signatureDishes} />
          <PhotoGallery />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
