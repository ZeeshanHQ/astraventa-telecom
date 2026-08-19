import { useRef } from "react";
import {
  PhoneCall,
  ShieldCheck,
  CheckCircle,
  RefreshCw,
  DollarSign,
  Activity,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const services = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Tier-1 SIP Trunking",
      description:
        "Connect directly to private, whitelisted US telecom trunks with zero-latency audio routing nodes, bypassing congested public pools completely.",
      position: "left",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Whitelisted Carrier Pools",
      description:
        "Bypass automated 'Spam Likely' filters natively. Our dynamic pools ensure outgoing lines remain clean and whitelisted by major wireless carriers.",
      position: "left",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "STIR/SHAKEN Level A",
      description:
        "Certified attestation mapped directly at the carrier level, declaring verified business relationships and authorizing telephone usage.",
      position: "left",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Caller ID Rotation",
      description:
        "Rotate localized DIDs dynamically matching targeted area codes to optimize outreach efficiency and connection percentages.",
      position: "right",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Volume Billing Slabs",
      description:
        "No monthly software licenses. Pay purely for network utilization starting at $99. $50 credit yields 2,500 minutes of talk-time.",
      position: "right",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Fail-Safe Routing",
      description:
        "24/7 technical monitoring layer automatically switching call traffic to hot-standby backup nodes if latency occurs.",
      position: "right",
    },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-8 px-4 bg-[#f9fafb] text-[#0a1b3a] overflow-hidden relative border-t border-black/5"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyan-600/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#0a1b3a]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-8 md:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center tracking-tight">Core Infrastructure</h2>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-20 text-[#0a1b3a]/70 font-medium text-sm leading-relaxed" variants={itemVariants}>
          Managed carrier-grade voice routing designed for high-density sales floors and outbound outreach campaigns. Backed by the advanced engineering division of Astraventa.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first lg:order-none mb-8 lg:mb-0">
            <motion.div className="relative w-full max-w-sm" variants={itemVariants}>
              <motion.div
                className="rounded-[2rem] overflow-hidden shadow-xl border border-black/5 bg-white p-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3000&auto=format&fit=crop"
                  alt="Astraventa Operations"
                  className="w-full h-[320px] object-cover rounded-[1.5rem]"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-cyan-600/20 rounded-[2rem] -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                />
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-14 w-full rounded-3xl bg-gradient-to-r from-red-50/70 via-slate-50/70 to-cyan-50/70 border border-black/5 py-7 px-8 md:py-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight leading-none">Ready to integrate dynamic voice trunks?</h3>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-medium">Instant automated provisioning in under 60 seconds. Starter tiers begin from $29/mo.</p>
          </div>
          <a
            href="https://voice.astraventa.com/signup"
            className="bg-[#0052cc] hover:bg-[#0047b3] text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap self-stretch md:self-auto text-center text-decoration-none"
          >
            <span>Managed Onboarding</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: any;
  delay: number;
}

function ServiceItem({ icon, title, description, variants, delay }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center gap-3.5 mb-3">
        <div className="text-cyan-600 bg-cyan-50 border border-cyan-100 p-2.5 rounded-xl transition-colors duration-300 group-hover:bg-cyan-100">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#0a1b3a]">
          {title}
        </h3>
      </div>
      <p className="text-xs text-[#0a1b3a]/75 leading-relaxed pl-12 font-semibold">
        {description}
      </p>
    </motion.div>
  );
}

