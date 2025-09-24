import { Head } from "@inertiajs/react";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = "The Golden Spoon",
  description = "Experience the art of dining with our exquisite dishes and elegant ambiance.",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ed7f11" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      
      <div className="flex flex-col items-start relative bg-white min-h-screen overflow-x-hidden">
        <div className="flex flex-col min-h-screen items-start relative self-stretch w-full flex-[0_0_auto] bg-white">
          <Header />
          <main className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
