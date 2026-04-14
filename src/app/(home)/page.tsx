import type { Metadata } from "next";

import { Navbar } from "./_components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { ServiceSection } from "./_components/ServiceSection";
import { CaseSturdySection } from "./_components/CaseSturdySection";
import { PricingSection } from "./_components/PricingSection";
import { TestimonialSection } from "./_components/TestimonialSection";
import { FaqSection } from "./_components/FaqSection";
import { CtaSection } from "./_components/CtaSection";
import { FooterSection } from "./_components/FooterSection";

export const metadata: Metadata = {
  title: "SwiftBuild — Professional Website Builder",
  description:
    "Build stunning, professional websites with SwiftBuild. Fast development, modern design, and expert support for your business.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <CaseSturdySection />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
