import { useState, useEffect } from "react";
import { 
  Users, 
  Send, 
  MessageSquare, 
  Search, 
  Clock, 
  FileText,
  Mail,
  ArrowLeft,
  TrendingUp,
  X,
  Trash2,
  Moon,
  Sun
} from "lucide-react";

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  plan_type: string;
  call_volume: string;
  dialer_software: string;
  message: string;
  status: "pending" | "contacted" | "converted" | "archived";
  source: "homepage" | "ai-receptionist" | "chatbot" | "direct";
}

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Theme state
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("admin-theme") === "dark");

  // Leads state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Delete modal state
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "homepage" | "ai-receptionist" | "chatbot">("all");

  // Email form state
  const [emailFrom, setEmailFrom] = useState("telecom@astraventa.com");
  const [emailTo, setEmailTo] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("custom");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailResult, setEmailResult] = useState({ success: false, message: "" });

  const ADMIN_PASS_KEY = "astraventa_admin_pwd";

  useEffect(() => {
    localStorage.setItem("admin-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const savedPwd = sessionStorage.getItem(ADMIN_PASS_KEY);
    if (savedPwd === "astraventa2026") {
      setIsAuthenticated(true);
      fetchLeads(savedPwd);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setIsVerifying(true);
    setAuthError("");

    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/functions/v1/telecom-admin-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, action: "get_leads" })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        sessionStorage.setItem(ADMIN_PASS_KEY, password);
        setIsAuthenticated(true);
        setLeads(data.leads || []);
      } else {
        setAuthError(data.error || "Authentication failed. Invalid password.");
      }
    } catch (err: any) {
      setAuthError(`Connection error: ${err.message}`);
    } finally {
      setIsVerifying(false);
    }
  };

  const fetchLeads = async (pwd: string) => {
    setIsLoadingLeads(true);
    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/functions/v1/telecom-admin-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd, action: "get_leads" })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error("Error loading leads:", err);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const handleUpdateStatus = async (leadId: string, newStatus: string) => {
    const pwd = sessionStorage.getItem(ADMIN_PASS_KEY) || "";
    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/functions/v1/telecom-admin-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: pwd,
          action: "update_status",
          lead_id: leadId,
          status: newStatus
        })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus as any } : l));
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead(prev => prev ? { ...prev, status: newStatus as any } : null);
        }
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleDeleteLead = async () => {
    if (!deleteTargetId) return;
    setIsDeleting(true);
    const pwd = sessionStorage.getItem(ADMIN_PASS_KEY) || "";
    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/functions/v1/telecom-admin-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: pwd,
          action: "delete_lead",
          lead_id: deleteTargetId
        })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(prev => prev.filter(l => l.id !== deleteTargetId));
        if (selectedLead && selectedLead.id === deleteTargetId) {
          setSelectedLead(null);
        }
        setDeleteTargetId(null);
      }
    } catch (err) {
      console.error("Delete lead error:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailTo || !emailSubject || !emailBody) return;
    setIsSendingEmail(true);
    setEmailResult({ success: false, message: "" });
    const pwd = sessionStorage.getItem(ADMIN_PASS_KEY) || "";

    const formattedHtml = `
      <div style="font-family: 'Inter', sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #f1f5f9; border-radius: 12px; background-color: #ffffff;">
        <div style="margin-bottom: 24px;">
          <h2 style="color: #0f172a; margin-top: 0; font-family: 'Plus Jakarta Sans', sans-serif;">Astraventa Telecom</h2>
        </div>
        <div style="font-size: 14px; line-height: 1.6; color: #334155;">
          ${emailBody.replace(/\n/g, "<br/>")}
        </div>
        <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 32px 0 16px 0;" />
        <p style="font-size: 11px; color: #94a3b8; text-align: center;">
          Astraventa Telecom Support Desk &bull; Whitelisted SIP Nodes &bull; Tier-1 Carrier Bandwidth
        </p>
      </div>
    `;

    try {
      const response = await fetch("https://hqywadiibynypygskyif.supabase.co/functions/v1/telecom-admin-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: pwd,
          action: "send_email",
          from: emailFrom,
          to: emailTo,
          subject: emailSubject,
          html: formattedHtml
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setEmailResult({ success: true, message: "Email sent successfully!" });
        setEmailSubject("");
        setEmailBody("");
      } else {
        setEmailResult({ success: false, message: data.error || "Failed to dispatch email." });
      }
    } catch (err: any) {
      setEmailResult({ success: false, message: err.message });
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleTemplateChange = (template: string, lead: Lead | null) => {
    setSelectedTemplate(template);
    if (!lead) return;

    if (template === "trunk") {
      setEmailSubject("Astraventa Telecom - Whitelisted SIP Trunk Configuration");
      setEmailBody(
        `Dear ${lead.name},\n\n` +
        `Our network integration desk has finalized the configuration parameters for your whitelisted voice node routing.\n\n` +
        `Below are your initial endpoint access details:\n` +
        `• Host Address: sip.telecom.astraventa.com\n` +
        `• Port: 5060 (UDP/TCP)\n` +
        `• Whitelisted Caller ID Pool: ${lead.call_volume} minutes scope\n` +
        `• Integrator: ${lead.dialer_software}\n\n` +
        `To authenticate your connection credentials, please reply directly or call our operations line at +1 925 504 0101.\n\n` +
        `Best regards,\n` +
        `Astraventa Telecom Engineering Desk`
      );
    } else if (template === "walkthrough") {
      setEmailSubject("Astraventa Technical Setup Walkthrough");
      setEmailBody(
        `Hi ${lead.name},\n\n` +
        `I saw you requested integration parameters on our platform regarding your ${lead.dialer_software} dialer. We have initialized a whitelisting draft.\n\n` +
        `To help set up your localized caller pools and verify your route parameters, could you please pick a convenient 15-minute slot on my schedule?\n\n` +
        `Book Here: https://calendly.com/astraventa/15-min-technical-walkthrough-astraventa\n\n` +
        `Best regards,\n` +
        `Zeeshan Jay\n` +
        `Director, Astraventa Telecom`
      );
    } else {
      setEmailSubject("");
      setEmailBody("");
    }
  };

  const handleSelectLead = (lead: Lead) => {
    setSelectedLead(lead);
    setEmailTo(lead.email);
    handleTemplateChange(selectedTemplate, lead);
  };

  const exportToCSV = () => {
    if (filteredLeads.length === 0) return;
    const headers = ["ID", "Created At", "Name", "Email", "Plan Type", "Call Volume", "Dialer Core / PBX", "Notes", "Status", "Source"];
    const rows = filteredLeads.map(l => [
      l.id,
      new Date(l.created_at).toISOString(),
      l.name.replace(/"/g, '""'),
      l.email,
      l.plan_type,
      l.call_volume,
      l.dialer_software,
      (l.message || "").replace(/"/g, '""'),
      l.status,
      l.source
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map(r => r.map(val => `"${val}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `astraventa_telecom_leads_${activeFilter}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics calculations
  const totalLeads = leads.length;
  const pendingLeads = leads.filter(l => l.status === "pending").length;
  const contactedLeads = leads.filter(l => l.status === "contacted").length;
  const convertedLeads = leads.filter(l => l.status === "converted").length;

  // Filter & Search computation
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.message && lead.message.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === "all" || lead.source === activeFilter;

    return matchesSearch && matchesFilter;
  });

  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 relative transition-colors duration-300 ${darkMode ? "bg-[#090D16]" : "bg-slate-50"}`}>
        <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none ${darkMode ? "bg-sky-500/5" : "bg-sky-200/10"}`} />
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none ${darkMode ? "bg-purple-500/5" : "bg-purple-200/10"}`} />
        
        <div className={`w-full max-w-[420px] rounded-3xl border p-8 shadow-sm space-y-6 transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
          <div className="text-center space-y-2">
            <div className={`inline-flex p-3 rounded-2xl border mb-2 ${darkMode ? "bg-[#161F30] border-white/5" : "bg-slate-50 border-slate-100"}`}>
              <img src="/astraventa-white.png" alt="Astraventa Logo" className="h-7 w-auto object-contain" />
            </div>
            <h1 className={`text-xl font-heading font-semibold ${darkMode ? "text-white" : "text-black"}`}>Astraventa Admin Desk</h1>
            <p className={`text-xs ${darkMode ? "text-slate-400" : "text-black/50"}`}>Please enter your password to access leads and integration consoles.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="pass" className={`text-[10px] font-bold uppercase tracking-widest font-mono ${darkMode ? "text-slate-400" : "text-black/50"}`}>Password</label>
              <input
                id="pass"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all font-medium ${
                  darkMode 
                    ? "bg-[#161F30] border-white/10 focus:bg-[#1C273C] focus:border-[#0052cc] text-white" 
                    : "bg-slate-50/50 border-black/10 focus:bg-white focus:border-[#0052cc] text-black"
                }`}
              />
            </div>

            {authError && (
              <p className="text-xs font-bold text-red-600 tracking-tight text-center">{authError}</p>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 bg-black hover:bg-slate-900 text-white dark:bg-white dark:text-black dark:hover:bg-slate-100 rounded-xl font-sans font-medium text-sm transition shadow-sm active:scale-[0.98] cursor-pointer disabled:opacity-50"
            >
              {isVerifying ? "Verifying..." : "Access Dashboard"}
            </button>
          </form>
          
          <div className="text-center">
            <a href="#/" className={`inline-flex items-center gap-1.5 text-xs transition-colors ${darkMode ? "text-slate-500 hover:text-white" : "text-black/45 hover:text-black"}`}>
              <ArrowLeft className="w-3.5 h-3.5" /> Back to portal
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#090D16] text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      {/* Background Soft Glows */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -z-10 ${darkMode ? "bg-sky-500/5" : "bg-sky-200/10"}`} />
      <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -z-10 ${darkMode ? "bg-purple-500/5" : "bg-purple-200/10"}`} />

      {/* Admin Navbar */}
      <header className={`w-full sticky top-0 z-30 border-b transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-b border-black/5"}`}>
        <div className="max-w-[1720px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/astraventa-white.png" alt="Astraventa Logo" className="h-6 w-auto object-contain" />
              <span className={`text-base font-heading font-medium ${darkMode ? "text-white" : "text-black"}`}>Astraventa</span>
            </a>
            <span className={`h-4 w-px ${darkMode ? "bg-slate-800" : "bg-slate-200"}`} />
            <span className={`text-xs font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded ${darkMode ? "text-cyan-400 bg-cyan-950/40" : "text-[#0052cc] bg-blue-50"}`}>Admin Portal</span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                darkMode 
                  ? "bg-[#161F30] border-white/5 hover:bg-[#1E293F] text-yellow-400" 
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => {
                sessionStorage.removeItem(ADMIN_PASS_KEY);
                setIsAuthenticated(false);
              }}
              className="text-xs font-heading font-medium text-red-500 hover:text-red-700 transition-colors py-2 px-3 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main content grid */}
      <main className="max-w-[1720px] mx-auto px-6 py-8 space-y-8">
        
        {/* Statistics Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className={`border rounded-3xl p-6 shadow-sm flex items-center justify-between transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total leads</span>
              <p className={`text-3xl font-heading font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{totalLeads}</p>
            </div>
            <div className={`p-3 rounded-2xl border ${darkMode ? "bg-[#161F30] border-white/5 text-slate-300" : "bg-slate-50 border-slate-100 text-slate-600"}`}>
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className={`border rounded-3xl p-6 shadow-sm flex items-center justify-between transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">Pending whitelist</span>
              <p className={`text-3xl font-heading font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{pendingLeads}</p>
            </div>
            <div className={`p-3 rounded-2xl border ${darkMode ? "bg-amber-950/20 border-amber-900/30 text-amber-400" : "bg-amber-50 border-amber-100 text-amber-600"}`}>
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className={`border rounded-3xl p-6 shadow-sm flex items-center justify-between transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-sky-500 tracking-wider">Contacted</span>
              <p className={`text-3xl font-heading font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{contactedLeads}</p>
            </div>
            <div className={`p-3 rounded-2xl border ${darkMode ? "bg-sky-950/20 border-sky-900/30 text-sky-400" : "bg-sky-50 border-sky-100 text-sky-600"}`}>
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className={`border rounded-3xl p-6 shadow-sm flex items-center justify-between transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider">Converted Client</span>
              <p className={`text-3xl font-heading font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{convertedLeads}</p>
            </div>
            <div className={`p-3 rounded-2xl border ${darkMode ? "bg-emerald-950/20 border-emerald-900/30 text-emerald-400" : "bg-emerald-50 border-emerald-100 text-emerald-600"}`}>
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </section>

        {/* Dashboard Panels */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Leads list */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`border rounded-3xl p-6 shadow-sm space-y-6 transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
              
              {/* Search & Filters */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div className="relative w-full md:max-w-xs">
                  <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? "text-slate-500" : "text-slate-400"}`} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, email, parameters..."
                    className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs outline-none transition-all font-medium ${
                      darkMode 
                        ? "bg-[#161F30] border-white/10 text-white focus:bg-[#1E293F] focus:border-[#0052cc]" 
                        : "bg-slate-50 border-black/10 text-slate-800 focus:bg-white focus:border-[#0052cc]"
                    }`}
                  />
                </div>

                {/* Pill filters */}
                <div className={`flex items-center gap-3 w-full md:w-auto overflow-x-auto scrollbar-none p-1 rounded-xl border ${darkMode ? "bg-[#161F30] border-white/5" : "bg-slate-50 border-black/5"}`}>
                  <div className="flex flex-wrap gap-1.5">
                    {(["all", "homepage", "ai-receptionist", "chatbot"] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer capitalize ${
                          activeFilter === filter 
                            ? (darkMode ? "bg-[#25324E] text-white shadow-sm" : "bg-white text-black shadow-sm")
                            : (darkMode ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-700")
                        }`}
                      >
                        {filter === "all" ? "All" : filter === "ai-receptionist" ? "AI Receptionist" : filter}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={exportToCSV}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all cursor-pointer whitespace-nowrap ${
                      darkMode 
                        ? "bg-[#202B40] hover:bg-[#2A3A56] text-slate-300" 
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Leads list viewport */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                {isLoadingLeads ? (
                  <div className={`text-center py-12 text-xs font-medium font-mono ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Syncing gateway database...</div>
                ) : filteredLeads.length === 0 ? (
                  <div className={`text-center py-12 text-xs font-medium font-mono ${darkMode ? "text-slate-500" : "text-slate-400"}`}>No matching records found.</div>
                ) : (
                  filteredLeads.map((lead) => {
                    const isSelected = selectedLead?.id === lead.id;
                    const sourceBadgeColors = {
                      homepage: darkMode ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100",
                      "ai-receptionist": darkMode ? "bg-cyan-950/40 text-cyan-400 border-cyan-900/30" : "bg-cyan-50 text-cyan-700 border-cyan-100",
                      chatbot: darkMode ? "bg-blue-950/40 text-blue-400 border-blue-900/30" : "bg-blue-50 text-blue-700 border-blue-100",
                      direct: darkMode ? "bg-slate-800 text-slate-300 border-slate-700" : "bg-slate-50 text-slate-600 border-slate-100"
                    }[lead.source || 'direct'];

                    const statusColors = {
                      pending: darkMode ? "text-amber-400 bg-amber-950/30" : "text-amber-500 bg-amber-50",
                      contacted: darkMode ? "text-sky-400 bg-sky-950/30" : "text-sky-500 bg-sky-50",
                      converted: darkMode ? "text-emerald-400 bg-emerald-950/30" : "text-emerald-500 bg-emerald-50",
                      archived: darkMode ? "text-slate-500 bg-[#161F30]" : "text-slate-400 bg-slate-50"
                    }[lead.status || 'pending'];

                    return (
                      <div 
                        key={lead.id}
                        onClick={() => handleSelectLead(lead)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                          isSelected 
                            ? (darkMode ? "bg-[#18233C] border-[#0052cc] shadow-md scale-[1.01]" : "bg-white border-[#0052cc] shadow-md scale-[1.01]")
                            : (darkMode ? "bg-[#161F30] border-white/5 hover:border-white/10 shadow-sm" : "bg-white border-black/5 hover:border-black/15 shadow-sm")
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`font-heading font-medium text-sm ${darkMode ? "text-white" : "text-black"}`}>{lead.name}</h3>
                            <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${sourceBadgeColors}`}>
                              {lead.source || 'direct'}
                            </span>
                            <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${statusColors}`}>
                              {lead.status || 'pending'}
                            </span>
                          </div>
                          
                          <div className={`text-xs space-y-1 ${darkMode ? "text-slate-400" : "text-slate-400"}`}>
                            <p className={`font-medium flex items-center gap-1.5 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                              <Mail className="w-3.5 h-3.5" /> {lead.email}
                            </p>
                            <p className="flex items-center gap-1.5 flex-wrap">
                              <FileText className="w-3.5 h-3.5" />
                              <span>{lead.call_volume}</span> &bull; 
                              <span className={`font-semibold ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{lead.dialer_software}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <select
                            value={lead.status || 'pending'}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleUpdateStatus(lead.id, e.target.value);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className={`px-3 py-1.5 border rounded-xl text-[10px] font-bold outline-none transition cursor-pointer ${
                              darkMode 
                                ? "bg-[#1E293F] border-white/10 text-slate-300 focus:border-white/20" 
                                : "bg-slate-50 border-slate-200 text-slate-600 focus:border-slate-400"
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="archived">Archived</option>
                          </select>
                          
                          {/* Trash Delete Action Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteTargetId(lead.id);
                            }}
                            className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                              darkMode 
                                ? "bg-[#251A24]/30 border-red-950/20 text-red-400 hover:bg-red-950/40" 
                                : "bg-red-50 border-red-100 text-red-500 hover:bg-red-100"
                            }`}
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            
            {/* Leads Detail View (Visible when card is selected) */}
            {selectedLead && (
              <div className={`border rounded-3xl p-6 shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-200 transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
                <div className={`flex items-center justify-between border-b pb-4 ${darkMode ? "border-white/5" : "border-black/5"}`}>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Lead Record details</span>
                    <h2 className={`text-lg font-heading font-semibold ${darkMode ? "text-white" : "text-black"}`}>{selectedLead.name}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDeleteTargetId(selectedLead.id)}
                      className={`p-2.5 rounded-xl border transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                        darkMode 
                          ? "bg-[#251A24]/30 border-red-950/20 text-red-400 hover:bg-red-950/40" 
                          : "bg-red-50 border-red-100 text-red-500 hover:bg-red-100"
                      }`}
                    >
                      <Trash2 className="w-4 h-4" /> Delete Lead
                    </button>
                    <button 
                      onClick={() => setSelectedLead(null)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${darkMode ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-400 hover:text-black"}`}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono mb-1 ${darkMode ? "text-slate-500" : "text-black/50"}`}>Email Address</h4>
                      <p className={`font-medium text-sm select-all ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{selectedLead.email}</p>
                    </div>
                    <div>
                      <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono mb-1 ${darkMode ? "text-slate-500" : "text-black/50"}`}>Volume Requirement</h4>
                      <p className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{selectedLead.call_volume}</p>
                    </div>
                    <div>
                      <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono mb-1 ${darkMode ? "text-slate-500" : "text-black/50"}`}>Integration Platform</h4>
                      <p className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{selectedLead.dialer_software}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono mb-1 ${darkMode ? "text-slate-500" : "text-black/50"}`}>Registration Date</h4>
                      <p className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{new Date(selectedLead.created_at).toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono mb-1 ${darkMode ? "text-slate-500" : "text-black/50"}`}>Lead Source Page</h4>
                      <span className={`inline-block px-2 py-0.5 border rounded font-mono font-bold text-[10px] capitalize ${darkMode ? "bg-[#1E293F] text-slate-300 border-white/5" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                        {selectedLead.source || 'direct'}
                      </span>
                    </div>
                    <div>
                      <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono mb-1 ${darkMode ? "text-slate-500" : "text-black/50"}`}>Integration Plan</h4>
                      <span className={`inline-block px-2 py-0.5 border rounded font-mono font-bold text-[10px] uppercase ${darkMode ? "bg-[#1E293F] text-slate-300 border-white/5" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                        {selectedLead.plan_type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`space-y-2 border-t pt-4 ${darkMode ? "border-white/5" : "border-black/5"}`}>
                  <h4 className={`font-bold uppercase text-[9px] tracking-widest font-mono ${darkMode ? "text-slate-500" : "text-black/50"}`}>Special Directives & Routing Rules</h4>
                  <div className={`p-4 rounded-2xl border text-xs font-medium whitespace-pre-wrap max-h-56 overflow-y-auto ${
                    darkMode 
                      ? "bg-[#161F30] border-white/5 text-slate-300" 
                      : "bg-slate-50 border-black/5 text-slate-700"
                  }`}>
                    {selectedLead.message || "No special directives provided."}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right panel: Secure Email Dispatcher */}
          <div className="lg:col-span-5">
            <div className={`border rounded-3xl p-6 shadow-sm space-y-6 sticky top-28 transition-colors duration-300 ${darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"}`}>
              <div className={`border-b pb-4 space-y-1 ${darkMode ? "border-white/5" : "border-black/5"}`}>
                <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">Mail Console Gateway</span>
                <h2 className={`text-base font-heading font-semibold flex items-center gap-2 ${darkMode ? "text-white" : "text-black"}`}>
                  <Send className="w-4 h-4 text-indigo-500" /> Secure Email Dispatcher
                </h2>
                <p className="text-[10px] text-slate-400">
                  Sends verified transactional correspondence using Resend Gateway.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="fromEmail" className={`text-[10px] font-bold uppercase tracking-widest font-mono ${darkMode ? "text-slate-500" : "text-black/50"}`}>Sender Email</label>
                  <select
                    id="fromEmail"
                    value={emailFrom}
                    onChange={(e) => setEmailFrom(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all font-medium cursor-pointer ${
                      darkMode 
                        ? "bg-[#161F30] border-white/10 text-white focus:bg-[#1E293F] focus:border-[#0052cc]" 
                        : "bg-slate-50 border-black/10 text-black focus:bg-white focus:border-[#0052cc]"
                    }`}
                  >
                    <option value="telecom@astraventa.com">telecom@astraventa.com</option>
                    <option value="haider@astraventa.com">haider@astraventa.com</option>
                    <option value="zeeshan@astraventa.com">zeeshan@astraventa.com</option>
                    <option value="telecom@astraventa.online">telecom@astraventa.online</option>
                    <option value="haider@astraventa.online">haider@astraventa.online</option>
                    <option value="zeeshan@astraventa.online">zeeshan@astraventa.online</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="toEmail" className={`text-[10px] font-bold uppercase tracking-widest font-mono ${darkMode ? "text-slate-500" : "text-black/50"}`}>Recipient Email</label>
                  <input
                    id="toEmail"
                    type="email"
                    required
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    placeholder="recipient@domain.com"
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all font-medium ${
                      darkMode 
                        ? "bg-[#161F30] border-white/10 text-white focus:bg-[#1E293F] focus:border-[#0052cc]" 
                        : "bg-slate-50 border-black/10 text-black focus:bg-white focus:border-[#0052cc]"
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="template" className={`text-[10px] font-bold uppercase tracking-widest font-mono ${darkMode ? "text-slate-500" : "text-black/50"}`}>Select Template</label>
                  <select
                    id="template"
                    value={selectedTemplate}
                    onChange={(e) => handleTemplateChange(e.target.value, selectedLead)}
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all font-medium cursor-pointer ${
                      darkMode 
                        ? "bg-[#161F30] border-white/10 text-white focus:bg-[#1E293F] focus:border-[#0052cc]" 
                        : "bg-slate-50 border-black/10 text-black focus:bg-white focus:border-[#0052cc]"
                    }`}
                  >
                    <option value="custom">Custom Email Response</option>
                    <option value="trunk">Trunk Connection Guidelines</option>
                    <option value="walkthrough">Calendly Technical Walkthrough invitation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className={`text-[10px] font-bold uppercase tracking-widest font-mono ${darkMode ? "text-slate-500" : "text-black/50"}`}>Subject Line</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Enter email subject"
                    className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all font-medium ${
                      darkMode 
                        ? "bg-[#161F30] border-white/10 text-white focus:bg-[#1E293F] focus:border-[#0052cc]" 
                        : "bg-slate-50 border-black/10 text-black focus:bg-white focus:border-[#0052cc]"
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="body" className={`text-[10px] font-bold uppercase tracking-widest font-mono ${darkMode ? "text-slate-500" : "text-black/50"}`}>HTML Message Body</label>
                  <textarea
                    id="body"
                    required
                    rows={8}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    placeholder="Compose mail message..."
                    className={`w-full px-4 py-3 border rounded-xl text-xs outline-none transition-all font-medium resize-none ${
                      darkMode 
                        ? "bg-[#161F30] border-white/10 text-white focus:bg-[#1E293F] focus:border-[#0052cc]" 
                        : "bg-slate-50 border-black/10 text-black focus:bg-white focus:border-[#0052cc]"
                    }`}
                  />
                </div>

                {emailResult.message && (
                  <p className={`text-xs font-bold tracking-tight text-center ${emailResult.success ? "text-emerald-600" : "text-red-600"}`}>
                    {emailResult.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSendingEmail}
                  className="w-full py-3.5 bg-black hover:bg-slate-900 text-white dark:bg-white dark:text-black dark:hover:bg-slate-100 rounded-xl font-sans font-medium text-sm transition shadow-sm active:scale-[0.98] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSendingEmail ? (
                    "Transmitting message..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Email Response
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </section>
      </main>

      {/* Delete Confirmation Warning Popup Modal */}
      {deleteTargetId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`w-full max-w-[420px] rounded-3xl border p-6 space-y-6 shadow-2xl transition-colors duration-300 ${
            darkMode ? "bg-[#111724] border-white/5" : "bg-white border-black/5"
          }`}>
            <div className="space-y-2">
              <h3 className={`text-lg font-heading font-semibold ${darkMode ? "text-white" : "text-black"}`}>Confirm Delete Lead</h3>
              <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-black/60"}`}>
                Are you sure you want to delete this lead registration? This action is <span className="text-red-500 font-bold">permanent</span> and will completely remove all their whitelisting parameters from your Supabase database.
              </p>
            </div>

            <div className="flex items-center gap-3 justify-end pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setDeleteTargetId(null)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition active:scale-95 ${
                  darkMode ? "bg-slate-800 text-slate-300 hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDeleteLead}
                className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-semibold cursor-pointer transition active:scale-95 disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
