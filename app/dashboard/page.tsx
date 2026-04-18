'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { AnimatedCard } from '@/components/animated-card';
import { Countdown } from '@/components/countdown';
import { PageShell } from '@/components/page-shell';
import { UploadNotes } from '@/components/upload-notes';
import { subjects } from '@/data/demo-data';

const stats = [
  { label: 'Study Progress', value: '78%' },
  { label: 'Daily Streak', value: '12 days' },
  { label: 'XP Points', value: '2,480 XP' },
  { label: 'Recent Subjects', value: 'Physics, Economics, CS' },
];

export default function DashboardPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <h1 className="section-title">Student Command Dashboard</h1>

        <div className="grid gap-4 md:grid-cols-2">
          <AnimatedCard>
            <UploadNotes />
          </AnimatedCard>

          <AnimatedCard>
            <label className="mb-2 block text-sm text-slate-300" htmlFor="subject">
              Enter Subject Name
            </label>
            <input
              id="subject"
              className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-3 py-2"
              placeholder="Physics / Chemistry / MBA Marketing"
              list="subjects"
            />
            <datalist id="subjects">
              {subjects.map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/tools" className="rounded-lg bg-neonBlue/20 px-3 py-2 text-sm text-neonBlue hover:bg-neonBlue/30">
                Generate Tools
              </Link>
              <button onClick={() => toast.success('Continuing Thermodynamics Sprint')} className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10">
                Continue Last Session
              </button>
            </div>
          </AnimatedCard>
        </div>

        <AnimatedCard>
          <Countdown />
        </AnimatedCard>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <AnimatedCard key={item.label} delay={i * 0.08}>
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-bold gradient-text">{item.value}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
