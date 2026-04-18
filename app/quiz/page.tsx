'use client';

import { useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';
import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';
import { quizQuestions } from '@/data/demo-data';

export default function QuizPage() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [seconds, setSeconds] = useState(300);

  const done = idx >= quizQuestions.length || seconds <= 0;
  const score = useMemo(() => answers.filter((a, i) => a === quizQuestions[i].answer).length, [answers]);

  useEffect(() => {
    if (done) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [done]);

  useEffect(() => {
    if (done && score >= 4) {
      confetti({ particleCount: 160, spread: 80, origin: { y: 0.6 } });
      toast.success('Amazing score! 🎉');
    }
  }, [done, score]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (done) return;
      if (event.key >= '1' && event.key <= '4') {
        const option = Number(event.key) - 1;
        setSelected(option);
      }
      if (event.key === 'Enter' && selected !== null) {
        submitAnswer();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [done, selected]);

  const submitAnswer = () => {
    if (selected === null) {
      toast.error('Select an option first');
      return;
    }
    setAnswers((prev) => [...prev, selected]);
    setSelected(null);
    setIdx((n) => n + 1);
  };

  const resetQuiz = () => {
    setIdx(0);
    setSelected(null);
    setAnswers([]);
    setSeconds(300);
  };

  return (
    <PageShell>
      <div className="space-y-6">
        <h1 className="section-title">Quiz Sprint</h1>
        <AnimatedCard>
          <div className="mb-2 flex justify-between text-sm">
            <span>Timer: {Math.max(seconds, 0)}s</span>
            <span>
              {Math.min(idx + 1, quizQuestions.length)}/{quizQuestions.length}
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-2 rounded-full bg-neonBlue transition-all" style={{ width: `${(Math.min(idx, quizQuestions.length) / quizQuestions.length) * 100}%` }} />
          </div>
        </AnimatedCard>

        {!done ? (
          <AnimatedCard>
            <h2 className="text-xl font-semibold">{quizQuestions[idx].question}</h2>
            <p className="mt-1 text-xs text-slate-400">Tip: press keys 1-4 to select, Enter to submit.</p>
            <div className="mt-4 grid gap-2">
              {quizQuestions[idx].options.map((opt, i) => (
                <button
                  key={opt}
                  onClick={() => setSelected(i)}
                  className={`rounded-xl border px-4 py-3 text-left ${selected === i ? 'border-neonBlue bg-neonBlue/10' : 'border-white/15 hover:bg-white/10'}`}
                >
                  {i + 1}. {opt}
                </button>
              ))}
            </div>
            <button onClick={submitAnswer} className="mt-4 rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple px-4 py-2 font-semibold">
              Next Question
            </button>
          </AnimatedCard>
        ) : (
          <AnimatedCard>
            <h2 className="text-2xl font-bold">Final Score: {score}/{quizQuestions.length}</h2>
            <p className="mt-2 text-slate-300">{score >= 4 ? 'Outstanding! You are exam-ready.' : 'Good effort—revise weak areas and retry.'}</p>
            <button onClick={resetQuiz} className="mt-3 rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10">
              Retry Quiz
            </button>
            <div className="mt-4 space-y-3">
              {quizQuestions.map((q) => (
                <div key={q.question} className="rounded-xl border border-white/15 p-3">
                  <p className="font-medium">{q.question}</p>
                  <p className="text-sm text-slate-300">Correct: {q.options[q.answer]}</p>
                  <p className="text-xs text-slate-400">{q.explanation}</p>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}
      </div>
    </PageShell>
  );
}
