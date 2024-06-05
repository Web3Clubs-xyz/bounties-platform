"use client";

import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <div className=" min-h-full">
        <div className="bg-gradient-to-r from-[#6366F1] to-[#A551F9] pb-32">
          <Nav />
          <header className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Your content */}

            {children}
          </div>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
