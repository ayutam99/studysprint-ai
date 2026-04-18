'use client';

import { useState } from 'react';
import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { chatPrompts } from '@/data/demo-data';

type Message = { role: 'student' | 'ai'; text: string; time: string };

const clock = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const aiReply = (q: string) =>
  `Great question. For "${q}", revise definition → core principle → one exam example. I can also generate a 3-point memory trick right now.`;

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([{ role: 'ai', text: 'Hi! I am StudySprint AI. Ask any exam doubt.', time: clock() }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: 'student', text, time: clock() }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'ai', text: aiReply(text), time: clock() }]);
      setTyping(false);
    }, 700);
  };

  return (
    <PageShell>
      <Reveal>
        <div className="space-y-6">
          <h1 className="section-title">Ask Doubts Chatbot</h1>
          <AnimatedCard>
            <div className="max-h-[420px] space-y-3 overflow-y-auto pr-1">
              {messages.map((m, i) => (
                <div key={`${m.text}-${i}`} className={`w-fit max-w-[90%] rounded-2xl px-4 py-3 ${m.role === 'student' ? 'ml-auto border border-neonBlue/30 bg-neonBlue/10' : 'border border-white/10 bg-white/5'}`}>
                  <p>{m.text}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{m.time}</p>
                </div>
              ))}

              {typing && (
                <div className="w-fit rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="flex items-center gap-1 text-sm text-slate-400">
                    AI is typing
                    <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                    <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]" />
                    <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]" />
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') send(input);
                }}
                placeholder="Ask your doubt..."
                className="flex-1 rounded-xl border border-white/20 bg-slate-900/70 px-3 py-2"
              />
              <button onClick={() => send(input)} className="rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple px-4 py-2 transition hover:scale-[1.02]">
                Send
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {chatPrompts.map((p) => (
                <button key={p} onClick={() => send(p)} className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20">
                  {p}
                </button>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </Reveal>
    </PageShell>
  );
}
