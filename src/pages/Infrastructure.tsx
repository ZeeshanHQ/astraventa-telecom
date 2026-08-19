import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Infrastructure() {
  return (
    <div className="w-full min-h-screen bg-[#f9fafb]">
      
      {/* Top Header Navbar */}
      <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity select-none">
            <img src="/astraventa-white.png" alt="Astraventa Logo" className="h-7 w-auto object-contain" />
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Astraventa
            </span>
          </a>
          <a 
            href="#/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-16">

        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
            Global Voice Network Infrastructure
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Engineered for high-volume sales teams, support desks, and call centers requiring sub-second call setup, zero dropped audio, and clean carrier reputation.
          </p>
        </div>

        {/* 3-Column Architecture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Tier-1 Direct Carrier Routing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Direct interconnection with major telecom carriers across North America and Europe. Eliminates intermediary hops to deliver HD audio fidelity and 99.99% uptime.
              </p>
            </div>
            <div className="text-[11px] font-mono font-semibold text-blue-700 bg-blue-50/70 px-3 py-1.5 rounded-xl w-fit">
              99.99% SLA Uptime
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Caller ID Reputation Protection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Continuous automated reputation monitoring for every assigned business number. Ensures cold outbound campaigns stay verified and bypass 'Spam Likely' filters.
              </p>
            </div>
            <div className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50/70 px-3 py-1.5 rounded-xl w-fit">
              STIR/SHAKEN Level A
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Sub-120ms In-Browser Audio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Modern WebRTC protocol establishes real-time audio streams directly inside your browser. No softphone software to install, configure, or troubleshoot.
              </p>
            </div>
            <div className="text-[11px] font-mono font-semibold text-indigo-700 bg-indigo-50/70 px-3 py-1.5 rounded-xl w-fit">
              Zero Software Required
            </div>
          </div>

        </div>

        {/* Bottom CTA Card */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to launch your business calling workspace?
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Get dedicated numbers, agent seats, and preloaded minutes in under 60 seconds.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://voice.astraventa.com/signup"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-sm transition shadow-sm text-decoration-none inline-flex items-center gap-2"
            >
              <span>Get Started ($29/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
