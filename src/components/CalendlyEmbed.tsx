import { useState, useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
}

const loadingStatuses = [
  "Initializing secure whitelisting channel...",
  "Validating carrier SIP credentials...",
  "Routing to Astraventa Telecom Node...",
  "Securing whitelisting gateway tunnel...",
  "Syncing date-time parameters...",
  "Provisioning calendar booking nodes..."
];

export default function CalendlyEmbed({ 
  url = "https://calendly.com/astraventa/15-min-technical-walkthrough-astraventa" 
}: CalendlyEmbedProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const [statusIdx, setStatusIdx] = useState(0);

  // Cycle statuses to keep users intrigued/distracted
  useEffect(() => {
    if (!iframeLoading) return;
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % loadingStatuses.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [iframeLoading]);

  // Clean Embed URL (remove landing page details for professional integration checkout look)
  const embedUrl = `${url}?embed_domain=telecom.astraventa.com&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`;

  return (
    <div className="w-full relative min-h-[700px] sm:min-h-[600px] flex flex-col items-center justify-center bg-white rounded-3xl overflow-hidden border border-black/5">
      
      {/* Brain-Tricking High-Tech Loading Spinner overlay */}
      {iframeLoading && (
        <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center p-6 space-y-6">
          
          {/* Pulsing ring animation */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#0052cc]/10 border-t-[#0052cc] animate-spin" />
            {/* Inner pulsing pulse core */}
            <div className="w-8 h-8 rounded-full bg-[#0052cc]/10 animate-ping absolute" />
            <div className="w-6 h-6 rounded-full bg-[#0052cc]/20 relative z-10" />
          </div>

          <div className="text-center space-y-2 max-w-xs animate-pulse">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#0052cc]">Gateway Syncing</h4>
            <p className="text-[11px] text-slate-500 font-sans font-medium h-8 flex items-center justify-center">
              {loadingStatuses[statusIdx]}
            </p>
          </div>
        </div>
      )}

      {/* Main Calendly Iframe */}
      <iframe
        src={embedUrl}
        onLoad={() => setIframeLoading(false)}
        className={`w-full min-h-[700px] sm:min-h-[600px] h-[750px] sm:h-[650px] border-none z-10 transition-opacity duration-700 ${
          iframeLoading ? "opacity-0" : "opacity-100"
        }`}
        allow="camera; microphone; autoplay; clipboard-write; encrypted-media"
      />
    </div>
  );
}
