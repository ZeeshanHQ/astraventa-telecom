import { ArrowLeft, Cpu, Network, Zap } from "lucide-react";

export default function Infrastructure() {
  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[960px] mx-auto">

        {/* Back link */}
        <a href="#/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-14 font-mono group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>

        {/* Logo */}
        <div className="mb-12">
          <img src="/logo.png" alt="Astraventa Telecom" className="h-16 w-auto object-contain object-left select-none" />
        </div>

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-black/35 font-mono block mb-3">System Architecture</span>
          <h1 className="text-4xl md:text-6xl font-semibold text-black tracking-tight leading-none mb-4">Telecom Infrastructure</h1>
          <p className="text-sm text-black/50 font-medium">Under the hood of Astraventa's whitelisted Tier-1 voice routing hubs</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 mb-14" />

        {/* Content Section */}
        <div className="space-y-12 text-sm text-black/70 leading-relaxed font-medium">

          {/* Section 1: Carrier Interconnect Map */}
          <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-black tracking-tight">1. Tier-1 Direct Interconnects</h2>
            </div>
            <p className="mb-4">
              We eliminate cheap retail VoIP trunks. Your outbound traffic connects directly to whitelisted Tier-1 telecom backhauls (including Telnyx, Bandwidth, and Peerless routing pools).
            </p>
            <p>
              By utilizing private carrier trunks instead of recycled public pools, call delivery metrics bypass spam heuristics natively, resulting in double the connection rates compared to standard VoIP services.
            </p>
          </section>

          {/* Section 2: Caller ID (DID) Anti-Spam Rotation */}
          <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-black tracking-tight">2. Algorithmic DID Rotation</h2>
            </div>
            <p className="mb-4">
              Outbound campaigns run dynamic caller identification algorithms. Caller IDs are rotated systematically across localized areas code matching your call lists.
            </p>
            <p>
               trk-rotation engine maintains real-time reputation monitoring for every assigned phone number. Any number that triggers carrier labeling is automatically isolated and placed in a cooling pool, replacing it with a fresh whitelisted DID.
            </p>
          </section>

          {/* Section 3: Fail-Over heartbeats */}
          <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-black tracking-tight">3. Fail-Safe Node Heartbeats</h2>
            </div>
            <p className="mb-4">
              Our technical monitoring layer tracks trunk latency and call setup failures in real-time. If an upstream carrier gateway experiences latency greater than 80ms, traffic is dynamically switched to hot-standby trunks.
            </p>
            <p>
              This architecture guarantees call centers constant connectivity and eliminates audio lag during peak US calling shifts.
            </p>
          </section>

        </div>

        {/* Footer divider */}
        <div className="w-full h-px bg-black/10 mt-16 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-xs text-black/35 font-bold">&copy; 2026 Astraventa. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#/privacy" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Privacy Policy</a>
            <a href="#/terms" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Terms of Service</a>
            <a href="#/" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Back to Home</a>
          </div>
        </div>

      </div>
    </div>
  );
}
