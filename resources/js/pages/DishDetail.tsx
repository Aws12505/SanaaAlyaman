import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/Layout/Layout";
import { Dish } from "@/types/DishTypes";
import { Link } from "@inertiajs/react";
import { ArrowLeft, Star } from "lucide-react";
import React, { useState } from "react";

interface DishDetailProps {
  dish: Dish;
}

const DishDetail: React.FC<DishDetailProps> = ({ dish }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <Layout title={`${dish.name} - The Golden Spoon`}>
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#897560] hover:text-[#ed7f11] p-0 h-auto font-normal"
              asChild
            >
              <Link href="/menu">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Menu
              </Link>
            </Button>
            <span className="text-[#897560]">/</span>
            <span className="text-[#897560]">{dish.category.name}</span>
            <span className="text-[#897560]">/</span>
            <span className="text-[#161411] font-medium">{dish.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              {dish.images && dish.images.length > 0 && (
                <>
                  <div className="mb-4">
                    <div
                      className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                      style={{ backgroundImage: `url(${dish.images[selectedImageIndex]})` }}
                    />
                  </div>
                  
                  {dish.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {dish.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`h-20 bg-cover bg-center rounded border-2 transition-colors ${
                            selectedImageIndex === index
                              ? "border-[#ed7f11]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          style={{ backgroundImage: `url(${image})` }}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {dish.is_signature && (
                  <div className="flex items-center gap-1 bg-[#ed7f11] text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    SIGNATURE
                  </div>
                )}
                <span className="bg-gray-100 text-[#897560] px-3 py-1 rounded-full text-sm font-medium">
                  {dish.category.name}
                </span>
                {!dish.is_available && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    UNAVAILABLE
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#161411] mb-4">
                {dish.name}
              </h1>

              <div className="text-3xl font-bold text-[#ed7f11] mb-6">
                ${dish.price}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#161411] mb-3">Description</h3>
                  <p className="text-[#897560] leading-relaxed">{dish.description}</p>
                </div>

                {dish.ingredients && (
                  <>
                    <Separator className="bg-[#e5e8ea]" />
                    <div>
                      <h3 className="text-lg font-bold text-[#161411] mb-3">Ingredients</h3>
                      <p className="text-[#897560] leading-relaxed">{dish.ingredients}</p>
                    </div>
                  </>
                )}

                {dish.allergen_info && (
                  <>
                    <Separator className="bg-[#e5e8ea]" />
                    <div>
                      <h3 className="text-lg font-bold text-[#161411] mb-3">Allergen Information</h3>
                      <p className="text-[#897560] leading-relaxed">{dish.allergen_info}</p>
                    </div>
                  </>
                )}

                <Separator className="bg-[#e5e8ea]" />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#ed7f11] hover:bg-[#d66d0a] text-white font-bold px-8 py-3 text-lg rounded-lg transition-colors"
                    disabled={!dish.is_available}
                  >
                    {dish.is_available ? "Order Now" : "Currently Unavailable"}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#ed7f11] text-[#ed7f11] hover:bg-[#ed7f11] hover:text-white font-bold px-8 py-3 text-lg rounded-lg transition-all"
                    asChild
                  >
                    <Link href="/contact">Make Reservation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DishDetail;
