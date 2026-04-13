import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-[#101b24] py-24 sm:py-32 border-b border-[#203f5c]">
      <div className="section-padding max-w-[800px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-[36px] sm:text-[44px] font-bold text-white mb-6 tracking-tight leading-tight">
          Apply Now for<br />Founders Lab
        </h2>

        <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.65] max-w-[560px] mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <button className="px-8 py-[14px] bg-white text-[#101b24] rounded-full font-bold text-xs tracking-wide hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-sm">
          APPLY
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
