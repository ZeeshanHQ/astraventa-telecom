import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

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
            <a 
              href="#workplace-features" 
              onClick={(e) => {
                const el = document.getElementById("workplace-features");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                const el = document.getElementById("pricing");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
            >
              Pricing & Plans <ChevronRight className="w-4 h-4 text-white/60" />
            </a>
            <a href="#/ai-receptionist" className="hover:text-white transition-colors text-sm font-medium tracking-wide">
              AI Receptionist
            </a>
            <a 
              href="#setup" 
              onClick={(e) => {
                const el = document.getElementById("setup");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              How It Works
            </a>
          </div>

          {/* Right-aligned Actions Group */}
          <div className="flex items-center gap-2 md:gap-4 z-30">
            <a 
              href="https://voice.astraventa.com/login"
              className="text-white/80 hover:text-white text-xs md:text-sm font-semibold tracking-wide transition-colors px-2.5 py-1.5 cursor-pointer"
            >
              Sign In
            </a>
            <a 
              href="https://voice.astraventa.com/signup"
              className="flex items-center gap-2 bg-[#0a1b3a] hover:bg-[#0f2854] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer text-decoration-none"
            >
              <span>Get Started</span>
              <div className="bg-white/20 p-1 md:p-1.5 rounded-full">
                <ArrowUpRight className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" />
              </div>
            </a>
          </div>
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
            High-throughput WebRTC & SIP dialing nodes with dedicated US numbers, pre-loaded minutes, and dynamic Caller ID rotation. Starter plans from just $29/mo.
          </motion.p>

          {/* Action Buttons Group */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mt-6 flex-wrap justify-center"
          >
            <a
              href="https://voice.astraventa.com/signup"
              className="bg-white hover:bg-white/95 text-[#0a1b3a] px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md active:scale-95 cursor-pointer text-decoration-none"
            >
              Start Free Trial
            </a>
            <a
              href="https://voice.astraventa.com/signup"
              className="bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer text-decoration-none"
            >
              <span>Explore Dashboard ($29/mo)</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Global Sound Toggle Controls in Top-Right Corner of video */}
        <div className="absolute top-24 md:top-28 right-6 md:right-12 z-30 flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white transition duration-300 cursor-pointer shadow-lg active:scale-95 group flex items-center gap-2"
            title={isMuted ? "Unmute Video Background" : "Mute Video Background"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white/80 group-hover:text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
            )}
            <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-white/80 group-hover:text-white hidden sm:inline">
              {isMuted ? "Sound: Off" : "Sound: On"}
            </span>
          </button>
        </div>

        {/* Bottom Left Card */}
        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:bottom-10 md:left-10 z-20 flex flex-col items-start gap-3 bg-white/30 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-xl max-w-[280px] sm:max-w-[260px] text-white mx-auto sm:mx-0">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-1">Network Capacity</span>
            <span className="text-2xl font-bold tracking-tight">5.2M Daily Minutes</span>
          </div>
          <a
            href="https://voice.astraventa.com/signup"
            className="w-full text-center bg-white text-[#0a1b3a] hover:bg-white/95 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer text-decoration-none"
          >
            Get Started Free
          </a>
        </div>

        {/* Bottom Right Corner Architectural Cut-out */}
        <div className="hidden md:flex absolute bottom-0 right-0 bg-[#f0f0f0] p-6 pt-8 pl-14 rounded-tl-[3.5rem] z-20 items-center gap-4 shadow-[-10px_10px_30px_rgba(0,0,0,0.02)]">
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
              <span className="text-sm text-black/80 font-bold tracking-tight">API & Console Specs</span>
            </div>
          </a>
        </div>

      </section>
    </div>
  );
}
