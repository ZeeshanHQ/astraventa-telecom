import { ArrowLeft, CheckCircle2, FileText } from "lucide-react";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function TermsOfService() {
  return (
    <div className="w-full min-h-screen bg-[#f9fafb]">
      
      {/* Top Header Navbar */}
      <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity select-none">
            <img src="/astraventa-white.png" alt="Astraventa Logo" className="h-7 w-auto object-contain" />
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Astraventa
            </span>
          </a>
          <a 
            href="#/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[960px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-12">

        {/* Page Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Last Updated: August 2026 &nbsp;·&nbsp; Effective Immediately
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
            <FileText className="w-4 h-4" />
            <span>Customer Service Agreement</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            These Terms of Service govern your access to and use of Astraventa Telecom's cloud voice services, web dialer consoles, phone numbers, and AI telephony features. By creating an account or subscribing to any plan on voice.astraventa.com, you agree to comply with these terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-sm text-slate-700 leading-relaxed font-medium">

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Platform Services & Account Registration
            </h2>
            <p>
              Astraventa Telecom provides cloud business communication software including:
            </p>
            <ul className="space-y-2 pt-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Dedicated and shared US/Canada local and toll-free business numbers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>In-browser WebRTC voice dialers, two-way SMS messaging, and auto call recordings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Multi-agent workspace management with Admin, Manager, and Agent permission levels.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Automated Inbound AI Receptionist and intelligent warm call-forwarding infrastructure.</span>
              </li>
            </ul>
            <p className="pt-2">
              You must be at least 18 years old and provide accurate business registration information to establish a workspace.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              2. Subscription Plans, Billing & Stripe Payments
            </h2>
            <p>
              Astraventa operates on transparent recurring monthly subscriptions:
            </p>
            <ul className="space-y-2.5 pt-2 pl-2">
              <li>• <strong>Starter Plan ($29/month):</strong> Includes 2 seats, 1 dedicated number, 250 talk minutes, 250 SMS, and free HD recordings.</li>
              <li>• <strong>Growth Plan ($79/month):</strong> Includes 5 seats, 2 dedicated numbers, 1,000 talk minutes, 500 SMS, and team analytics.</li>
              <li>• <strong>Scale Plan ($199/month):</strong> Includes up to 15 seats, 5 dedicated numbers, 3,000 talk minutes, 1,500 SMS, and priority routing.</li>
              <li>• <strong>AI Receptionist Tier ($149/month):</strong> Includes automated AI call answering and zero-latency cell forwarding.</li>
            </ul>
            <p className="pt-2">
              <strong>Billing Authorization:</strong> Payments are processed securely through <strong>Stripe</strong>. By adding a payment method, you authorize Astraventa and Stripe to charge your card on a recurring monthly basis until you cancel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Cancellation, Upgrades & Refund Policy
            </h2>
            <p>
              <strong>Cancel Anytime:</strong> You may cancel your subscription at any time directly through your billing settings or by notifying support. Cancellation takes effect at the end of your current monthly billing period with no termination penalties.
            </p>
            <p>
              <strong>Refunds:</strong> Subscriptions are billed in advance on a monthly basis. Monthly subscription fees are generally non-refundable once the monthly billing cycle begins, except where required by applicable consumer law or in the case of verified service downtime exceeding our SLA commitments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              4. Telephony Regulations & Acceptable Use (TCPA & STIR/SHAKEN)
            </h2>
            <p>
              You agree to use Astraventa services strictly for lawful business communication. You explicitly agree not to:
            </p>
            <ul className="space-y-2 pt-2 pl-2">
              <li>• Violate the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, or Telemarketing Sales Rule.</li>
              <li>• Transmit unauthorized, deceptive, harassing, or illegal robocalls or unsolicited SMS spam.</li>
              <li>• Spoof Caller IDs to misrepresent business identity or deceive recipients.</li>
              <li>• Attempt to dial 911 or emergency services through unsupported browser sandbox endpoints.</li>
            </ul>
            <p className="pt-2 text-xs text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-200/80">
              <strong>Regulatory Notice:</strong> Accounts found engaging in spam or fraudulent dialing are subject to immediate suspension without refund to protect carrier reputation and network integrity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              5. Number Porting & Ownership
            </h2>
            <p>
              You may port existing US/Canada numbers to Astraventa without fee. While you maintain an active subscription in good standing, you retain the right to port your numbers out to any other carrier of your choice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              6. Service Level Agreement (SLA) & Uptime
            </h2>
            <p>
              Astraventa targets 99.99% network uptime across carrier interconnects. Planned maintenance windows are scheduled during off-peak hours with prior email notification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Astraventa shall not be liable for indirect, incidental, special, consequential, or punitive damages. Astraventa's aggregate liability under this agreement shall not exceed the total amount paid by you in the three (3) months preceding the incident.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              8. Contact Information
            </h2>
            <p>For questions or support regarding these terms, please contact our legal desk:</p>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1.5 text-xs sm:text-sm">
              <p className="font-bold text-slate-900">Astraventa Advanced Engineering</p>
              <p className="text-slate-600">Primary Contact Desk: <a href="mailto:contact@astraventa.com" className="text-blue-600 hover:underline font-bold">contact@astraventa.com</a></p>
              <p className="text-slate-600">Legal Desk: <a href="mailto:legal@astraventa.com" className="text-blue-600 hover:underline">legal@astraventa.com</a></p>
              <p className="text-slate-600">US Phone: +1 (925) 504-0101</p>
              <p className="text-slate-600">WhatsApp Desk: +92 326 7853405</p>
            </div>
          </section>

        </div>

      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
