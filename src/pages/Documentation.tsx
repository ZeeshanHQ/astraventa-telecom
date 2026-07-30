import { ArrowLeft, Terminal, Server, ShieldCheck } from "lucide-react";

export default function Documentation() {
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
          <span className="text-xs uppercase tracking-widest font-bold text-black/35 font-mono block mb-3">Developer Resources</span>
          <h1 className="text-4xl md:text-6xl font-semibold text-black tracking-tight leading-none mb-4">Trunk & API Specifications</h1>
          <p className="text-sm text-black/50 font-medium">Technical documentation for SIP integration and automated DID provisioning</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 mb-14" />

        {/* Content Section */}
        <div className="space-y-16 text-sm text-black/70 leading-relaxed font-medium">

          {/* Section 1: SIP Config */}
          <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-black tracking-tight">1. SIP Connection Parameters</h2>
            </div>
            <p className="mb-6">Integrate your active softphone, dialer cluster, or PBX system directly to our whitelisted carriers using the parameters below.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#f9fafb] p-4 rounded-xl space-y-2 border border-black/5">
                <span className="text-[10px] text-black/40 font-bold block uppercase tracking-wider">Primary Proxy Host</span>
                <span className="text-black font-bold block">us-east.astraventa.net</span>
                <span className="text-[10px] text-black/40 font-bold block uppercase tracking-wider mt-4">Backup Proxy Host</span>
                <span className="text-black font-bold block">us-west.astraventa.net</span>
              </div>
              <div className="bg-[#f9fafb] p-4 rounded-xl space-y-2 border border-black/5">
                <span className="text-[10px] text-black/40 font-bold block uppercase tracking-wider">SIP Ports</span>
                <span className="text-black font-bold block">5060 (UDP/TCP) &nbsp;·&nbsp; 5061 (TLS)</span>
                <span className="text-[10px] text-black/40 font-bold block uppercase tracking-wider mt-4">Supported Codecs</span>
                <span className="text-black font-bold block">G.711u (PCMU), G.729, Opus</span>
              </div>
            </div>
          </section>

          {/* Section 2: Caller ID Rotation API */}
          <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-black tracking-tight">2. Dynamic Caller ID Rotation</h2>
            </div>
            <p className="mb-4">Programmatically rotate Caller IDs based on target demographics. This ensures outgoing calls match the local area codes of target shifts.</p>
            
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase font-bold text-black/40 block mb-2 font-mono">Rotate Endpoint (POST)</span>
                <div className="bg-[#f9fafb] p-3 rounded-lg font-mono text-xs text-black border border-black/5">
                  https://api.astraventa.com/v1/dids/rotate
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-black/40 block mb-2 font-mono">Request Payload</span>
                <pre className="bg-[#f9fafb] p-4 rounded-xl font-mono text-xs text-black border border-black/5 overflow-x-auto">
{`{
  "trunk_id": "trk_01h8x9",
  "target_area_code": "925",
  "rotation_strategy": "anti-spam-sequential"
}`}
                </pre>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-black/40 block mb-2 font-mono">Response Payload</span>
                <pre className="bg-[#f9fafb] p-4 rounded-xl font-mono text-xs text-black border border-black/5 overflow-x-auto">
{`{
  "status": "active",
  "active_caller_id": "+19255040101",
  "ttl_seconds": 3600
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Section 3: STIR/SHAKEN Compliance */}
          <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-black tracking-tight">3. Attestation & Whitelisting</h2>
            </div>
            <p className="mb-4">Every outbound call routed through Astraventa Telecom trunks carries Level A attestation. This ensures maximum connection rates and natively bypasses wireless carrier "Spam Likely" labeling mechanisms.</p>
            <ul className="space-y-3 pl-4">
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span><strong className="text-black font-bold">Level A (Full Attestation):</strong> Certified that the signing provider has established a verified relationship with the customer and customer is authorized to use the telephone number.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span><strong className="text-black font-bold">Dynamic CNAM:</strong> Caller ID names are registered in national databases matching your campaign details.</span></li>
            </ul>
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
