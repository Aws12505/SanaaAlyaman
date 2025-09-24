import React from "react";

// Sample gallery images - replace with your actual images
const galleryImages = [
  { id: 1, src: "/gallery-1.jpg", alt: "Restaurant Interior", caption: "Elegant Dining Experience" },
  { id: 2, src: "/gallery-2.jpg", alt: "Signature Dish", caption: "Our Famous Risotto" },
  { id: 3, src: "/gallery-3.jpg", alt: "Chef at Work", caption: "Culinary Artistry" },
  { id: 4, src: "/gallery-4.jpg", alt: "Wine Selection", caption: "Premium Wine Collection" },
  { id: 5, src: "/gallery-5.jpg", alt: "Dessert Preparation", caption: "Sweet Perfection" },
  { id: 6, src: "/gallery-6.jpg", alt: "Restaurant Ambiance", caption: "Perfect Atmosphere" },
];

export const PhotoGallery: React.FC = () => {
  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="flex flex-col items-start px-3 sm:px-4 lg:px-6 xl:px-8 relative self-stretch w-full">
        <h2 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight">
          Photo Gallery
        </h2>
        <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm sm:text-base lg:text-lg leading-relaxed mt-1 sm:mt-2 lg:mt-3">
          A glimpse into our culinary world
        </p>
      </div>

      {/* Mobile: Horizontal Scroll, Desktop: Grid Layout */}
      <div className="px-3 sm:px-4 lg:px-6 xl:px-8 pb-4 sm:pb-6 lg:pb-8 self-stretch w-full">
        {/* Mobile and Tablet: Horizontal Scroll */}
        <div className="block lg:hidden">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="flex-shrink-0 relative group w-72 sm:w-80 snap-start"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-sm sm:text-base">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="flex items-center gap-2 bg-stone-100 rounded-full px-3 py-1.5">
              <div className="w-1.5 h-1.5 bg-[#ed7f11] rounded-full animate-pulse" />
              <span className="text-xs text-[#897560] font-medium">Swipe to explore</span>
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
            >
              <div className="relative h-64 xl:h-72 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-base xl:text-lg">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
