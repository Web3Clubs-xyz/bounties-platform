"use client";

import { SessionProvider, useSession } from "next-auth/react";
import ClientOnly from "./client_only";

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
