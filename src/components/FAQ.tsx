import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I connect my dialer or softphone?",
    answer: "Our integration engineers configure your secure SIP trunks and deliver direct credentials. You can bind them into any SIP-compatible softphone, PBX core, or CRM platform in under 5 minutes. No complex programming or code is required.",
  },
  {
    question: "Is there a limit on daily routed call minutes?",
    answer: "No. Our Tier-1 network backhauls are engineered for high-throughput, supporting millions of daily routed minutes. We handle wholesale outbound volume slabs with whitelisted reputation nodes that bypass carrier-level throttling.",
  },
  {
    question: "How does localized Caller ID rotation work?",
    answer: "Our routing nodes match outbound numbers to target local area codes dynamically. This native rotation is compliant with STIR/SHAKEN standards, keeping your lines whitelisted by carrier filters and preventing 'Spam Likely' tags.",
  },
  {
    question: "Are there any per-seat agent platform fees?",
    answer: "No. We have completely eliminated per-seat software licensing fees. You pay purely for wholesale carrier utilization starting from a $10 setup credit ($5 calling credit grants over 250 minutes of talk-time). Add or remove outbound seats as you please.",
  },
  {
    question: "How does the trunk health standby redundancy work?",
    answer: "If an upstream carrier network node experiences latency peaks or connection drops, our fail-safe routing layer automatically redirects outgoing calls to hot-standby nodes within 180ms, ensuring call center connectivity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 border-t border-black/5">
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tight mb-12">
          Frequently asked questions
        </h2>

        {/* Accordion List */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-sans font-medium text-sm sm:text-base text-black hover:text-black/85 transition-colors cursor-pointer group"
                >
                  <span className="leading-snug pr-4">{item.question}</span>
                  <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center text-black/60 group-hover:text-black group-hover:border-black/20 transition-all flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-3 h-3 text-black/80" />
                    ) : (
                      <Plus className="w-3 h-3 text-black/80" />
                    )}
                  </div>
                </button>

                {/* Answer block with height animations */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal max-w-[900px] pl-1">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
