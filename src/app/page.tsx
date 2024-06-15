"use client";

import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { About } from "@/components/landing-page/About";
import { CTA } from "@/components/landing-page/Cta";
import { FAQS } from "@/components/landing-page/FAQS";
import { Features } from "@/components/landing-page/Features";
import LandingPageFooter from "@/components/landing-page/Footer";
import { Hero } from "@/components/landing-page/Hero";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Navbar } from "@/components/landing-page/Navbar";
import { ScrollToTop } from "@/components/landing-page/ScrollToTop";
import { Services } from "@/components/landing-page/Services";
import { Sponsors } from "@/components/landing-page/Sponsors";
import { Team } from "@/components/landing-page/Team";
import { Testimonials } from "@/components/landing-page/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
    <Navbar />
    <Hero />
    <Sponsors />
    <About />
    <HowItWorks />
    <Features />
    <Services />
    <CTA />
    <Testimonials />
    <Team />
    <FAQS />
    <LandingPageFooter />
    <ScrollToTop />
  </div>
  );
}
