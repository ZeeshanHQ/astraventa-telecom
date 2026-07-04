import { motion } from "motion/react";

interface MetricItem {
  prefix?: string;
  value: string;
  label: string;
  sub: string;
}

const metrics: MetricItem[] = [
  {
    value: "45M+",
    label: "Daily Routed Minutes",
    sub: "Direct carrier routing via private hubs",
  },
  {
    value: "84.2%",
    label: "Average Answer Rate",
    sub: "Achieved by bypassing blacklisted pools",
  },
  {
    value: "250K+",
    label: "Whitelisted Active DIDs",
    sub: "Clean localized DIDs rotating hourly",
  },
  {
    prefix: "<",
    value: "180ms",
    label: "Call Setup Latency",
    sub: "Zero-latency audio routing nodes",
  },
];

export default function Metrics() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
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
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div id="infrastructure" className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12 bg-[#f0f0f0]">
      <div className="bg-[rgba(30,50,90,0.02)] border border-[rgba(30,50,90,0.05)] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden"
        >
          {metrics.map((m, i) => {
            const borderClasses = `
              p-6 md:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[220px] transition-colors duration-300 hover:bg-[rgba(30,50,90,0.015)]
              ${i % 2 === 0 ? "border-r" : ""} 
              ${i < 2 ? "border-b" : ""} 
              lg:border-b-0 
              ${i !== 3 ? "lg:border-r" : ""} 
              border-[rgba(30,50,90,0.1)]
            `;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={borderClasses}
              >
                <div className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-black tracking-tight text-black mb-2 select-none whitespace-nowrap">
                    {m.prefix && (
                      <span className="text-3xl md:text-5xl mr-1 font-black">{m.prefix}</span>
                    )}
                    {m.value}
                  </span>
                  <span className="text-sm font-bold text-black/70 tracking-tight">
                    {m.label}
                  </span>
                </div>
                <span className="text-xs text-black/40 mt-4 leading-normal font-medium">
                  {m.sub}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
