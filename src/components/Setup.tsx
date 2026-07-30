import { KeyRound, ShieldCheck, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  stepNum: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    stepNum: "STEP 01",
    title: "Setup credentials",
    desc: "Generate secure, whitelisted SIP trunk credentials for your outbound voice campaigns in under a minute.",
    icon: <KeyRound className="w-6 h-6 text-[#0052cc]" />,
  },
  {
    stepNum: "STEP 02",
    title: "Register softphone",
    desc: "Bind credentials directly into your active dialer, PBX cluster, or softphone console.",
    icon: <ShieldCheck className="w-6 h-6 text-[#0052cc]" />,
  },
  {
    stepNum: "STEP 03",
    title: "Start calling",
    desc: "Initiate high-volume outbound campaigns with Tier-1 connection attestation that bypasses carrier spam blocks.",
    icon: <PhoneCall className="w-6 h-6 text-[#0052cc]" />,
  },
];

export default function Setup() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="setup" className="w-full bg-[#f9fafb] py-8 md:py-12 px-4 md:px-8 border-t border-black/5">
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight mb-4 leading-none">
            5-minute setup
          </h2>
          <p className="text-sm text-black/60 leading-relaxed font-medium max-w-[600px]">
            You do not need to be technical. Our integration desk handles all whitelisting, gateway configurations, and routing setups for you.
          </p>
        </div>

        {/* Premium Meta-style Cards Grid - 3 Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start text-left"
            >
              {/* Top Row: Icon and Step Number Label */}
              <div className="w-full flex items-center justify-between mb-8">
                <div className="p-1">
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#0052cc] bg-[#0052cc]/5 px-2.5 py-1 rounded-full uppercase">
                  {s.stepNum}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-black tracking-tight mb-3">
                {s.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
