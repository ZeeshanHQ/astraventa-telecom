import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Last Updated: August 2026 &nbsp;·&nbsp; Effective Immediately
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
            <Shield className="w-4 h-4" />
            <span>Our Privacy Commitment</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Astraventa Telecom ("Astraventa", "we", "our", or "us") provides cloud-based business telephony, shared phone numbers, web dialers, and automated AI call reception services. We respect your privacy, comply with global data protection standards (GDPR, CCPA), and never sell or rent your personal data to third parties.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-10 text-sm text-slate-700 leading-relaxed font-medium">

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              To provide our team calling platform and automated voice features, we collect the following categories of data:
            </p>
            <ul className="space-y-2.5 pt-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Account Information:</strong> Name, work email address, company name, and password credentials when you register for a workspace on voice.astraventa.com.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Billing & Payment Information:</strong> Payment card details, billing address, and transaction history. All payment card processing is securely handled by <strong>Stripe, Inc.</strong> Astraventa never stores complete credit card numbers on its servers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Communications & Telephony Data:</strong> Call detail records (CDRs) including timestamps, caller ID numbers, call duration, SMS message logs, and call recordings generated through your workspace.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Technical & Device Data:</strong> IP addresses, browser types, audio device permissions (microphone access for in-browser calling), and service performance logs.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              2. How We Use Your Information
            </h2>
            <p>We process collected information for legitimate business purposes:</p>
            <ul className="space-y-2.5 pt-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Provisioning dedicated US/Canada phone numbers and routing live incoming/outgoing audio streams.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Processing subscription payments, usage billing, upgrades, and cancellations via Stripe.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Storing and rendering HD call recordings, transcripts, and contact history within your authenticated dashboard.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ensuring STIR/SHAKEN regulatory compliance and preventing telephony fraud, spam, or robocall abuse.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Payment Processing & Stripe Compliance
            </h2>
            <p>
              Subscription billing is powered by Stripe, a PCI-DSS Level 1 certified payment service provider. When you purchase a monthly plan ($29 Starter, $79 Growth, $199 Scale, or $149 AI Receptionist), your payment details are transmitted directly to Stripe via end-to-end encrypted tokens.
            </p>
            <p>
              Stripe processes your personal data in accordance with their privacy policy, available at <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold">stripe.com/privacy</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              4. Call Recording & Audio Data Retention
            </h2>
            <p>
              Call recording is enabled to allow team collaboration, quality assurance, and compliance logging. You maintain full ownership of your call recordings and data. Account owners may download or permanently delete audio recordings at any time from the web console.
            </p>
            <p>
              You are responsible for complying with all applicable local, state, and federal wiretapping and call recording consent laws (such as one-party or two-party consent requirements) prior to recording conversations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              5. Data Security & Encryption
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures:
            </p>
            <ul className="space-y-2 pt-2 pl-2">
              <li>• All web traffic is encrypted using TLS 1.3 in transit.</li>
              <li>• In-browser WebRTC audio streams are secured with SRTP encryption.</li>
              <li>• Database records and call logs are encrypted at rest using AES-256 standards.</li>
              <li>• Strict role-based access control (RBAC) ensures your agents only access authorized lines.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              6. Your Privacy Rights (GDPR & CCPA)
            </h2>
            <p>
              Depending on your location, you have the right to access, correct, export, or request permanent deletion of your personal data. To exercise any data subject rights, please email us at <a href="mailto:privacy@astraventa.com" className="text-blue-600 underline font-bold">privacy@astraventa.com</a> or contact our data protection team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              7. Contact & Support
            </h2>
            <p>If you have questions regarding this Privacy Policy or our data practices, please contact:</p>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-1.5 text-xs sm:text-sm">
              <p className="font-bold text-slate-900">Astraventa Advanced Engineering</p>
              <p className="text-slate-600">Primary Contact Desk: <a href="mailto:contact@astraventa.com" className="text-blue-600 hover:underline font-bold">contact@astraventa.com</a></p>
              <p className="text-slate-600">Privacy Desk: <a href="mailto:privacy@astraventa.com" className="text-blue-600 hover:underline">privacy@astraventa.com</a></p>
              <p className="text-slate-600">US Hotline: +1 (925) 504-0101</p>
              <p className="text-slate-600">WhatsApp Support: +92 326 7853405</p>
            </div>
          </section>

        </div>

      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
