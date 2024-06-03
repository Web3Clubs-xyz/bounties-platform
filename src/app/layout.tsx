import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ClientOnly from "@/components/common/client_only";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3Clubs Bounties",
  description:
    "Bounties and projects for freelancers and developers in the Web3 space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <ClientOnly>
          <Toaster />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
