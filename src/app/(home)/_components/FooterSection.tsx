import { FOOTER_LINKS } from "@/lib/data/landing";
import { ArrowRight } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-[#00008B] pt-20 pb-20">
      <div className="section-padding max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Newsletter / Updates Column */}
          <div className="lg:col-span-6 max-w-[460px]">
            <h3 className="text-[22px] font-bold text-white mb-3">Insights & Updates</h3>
            <p className="text-[14px] text-white/70 mb-10 leading-[1.6]">
              Join our newsletter for the latest in AI automation, scalable engineering, and business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <input 
                type="email" 
                placeholder="Email address"
                required
                className="w-full sm:flex-1 bg-transparent border-b border-white/20 pb-2 text-[14px] text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="button"
                className="w-full sm:w-auto px-7 py-3 bg-[#FFFFFF] text-[#00008B] rounded-full font-bold text-xs tracking-wider transition-all shadow-md inline-flex justify-center items-center gap-2"
              >
                SUBSCRIBE
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-[12px] font-bold text-white/60 mb-6 tracking-[0.15em] uppercase">Company</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[14px] text-white hover:text-white/80 transition-colors font-semibold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-[12px] font-bold text-white/60 mb-6 tracking-[0.15em] uppercase">Contact</h4>
            <ul className="space-y-4">
               {FOOTER_LINKS.contact.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[14px] text-white hover:text-white/80 transition-colors font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center text-white/50 text-[14px] font-medium tracking-wide">
            <span className="text-xl font-black tracking-tighter text-white mr-4">
              SwiftBuild<span className="text-[#F5A623]">.</span>
            </span>
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[14px] text-white/50 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
