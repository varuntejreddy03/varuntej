
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiChatResponse } from '../services/geminiService';

const AIChat: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hi! I'm VN's AI assistant. Ask me anything about his work!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiChatResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass-card w-full max-w-md h-[500px] rounded-3xl flex flex-col overflow-hidden shadow-2xl border-primary/20">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">VN Assistant</h3>
              <p className="text-[10px] text-primary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'glass-card text-slate-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="glass-card p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white/5 border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm focus:outline-none focus:border-primary/50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
