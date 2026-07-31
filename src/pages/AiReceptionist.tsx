import { useState } from "react";
import { CheckCircle } from "lucide-react";
import ChatWidget from "../components/ChatWidget";
import Footer from "../components/Footer";

export default function AiReceptionist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [volume, setVolume] = useState("10k - 100k mins/mo");
  const dialer = "Inbound AI Receptionist";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || isSubmitting) return;
    setIsSubmitting(true);
    setResult("");

    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/functions/v1/telecom-leads-submit", {
        method: "POST",
        headers: {
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxeXdhZGlpYnlueXB5Z3NreWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzc1MDgsImV4cCI6MjA4OTk1MzUwOH0.psjTFW7hVfSpxw_jy-_UR2h0b-m_OC9EmGJV_pbZ-3I",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxeXdhZGlpYnlueXB5Z3NreWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzc1MDgsImV4cCI6MjA4OTk1MzUwOH0.psjTFW7hVfSpxw_jy-_UR2h0b-m_OC9EmGJV_pbZ-3I",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          plan_type: "starter",
          call_volume: volume,
          dialer_software: dialer,
          message: message || "Requested Inbound AI Receptionist Demo",
          source: "ai-receptionist"
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResult(`Submission Error: ${data.error || "Please try again."}`);
      }
    } catch (error: any) {
      setResult(`Connection Error: ${error?.message || "Please try again."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                href="#demo-form" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0052cc] hover:bg-[#0047b3] text-white px-6 sm:px-8 py-3.5 rounded-full font-sans font-medium text-sm transition shadow-sm active:scale-95 text-center text-decoration-none cursor-pointer"
              >
                Get started
              </a>
              <a 
                href="https://calendly.com/astraventaai/15-min-technical-walkthrough-astraventa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-black/85 px-5 sm:px-6 py-3.5 rounded-full border border-black/10 font-sans font-medium text-sm transition active:scale-95 text-decoration-none cursor-pointer"
              >
                Contact sales
              </a>
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
          
          {/* Sticky Tab bar wrapper sitting under sticky navbar - Borderless/Lineless */}
          <div className="w-full sticky top-[76px] z-40 bg-white/95 backdrop-blur-md py-4 flex justify-center items-center mb-12 sm:mb-16">
            <div className="flex bg-slate-100/80 p-1 rounded-full max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
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

        {/* Minimal Lead Capture Form */}
        <section id="demo-form" className="pt-8 border-t border-black/10">
          <div className="max-w-[760px] mx-auto space-y-8">
            {isSubmitted ? (
              <div className="text-center py-12 sm:py-16 bg-slate-50 rounded-3xl border border-black/5 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100 text-emerald-600 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-medium text-black">Request submitted</h3>
                <p className="text-black/55 text-sm max-w-md mx-auto leading-relaxed px-4">
                  We have received your configuration details. An integration architect will reach out shortly to whitelist your voice node.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://wa.me/923267853405" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full font-sans font-medium text-sm transition shadow-sm text-decoration-none cursor-pointer"
                  >
                    Direct WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-8 px-2 sm:px-0">
                <div className="text-center space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-heading font-medium text-black tracking-tight">Request Integration</h2>
                  <p className="text-xs sm:text-sm text-black/55">
                    Submit your details and setup preferences. We will customize your calling node script.
                  </p>
                </div>
                
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-black/60 uppercase tracking-wider font-mono">Contact Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-sm outline-none focus:border-[#0052cc] transition-colors font-medium text-black/85"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-black/60 uppercase tracking-wider font-mono">Work Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-sm outline-none focus:border-[#0052cc] transition-colors font-medium text-black/85"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="volume" className="text-xs font-bold text-black/60 uppercase tracking-wider font-mono">Est. Volume / mo</label>
                      <select
                        id="volume"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-sm outline-none focus:border-[#0052cc] transition-colors font-medium text-black/85 cursor-pointer"
                      >
                        <option value="10k - 100k mins/mo">10k - 100k mins/mo</option>
                        <option value="100k - 1M mins/mo">100k - 1M mins/mo</option>
                        <option value="1M+ mins/mo">1M+ mins/mo</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="dialer" className="text-xs font-bold text-black/60 uppercase tracking-wider font-mono">Platform Integration</label>
                      <input
                        id="dialer"
                        type="text"
                        disabled
                        value={dialer}
                        className="w-full px-4 py-3 bg-slate-50 border border-black/15 rounded-xl text-sm font-medium text-black/55 select-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-black/60 uppercase tracking-wider font-mono">Specific Routing Rules</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Forward calls to +1 925 504 0101 when clients ask for Zeeshan..."
                      className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-sm outline-none focus:border-[#0052cc] transition-colors font-medium text-black/85 resize-none"
                    />
                  </div>

                  {result && (
                    <p className="text-xs font-bold text-red-600 tracking-tight">{result}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#0052cc] hover:bg-[#0047b3] text-white rounded-xl font-sans font-medium text-sm transition shadow-sm active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Provisioning..." : "Submit request"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Global Elements */}
      <Footer />
      <ChatWidget />
    </div>
  );
}
