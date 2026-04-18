'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/animated-card';
import { Countdown } from '@/components/countdown';
import { PageShell } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { UploadNotes } from '@/components/upload-notes';
import { subjects } from '@/data/demo-data';

const stats = [
  { label: 'Study Progress', value: '78%' },
  { label: 'Daily Streak', value: '12 days' },
  { label: 'XP Points', value: '2,480 XP' },
  { label: 'Recent Subjects', value: 'Physics, Economics, CS' },
];

export default function DashboardPage() {
  const xpProgress = 72;

  return (
    <PageShell>
      <div className="space-y-6">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl border-neonBlue/30 p-5"
          >
            <h1 className="section-title">Student Command Dashboard</h1>
            <p className="mt-2 text-slate-300">You&apos;re in the top 12% consistency streak this week. Keep momentum.</p>
          </motion.div>
        </Reveal>

        <Reveal>
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
        </Reveal>

        <Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            <AnimatedCard>
              <Countdown />
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="font-semibold">Study Streak Meter</h3>
              <div className="mt-3 h-3 rounded-full bg-white/10">
                <div className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-neonBlue" style={{ width: '84%' }} />
              </div>
              <p className="mt-2 text-sm text-slate-300">12 day streak • 84% weekly target complete</p>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="font-semibold">XP Progress Ring</h3>
              <div className="mt-3 flex items-center gap-4">
                <div className="grid h-20 w-20 place-items-center rounded-full" style={{ background: `conic-gradient(#4facfe ${xpProgress}%, rgba(255,255,255,.12) 0)` }}>
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-bg text-sm font-semibold">{xpProgress}%</div>
                </div>
                <p className="text-sm text-slate-300">Level 5 Scholar • 720 XP to next badge</p>
              </div>
            </AnimatedCard>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <AnimatedCard key={item.label} delay={i * 0.06}>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-bold gradient-text">{item.value}</p>
              </AnimatedCard>
            ))}
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
