import type { Metadata } from "next";

import { Navbar } from "./_components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import { ServiceSection } from "./_components/ServiceSection";
import { CaseSturdySection } from "./_components/CaseSturdySection";
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
        {/* <CaseStudiesSection /> */}
        <FaqSection />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
