"use client";

import { SessionProvider, useSession } from "next-auth/react";
import ClientOnly from "./client_only";
import { ThemeProvider } from "@/context/theme-provider";

interface Props {
  children: React.ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
       <ClientOnly>{children}</ClientOnly>
    </SessionProvider>
  );
};

export default Providers;
