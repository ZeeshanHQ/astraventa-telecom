import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-[#f0f0f0] px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[860px] mx-auto">

        {/* Back link */}
        <a href="#/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-14 font-mono group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>

        {/* Logo */}
        <div className="mb-12">
          <img src="/logo.png" alt="Astraventa Telecom" className="h-16 w-auto object-contain object-left select-none" />
        </div>

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-black/35 font-mono block mb-3">Legal Documentation</span>
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none mb-4">Privacy Policy</h1>
          <p className="text-sm text-black/50 font-medium">Last updated: July 2, 2026 &nbsp;·&nbsp; Effective immediately</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 mb-14" />

        {/* Content */}
        <div className="space-y-14 text-sm text-black/70 leading-relaxed font-medium">

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">1. About Astraventa</h2>
            <p>Astraventa Telecom is a division of Astraventa Advanced Engineering, a technology and telecommunications infrastructure company. We provide managed carrier-grade voice routing, whitelisted SIP trunk provisioning, Caller ID rotation services, and associated network infrastructure. This Privacy Policy applies to all services operated under the Astraventa Telecom brand.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">2. Information We Collect</h2>
            <p className="mb-3">We collect minimal, purposeful data to operate and improve our services. This includes:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span><strong className="text-black font-bold">Contact Information:</strong> Name, business email, and phone number provided when requesting test trunks or accessing services.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span><strong className="text-black font-bold">Call Detail Records (CDRs):</strong> Metadata pertaining to call volume, duration, routing paths, and timestamps required for billing reconciliation and fraud prevention.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span><strong className="text-black font-bold">Technical Identifiers:</strong> SIP credentials, assigned DID numbers, and routing node configurations necessary for service delivery.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span><strong className="text-black font-bold">Usage Data:</strong> Aggregate utilization metrics used to optimize trunk capacity and routing node performance.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">Data collected is used exclusively for:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Provisioning and managing your allocated telecom trunk resources.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Generating transparent billing statements and call detail records.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Maintaining STIR/SHAKEN Level A compliance and carrier whitelist status.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Detecting and preventing fraudulent usage or unauthorized trunk access.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Contacting you regarding service status, maintenance windows, or critical routing updates.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">4. Data Retention</h2>
            <p>Call detail records and billing data are retained for a minimum of 24 months in compliance with US telecommunications regulations. Contact information is retained for the duration of the business relationship and deleted within 30 days of a written deletion request.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">5. Third-Party Sharing</h2>
            <p>We do not sell, trade, or rent your personal information. We may share technical metadata with upstream carrier partners (including Telnyx and interconnected Tier-1 carriers) solely as required to route calls and maintain STIR/SHAKEN attestation. All third parties are contractually bound to equivalent data protection standards.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">6. Security</h2>
            <p>All data is encrypted in transit using TLS 1.3. SIP credentials are stored with AES-256 encryption. Access to call records is restricted to authorized Astraventa engineering personnel on a need-to-know basis. We conduct regular internal security audits on all infrastructure nodes.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">7. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of personal data we hold about you. To exercise any of these rights, contact our data desk at <a href="mailto:zeeshan@astraventa.com" className="text-black font-bold hover:underline">zeeshan@astraventa.com</a>. We will respond within 30 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy as our services evolve. Material changes will be communicated via email to all active account holders. Continued use of our services after notification constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">9. Contact</h2>
            <p>For any privacy-related inquiries, write to our data protection desk:</p>
            <div className="mt-4 bg-white rounded-2xl p-6 border border-black/5 space-y-2">
              <p className="font-bold text-black">Astraventa Advanced Engineering</p>
              <a href="mailto:zeeshan@astraventa.com" className="text-black/60 hover:text-black transition-colors block">zeeshan@astraventa.com</a>
              <a href="tel:+19255040101" className="text-black/60 hover:text-black transition-colors block">+1 925 504 0101</a>
              <a href="https://wa.me/923055255838" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors block">WhatsApp: +92 305 525 5838</a>
            </div>
          </section>

        </div>

        {/* Footer divider */}
        <div className="w-full h-px bg-black/10 mt-16 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-xs text-black/35 font-bold">&copy; 2026 Astraventa. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#/terms" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Terms of Service</a>
            <a href="#/" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Back to Home</a>
          </div>
        </div>

      </div>
    </div>
  );
}
