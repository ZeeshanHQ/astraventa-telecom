import { motion } from "motion/react";
import { ArrowRight, ArrowDown, HelpCircle, ShieldCheck } from "lucide-react";

interface StandardItem {
  dontSay: string;
  say: string;
  spec: string;
}

const standards: StandardItem[] = [
  {
    dontSay: "Complex Hardware & PBX Setup",
    say: "1-Click In-Browser Web Dashboard Calling",
    spec: "Zero deskphones or complicated manual setups. Dial and text instantly from any Chrome, Safari, or mobile browser.",
  },
  {
    dontSay: "Expensive Per-Agent Licensing Fees",
    say: "Transparent Flat-Rate Team Plans",
    spec: "Plans from $29/mo with multi-agent seats, dedicated US numbers, and preloaded talk minutes included.",
  },
  {
    dontSay: "Locked Private Agent Numbers",
    say: "Shared Business Lines & Smart Routing",
    spec: "Assign numbers to your sales reps with customizable ring groups, auto-attendants, and warm transfers.",
  },
  {
    dontSay: "Hidden Add-ons for Recordings & Logs",
    say: "100% Free HD Audio Recording & Logs",
    spec: "Every inbound and outbound call is automatically recorded in HD with searchable timeline history and contact notes.",
  },
];

export default function Standards() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 14,
      },
    },
  };

  return (
    <section id="standards" className="w-full bg-[#f9fafb] pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-8">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header with Scroll Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 max-w-[750px] space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Modern workspace calling vs. legacy telecom.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            We removed the complicated technical hurdles. Here is how Astraventa makes business communication simple and accessible.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {standards.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white rounded-[1.75rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-slate-200/80 transition-all duration-300 min-h-[220px]"
            >
              <div className="flex flex-col gap-4">
                {/* Traditional / Don't Say */}
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 text-red-500 rounded-full p-1.5 flex-shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-red-500/70 tracking-widest font-mono">Traditional Provider</span>
                    <span className="text-sm font-semibold text-black/40 line-through tracking-tight">
                      "{s.dontSay}"
                    </span>
                  </div>
                </div>

                {/* Arrow indicator (horizontal on desktop, vertical on mobile) */}
                <div className="pl-3.5 text-black/20">
                  <ArrowDown className="w-4 h-4 md:hidden" />
                  <ArrowRight className="w-4 h-4 hidden md:block" />
                </div>

                {/* Modern / Say */}
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-50 text-emerald-500 rounded-full p-1.5 flex-shrink-0 shadow-sm shadow-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-widest font-mono">Astraventa Standard</span>
                    <span className="text-base md:text-lg font-heading font-semibold text-black tracking-tight">
                      {s.say}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spec Subtext */}
              <div className="border-t border-slate-100 mt-6 pt-4 text-xs text-slate-500 font-medium leading-relaxed">
                {s.spec}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
