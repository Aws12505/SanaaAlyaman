import { Layout } from "@/components/Layout/Layout";
import { DishCard } from "@/components/Menu/DishCard";
import { Category } from "@/types/DishTypes";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

interface MenuProps {
  categories: Category[];
}

const Menu: React.FC<MenuProps> = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter categories and dishes based on search term
  const filteredCategories = categories.map(category => ({
    ...category,
    dishes: category.dishes?.filter(dish => 
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []
  })).filter(category => 
    !selectedCategory || category.slug === selectedCategory
  ).filter(category => 
    category.dishes.length > 0
  );

  // Get total dishes count
  const totalDishes = categories.reduce((total, category) => 
    total + (category.dishes?.length || 0), 0
  );

  const filteredDishesCount = filteredCategories.reduce((total, category) => 
    total + category.dishes.length, 0
  );

  return (
    <Layout title="Menu - The Golden Spoon">
      <main className="flex items-start justify-center px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 lg:py-12 flex-1 grow relative self-stretch w-full bg-gradient-to-b from-white via-stone-50/20 to-white min-h-screen">
        <div className="flex flex-col max-w-7xl items-start relative flex-1 grow w-full space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start relative self-stretch w-full space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4 lg:gap-8">
              <div className="flex-1 space-y-2 sm:space-y-3 lg:space-y-4 text-center lg:text-left">
                <h1 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                  Our Menu
                </h1>
                <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Explore our diverse menu, featuring {totalDishes} dishes crafted with the freshest ingredients and inspired by global flavors.
                </p>
              </div>

              {/* View Mode Toggle (Desktop Only) */}
              <div className="hidden lg:flex items-center gap-2 bg-stone-100 rounded-xl p-1">
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-white shadow-sm text-[#161411]' 
                      : 'text-[#897560] hover:text-[#161411]'
                  }`}
                >
                  <List className="w-4 h-4 mr-2" />
                  List
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white shadow-sm text-[#161411]' 
                      : 'text-[#897560] hover:text-[#161411]'
                  }`}
                >
                  <Grid className="w-4 h-4 mr-2" />
                  Grid
                </Button>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center lg:justify-start">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#897560]" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-stone-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ed7f11]/20 focus:border-[#ed7f11] transition-all text-sm sm:text-base"
                />
              </div>

              {/* Filter Button */}
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 border border-stone-200 rounded-xl sm:rounded-2xl hover:bg-stone-50 transition-all text-sm sm:text-base min-w-[100px] sm:min-w-[120px] mx-auto sm:mx-0"
              >
                <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                Filter
              </Button>
            </div>

            {/* Category Filter Pills */}
            {isFilterOpen && (
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full justify-center lg:justify-start">
                <Button
                  variant={!selectedCategory ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${
                    !selectedCategory 
                      ? 'bg-[#ed7f11] text-[#161411] hover:bg-[#d16d0a]' 
                      : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.slug ? null : category.slug
                    )}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${
                      selectedCategory === category.slug 
                        ? 'bg-[#ed7f11] text-[#161411] hover:bg-[#d16d0a]' 
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    {category.name}
                    {category.dishes && (
                      <span className="ml-1 text-xs opacity-70">
                        ({category.dishes.length})
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            )}

            {/* Results Count */}
            {(searchTerm || selectedCategory) && (
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#897560] w-full">
                <span>
                  Showing {filteredDishesCount} of {totalDishes} dishes
                </span>
                {(searchTerm || selectedCategory) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                    }}
                    className="text-[#ed7f11] hover:text-[#d16d0a] text-xs px-2 py-1 h-auto"
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Menu Categories */}
          {filteredCategories.length > 0 ? (
            <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 w-full">
              {filteredCategories.map((category, sectionIndex) => (
                <section key={category.id} id={category.slug} className="w-full">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 text-center sm:text-left">
                    <div className="flex-1">
                      <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                        {category.name}
                      </h2>
                      {category.description && (
                        <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed mt-1 sm:mt-2 max-w-2xl mx-auto sm:mx-0">
                          {category.description}
                        </p>
                      )}
                    </div>
                    <div className="text-sm sm:text-base text-[#897560] bg-stone-100 px-3 py-1 rounded-full mx-auto sm:mx-0 w-fit">
                      {category.dishes.length} {category.dishes.length === 1 ? 'dish' : 'dishes'}
                    </div>
                  </div>

                  {/* Dishes Grid/List */}
                  <div className={`
                    ${viewMode === 'grid' 
                      ? 'hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8' 
                      : 'flex flex-col gap-4 sm:gap-6 lg:gap-8'
                    }
                  `}>
                    {category.dishes.map((dish) => (
                      <DishCard key={dish.id} dish={dish} viewMode={viewMode} />
                    ))}
                  </div>

                  {/* Mobile always shows list view */}
                  <div className={`lg:hidden flex flex-col gap-4 sm:gap-6`}>
                    {category.dishes.map((dish) => (
                      <DishCard key={dish.id} dish={dish} viewMode="list" />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 text-center w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-stone-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#897560]" />
              </div>
              <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
                No dishes found
              </h3>
              <p className="[font-family:'Epilogue-Regular',Helvetica] text-[#897560] text-sm sm:text-base lg:text-lg max-w-md">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
                className="mt-4 sm:mt-6 bg-[#ed7f11] hover:bg-[#d16d0a] text-[#161411] px-6 py-2 rounded-xl"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Menu;
