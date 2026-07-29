import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <div className="w-full flex items-center justify-center p-4 md:p-8 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1720px] min-h-[500px] md:min-h-[620px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center group py-28 px-12">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4"
            type="video/mp4"
          />
        </video>

        {/* Video Tint Overlay */}
        <div className="absolute inset-0 bg-black/35 z-0 pointer-events-none" />

        {/* CTA Content Layer */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-[700px] text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-10 leading-[1.1] max-w-[15ch]">
            Melt legacy licensing into fluid call routing.
          </h2>

          <div className="flex flex-row items-center gap-4 justify-center flex-wrap">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
              className="bg-white hover:bg-white/90 text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2.5 transition duration-300 shadow-lg active:scale-95 cursor-pointer border-none"
            >
              <span>Connect with an Architect</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
            
            <a 
              href="tel:+19255040101"
              className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-sm transition duration-300 active:scale-95 cursor-pointer flex items-center gap-2.5 text-decoration-none"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call Direct US Line</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
