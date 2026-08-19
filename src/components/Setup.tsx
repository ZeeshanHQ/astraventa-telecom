import { Globe, Users2, Mic } from "lucide-react";
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
    title: "Pick Your Business Number",
    desc: "Select a dedicated US/Canada local number or toll-free line. Ready to dial in seconds with zero hardware.",
    icon: (
      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
        <Globe className="w-5 h-5" />
      </div>
    ),
  },
  {
    stepNum: "STEP 02",
    title: "Invite & Assign Agents",
    desc: "Create Admin, Manager, and Agent seats with custom permissions, shared lines, and personal privacy logs.",
    icon: (
      <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
        <Users2 className="w-5 h-5" />
      </div>
    ),
  },
  {
    stepNum: "STEP 03",
    title: "Dial from Web Dashboard",
    desc: "No software or softphone to install. Dial, text, and access crystal-clear HD call recordings directly in your browser.",
    icon: (
      <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
        <Mic className="w-5 h-5" />
      </div>
    ),
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
        
        {/* Header - Clean, No Top Label */}
        <div className="text-center mb-14 md:mb-20 max-w-[800px] mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Go live with your team in under 60 seconds.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Zero complicated PBX server installations. Simply sign up, pick your business numbers, assign agent seats, and dial directly from any browser.
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
