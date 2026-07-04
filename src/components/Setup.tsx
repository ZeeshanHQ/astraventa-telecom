import { KeyRound, ShieldCheck, PhoneCall, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Provision Node",
    desc: "Submit parameters to instantly generate secure, whitelisted SIP trunk credentials.",
    icon: <KeyRound className="w-5 h-5 text-cyan-600" />,
  },
  {
    num: "02",
    title: "Register Softphone",
    desc: "Bind credentials directly into your active dialer, PBX cluster, or softphone console.",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />,
  },
  {
    num: "03",
    title: "Initiate Campaigns",
    desc: "Start routing outbound call traffic with attested Tier-1 connection attestation.",
    icon: <PhoneCall className="w-5 h-5 text-cyan-600" />,
  },
];

export default function Setup() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
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
    <section id="setup" className="w-full bg-[#f0f0f0] py-20 md:py-32 px-3 md:px-5 border-t border-black/5">
      <div className="w-full max-w-[1536px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-[800px] mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-black/40 font-bold block mb-2 font-mono">
            Onboarding Flow
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-4 leading-none">
            5-minute setup
          </h2>
          <p className="text-sm text-black/60 leading-relaxed font-medium max-w-[600px]">
            You do not need to be technical. Our integration desk handles all whitelisting, gateway configurations, and routing setups for you.
          </p>
        </div>

        {/* Steps Flow (Flexible Direction) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 px-6 relative"
        >
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-center flex-1 w-full relative">
              
              {/* Step Node */}
              <motion.div 
                variants={stepVariants}
                className="flex flex-col items-center text-center flex-1"
              >
                {/* Icon Wrapper */}
                <div className="relative mb-6">
                  {/* Outer breathing pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-cyan-100/40 border border-cyan-200/50 scale-[1.3] animate-pulse pointer-events-none" />
                  
                  {/* Inner ring */}
                  <div className="w-16 h-16 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm relative z-10 hover:border-cyan-200 transition-colors duration-300">
                    {s.icon}
                  </div>

                  {/* Step Number Tag */}
                  <span className="absolute -top-1 -right-1 bg-cyan-600 text-white text-[9px] font-black font-mono w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#f0f0f0]">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#0a1b3a] tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-black/55 leading-relaxed font-semibold max-w-[280px]">
                  {s.desc}
                </p>
              </motion.div>

              {/* Connecting Flow indicator */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center my-4 lg:my-0 lg:mx-4 text-black/20 relative z-0 w-8 h-8 lg:w-16 lg:h-16">
                  {/* Desktop Right Arrow */}
                  <ArrowRight className="hidden lg:block w-6 h-6 animate-pulse text-cyan-600/60" />
                  {/* Mobile Down Arrow */}
                  <ArrowDown className="lg:hidden w-6 h-6 animate-pulse text-cyan-600/60" />
                </div>
              )}

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
