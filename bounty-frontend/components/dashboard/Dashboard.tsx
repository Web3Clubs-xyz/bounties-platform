"use client";

import Navbar from "@/layout/Navbar";


export default function DashboardComponent() {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-gradient-to-r from-[#6366F1] to-[#AD56F1] pb-32">
          <Navbar />
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Dashboard
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
  );
}
