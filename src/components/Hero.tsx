import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronRight, ArrowUpRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formDataState, setFormDataState] = useState<{ name: string; email: string; message: string } | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const target = event.currentTarget;
    const formData = new FormData(target);
    
    // Honeypot spam protection check
    const botcheck = formData.get("botcheck");
    if (botcheck) {
      setResult("Spam detected.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", "294ece96-57e5-4b74-9dff-ed7204514f19");
    formData.append("subject", "New Lead - Astraventa Telecom Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string || "None";
        
        setFormDataState({ name, email, message });
        setIsSubmitted(true);
        setResult("");
        target.reset();
      } else {
        setResult("Submission error. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      setResult("Network error. Please try again.");
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

        {/* Navbar */}
        <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 z-30 relative">
          {/* Brand Logo (Visible on mobile & desktop) */}
          <a href="#/" className="flex items-center select-none">
            <img src="/logo.png" alt="Astraventa Telecom" className="h-11 md:h-14 w-auto object-contain drop-shadow-sm" />
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
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-black/5 animate-in fade-in zoom-in duration-200">
            {isSubmitted ? (
              <div className="text-center py-4 animate-in fade-in zoom-in duration-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2">Request Received</h3>
                <p className="text-black/60 text-sm mb-6 leading-relaxed">
                  Your credentials request has been logged. Our integration desk will reach you shortly at the email provided.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/923055255838?text=${encodeURIComponent(
                      `Hi Astraventa Team, I've requested a test trunk.\n\n` +
                      `• *Name:* ${formDataState?.name}\n` +
                      `• *Email:* ${formDataState?.email}\n` +
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
              <>
                <h3 className="text-2xl font-bold text-black mb-2">Request a Test Trunk</h3>
                <p className="text-black/60 text-sm mb-6">Schedule a session with an integration engineer to deploy whitelisted telecom nodes.</p>
                <form onSubmit={onSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} autoComplete="off" />

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-black/50 mb-1.5">Contact Person</label>
                    <input type="text" name="name" placeholder="Alex Rivera" required className="w-full p-3 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-black/50 mb-1.5">Work Email</label>
                    <input type="email" name="email" placeholder="alex@company.com" required className="w-full p-3 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-black/50 mb-1.5">Additional Notes</label>
                    <textarea name="message" placeholder="Estimated call volume or specific gateway details..." className="w-full p-3 bg-black/5 border border-black/10 rounded-xl outline-none focus:border-black transition h-20 resize-none" />
                  </div>
                  
                  {result && (
                    <div className="text-xs font-bold text-[#0a1b3a] tracking-tight">{result}</div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={() => setIsDemoModalOpen(false)} className="flex-1 py-3 border border-black/10 rounded-xl font-bold text-sm hover:bg-black/5 transition cursor-pointer">
                      Cancel
                    </button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 py-3 bg-[#0a1b3a] hover:bg-[#0f2854] text-white rounded-xl font-bold text-sm transition disabled:opacity-50 cursor-pointer">
                      {isSubmitting ? "Submitting..." : "Submit & Connect"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
