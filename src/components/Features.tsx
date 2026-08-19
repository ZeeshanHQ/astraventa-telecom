import { Users, Users2, PhoneForwarded, Mic, ArrowRight, PhoneIncoming, PhoneCall, Map, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="workplace-features" className="w-full bg-[#f9fafb] pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8 border-t border-slate-200/60">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header with Scroll Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Everything your agents need to close, collaborate & scale.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              No complicated telecom setup. Simple role permissions, shared business lines, HD call recordings, and team analytics built right into your browser.
            </p>
          </div>
          <a 
            href="https://voice.astraventa.com/signup"
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer text-decoration-none shadow-sm flex items-center gap-2 flex-shrink-0"
          >
            <span>Explore Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* 3-Card Quo / OpenPhone Style Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          
          {/* Card 1: Set up a business number in minutes */}
          <div className="bg-white rounded-[1.75rem] md:rounded-[2.25rem] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Set up a business number in minutes
              </h3>
              <a 
                href="https://voice.astraventa.com/signup" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 text-decoration-none"
              >
                <span>Get a number</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Interactive Phone Number Picker Mockup */}
              <div className="pt-4 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/70 transition">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">CA</span>
                    <span className="font-semibold text-slate-800">(778) 760-9147</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-sans">British Columbia</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 border-2 border-blue-500 text-blue-900 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded">US</span>
                    <span className="font-bold text-blue-950">(618) 368-5046</span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 font-sans">Illinois (Selected)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/70 transition">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">TF</span>
                    <span className="font-semibold text-slate-800">(800) 656-8810</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-sans">Toll-Free 800</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/70 transition">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">US</span>
                    <span className="font-semibold text-slate-800">(415) 851-6951</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-sans">California</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 mt-4">
              Instant activation with zero paperwork or delays. Port your existing line anytime.
            </p>
          </div>

          {/* Card 2: Share one number & assign agents */}
          <div className="bg-white rounded-[1.75rem] md:rounded-[2.25rem] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Share one number & stay aligned with your team
              </h3>
              <a 
                href="https://voice.astraventa.com/signup" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 text-decoration-none"
              >
                <span>Shared team lines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Chat & Shared Call Event Mockup */}
              <div className="pt-4 space-y-3 font-sans">
                {/* Call Log Badge */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Inbound Call Ended (04:12)</div>
                      <div className="text-[11px] text-slate-500">Handled by Agent Sarah • Auto-Recorded</div>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Sarah" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Team Internal Thread */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3.5 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-blue-200 flex-shrink-0 mt-0.5">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Alex" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-blue-950">Alex (Closer)</div>
                    <p className="text-xs text-blue-900 leading-relaxed font-medium">
                      "Client confirmed the $2,500 quote on the recorded line. Assigning CRM contract to Manager Zeeshan."
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-end gap-1.5 text-[11px] text-slate-400 font-medium pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>3 Agents Live on Line</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 mt-4">
              Owner, Admin & Agent permission roles with personal privacy logs.
            </p>
          </div>

          {/* Card 3: Route incoming calls to the right person */}
          <div className="bg-white rounded-[1.75rem] md:rounded-[2.25rem] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Route incoming calls to the right person instantly
              </h3>
              <a 
                href="https://voice.astraventa.com/signup" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 text-decoration-none"
              >
                <span>Smart call routing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Call Flow Tree Diagram Mockup */}
              <div className="pt-4 space-y-2.5 font-sans">
                <div className="bg-slate-900 text-white rounded-xl p-3 flex items-center justify-between text-xs font-medium shadow-sm">
                  <span className="flex items-center gap-2">
                    <PhoneIncoming className="w-3.5 h-3.5 text-blue-400" />
                    <span>Incoming Customer Call</span>
                  </span>
                  <span className="font-mono text-[10px] bg-slate-800 px-2 py-0.5 rounded text-blue-300">DID #1</span>
                </div>

                <div className="flex justify-center my-0.5">
                  <div className="w-0.5 h-4 bg-slate-300" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50 border border-blue-200/80 rounded-xl p-2.5 space-y-1">
                    <div className="font-bold text-blue-950 flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-blue-600" /> Ring Sales Team
                    </div>
                    <p className="text-[10px] text-blue-800 font-medium">Rings 4 active reps for 30s</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200/80 rounded-xl p-2.5 space-y-1">
                    <div className="font-bold text-purple-950 flex items-center gap-1.5">
                      <PhoneForwarded className="w-3 h-3 text-purple-600" /> AI Receptionist
                    </div>
                    <p className="text-[10px] text-purple-800 font-medium">Auto-qualify & warm forward</p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2.5 flex items-center justify-between text-xs text-emerald-900 font-medium mt-2">
                  <span className="flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-emerald-600" /> Crystal-Clear HD Recording
                  </span>
                  <span className="font-bold text-[11px] font-mono text-emerald-700">100% Free</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 mt-4">
              Zero dropped leads. Intelligent warm-transfers to your cell phone in real-time.
            </p>
          </div>

        </div>

        {/* Quo-Style Banner: "Switch from any provider for free" */}
        <div className="bg-white rounded-[1.75rem] md:rounded-[2.25rem] border border-slate-200/90 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 pb-8 border-b border-slate-100">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Switch from any provider for free
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Keep your existing numbers with zero downtime and no transfer fees.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://voice.astraventa.com/signup"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-full text-xs font-bold transition text-decoration-none"
              >
                Try for free
              </a>
              <a
                href="https://voice.astraventa.com/signup?action=port"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-xs font-bold transition text-decoration-none shadow-sm"
              >
                Port your number
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                <Map className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Step-by-step guidance</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Clear timelines, real-time status updates, and engineering support when you need it.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
                <Users2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Priority support during the switch</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Get all your questions answered fast by our dedicated telecom engineers during transfer.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Stay reachable the whole time</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Zero service disruptions. Keep receiving customer calls throughout the porting window.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
