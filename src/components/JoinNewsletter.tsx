import { useState } from "react";

export default function JoinNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/rest/v1/newsletter_subscribers", {
        method: "POST",
        headers: {
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxeXdhZGlpYnlueXB5Z3NreWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzc1MDgsImV4cCI6MjA4OTk1MzUwOH0.psjTFW7hVfSpxw_jy-_UR2h0b-m_OC9EmGJV_pbZ-3I",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxeXdhZGlpYnlueXB5Z3NreWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzc1MDgsImV4cCI6MjA4OTk1MzUwOH0.psjTFW7hVfSpxw_jy-_UR2h0b-m_OC9EmGJV_pbZ-3I",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.trim(),
          status: "confirmed",
          name: "Telecom Newsletter Subscriber"
        })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await response.json();
        setErrorMsg(data?.message || "Failed to subscribe. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white pb-24 px-4 md:px-8">
      <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Telecom Callout Banner */}
        <div className="w-full rounded-3xl bg-gradient-to-r from-red-50/70 via-slate-50/70 to-cyan-50/70 border border-black/5 py-7 px-8 md:py-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col gap-2 max-w-[800px]">
            <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight leading-none">
              Start routing voice traffic with Astraventa Telecom.
            </h3>
            <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-medium">
              Dynamic whitelisted SIP trunks are active for today's deployment. First setup credit is 100% risk-free.
            </p>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent("open-request-modal"))}
            className="bg-[#0052cc] hover:bg-[#0047b3] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap self-stretch md:self-auto text-center"
          >
            Deploy now
          </button>
        </div>

        {/* Newsletter Signup Segment */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 pt-6">
          
          {/* Headline */}
          <div className="max-w-[400px]">
            <h3 className="text-lg sm:text-xl font-semibold text-black tracking-tight">
              Get news and updates from Astraventa
            </h3>
          </div>

          {/* Form and Disclosure */}
          <div className="w-full max-w-[580px] flex flex-col gap-3">
            {status === "success" ? (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-xs font-bold text-emerald-800 animate-in fade-in duration-300">
                Thank you! You have been successfully subscribed to Astraventa Telecom updates.
              </div>
            ) : (
              <div className="space-y-2">
                <form onSubmit={handleSubmit} className="flex gap-3 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="flex-1 px-5 py-3.5 bg-white border border-black/10 rounded-2xl text-xs sm:text-sm outline-none focus:border-black/30 transition-all font-medium text-black/80"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white hover:bg-black/5 text-black px-6 py-3.5 border border-black/10 rounded-2xl font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Sign up"}
                  </button>
                </form>
                {errorMsg && (
                  <p className="text-xs font-bold text-red-600 tracking-tight">{errorMsg}</p>
                )}
              </div>
            )}

            {/* Disclaimer metadata */}
            <p className="text-[10px] sm:text-[11px] text-black/50 leading-relaxed font-normal">
              By signing up you agree to receive voice engineering and whitelisting node updates from Astraventa Telecom. You may withdraw your consent at any time. Your subscription is subject to the{" "}
              <a href="#/terms" className="text-[#0052cc] hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#/privacy" className="text-[#0052cc] hover:underline">Privacy Policy</a>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
