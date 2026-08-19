import { Check, Sparkles, PhoneCall, ArrowRight, Award, Crown, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      badge: "Starter Plan",
      badgeIcon: <Award className="w-3.5 h-3.5 text-amber-600" />,
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200/80",
      target: "Solo Closers / Small Businesses",
      priceUSD: 29,
      period: "/ month",
      isPopular: false,
      tagline: "High-impact starter suite for individual reps & solo closers.",
      included: [
        "2 Agent Seats (Owner + 1 Agent)",
        "1 Dedicated US Phone Number",
        "250 Free US/Canada Minutes / month",
        "250 Free SMS / month",
        "Automatic Call Recording & Logs",
        "In-Browser HD Web Dialer",
        "Integrated CRM Contacts & Notes"
      ],
      ctaText: "Get Starter ($29/mo)",
      ctaLink: "https://voice.astraventa.com/signup?plan=starter",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white"
    },
    {
      badge: "Growth Plan",
      badgeIcon: <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />,
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200/80",
      target: "Target 5-Person Call Center",
      priceUSD: 79,
      period: "/ month",
      isPopular: true,
      tagline: "The sweet-spot package for growing outbound & sales teams.",
      included: [
        "5 Agent Seats (Owner + 4 Agents with privacy logs)",
        "2 Dedicated US Phone Numbers",
        "1,000 Free US/Canada Minutes / month",
        "500 Free SMS / month",
        "Multi-Agent Roles & Permissions",
        "Team Performance Analytics",
        "HD Audio & Ultra-low Latency Calling",
        "Automatic Caller ID Reputation Rotation"
      ],
      ctaText: "Launch Growth ($79/mo)",
      ctaLink: "https://voice.astraventa.com/signup?plan=growth",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25"
    },
    {
      badge: "Scale / Enterprise",
      badgeIcon: <Crown className="w-3.5 h-3.5 text-emerald-600" />,
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200/80",
      target: "High-Volume Call Centers",
      priceUSD: 199,
      period: "/ month",
      isPopular: false,
      tagline: "Maximum throughput & carrier reliability for scaled floors.",
      included: [
        "Up to 15 Agent Seats",
        "5 Dedicated US Phone Numbers",
        "3,000 Free US/Canada Minutes / month",
        "1,500 Free SMS / month",
        "Priority Tier-1 Calling Lanes",
        "Warm Call Transfer & Multi-party Conference",
        "Verified Caller ID Attestation",
        "24/7 Dedicated Priority Support"
      ],
      ctaText: "Deploy Scale ($199/mo)",
      ctaLink: "https://voice.astraventa.com/signup?plan=scale",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white"
    }
  ];

  return (
    <section id="pricing" className="w-full bg-[#f9fafb] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-200/20 via-indigo-200/20 to-purple-200/20 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Clean Header - Animated Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-20 max-w-[850px] mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Simple, transparent team plans.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Everything your team needs to call, text, and close clients. Dedicated US phone numbers, agent seats, preloaded minutes, and free HD call recordings included in every plan.
          </p>
        </motion.div>

        {/* Pricing 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-[1400px] mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`rounded-[1.75rem] md:rounded-[2.25rem] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                plan.isPopular 
                  ? "border-2 border-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.12)] scale-[1.02] z-10" 
                  : "border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular Pill */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 fill-white" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wide font-mono px-3 py-1 rounded-lg border flex items-center gap-1.5 ${plan.badgeColor}`}>
                    {plan.badgeIcon}
                    <span>{plan.badge}</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 font-mono">
                    {plan.target}
                  </span>
                </div>

                {/* Price Display */}
                <div className="my-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                      ${plan.priceUSD}
                    </span>
                    <span className="text-slate-500 font-medium text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">
                    Billed monthly • Cancel anytime
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                  {plan.tagline}
                </p>

                <div className="w-full h-px bg-slate-100 mb-6" />

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 font-mono block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.included.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* CTA Button */}
                <a
                  href={plan.ctaLink}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-[0.98] text-center flex items-center justify-center gap-2 cursor-pointer text-decoration-none ${plan.buttonStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Callout / Custom High-Density Floors */}
        <div className="mt-14 max-w-[1000px] mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Need 20+ Seats, Custom DIDs, or Dedicated Trunks?</h3>
              <p className="text-xs text-slate-500 mt-0.5">We build custom multi-tenant SIP & WebRTC routing for high-volume enterprise call centers.</p>
            </div>
          </div>
          <a
            href="https://calendly.com/astraventa/15-min-technical-walkthrough-astraventa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto whitespace-nowrap bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-full text-xs font-bold transition-all text-decoration-none text-center cursor-pointer"
          >
            Talk to Enterprise Architect
          </a>
        </div>

      </div>
    </section>
  );
}
