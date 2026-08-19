import { motion } from "motion/react";

interface MetricItem {
  prefix?: string;
  value: string;
  label: string;
  sub: string;
}

const metrics: MetricItem[] = [
  {
    value: "99.99%",
    label: "Carrier Uptime SLA",
    sub: "Direct Tier-1 Telnyx voice interconnects",
  },
  {
    value: "< 60s",
    label: "Instant Number Setup",
    sub: "Order US, Canada & 800 Toll-Free numbers",
  },
  {
    value: "100%",
    label: "Free HD Call Recording",
    sub: "Unlimited audio logs & CRM contact notes",
  },
  {
    prefix: "<",
    value: "120ms",
    label: "WebRTC Audio Latency",
    sub: "Crystal-clear browser calls without delays",
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
    <div id="infrastructure" className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-12 md:py-24 bg-[#f0f0f0]">
      <div className="bg-[rgba(30,50,90,0.02)] border border-[rgba(30,50,90,0.05)] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden"
        >
          {metrics.map((m, i) => {
            const borderClasses = `
              p-6 md:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[220px] transition-colors duration-300 hover:bg-[rgba(30,50,90,0.015)]
              ${i !== 3 ? "border-b" : ""} 
              ${i < 2 ? "sm:border-b" : "sm:border-b-0"} 
              ${i % 2 === 0 ? "sm:border-r" : "sm:border-r-0"} 
              lg:border-b-0 
              ${i !== 3 ? "lg:border-r" : "lg:border-r-0"} 
              border-[rgba(30,50,90,0.1)]
            `;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={borderClasses}
              >
                <div className="flex flex-col">
                  <span className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-black mb-2 select-none whitespace-nowrap">
                    {m.prefix && (
                      <span className="text-3xl md:text-5xl mr-1 font-heading font-extrabold">{m.prefix}</span>
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
