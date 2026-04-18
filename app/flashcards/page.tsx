'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { PageShell } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { flashcards as initialCards } from '@/data/demo-data';

export default function FlashcardsPage() {
  const [cards, setCards] = useState(initialCards);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);

  const current = cards[idx];
  const progress = useMemo(() => `${idx + 1}/${cards.length}`, [idx, cards.length]);

  const goPrev = () => {
    setIdx((i) => (i - 1 + cards.length) % cards.length);
    setFlipped(false);
  };

  const goNext = () => {
    setIdx((i) => (i + 1) % cards.length);
    setFlipped(false);
  };

  return (
    <PageShell>
      <Reveal>
        <div className="space-y-6">
          <h1 className="section-title">Flashcard Drill</h1>
          <p className="text-slate-300">Progress: {progress} | Known: {known.length} | Unknown: {unknown.length}</p>

          <button
            onClick={() => {
              setCards((c) => [...c].sort(() => Math.random() - 0.5));
              setIdx(0);
              setFlipped(false);
              toast.success('Cards shuffled for active recall');
            }}
            className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10"
          >
            Shuffle Cards
          </button>

          <button className="perspective-[1000px] mx-auto block w-full max-w-2xl cursor-pointer text-left" onClick={() => setFlipped((f) => !f)} aria-label="Flip flashcard">
            <motion.div
              key={`card-${idx}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="glass relative min-h-64 rounded-3xl p-8 text-center"
            >
              <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.5 }} className="relative min-h-48 [transform-style:preserve-3d]">
                <div className="absolute inset-0 grid place-items-center [backface-visibility:hidden]">
                  <div>
                    <p className="mb-2 text-sm text-slate-400">Front</p>
                    <h2 className="text-2xl font-bold">{current.front}</h2>
                  </div>
                </div>
                <div className="absolute inset-0 grid place-items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <p className="mb-2 text-sm text-slate-400">Back</p>
                    <h2 className="text-xl font-semibold">{current.back}</h2>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </button>

          <div className="flex flex-wrap gap-3">
            <button onClick={goPrev} className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">Previous</button>
            <button onClick={goNext} className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">Next</button>
            <button
              onClick={() => {
                setKnown((k) => [...new Set([...k, idx])]);
                toast.success('Marked as known');
                goNext();
              }}
              className="rounded-xl bg-emerald-500/20 px-4 py-2 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              Mark Known
            </button>
            <button
              onClick={() => {
                setUnknown((u) => [...new Set([...u, idx])]);
                toast('Keep revising this one');
                goNext();
              }}
              className="rounded-xl bg-rose-500/20 px-4 py-2 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]"
            >
              Mark Unknown
            </button>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
