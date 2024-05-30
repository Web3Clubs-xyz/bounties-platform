import type { Metadata } from "next";
import Nav from "@/components/common/nav/nav";
import { Lexend } from "next/font/google";
import SideBar from "@/components/common/sidebar/sidebar";


export const metadata: Metadata = {
  title: "Bounties",
  description: "Bounties for freelancers and developers in the Web3 space.",
};

const lexend = Lexend({ subsets: ["latin"] });


export default function PartnersPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={lexend.className}>
        <div className="min-h-full">
          <div className="   pb-32">
            <SideBar>{children}</SideBar>
          </div>
        </div>
      </body>
    </html>
  );
}
