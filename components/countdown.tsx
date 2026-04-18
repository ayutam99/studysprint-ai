'use client';

import { useEffect, useMemo, useState } from 'react';

function formatDiff(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return 'Exam time is here. Stay calm and execute.';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
}

export function Countdown() {
  const initialDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    d.setHours(9, 0, 0, 0);
    return d.toISOString().slice(0, 16);
  }, []);

  const [examDate, setExamDate] = useState(initialDate);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const target = new Date(examDate);
    const update = () => setDisplay(formatDiff(target));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [examDate]);

  return (
    <div className="space-y-3">
      <label className="text-sm text-slate-300" htmlFor="exam-date">
        Select exam date and time
      </label>
      <input
        id="exam-date"
        type="datetime-local"
        value={examDate}
        onChange={(e) => setExamDate(e.target.value)}
        className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-3 py-2"
      />
      <p className="rounded-xl border border-neonBlue/40 bg-neonBlue/10 p-3 font-medium text-neonBlue">{display}</p>
    </div>
  );
}
