import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ArrowUpRight } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
  links?: { label: string; href: string }[];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I am the Astraventa Integration Assistant. How can I help you route your voice campaigns today?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      let botResponse: Message = {
        sender: "bot",
        text: "I've logged your request. Let's get your whitelisted SIP credentials configured. Would you like to schedule a 5-minute onboarding session with one of our telecom architects?",
        links: [
          { label: "Request Test Trunk Credentials", href: "#" },
          { label: "View Technical Documentation", href: "#/docs" },
        ],
      };

      const lower = userMsg.toLowerCase();
      if (lower.includes("dialler") || lower.includes("dialer") || lower.includes("google voice")) {
        botResponse = {
          sender: "bot",
          text: "We specialize in whitelisted SIP trunks that bypass carrier filters. To integrate a dialer or replace Google Voice, you can provision a node here:",
          links: [
            { label: "Deploy $10 Starter Node", href: "#" },
            { label: "Talk to Integration Desk on WhatsApp", href: "https://wa.me/923055255838" },
          ],
        };
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        botResponse = {
          sender: "bot",
          text: "Our setup starts at a minimum of $10 ($5 dynamic credit = 250 call minutes). No per-seat license fees! You can review details here:",
          links: [
            { label: "Review Pricing Slabs", href: "#" },
          ],
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  // Intercept click on links that trigger modal
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "#") {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("open-request-modal"));
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0a1b3a] hover:bg-[#0f2854] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/10 cursor-pointer"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            {/* If chat_icon.jpg exists, show it as background */}
            <img
              src="/chat_icon.jpg"
              alt="Chat"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                // Hide image if error, fallback to icon
                e.currentTarget.style.display = "none";
              }}
            />
            <MessageSquare className="w-5 h-5 text-white relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
            
            {/* Live Indicator pulse */}
            <span className="absolute top-2 right-2 flex h-2.5 w-2.5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
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
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 relative">
                <img src="/chat_icon.jpg" alt="Avatar" className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-[#0a1b3a]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide">Astraventa Support</span>
                <span className="text-[10px] text-cyan-400 font-medium">Integration Assistant</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
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

                  {/* Attachment Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-black/5 space-y-2">
                      {msg.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.href}
                          onClick={(e) => handleLinkClick(link.href, e)}
                          className="flex items-center gap-1 text-[11px] text-cyan-600 hover:text-cyan-700 font-bold tracking-tight transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-black/5 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about SIP trunks, rotation..."
              className="flex-1 px-4 py-2.5 bg-black/5 border border-black/5 rounded-2xl text-xs outline-none focus:bg-black/10 focus:border-black/10 transition-all font-medium text-black/80"
            />
            <button
              type="submit"
              className="w-9 h-9 bg-[#0a1b3a] hover:bg-[#0f2854] text-white rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95"
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
