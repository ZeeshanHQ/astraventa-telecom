import { RefreshCw, DollarSign, ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full bg-[#f0f0f0] py-12 px-3 md:px-5">
      <div className="w-full max-w-[1536px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/40 font-bold block mb-2 font-mono">
              Infrastructure Nodes
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight max-w-[20ch]">
              Architected for high-volume outbound floors
            </h2>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
            className="border border-black/10 hover:border-black/30 hover:bg-black/5 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer"
          >
            Deploy Dialer Node
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
          
          {/* Card 1: Tall Left (Anti-Spam Rotation) */}
          <div className="md:row-span-2 min-h-[28rem] bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-black/30 uppercase tracking-wider block mb-4 font-mono">
                Caller ID Whitelisting
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight leading-tight max-w-[14ch]">
                Anti-Spam Rotation Architecture
              </h3>
            </div>
            <p className="text-sm text-black/60 leading-relaxed max-w-[28ch] z-10 font-medium">
              Automated rotation of Caller IDs to ensure cold-calling lines remain clean and whitelisted by major US telecom carriers.
            </p>
            {/* Watermark layers icon */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 opacity-[0.02] text-black transition-transform duration-500 group-hover:scale-110 pointer-events-none flex items-center justify-center">
              <RefreshCw className="w-52 h-52 stroke-[1.5]" />
            </div>
          </div>

          {/* Card 2: Wide Top Right ($0 Cost) */}
          <div className="md:col-span-2 min-h-[14rem] bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-black/30 uppercase tracking-wider block mb-2 font-mono">
                Licensing Standard
              </span>
              <h3 className="text-2xl font-extrabold text-black tracking-tight">
                Zero-Seat Software Licensing ($0 Cost)
              </h3>
            </div>
            <p className="text-sm text-black/60 leading-relaxed max-w-[42ch] z-10 font-medium">
              Completely removing the financial bottleneck of per-agent platform fees, charging purely for wholesale network utilization. We provision enterprise cloud dialers completely free ($0).
            </p>
            {/* Watermark dollar icon */}
            <div className="absolute -bottom-12 -right-8 w-56 h-56 opacity-[0.02] text-black transition-transform duration-500 group-hover:scale-110 pointer-events-none flex items-center justify-center">
              <DollarSign className="w-48 h-48 stroke-[1.5]" />
            </div>
          </div>

          {/* Card 3: Bottom Right 1 (Fail-Safe Routing) */}
          <div className="min-h-[14rem] bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-black/30 uppercase tracking-wider block mb-2 font-mono">
                Reliability Layer
              </span>
              <h3 className="text-2xl font-extrabold text-black tracking-tight mb-2">
                Fail-Safe Routing Support
              </h3>
              <p className="text-xs text-black/60 leading-relaxed max-w-[28ch] font-medium">
                A 24/7 technical monitoring layer that instantly switches traffic to hot-standby backup nodes if an upstream carrier hub experiences latency.
              </p>
            </div>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
              className="border border-black/10 group-hover:border-black/30 px-5 py-2 rounded-full font-bold text-xs text-black/80 hover:bg-black/5 transition w-fit mt-4 cursor-pointer"
            >
              Trunk Health Monitor
            </button>
          </div>
 
          {/* Card 4: Bottom Right 2 (SIP Trunking) */}
          <div className="min-h-[14rem] bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 flex flex-col justify-between items-center justify-center overflow-hidden relative group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-black/30 uppercase tracking-wider block mb-2 font-mono">
                Network Backhaul
              </span>
              <h3 className="text-2xl font-extrabold text-black tracking-tight mb-1">
                Carrier Routing
              </h3>
              <p className="text-xs text-black/60 max-w-[20ch] font-medium">
                Crystal-clear Tier-1 SIP Trunking with whitelisted DIDs.
              </p>
            </div>
            <div 
              onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mt-4 cursor-pointer"
            >
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
