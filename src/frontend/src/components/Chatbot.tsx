import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Message = { id: number; from: "bot" | "user"; text: string };

let msgId = 0;
function makeMsg(from: "bot" | "user", text: string): Message {
  return { id: msgId++, from, text };
}

function getBotReply(text: string): string {
  if (/(hour|time|open|close|timing|when)/i.test(text))
    return "We are open Monday to Saturday, 8AM to 8PM. 🕗";
  if (/(location|address|where|direction|find)/i.test(text))
    return "We are located at Collectory Chauraha, Station Road, Chittorgarh-312001, Rajasthan. 📍";
  if (/(phone|call|contact|number|reach)/i.test(text))
    return "You can reach us at 9888888899 or email aaaaa@gmail.com. 📞";
  if (/(pay|payment|upi|paytm|gpay|google pay|phonepe|phone pay)/i.test(text))
    return "We accept Phone Pay, Google Pay, and Paytm. 💳";
  if (/(deliver|delivery|home|ship)/i.test(text))
    return "We currently don't offer home delivery. Please visit us in-store! 🏪";
  if (/(sweet|product|item|menu|kaju|ladoo|barfi|gulab|jamun)/i.test(text))
    return "We offer Kaju Katli, Gulab Jamun, Motichoor Ladoo, Kesar Barfi, and many more fresh Indian sweets! 🍬";
  if (/(bulk|order|wedding|event|festival|corporate)/i.test(text))
    return "Yes! We do bulk orders for weddings, festivals, and events. Call 9888888899 to discuss. 🎉";
  if (/(gift|box|pack|present)/i.test(text))
    return "Yes, we have beautiful gift boxes for all occasions! Perfect for Diwali, weddings & more. 🎁";
  if (/(price|cost|rate|cheap|expensive)/i.test(text))
    return "Our sweets are priced affordably! Kaju Katli starts at ₹800/kg, Ladoo at ₹500/kg. Visit us for the full menu. 😊";
  if (/(fresh|ghee|ingredient|pure|quality)/i.test(text))
    return "All our sweets are made fresh daily using pure desi ghee and natural ingredients — no preservatives! ✨";
  return "Thank you for your question! For more help, call us at 9888888899 or visit us at Collectory Chauraha, Chittorgarh. 🙏";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    makeMsg("bot", "Namaste! I'm Vinay Bot. How can I help you today? 🙏"),
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      makeMsg("user", text),
      makeMsg("bot", getBotReply(text)),
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            data-ocid="chatbot.panel"
            className="w-[340px] sm:w-[380px] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
            style={{ maxHeight: "520px" }}
          >
            {/* Chat Header */}
            <div className="bg-burgundy px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center text-lg">
                  🪷
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vinay Bot</p>
                  <p className="text-white/60 text-xs">Always here to help</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-ocid="chatbot.close_button"
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-burgundy text-white rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                data-ocid="chatbot.input"
                className="flex-1 text-sm"
              />
              <Button
                size="icon"
                onClick={sendMessage}
                data-ocid="chatbot.primary_button"
                className="bg-burgundy hover:bg-burgundy-dark text-white flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        data-ocid="chatbot.open_modal_button"
        className="w-14 h-14 rounded-full bg-burgundy text-white shadow-2xl flex items-center justify-center hover:bg-burgundy-dark transition-colors"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
