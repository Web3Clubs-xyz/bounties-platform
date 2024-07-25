// Styles
import "degen/styles";
// import 'styles/tailwind.css'
import '../styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
// Fonts
import { Lexend } from "next/font/google";
import { SessionProvider, useSession } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import posthog from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { SolanaWalletProvider } from "@/context/SolanaWallet";
import { userStore } from "@/store/user";
import { getURL } from "@/utils/validUrl";
import ClientOnly from "@/lib/ClientOnly";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

// importing localFont from a local file as Google imported fonts do not enable font-feature-settings. Reference: https://github.com/vercel/next.js/discussions/52456

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    debug: false,
    api_host: `${getURL()}ingest`,
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  });
  posthog.debug(false);
}

function MyApp({ Component, pageProps }: any) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { setUserInfo, setIsLoggedIn } = userStore();

  const posthog = usePostHog();

  const newLoginState = router.query.loginState;
  if (newLoginState == 'signedIn' && session) {
    posthog.identify(session.user.email);
    const url = new URL(window.location.href);
    url.searchParams.delete('loginState');
    window.history.replaceState(null, '', url.href);
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (status === 'authenticated') {
        try {
          const res = await axios.get('/api/user');
          setIsLoggedIn(true);
          setUserInfo(res.data);
        } catch (error) {
          console.log('Failed to fetch user info:', error);
        }
      }
    };

    fetchUserInfo();
  }, [session, status]);

  return (
    <>
      <NextTopLoader color={'#6366F1'} showSpinner={false} />
      <Component {...pageProps} key={router.asPath} />
      <Toaster position="bottom-center" />
    </>
  );
}

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SolanaWalletProvider>
        <PostHogProvider client={posthog}>
          <SessionProvider session={session}>
            <ChakraProvider>
              <ClientOnly>
                <MyApp Component={Component} pageProps={pageProps} />
              </ClientOnly>
            </ChakraProvider>
          </SessionProvider>
        </PostHogProvider>
      </SolanaWalletProvider>
    </>
  );
}

export default App;
