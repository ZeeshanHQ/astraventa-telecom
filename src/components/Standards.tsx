import { motion } from "motion/react";
import { ArrowRight, ArrowDown, HelpCircle, ShieldCheck } from "lucide-react";

interface StandardItem {
  dontSay: string;
  say: string;
  spec: string;
}

const standards: StandardItem[] = [
  {
    dontSay: "Good voice quality",
    say: "Crystal-clear Tier-1 SIP Trunking",
    spec: "Zero-latency audio routing nodes via direct whitelisted carrier interconnects.",
  },
  {
    dontSay: "Cheap minutes packages",
    say: "Wholesale corporate volume slabs",
    spec: "Enterprise-tier volume commitments with pay-as-you-go dynamic usage billing.",
  },
  {
    dontSay: "We give custom phone numbers",
    say: "Localized Caller ID Rotation",
    spec: "STIR/SHAKEN compliant localized DID provisioning to match target demographics.",
  },
  {
    dontSay: "It won't ban or block like consumer tools",
    say: "Whitelisted Carrier Pools",
    spec: "Natively bypass automated 'Spam Likely' filters by utilizing clean, non-recycled trunks.",
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
    <section id="standards" className="w-full bg-[#f0f0f0] py-16 md:py-28 px-3 md:px-5">
      <div className="w-full max-w-[1536px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-[700px]">
          <span className="text-xs uppercase tracking-widest text-black/40 font-bold block mb-2 font-mono">
            Carrier Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
            How we specify performance
          </h2>
          <p className="text-sm text-black/60 leading-relaxed font-medium">
            We don't use consumer marketing clichés. We build and document enterprise-grade telecom infrastructure designed for cold-calling floors.
          </p>
        </div>

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
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-black/5 transition-all duration-300 min-h-[220px]"
            >
              <div className="flex flex-col gap-4">
                {/* Traditional / Don't Say */}
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 text-red-500 rounded-full p-1.5 flex-shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-red-500/70 tracking-widest font-mono">Legacy Telecom Cliché</span>
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
                    <span className="text-[10px] uppercase font-black text-emerald-600 tracking-widest font-mono">RIVR Carrier Standard</span>
                    <span className="text-base md:text-lg font-black text-black tracking-tight">
                      {s.say}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spec Subtext */}
              <div className="border-t border-black/5 mt-6 pt-4 text-xs text-black/55 font-medium leading-relaxed font-mono">
                {s.spec}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
