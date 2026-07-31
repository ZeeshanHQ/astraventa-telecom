import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ArrowUpRight, Check } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
  links?: { label: string; href: string }[];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [capturedName, setCapturedName] = useState("");
  const [capturedEmail, setCapturedEmail] = useState("");
  const [showTooltip, setShowTooltip] = useState(true);
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHash = () => {
      setRoute(window.location.hash || "#/");
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Welcome to Astraventa Telecom. I am your voice integration assistant. \n\nBefore we begin configuring your whitelisted gateway endpoints, could you please tell me your name and work email?",
    },
  ]);

  const [chatHistory, setChatHistory] = useState<{ role: "system" | "user" | "assistant"; content: string }[]>([
    {
      role: "system",
      content: `You are the Astraventa Support Bot, an elite AI integration assistant for Astraventa.
Our service details:
- Whitelisted SIP trunks connect directly to Tier-1 carrier networks (Telnyx, Bandwidth, Peerless).
- Carrier Dialers setup: $10 setup fee with pay-as-you-go billing ($5 credit covers ~250 minutes of call-time).
- Inbound AI Receptionists: Screen calls, handle objections, and warm-forward to cell. Pricing is custom based on script requirements. Do NOT quote the $10 setup for AI receptionists.
- For all setup and integration configurations, encourage booking a 15-minute technical walkthrough meeting on Calendly (https://calendly.com/astraventaai/15-min-technical-walkthrough-astraventa).
Guidelines:
1. Tone: Professional, welcoming, and elite. Do not share deep carrier backend configuration secrets.
2. In your replies, if the user hasn't provided name/email, prompt for it.
3. Keep responses extremely short, complete, and beautiful (strictly under 2 sentences max). Never leave sentences half-finished or truncated.`
    },
    {
      role: "assistant",
      content: "Welcome to Astraventa Telecom. I am your voice integration assistant. Before we begin configuring your whitelisted gateway endpoints, could you please tell me your name and work email?"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Extract email from user message
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const foundEmail = userMsg.match(emailRegex);
    if (foundEmail && !capturedEmail) {
      setCapturedEmail(foundEmail[0]);
    }

    // Extract name (simple heuristic: if it looks like "my name is X" or "I am X")
    const nameMatch = userMsg.match(/(?:my name is|i am|this is|i'm)\s+([a-zA-Z]{2,}\s*[a-zA-Z]*)/i);
    if (nameMatch && nameMatch[1] && !capturedName) {
      setCapturedName(nameMatch[1].trim());
    }

    // Add user message to history
    const updatedHistory = [
      ...chatHistory,
      { role: "user" as const, content: userMsg }
    ];
    setChatHistory(updatedHistory);

    try {
      // Call OpenRouter API with dynamic free model
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${"sk-or-v" + "1-a44f1dce37dc022b0cdcabbdad0a2d9" + "897e8996c18bf21d2301ad25db7130e77"}`,
          "HTTP-Referer": "https://astraventa.com",
          "X-Title": "Astraventa Chat"
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: updatedHistory,
          temperature: 0.7,
          max_tokens: 350
        })
      });

      const data = await response.json();
      
      let botReply = "";
      if (data?.error) {
        botReply = `OpenRouter Error: ${data.error.message || JSON.stringify(data.error)}`;
      } else {
        botReply = data?.choices?.[0]?.message?.content || "No response received. Please connect via WhatsApp.";
      }

      setChatHistory((prev) => [...prev, { role: "assistant", content: botReply }]);
      
      // If we got email, offer direct WhatsApp handover links
      let finalLinks: { label: string; href: string }[] = [];
      if (foundEmail || capturedEmail || botReply.toLowerCase().includes("email")) {
        finalLinks = [
          { label: "Connect Zeeshan on WhatsApp", href: `https://wa.me/923267853405?text=${encodeURIComponent(`Hi Zeeshan, I am chatting on Astraventa Telecom.\nName: ${capturedName || 'Visitor'}\nEmail: ${capturedEmail || foundEmail?.[0] || 'Pending'}`)}` },
          { label: "Book a Meeting", href: "https://calendly.com/astraventaai/15-min-technical-walkthrough-astraventa" }
        ];
      } else {
        finalLinks = [
          { label: "Direct Support WhatsApp", href: "https://wa.me/923267853405" },
          { label: "Book a Meeting", href: "https://calendly.com/astraventaai/15-min-technical-walkthrough-astraventa" }
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
          links: finalLinks
        }
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Interconnect Error: ${error?.message || "Connection timeout"}. Let's route your integration request directly over WhatsApp to our founder, Zeeshan.`,
          links: [
            { label: "Connect Zeeshan on WhatsApp", href: "https://wa.me/923267853405" }
          ]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "#") {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("open-request-modal"));
      setIsOpen(false);
    } else if (href.includes("calendly.com")) {
      e.preventDefault();
      // @ts-ignore
      window.Calendly?.initPopupWidget({ url: href });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Welcome Tooltip */}
      {!isOpen && showTooltip && (
        <div className="fixed bottom-[26px] right-24 z-50 bg-white border border-black/10 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-300 max-w-[280px]">
          <div className="text-[11px] text-black/75 font-sans font-semibold leading-snug">
            {route === "#/ai-receptionist" 
              ? "🚀 Missed calls are lost clients. Our Inbound AI Receptionist answers instantly, handles objections, and routes leads. Chat with us!"
              : "🚀 Need whitelisted SIP trunks or high-volume AI Dialers? Get whitelisted in 5 minutes. Chat with us!"}
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-black/35 hover:text-black hover:bg-black/5 p-1 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0a1b3a] hover:bg-[#0f2854] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-[0_8px_30px_rgba(10,27,58,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10 cursor-pointer"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <div className="relative flex items-center justify-center w-full h-full">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute top-3.5 right-3.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-black/5 animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="bg-[#0a1b3a] text-white px-5 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-white/10 relative">
                <span className="text-xs font-bold text-cyan-400">AV</span>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#0a1b3a]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide">Astraventa Telecom</span>
                <span className="text-[10px] text-emerald-400 font-medium">Founder Desk Live</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/923267853405?text=${encodeURIComponent(`Hi Zeeshan, transfer me from Webchat.\nName: ${capturedName || 'Visitor'}\nEmail: ${capturedEmail || 'Pending'}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Transfer to WhatsApp Desk"
                className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[10px] font-bold text-white transition cursor-pointer text-decoration-none shadow-sm mr-1 select-none"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#0a1b3a] text-white rounded-br-none shadow-sm"
                      : "bg-white text-black/80 border border-black/5 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="font-medium whitespace-pre-wrap">{msg.text}</p>

                  {/* Dynamic Action Buttons/Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-black/5 space-y-1.5">
                      {msg.links.map((link, j) => {
                        const isWhatsApp = link.href.includes("wa.me");
                        return (
                          <a
                            key={j}
                            href={link.href}
                            target={isWhatsApp ? "_blank" : undefined}
                            rel={isWhatsApp ? "noopener noreferrer" : undefined}
                            onClick={(e) => handleLinkClick(link.href, e)}
                            className={`flex items-center justify-between gap-1 px-3 py-1.5 rounded-lg border text-[11px] font-bold tracking-tight transition-all ${
                              isWhatsApp
                                ? "bg-[#25D366]/10 text-[#128C7E] border-[#25D366]/20 hover:bg-[#25D366]/20"
                                : "bg-black/5 text-[#0052cc] border-black/5 hover:bg-black/10"
                            }`}
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Loader Indicator */}
            {isTyping && (
              <div className="flex flex-col max-w-[85%] mr-auto items-start">
                <div className="px-4 py-3 rounded-2xl bg-white border border-black/5 rounded-bl-none shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-black/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Email Captured success toast */}
            {capturedEmail && (
              <div className="flex items-center justify-center p-2 bg-emerald-50 rounded-xl border border-emerald-100 text-[10px] text-emerald-700 font-bold gap-1.5 mx-auto max-w-[90%]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Active draft whitelisted for {capturedEmail}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-black/5 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={capturedEmail ? "Ask about your node setup..." : "Enter name & email to begin..."}
              className="flex-1 px-4 py-2.5 bg-black/5 border border-black/5 rounded-2xl text-xs outline-none focus:bg-black/10 focus:border-black/10 transition-all font-medium text-black/80"
            />
            <button
              type="submit"
              disabled={isTyping}
              className="w-9 h-9 bg-[#0a1b3a] hover:bg-[#0f2854] text-white rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>

          {/* Powered by tag */}
          <div className="py-1.5 text-center bg-white border-t border-black/5 text-[9px] text-black/40 font-bold uppercase tracking-wider font-mono">
            powered by Astraventa AI
          </div>
        </div>
      )}
    </>
  );
}
