import { ArrowRight } from "lucide-react";
import ChatWidget from "../components/ChatWidget";
import Footer from "../components/Footer";

export default function AiReceptionist() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      
      {/* Soft background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Google-Style White Header Navbar */}
      <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-black/5">
        <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity select-none">
            <img src="/astraventa-white.png" alt="Astraventa Logo" className="h-7 w-auto object-contain" />
            <span className="text-lg font-heading font-medium text-black tracking-tight">
              Astraventa
            </span>
          </a>
          <a 
            href="#/" 
            className="text-xs font-heading font-medium text-black/55 hover:text-black transition-colors font-sans py-2"
          >
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-8 md:py-12 space-y-24">
        
        {/* Meta Connect Style Wide Pastel Gradient Banner Card */}
        <section className="w-full bg-gradient-to-r from-purple-50/70 via-sky-50/80 to-emerald-50/60 border border-black/5 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-black tracking-tight leading-[1.15]">
              A professional-grade receptionist that's easy to use
            </h1>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed font-sans font-normal max-w-[560px]">
              Stay connected and save time with an intelligent voice assistant. It answers customer queries, resolves objections, and redirects important callers directly to your cell phone.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://voice.astraventa.com/signup" 
                className="bg-[#0052cc] hover:bg-[#0047b3] text-white px-6 sm:px-8 py-3.5 rounded-full font-sans font-medium text-sm transition shadow-sm active:scale-95 text-center text-decoration-none cursor-pointer"
              >
                Get started
              </a>
              <a 
                href="https://calendly.com/astraventa/15-min-technical-walkthrough-astraventa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-black/85 px-5 sm:px-6 py-3.5 rounded-full border border-black/10 font-sans font-medium text-sm transition active:scale-95 text-decoration-none cursor-pointer"
              >
                Contact sales
              </a>
            </div>

            <div className="pt-6 border-t border-black/5 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-[#0052cc] block">Interactive Sandbox Test</span>
              <p className="text-xs text-black/60 leading-relaxed">
                Experience our AI representative in real-time. Call our live company line at <strong className="text-black font-semibold select-all">+1 (925) 504-0101</strong>. 
                Ask it about setup pricing, try to handle objections, or request to <strong className="text-black font-semibold">\"forward to Zeeshan\"</strong> to test our zero-latency warm-forwarding system.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-black/50 font-medium">Or text <a href="https://wa.me/923267853405" target="_blank" rel="noopener noreferrer" className="text-[#0052cc] hover:underline font-bold">+92 326 7853405</a> on WhatsApp to test auto-capture.</span>
              </div>
            </div>
          </div>
          
          {/* Floating Pure White Hero Illustration */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-[16/10] overflow-hidden bg-transparent">
              <img 
                src="/ai_receptionist_google.jpg" 
                alt="Astraventa AI Calling Interface Mockup" 
                className="w-full h-full object-contain select-none"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </div>
        </section>

        {/* Floating Google Voice style navigation pill-tabs bar */}
        <section className="py-2 border-t border-black/5 relative">
          
          <div className="w-full sticky top-[76px] z-40 bg-transparent py-4 flex justify-center items-center mb-12 sm:mb-16 pointer-events-none">
            <div className="flex bg-slate-100/90 backdrop-blur-md p-1 rounded-full max-w-full overflow-x-auto whitespace-nowrap scrollbar-none pointer-events-auto shadow-sm">
              <button 
                onClick={() => document.getElementById("objections")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="px-4 sm:px-6 py-2 rounded-full text-xs font-heading font-medium text-black/55 hover:text-black transition-all cursor-pointer hover:bg-white active:scale-95"
              >
                Flexible
              </button>
              <button 
                onClick={() => document.getElementById("forwarding")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="px-4 sm:px-6 py-2 rounded-full text-xs font-heading font-medium text-black/55 hover:text-black transition-all cursor-pointer hover:bg-white active:scale-95"
              >
                Helpful
              </button>
              <button 
                onClick={() => document.getElementById("latency")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="px-4 sm:px-6 py-2 rounded-full text-xs font-heading font-medium text-black/55 hover:text-black transition-all cursor-pointer hover:bg-white active:scale-95"
              >
                Easy to manage
              </button>
            </div>
          </div>

          {/* Dynamic alternating list features - Google Voice Style */}
          <div className="space-y-24 sm:space-y-36">
            
            {/* Section 1: Secure Talk & Objections */}
            <div id="objections" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center scroll-mt-28">
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[500px] aspect-[16/9] overflow-hidden bg-transparent">
                  <img 
                    src="/3d_minimal_objections.jpg" 
                    alt="Secure Objection Handling Script Interface" 
                    className="w-full h-full object-contain select-none"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
              <div className="lg:col-span-6 space-y-4 md:space-y-5">
                <span className="text-xs font-heading font-medium text-cyan-600 uppercase tracking-wider font-mono">Objection Handling</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-black tracking-tight leading-snug">
                  Secure Objection Management
                </h2>
                <p className="text-sm sm:text-base text-black/55 leading-relaxed font-sans font-normal">
                  Equipped with dynamic dialog flows that process queries natively. Resolves questions about pricing, setup, or routing rules securely and cleanly without awkward mechanical loops.
                </p>
              </div>
            </div>

            {/* Section 2: Warm Call Forwarding */}
            <div id="forwarding" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center scroll-mt-28">
              <div className="lg:col-span-6 lg:order-2 flex justify-center">
                <div className="w-full max-w-[500px] aspect-[16/9] overflow-hidden bg-transparent">
                  <img 
                    src="/3d_minimal_forwarding.jpg" 
                    alt="Warm Call Forwarding Bridge Interface" 
                    className="w-full h-full object-contain select-none"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:order-1 space-y-4 md:space-y-5">
                <span className="text-xs font-heading font-medium text-emerald-600 uppercase tracking-wider font-mono">Seamless Transfer</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-black tracking-tight leading-snug">
                  Warm Call Forwarding
                </h2>
                <p className="text-sm sm:text-base text-black/55 leading-relaxed font-sans font-normal">
                  Bridges important callers directly to your cell phone when clients ask for you by name or meet pre-configured qualification conditions. Keeps your sales pipeline moving in real-time.
                </p>
              </div>
            </div>

            {/* Section 3: Low Latency Routing */}
            <div id="latency" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center scroll-mt-28">
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[500px] aspect-[16/9] overflow-hidden bg-transparent">
                  <img 
                    src="/3d_minimal_latency.jpg" 
                    alt="Low Latency Waveform Interconnect Interface" 
                    className="w-full h-full object-contain select-none"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
              <div className="lg:col-span-6 space-y-4 md:space-y-5">
                <span className="text-xs font-heading font-medium text-indigo-600 uppercase tracking-wider font-mono">Speed Infrastructure</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-normal text-black tracking-tight leading-snug">
                  Sub-800ms Latency Routing
                </h2>
                <p className="text-sm sm:text-base text-black/55 leading-relaxed font-sans font-normal">
                  Built straight on Tier-1 voice routing gates to eliminate communication delay. Real-time turn-taking flows naturally, ensuring users cannot tell they are speaking with an automation.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Self-Serve & Direct Setup Gateway */}
        <section id="demo-form" className="pt-12 border-t border-black/10">
          <div className="max-w-[760px] mx-auto text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold text-cyan-600 tracking-wider font-mono">
                Instant Provisioning
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-medium text-black tracking-tight">
                Launch Your AI Receptionist in Minutes
              </h2>
              <p className="text-sm sm:text-base text-black/60 max-w-xl mx-auto">
                Sign up directly on our voice console, select the $149/mo Starter Receptionist tier, configure your forwarding number, and go live instantly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://voice.astraventa.com/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0047b3] text-white px-8 py-4 rounded-full font-medium text-sm transition shadow-md active:scale-95 text-decoration-none"
              >
                <span>Deploy AI Receptionist ($149/mo)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://calendly.com/astraventa/15-min-technical-walkthrough-astraventa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-black px-8 py-4 rounded-full font-medium text-sm transition active:scale-95 text-decoration-none"
              >
                <span>Schedule 15-Min Live Demo</span>
              </a>
            </div>

            <div className="pt-6">
              <p className="text-slate-400 text-xs mb-3 font-medium">Prefer direct WhatsApp activation support?</p>
              <a 
                href="https://wa.me/923267853405" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-full font-sans font-medium text-xs transition shadow-sm text-decoration-none"
              >
                Connect WhatsApp Support (+92 326 7853405)
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Elements */}
      <Footer />
      <ChatWidget />
    </div>
  );
}
