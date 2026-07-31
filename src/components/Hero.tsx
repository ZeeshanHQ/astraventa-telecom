import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronRight, ArrowUpRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "enterprise">("starter");
  const [formDataState, setFormDataState] = useState<{
    name: string;
    email: string;
    message: string;
    plan: string;
    volume: string;
    dialer: string;
  } | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Registering gateway endpoints...");
    
    const target = event.currentTarget;
    const formData = new FormData(target);
    
    // Honeypot spam protection check
    const botcheck = formData.get("botcheck");
    if (botcheck) {
      setResult("Spam detected.");
      setIsSubmitting(false);
      return;
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string || "None";
    const volume = formData.get("volume") as string || "Not specified";
    const dialer = formData.get("dialer") as string || "Not specified";

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
          plan_type: selectedPlan,
          call_volume: volume,
          dialer_software: dialer,
          message: message,
          source: "homepage"
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setFormDataState({ name, email, message, plan: selectedPlan, volume, dialer });
        setIsSubmitted(true);
        setResult("");
        target.reset();
      } else {
        setResult(`Submission Error: ${data.error || "Please try again."}`);
        setIsSubmitting(false);
      }
    } catch (error: any) {
      setResult(`Connection Error: ${error?.message || "Please try again."}`);
      setIsSubmitting(false);
    }
  };

  // Stagger animation container
  useEffect(() => {
    const handleOpenModal = () => setIsDemoModalOpen(true);
    window.addEventListener("open-request-modal", handleOpenModal);
    return () => window.removeEventListener("open-request-modal", handleOpenModal);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Overlay Tint — slightly deeper for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-0 pointer-events-none" />

        {/* Announcement Top Banner */}
        <a 
          href="#/ai-receptionist" 
          className="w-full bg-[#030712]/95 backdrop-blur-md text-white/90 py-2.5 px-4 text-center text-[10px] md:text-xs font-semibold tracking-wide hover:text-white transition-all flex items-center justify-center gap-1.5 z-40 relative select-none cursor-pointer text-decoration-none shadow-sm border-b border-white/5"
        >
          <span>🚀 Introducing Astraventa Inbound AI Receptionists: Qualify leads & warm-forward calls 24/7.</span>
          <span className="underline hover:no-underline flex items-center gap-0.5">Learn more <ArrowUpRight className="w-3 h-3" /></span>
        </a>

        {/* Navbar */}
        <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 z-30 relative">
          {/* Brand Logo (Visible on mobile & desktop) */}
          <a href="#/" className="flex items-center select-none">
            <img src="/astraventa-white.png" alt="Astraventa Telecom" className="h-7.5 md:h-9 w-auto object-contain drop-shadow-sm" />
          </a>

          {/* Desktop Centered Links (Logo is hidden on desktop) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-white/95">
            <a href="#/infrastructure" className="hover:text-white transition-colors text-sm font-medium tracking-wide">
              Infrastructure
            </a>
            <a href="#pricing" className="hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center gap-1">
              Trunk Slabs <ChevronRight className="w-4 h-4 text-white/60" />
            </a>
            <a href="#setup" className="hover:text-white transition-colors text-sm font-medium tracking-wide">
              Setup Flow
            </a>
            <a href="#standards" className="hover:text-white transition-colors text-sm font-medium tracking-wide">
              Standards
            </a>
          </div>

          {/* Right-aligned Request Test Line Button */}
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="flex items-center gap-2 bg-[#0a1b3a] hover:bg-[#0f2854] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <span>Request Trunk</span>
            <div className="bg-white/20 p-1 md:p-1.5 rounded-full">
              <ArrowUpRight className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" />
            </div>
          </button>
        </nav>

        {/* Main Content Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-[950px] mb-14 md:mb-20"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-4 select-none leading-[1.1] text-white drop-shadow-lg max-w-full"
          >
            Carrier-Grade Voice Routing.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-[550px] drop-shadow-md px-4"
          >
            High-throughput SIP trunks and dynamic Caller ID rotation managed by Astraventa. Fully configured by our engineers in under 5 minutes. Initial setup starts from $10.
          </motion.p>

          {/* Action Buttons Group */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mt-6 flex-wrap justify-center"
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white hover:bg-white/95 text-[#0a1b3a] px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              Request Free Demo
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
              className="bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Deploy Starter Node
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Left Card */}
        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:bottom-10 md:left-10 z-20 flex flex-col items-start gap-3 bg-white/30 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-xl max-w-[280px] sm:max-w-[260px] text-white mx-auto sm:mx-0">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-1">Network Capacity</span>
            <span className="text-2xl font-bold tracking-tight">5.2M Daily Minutes</span>
          </div>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="w-full text-center bg-white text-[#0a1b3a] hover:bg-white/95 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Initiate Managed Setup
          </button>
        </div>

        {/* Bottom Right Corner Architectural Cut-out (Hidden on Mobile to prevent overlap) */}
        <div className="hidden md:flex absolute bottom-0 right-0 bg-[#f0f0f0] p-6 pt-8 pl-14 rounded-tl-[3.5rem] z-20 items-center gap-4 shadow-[-10px_10px_30px_rgba(0,0,0,0.02)]">
          {/* Crucial Inverted Corner SVG Trick */}
          {/* Top Inverted Corner */}
          <div className="absolute right-0 bottom-full w-14 h-14 pointer-events-none">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
            </svg>
          </div>
          {/* Left Inverted Corner */}
          <div className="absolute bottom-0 right-full w-14 h-14 pointer-events-none">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
            </svg>
          </div>

          {/* Content */}
          <a 
            href="#/docs" 
            className="flex items-center gap-3.5 group/link text-black hover:text-black/80 transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white/50 group-hover/link:bg-white transition-all shadow-sm">
              <ArrowUpRight className="w-4 h-4 text-black group-hover/link:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-black/40 uppercase tracking-widest font-bold font-mono">Documentation</span>
              <span className="text-sm text-black/80 font-bold tracking-tight">Trunk / API Specs</span>
            </div>
          </a>
        </div>

      </section>

      {/* Request Test Trunk Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative border border-black/5 animate-in fade-in zoom-in duration-200">
            
            {/* Close Button Top Right */}
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 cursor-pointer z-20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isSubmitted ? (
              <div className="text-center p-12 max-w-md mx-auto animate-in fade-in zoom-in duration-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-2">Request Received</h3>
                <p className="text-black/60 text-sm mb-6 leading-relaxed">
                  Your credentials request has been logged. Our integration desk will reach you shortly at the email provided.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/923267853405?text=${encodeURIComponent(
                      `Hi Astraventa Team, I've requested a voice trunk setup.\n\n` +
                      `• *Name:* ${formDataState?.name}\n` +
                      `• *Email:* ${formDataState?.email}\n` +
                      `• *Plan:* ${formDataState?.plan?.toUpperCase()}\n` +
                      `• *Est. Volume:* ${formDataState?.volume}\n` +
                      `• *Dialer:* ${formDataState?.dialer}\n` +
                      `• *Notes:* ${formDataState?.message || "None"}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition duration-200 shadow-lg text-decoration-none cursor-pointer"
                  >
                    <span>Also Send on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsDemoModalOpen(false);
                      setIsSubmitted(false);
                      setResult("");
                    }}
                    className="w-full py-3 bg-black/5 hover:bg-black/10 text-black/60 rounded-xl font-bold text-sm transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-5">
                
                {/* Left Pane: Plan Option Selector */}
                <div className="col-span-2 bg-slate-50/70 p-8 border-b md:border-b-0 md:border-r border-black/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1 font-sans tracking-tight">Integration Plan</h3>
                    <p className="text-xs text-black/55 mb-6">Choose your deployment node structure to match your floor requirements.</p>
                    
                    <div className="space-y-3">
                      {/* Starter Option */}
                      <button
                        type="button"
                        onClick={() => setSelectedPlan("starter")}
                        className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                          selectedPlan === "starter"
                            ? "bg-white border-[#0052cc] shadow-sm"
                            : "bg-transparent border-black/10 hover:border-black/25"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-black uppercase tracking-wider">Starter Node</span>
                          {selectedPlan === "starter" && <span className="w-2 h-2 rounded-full bg-[#0052cc]" />}
                        </div>
                        <span className="block text-[11px] text-black/55 leading-normal">
                          Setup starts at $10. Pay-as-you-go whitelisted trunks. Perfect for small floors.
                        </span>
                      </button>

                      {/* Enterprise Option */}
                      <button
                        type="button"
                        onClick={() => setSelectedPlan("enterprise")}
                        className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                          selectedPlan === "enterprise"
                            ? "bg-white border-[#0052cc] shadow-sm"
                            : "bg-transparent border-black/10 hover:border-black/25"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-black uppercase tracking-wider">Enterprise Redundancy</span>
                          {selectedPlan === "enterprise" && <span className="w-2 h-2 rounded-full bg-[#0052cc]" />}
                        </div>
                        <span className="block text-[11px] text-black/55 leading-normal">
                          Fail-safe hot backup nodes with SLA guarantees. Engineered for large outbound floors.
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="hidden md:block pt-6 border-t border-black/5">
                    <span className="text-[10px] text-black/40 font-bold uppercase tracking-wider font-mono">
                      Astraventa Core Integration
                    </span>
                  </div>
                </div>

                {/* Right Pane: Contact Form */}
                <form onSubmit={onSubmit} className="col-span-3 p-8 space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} autoComplete="off" />

                  <h3 className="text-xl font-bold text-black tracking-tight leading-none mb-1 font-sans">
                    Node Parameters
                  </h3>
                  <p className="text-xs text-black/55 mb-4">Provide details to register your whitelisted gateway endpoints.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Alex Rivera"
                        required
                        className="w-full p-2.5 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition text-xs font-medium text-black/85"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1 font-sans">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="alex@company.com"
                        required
                        className="w-full p-2.5 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition text-xs font-medium text-black/85"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1 font-sans">
                        Est. Call Volume
                      </label>
                      <select
                        name="volume"
                        required
                        className="w-full p-2.5 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition text-xs font-medium text-black/80"
                      >
                        <option value="Under 100k mins/mo">Under 100k mins/mo</option>
                        <option value="100k - 1M mins/mo">100k - 1M mins/mo</option>
                        <option value="1M - 5M mins/mo">1M - 5M mins/mo</option>
                        <option value="Over 5M mins/mo">Over 5M mins/mo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1 font-sans">
                        Dialer Core / PBX
                      </label>
                      <select
                        name="dialer"
                        className="w-full p-2.5 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition text-xs font-medium text-black/80"
                      >
                        <option value="Not Sure / Softphone">Not Sure / Direct Softphone</option>
                        <option value="VICIdial / GoAutodial">VICIdial / GoAutodial</option>
                        <option value="Asterisk / FreePBX">Asterisk / FreePBX</option>
                        <option value="3CX / Softphone">3CX / Softphone</option>
                        <option value="Custom API / Other">Custom API / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-black/50 mb-1 font-sans">
                      Special Requirements
                    </label>
                    <textarea
                      name="message"
                      placeholder="Specify customized Caller ID rotation parameters or standby target cores..."
                      className="w-full p-2.5 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition h-14 resize-none text-xs font-medium text-black/85"
                    />
                  </div>

                  {result && (
                    <div className="text-xs font-bold text-[#0052cc] tracking-tight">{result}</div>
                  )}

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsDemoModalOpen(false)}
                      className="py-2.5 px-5 border border-black/10 rounded-xl font-bold text-xs hover:bg-black/5 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-2.5 px-6 bg-[#0052cc] hover:bg-[#0047b3] text-white rounded-xl font-bold text-xs transition disabled:opacity-50 cursor-pointer shadow-sm"
                    >
                      {isSubmitting ? "Submitting..." : "Submit & Connect"}
                    </button>
                  </div>
                </form>

              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
