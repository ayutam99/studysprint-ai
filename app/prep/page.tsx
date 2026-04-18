import Link from 'next/link';
import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { prepSections } from '@/data/demo-data';

export default function PrepPage() {
  return (
    <PageShell>
      <Reveal>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="section-title">I Have Exam Tomorrow 🚨</h1>
            <Link href="/quiz" className="rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple px-4 py-2 font-semibold transition hover:scale-[1.02]">
              Start Emergency Quiz
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <AnimatedCard>
              <h2 className="mb-3 text-xl font-semibold">Top 20 Important Questions</h2>
              <ul className="space-y-1 text-sm text-slate-300">{prepSections.topQuestions.map((q) => <li key={q}>{q}</li>)}</ul>
            </AnimatedCard>
            <AnimatedCard>
              <h2 className="mb-3 text-xl font-semibold">30 Minute Crash Course</h2>
              <ul className="space-y-2 text-slate-300">{prepSections.crashCourse.map((x) => <li key={x}>{x}</li>)}</ul>
            </AnimatedCard>
            <AnimatedCard>
              <h2 className="mb-3 text-xl font-semibold">Quick Revision Notes</h2>
              <ul className="space-y-2 text-slate-300">{prepSections.quickNotes.map((x) => <li key={x}>{x}</li>)}</ul>
            </AnimatedCard>
            <AnimatedCard>
              <h2 className="mb-3 text-xl font-semibold">High Probability Questions</h2>
              <ul className="space-y-2 text-slate-300">{prepSections.probable.map((x) => <li key={x}>{x}</li>)}</ul>
            </AnimatedCard>
            <AnimatedCard>
              <h2 className="mb-3 text-xl font-semibold">Must Remember Topics</h2>
              <ul className="space-y-2 text-slate-300">{prepSections.mustRemember.map((x) => <li key={x}>{x}</li>)}</ul>
            </AnimatedCard>
            <AnimatedCard>
              <h2 className="mb-3 text-xl font-semibold">Pass Strategy Checklist</h2>
              <ul className="space-y-2 text-slate-300">{prepSections.strategy.map((x) => <li key={x}>✅ {x}</li>)}</ul>
            </AnimatedCard>
          </div>
          <AnimatedCard>
            <h2 className="text-xl font-semibold">Last Night Motivation Message</h2>
            <p className="mt-2 text-lg text-neonBlue">{prepSections.motivation}</p>
          </AnimatedCard>
        </div>
      </Reveal>
    </PageShell>
  );
}
