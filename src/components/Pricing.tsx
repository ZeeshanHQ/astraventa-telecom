import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#f0f0f0] py-16 md:py-24 px-3 md:px-5">
      <div className="w-full max-w-[1536px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <span className="text-xs uppercase tracking-widest text-black/40 font-bold block mb-2 font-mono">
            Commercial Slabs
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
            Transparent usage billing
          </h2>
          <p className="text-sm text-black/60 leading-relaxed font-medium">
            We eliminate per-seat licenses. You pay purely for wholesale network utilization with dynamic, self-managed calling credits.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          
          {/* Card 1: Starter Trunk */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 relative">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs uppercase font-bold text-cyan-600 tracking-widest font-mono block mb-1">
                    Starter Allocation
                  </span>
                  <h3 className="text-2xl font-black text-black tracking-tight">Pay-As-You-Go</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-black">$10</span>
                  <span className="text-xs text-black/50 block font-semibold mt-1">minimum setup</span>
                </div>
              </div>

              <div className="border-t border-black/5 py-6 my-6">
                <p className="text-sm text-black/70 leading-relaxed font-medium mb-4">
                  Ideal for growing sales floors and small outreach campaigns requiring clean carrier trunks.
                </p>
                <div className="bg-cyan-50/50 border border-cyan-100 rounded-2xl p-4 text-xs text-cyan-800 leading-relaxed font-medium font-mono">
                  💡 <strong className="text-cyan-950 font-bold">$5 dynamic calling credit</strong> grants 250 minutes of talk-time (over 4 hours of pure, seamless calls across multi-devices). Top-up credits instantly at any time.
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Whitelisted Caller ID pools</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Multi-device compatibility</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Automatic top-ups enabled</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Fully managed engineering setup</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
              className="w-full py-4 bg-[#0a1b3a] hover:bg-[#0f2854] text-white rounded-2xl font-bold text-sm transition shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
            >
              Deploy Starter Node ($10)
            </button>
          </div>

          {/* Card 2: Enterprise Tier */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 relative">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-600 tracking-widest font-mono block mb-1">
                    Corporate Trunking
                  </span>
                  <h3 className="text-2xl font-black text-black tracking-tight">Enterprise Slabs</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-black">Wholesale</span>
                  <span className="text-xs text-black/50 block font-semibold mt-1">custom routing</span>
                </div>
              </div>

              <div className="border-t border-black/5 py-6 my-6">
                <p className="text-sm text-black/70 leading-relaxed font-medium">
                  Designed for high-density outbound call centers, logistics hubs, and advanced API voice streams.
                </p>
              </div>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Dedicated bandwidth allocation slots</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Custom whitelisted DID blocks</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Full STIR/SHAKEN Level A compliance</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-black/70 font-semibold">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>24/7 priority SLA support desk</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
              className="w-full py-4 border border-black/10 hover:border-black/30 hover:bg-black/5 text-black rounded-2xl font-bold text-sm transition active:scale-[0.98] cursor-pointer"
            >
              Contact Enterprise Desk
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
