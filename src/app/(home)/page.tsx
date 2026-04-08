import type { Metadata } from "next";

import { Navbar } from "./_components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { FeaturesSection } from "./_components/FeaturesSection";
import { EligibilitySection } from "./_components/EligibilitySection";
import { CaseStudiesSection } from "./_components/CaseStudiesSection";
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
        <FeaturesSection />
        <EligibilitySection />
        <CaseStudiesSection />
        <FaqSection />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
