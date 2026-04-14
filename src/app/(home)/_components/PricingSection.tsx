import React from "react";
import { PRICING_COMPARISON } from "@/lib/data/landing";
import { Check, X } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-40 bg-[#00008B] relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding max-w-[1240px] mx-auto relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-16 lg:mb-24">
          <span className="text-[#F5A623] font-bold text-sm tracking-[0.2em] uppercase block mb-6">
            Transparent Investment
          </span>
          <h2 className="text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold text-white mb-8 tracking-tighter leading-[1.05]">
            Stop Burning Cash on<br className="hidden sm:block"/> Slow Agencies
          </h2>
          <p className="text-white/70 text-[17px] lg:text-[20px] leading-[1.7] font-medium max-w-[680px] mx-auto">
            We've eliminated the hidden fees and endless timelines. You get fixed, milestone-based pricing and a product that scales with your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Traditional Agencies Card - Minimal/Ghost style */}
          <div className="group bg-white/[0.03] backdrop-blur-sm rounded-[40px] p-8 lg:p-14 border border-white/30 hover:border-white transition-all duration-500 flex flex-col">
            <div className="mb-10">
              <h3 className="text-[20px] font-bold text-white mb-3 tracking-wide">
                {PRICING_COMPARISON.traditional.title}
              </h3>
              <div className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight">
                {PRICING_COMPARISON.traditional.price}
              </div>
            </div>

            <ul className="space-y-6 flex-grow">
              {PRICING_COMPARISON.traditional.features.map((entry, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[16px] font-medium text-white group-hover:text-white transition-colors">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                  </span>
                  {entry.text}
                </li>
              ))}
            </ul>
          </div>

          {/* SwiftBuild Card - High Contrast Pop */}
          <div className="relative group flex flex-col">
            {/* Pulsing Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F5A623] to-[#FFD700] rounded-[42px] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative bg-white rounded-[40px] p-10 lg:p-14 shadow-2xl flex flex-col h-full transform transition-all duration-500 group-hover:-translate-y-2">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F5A623] text-white text-[12px] font-black tracking-widest uppercase px-6 py-2.5 rounded-full shadow-xl">
                The Standard for Success
              </span>

              <div className="mb-12">
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#00008B] mb-3 tracking-tight">
                  {PRICING_COMPARISON.swiftbuild.title}
                </h3>
                <div className="text-[38px] lg:text-[48px] font-extrabold text-[#00008B] border-b border-gray-100 pb-10 leading-none tracking-tighter">
                  {PRICING_COMPARISON.swiftbuild.price}
                </div>
              </div>

              <ul className="space-y-6 mb-12 flex-grow">
                {PRICING_COMPARISON.swiftbuild.features.map((entry, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[16px] lg:text-[18px] font-bold text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 text-[#00008B]" strokeWidth={3} />
                    </span>
                    {entry.text}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full py-5 text-center rounded-full bg-[#00008B] text-white font-bold text-[16px] hover:bg-[#111A24] transition-all transform active:scale-95 shadow-xl shadow-[#00008B]/20"
              >
                Start Your Build
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
