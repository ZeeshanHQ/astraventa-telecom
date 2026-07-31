export default function Footer() {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-request-modal"));
  };

  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-24 border-t border-black/15 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Logo + Description */}
        <div className="flex flex-col max-w-xs gap-4">
          <a href="#/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity select-none">
            <img
              src="/astraventa-white.png"
              alt="Astraventa Logo"
              className="h-8 w-auto object-contain select-none"
            />
            <span className="text-lg font-semibold text-black tracking-tight font-sans">
              Astraventa
            </span>
          </a>
          <p className="text-xs sm:text-sm text-black/55 leading-relaxed font-medium">
            Managed carrier-grade voice routing and whitelisted SIP trunks for high-density outbound dialers and sales floors. Backed by Astraventa Advanced Engineering.
          </p>
          <div className="text-xs text-black/65 space-y-2.5 mt-4 font-sans font-medium">
            <div className="flex items-center gap-3">
              <img 
                src="https://flagcdn.com/us.svg" 
                alt="USA Flag Badge" 
                className="w-5 h-5 rounded-full object-cover border border-black/5 select-none"
              />
              <a href="tel:+19255040101" className="font-mono hover:text-[#0052cc] transition-colors font-bold text-black/80 text-xs">
                +1 925 504 0101
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="https://flagcdn.com/pk.svg" 
                alt="Pakistan Flag Badge" 
                className="w-5 h-5 rounded-full object-cover border border-black/5 select-none"
              />
              <a 
                href="https://wa.me/923267853405" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono hover:text-emerald-600 transition-colors font-bold text-black/80 text-xs"
              >
                +92 326 7853405
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Link Columns Grid - 3 columns of existing resources */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-16 flex-1 max-w-[700px]">

          {/* Column 1: Trunking */}
          <div>
            <span className="text-xs font-bold text-black block mb-4 font-sans tracking-tight">
              Trunking
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="#/infrastructure"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#/ai-receptionist"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  AI Receptionists
                </a>
              </li>
              <li>
                <a
                  href="#/docs"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Setup Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Direct Support */}
          <div>
            <span className="text-xs font-bold text-black block mb-4 font-sans tracking-tight">
              Direct Support
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={handleContactClick}
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Contact Integration Desk
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923267853405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  WhatsApp Live Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Privacy & Legal */}
          <div>
            <span className="text-xs font-bold text-black block mb-4 font-sans tracking-tight">
              Privacy & Legal
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="#/privacy"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#/terms"
                  className="text-xs sm:text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-6 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-black/40 font-bold">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span>&copy; 2026 Astraventa (astraventa.com). All rights reserved.</span>
          <span>&bull;</span>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Sitemap
          </a>
          <span>&bull;</span>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LLMs.txt
          </a>
        </div>
        <div className="text-right uppercase tracking-wider text-[9px] sm:text-[10px]">
          ASTRAVENTA TELECOM NETWORK &bull; VOICE CARRIER HUB
        </div>
      </div>
    </footer>
  );
}
