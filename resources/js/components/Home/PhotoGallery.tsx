import React from "react";

export const PhotoGallery: React.FC = () => {
  return (
    <>
      <section className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-[22px] tracking-[0] leading-7">
          Photo Gallery
        </h2>
      </section>

      <div className="px-4 pb-4 self-stretch w-full">
        <img
          className="self-stretch w-full relative flex-[0_0_auto] rounded-lg"
          alt="Photo Gallery"
          src="/photo-gallery.jpg"
        />
      </div>
    </>
  );
};
