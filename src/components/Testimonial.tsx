import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8 border-t border-black/5">
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="max-w-[950px] mx-auto text-center flex flex-col items-center">
          
          {/* Company Logo / Brand Name from public folder */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <img 
              src="/logo.jpg" 
              alt="imopshub" 
              className="h-9 w-auto object-contain rounded-lg opacity-85 select-none hover:opacity-100 transition-opacity"
              onError={(e) => {
                // If logo.jpg fails or is placeholder, fallback to text logo
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-sm font-black tracking-widest text-[#0a1b3a] font-mono uppercase">
              IMOPSHUB
            </span>
          </div>

          {/* Quote Mark */}
          <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-6 text-cyan-600 shadow-sm">
            <Quote className="w-4 h-4 fill-cyan-600 text-cyan-600" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-[#0a1b3a] leading-relaxed tracking-tight mb-6 max-w-[800px]">
            "Our sales team now uses Astraventa Telecom to call and text customers from their smartphones, tablets, and the web. And because it natively bypasses automated 'Spam Likely' filters and is considerably more affordable than legacy seats, we continue to steadily expand our usage of Astraventa Telecom."
          </blockquote>

          {/* Author Metadata */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-extrabold text-black/85">
              Muhammad Tayyab
            </span>
            <span className="text-xs font-semibold text-black/45 mt-0.5">
              Founder & CEO of imopshub
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
