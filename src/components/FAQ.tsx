import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need to install any software or softphone?",
    answer: "No. Astraventa Voice is 100% web-based. Simply log into your dashboard in Google Chrome, Safari, or on mobile to start calling, texting, and accessing recordings immediately. No hardware deskphones or manual SIP configurations needed.",
  },
  {
    question: "Can I assign different phone numbers to specific agents?",
    answer: "Yes. You can assign dedicated US/Canada phone numbers to individual sales reps or create shared group lines where incoming calls ring multiple team members at the same time.",
  },
  {
    question: "Are call recordings really 100% free and automatic?",
    answer: "Yes. Every inbound and outbound call is automatically recorded in crystal-clear HD audio with no extra fees or storage caps. You can listen, search, and review call logs anytime from your web dashboard.",
  },
  {
    question: "Are there any hidden setup fees or per-seat penalties?",
    answer: "No. You pay straightforward monthly pricing starting at $29/mo for 2 seats, $79/mo for 5 seats, and $199/mo for up to 15 seats. Every tier includes dedicated numbers, monthly talk minutes, and free SMS.",
  },
  {
    question: "Can I bring and port my existing business numbers?",
    answer: "Yes. You can port your existing US, Canada, or toll-free numbers for free with zero downtime or service interruption.",
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
