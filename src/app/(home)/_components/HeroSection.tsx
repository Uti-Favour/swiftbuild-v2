import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[750px] lg:h-screen flex items-center bg-[white] overflow-hidden pt-28 pb-16">
      <div className="section-padding w-full max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text Content */}
        <div className="max-w-8xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00008B]/5 border border-[#00008B]/10 text-[#00008B] font-semibold text-[13px] tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse"></span>
            Tech Partner for Ambitious Brands
          </div>
          <h1 className="text-[44px] text-[#00008B] sm:text-5xl lg:text-[72px] font-extrabold leading-[1.05] mb-6 tracking-tight">
           Automate. Scale.<br className="hidden lg:block"/> Grow 10x Faster.
          </h1>

          <p className="text-[#334155] text-base font-medium lg:text-[18px] mb-10 leading-[1.7] max-w-xl">
           SwiftBuild helps startup founders and growing businesses eliminate manual work with powerful AI automation, build rock-solid software, and launch websites that actually drive revenue.
          </p>

          <a
            href="#started"
            className="inline-flex items-center px-9 py-4 rounded-full bg-[#00008B] text-white font-bold hover:bg-[#00008B]/90 hover:-translate-y-1 transition-all duration-300 text-[15px] shadow-[0_8px_30px_rgb(0,0,139,0.2)]"
          >
           Book Your Strategy Call
            <ArrowRight className="ml-2.5 w-4.5 h-4.5" strokeWidth={2.5} />
          </a>
        </div>

        {/* Right Side: Image and Decorations */}
        <div className="relative z-10 flex justify-center lg:justify-end w-full lg:pr-8">
          <div className="relative w-[400px] sm:w-[460px] lg:w-[550px]">
                

            {/* The Main Image */}
            <img
              src="/images/hero-section.jpg"
              alt="Professional with laptop"
              className="object-cover w-full h-[480px] sm:h-[560px] shadow-2xl relative z-10 rounded-4xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
