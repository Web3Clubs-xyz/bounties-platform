import type { Metadata } from "next";
import Nav from "@/components/common/nav/nav";
import { Lexend } from "next/font/google";
import {} from "@chakra-ui/icons"
import Footer from "@/components/common/footer/footer";

export const metadata: Metadata = {
  title: "Bounties",
  description: "Bounties for freelancers and developers in the Web3 space.",
};

const lexend = Lexend({ subsets: ["latin"] });



export default function MainRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <div className="min-h-full">
          <div className="bg-indigo-600 pb-32">
            <Nav />
            <header className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  {metadata.title as string}
                </h1>
                <div className="py-6">

                </div>
              </div>
            </header>
          </div>

          <main className="-mt-32 ">
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              {/* Your content */}
              <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
                {children}
              </div>
            </div>
          </main>

          <div>
            <Footer/>
          </div>

        </div>
      </body>
    </html>
  );
}
