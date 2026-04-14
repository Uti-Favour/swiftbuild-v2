import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact" className="bg-[#00008B] py-24 sm:py-32 border-b border-primary/20">
      <div className="section-padding max-w-[800px] mx-auto text-center flex flex-col items-center">
        <h2 className="text-[36px] sm:text-[44px] lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Ready to Scale Your Business?
        </h2>

        <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.65] max-w-[560px] mx-auto mb-10 font-medium">
          Let's build intelligent automations and world-class software that drives your revenue forward. Book a discovery call with our team today.
        </p>

        <button className="px-9 py-[15px] bg-white text-[#00008B] rounded-full font-bold text-sm tracking-wide hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 shadow-lg">
          Start Your Project
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
