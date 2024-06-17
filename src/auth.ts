import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

import { kashEmail, OTPTemplate, resend } from "@/features/emails";
import { prismaDb } from "@/prisma";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  debug: true,
  adapter: PrismaAdapter(prismaDb) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          scope: 'openid email profile',  // Requesting access to user's identity, email, and profile information
          response_type: 'code',           // Expecting an authorization code in response
          access_type: 'offline',          // Requesting a refresh token
          prompt: 'consent',               // Force user to consent to the requested scopes
          code_challenge_method: 'S256',   // Using SHA-256 for PKCE code challenge
        },
      },
      profile(profile) {
        return {
          id: Number(profile.sub),
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          emailVerified: profile.emailVerified,
          photo: profile.picture,
        } as any;
      },
    }),
    EmailProvider({
      async generateVerificationToken() {
        const digits = "0123456789";
        let verificationCode = "";
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * digits.length);
          verificationCode += digits.charAt(randomIndex);
        }
        return verificationCode;
      },
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.RESEND_API_KEY,
        },
      },
      from: process.env.RESEND_EMAIL,
      sendVerificationRequest: async ({ identifier, token }) => {
        await resend.emails.send({
          from: kashEmail,
          to: [identifier],
          subject: "Log in to  Web3Clubs Bounties",
          react: OTPTemplate({ token }),
        });
      },
      maxAge: 30 * 60,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user, ...account };
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.photo = token.photo;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.token = token.access_token;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    verifyRequest: "/verify-request",
    newUser: "/api/auth/new-user",
  },
});