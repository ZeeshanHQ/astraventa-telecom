import { Network, Cpu } from "lucide-react";

function scrollTo(id: string) {
  // If we're not on the home page, navigate home first then scroll
  if (window.location.hash && window.location.hash !== "#/" && !window.location.hash.startsWith("#/#")) {
    window.location.hash = "#/";
    // Wait for the page to render, then scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#f0f0f0]">
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-24 border-t border-black/15 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Side: Logo + Description */}
        <div className="flex flex-col max-w-sm gap-5">
          <a href="#/" className="inline-block">
            <img
              src="/logo.png"
              alt="Astraventa Telecom"
              className="h-16 w-auto object-contain object-left select-none"
            />
          </a>
          <p className="text-sm text-black/55 leading-relaxed font-medium">
            Provisioning whitelisted routing nodes and dynamic Caller ID rotation to guarantee maximum voice campaign connection rates. A division of Astraventa Advanced Engineering.
          </p>
        </div>

        {/* Right Side Link Grid */}
        <div className="grid grid-cols-3 gap-8 sm:gap-12 md:gap-16">

          {/* Column 1: Network */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-4">
              Network
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="#/infrastructure"
                  className="text-sm text-black/50 hover:text-black transition-colors font-medium cursor-pointer"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("pricing")}
                  className="text-sm text-black/50 hover:text-black transition-colors font-medium text-left"
                >
                  Trunk Slabs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("standards")}
                  className="text-sm text-black/50 hover:text-black transition-colors font-medium text-left"
                >
                  Carrier Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-4">
              Engineering
            </span>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollTo("setup")}
                  className="text-sm text-black/50 hover:text-black transition-colors font-medium text-left"
                >
                  Setup Flow
                </button>
              </li>
              <li>
                <a href="#/docs" className="text-sm text-black/50 hover:text-black transition-colors font-medium">
                  Documentation
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("standards")}
                  className="text-sm text-black/50 hover:text-black transition-colors font-medium text-left"
                >
                  Trunk Health
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Desk */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-4">
              Support Desk
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/923055255838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black/50 hover:text-black transition-colors font-medium"
                >
                  WhatsApp Direct
                </a>
              </li>
              <li>
                <a href="mailto:zeeshan@astraventa.com" className="text-sm text-black/50 hover:text-black transition-colors font-medium">
                  Email Desk
                </a>
              </li>
              <li>
                <a href="tel:+19255040101" className="text-sm text-black/50 hover:text-black transition-colors font-medium">
                  +1 925 504 0101
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-6 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-black/40 font-bold">
        <span>&copy; 2026 Astraventa. All rights reserved.</span>
        <div className="flex gap-6 items-center flex-wrap">
          <a href="#/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#/terms" className="hover:text-black transition-colors">Terms of Service</a>
          <div className="w-px h-3 bg-black/10 hidden sm:block" />
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors flex items-center gap-1.5 text-black/55 text-[10px] uppercase tracking-wider"
          >
            <Network className="w-3.5 h-3.5 text-black/40" />
            <span>Sitemap</span>
          </a>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors flex items-center gap-1.5 text-black/55 text-[10px] uppercase tracking-wider"
          >
            <Cpu className="w-3.5 h-3.5 text-black/40" />
            <span>AI Index</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
