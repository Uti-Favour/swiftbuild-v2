import React from "react";
import { PRICING_COMPARISON } from "@/lib/data/landing";
import { Check, X } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#FAFAFA] relative border-b border-gray-100">
      <div className="section-padding max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
          <span className="text-[#F5A623] font-bold text-sm tracking-[0.15em] uppercase block mb-4">
            Transparent Investment
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-[#111A24] mb-6 tracking-tight leading-[1.05]">
            Stop Burning Cash on Slow Agencies
          </h2>
          <p className="text-[#4B5563] text-[16px] lg:text-[18px] leading-[1.7] font-medium">
            We don't do hidden fees, scope creep, or endless timelines. You get fixed, milestone-based pricing and a product that starts generating ROI in weeks, not years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10 items-center">
          
          {/* Traditional Agencies Card */}
          <div className="bg-white rounded-[32px] p-8 lg:p-12 border border-gray-200 shadow-sm opacity-95 transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-[22px] font-bold text-gray-400 mb-2">
              {PRICING_COMPARISON.traditional.title}
            </h3>
            <div className="text-[32px] font-bold text-gray-300 mb-8 border-b border-gray-100 pb-8 flex items-baseline">
              {PRICING_COMPARISON.traditional.price}
            </div>

            <ul className="space-y-5">
              {PRICING_COMPARISON.traditional.features.map((entry, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[16px] font-medium text-gray-400">
                  <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                  </span>
                  {entry.text}
                </li>
              ))}
            </ul>
          </div>

          {/* SwiftBuild Card */}
          <div className="bg-[#00008B] rounded-[32px] p-8 lg:p-14 shadow-2xl relative md:scale-105 border border-[#00008B]/20 transform transition-transform duration-500 hover:scale-[1.07]">
            {/* Glossy overlay effect */}
            <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-t-[32px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="absolute -top-12 sm:-top-16 right-0 bg-[#F5A623] text-white text-[11px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                Your Tech Partner
              </span>

              <h3 className="text-[24px] lg:text-[28px] font-bold text-white mb-2 tracking-tight">
                {PRICING_COMPARISON.swiftbuild.title}
              </h3>
              <div className="text-[36px] lg:text-[44px] font-extrabold text-white mb-8 border-b border-white/10 pb-8 leading-none tracking-tight">
                {PRICING_COMPARISON.swiftbuild.price}
              </div>

              <ul className="space-y-6 mb-10">
                {PRICING_COMPARISON.swiftbuild.features.map((entry, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[16px] lg:text-[17px] font-medium text-white/90">
                    <span className="w-6 h-6 rounded-full bg-[#F5A623]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#F5A623]" strokeWidth={3} />
                    </span>
                    {entry.text}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full py-4 text-center rounded-full bg-white text-[#00008B] font-bold text-[15px] hover:bg-gray-50 transition-colors shadow-lg"
              >
                Let's Build It Today
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
