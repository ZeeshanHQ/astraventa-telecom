import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none mb-4">Terms of Service</h1>
          <p className="text-sm text-black/50 font-medium">Last updated: July 2, 2026 &nbsp;·&nbsp; Effective immediately</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 mb-14" />

        {/* Content */}
        <div className="space-y-14 text-sm text-black/70 leading-relaxed font-medium">

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using any services provided by Astraventa Telecom, a division of Astraventa Advanced Engineering ("Astraventa", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to all terms herein, you must discontinue use of our services immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">2. Service Description</h2>
            <p className="mb-3">Astraventa Telecom provides the following managed telecommunications services:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Managed SIP trunk provisioning via whitelisted Tier-1 US carrier interconnects.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Dynamic Caller ID rotation and STIR/SHAKEN Level A compliant DID assignment.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Enterprise cloud dialer node access, provisioned at no per-seat licensing cost.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Wholesale dynamic calling credit billing with real-time call detail records.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Fail-safe routing with 24/7 monitoring and hot-standby node switching.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">3. Eligibility and Account</h2>
            <p>Services are available to registered businesses and professional users only. You represent that you are at least 18 years old, have the authority to bind your organization to these terms, and will use the services only for lawful business purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">4. Billing and Credits</h2>
            <p className="mb-3">Astraventa operates on a wholesale dynamic billing model:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>A minimum initial deposit of $10 USD is required to activate service nodes.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Calling credits are consumed based on actual wholesale network utilization. A $5 calling credit provides approximately 250 minutes of talk-time under standard Tier-1 routing conditions.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Credits are non-refundable once consumed against network utilization.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Enterprise slab pricing and volume commitments are governed by separate commercial agreements.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>All billing is in USD. Transparent real-time CDRs are available at all times through the management dashboard.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">5. Acceptable Use Policy</h2>
            <p className="mb-3">You agree not to use Astraventa Telecom services for:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Any activity that violates the Telephone Consumer Protection Act (TCPA), FCC regulations, or applicable local telecommunications law.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Automated dialing of emergency services or hospital lines.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Spoofing caller identity for fraudulent, deceptive, or criminal purposes.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Distributing malware, phishing content, or conducting social engineering attacks.</span></li>
              <li className="flex gap-3"><span className="text-black/30 font-mono mt-0.5">—</span><span>Exceeding allocated bandwidth in a manner that degrades service for other users on shared infrastructure.</span></li>
            </ul>
            <p className="mt-3">Violation of this policy will result in immediate service suspension without refund and may be reported to relevant regulatory authorities.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">6. STIR/SHAKEN Compliance</h2>
            <p>All outbound calls routed through Astraventa trunks are subject to STIR/SHAKEN attestation. You are responsible for ensuring that caller IDs assigned to your account accurately represent your business identity. Misuse of attestation credentials may result in account termination and regulatory referral.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">7. Service Availability</h2>
            <p>We target 99.9% uptime across all routing nodes. Scheduled maintenance windows will be communicated at least 48 hours in advance. Astraventa is not liable for service interruptions caused by upstream carrier outages, force majeure events, or circumstances outside our direct control. Enterprise SLA agreements with guaranteed uptime commitments are available upon request.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Astraventa's total cumulative liability arising from or related to these terms shall not exceed the total amounts paid by you for services in the 3-month period preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">9. Termination</h2>
            <p>Either party may terminate services with 7 days written notice. Astraventa reserves the right to suspend or terminate accounts immediately for violations of the Acceptable Use Policy or non-payment. Upon termination, call records are retained for the statutory minimum period and then deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">10. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms shall be subject to binding arbitration under AAA Commercial Arbitration Rules.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black tracking-tight mb-4">11. Contact</h2>
            <p>For service or legal inquiries, contact our operations desk:</p>
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
            <a href="#/privacy" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Privacy Policy</a>
            <a href="#/" className="text-xs text-black/35 hover:text-black transition-colors font-bold">Back to Home</a>
          </div>
        </div>

      </div>
    </div>
  );
}
