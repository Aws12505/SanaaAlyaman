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
      <main className="items-start justify-center px-4 md:px-40 py-5 flex-1 grow flex relative self-stretch w-full">
        <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow mb-[-1.00px]">
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
