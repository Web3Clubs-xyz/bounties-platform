import type { Metadata } from "next";
import Nav from "@/components/common/nav/nav";
import { Lexend } from "next/font/google";
import Footer from "@/components/common/footer/footer";
import Stats from "@/components/common/stats/stats";
import { AppLayout } from "@/layout/app_layout";

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
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
