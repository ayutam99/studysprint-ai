import Link from 'next/link';
import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';

const features = [
  'Smart AI summaries in seconds',
  'Exam-focused MCQs with explanations',
  'Flashcards and memory tricks',
  'Emergency prep mode for tomorrow exams',
];

const trustStats = [
  { label: 'Students Ready', value: '10,000+' },
  { label: 'Mock Sessions Completed', value: '2.4M' },
  { label: 'Campus Communities', value: '120+' },
  { label: 'Avg. Prep Time Saved', value: '38%' },
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative grid items-center gap-8 py-14 md:grid-cols-2">
        <div className="hero-orb left-10 top-5 h-28 w-28 bg-neonBlue" />
        <div className="hero-orb right-16 top-24 h-24 w-24 bg-neonPurple" />

        <Reveal>
          <div className="space-y-5">
            <p className="w-fit rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-sm text-neonBlue">Trusted for last-minute exam prep</p>
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Exam Tomorrow? <span className="gradient-text">Start Now.</span>
            </h1>
            <p className="text-lg text-slate-300">Upload notes, generate summaries, quizzes, flashcards and pass smarter.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple px-5 py-3 font-semibold transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,172,254,0.35)]">
                Start Free
              </Link>
              <Link href="/prep" className="rounded-xl border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10">
                Emergency Prep
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <AnimatedCard>
            <h3 className="text-xl font-bold">Live Demo Preview</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>✅ Upload notes + select subject</li>
              <li>✅ Generate AI-style summary instantly</li>
              <li>✅ 5-minute adaptive quiz sprint</li>
              <li>✅ Flip flashcards with mastery tracking</li>
              <li>✅ Ask doubt chatbot before exam</li>
            </ul>
          </AnimatedCard>
        </Reveal>
      </section>

      <Reveal>
        <section className="grid gap-4 py-6 md:grid-cols-4">
          {trustStats.map((stat) => (
            <AnimatedCard key={stat.label}>
              <p className="text-2xl font-black gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </AnimatedCard>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-4 py-10">
          <h2 className="section-title">Feature Showcase</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <AnimatedCard key={feature} delay={i * 0.06}>
                <p className="text-slate-100">{feature}</p>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-4 py-8 md:grid-cols-3">
          {[
            { t: 'Why students love it', d: 'Designed for pressure moments with clean, structured outputs and strong exam focus.' },
            { t: 'Used across colleges', d: 'Demo workflow built around real student needs: speed, clarity, and confidence.' },
            { t: 'Success stories', d: '“I revised 3 chapters in one night and scored 84%.” — Aarav, B.Tech.' },
          ].map((item) => (
            <AnimatedCard key={item.t}>
              <h3 className="mb-2 text-xl font-semibold">{item.t}</h3>
              <p className="text-slate-300">{item.d}</p>
            </AnimatedCard>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="py-10">
          <AnimatedCard>
            <h3 className="text-2xl font-bold">Free plan pricing</h3>
            <p className="mt-2 text-slate-300">₹0 forever. Unlimited demo subjects, daily quiz mode, emergency prep templates, and progress dashboard.</p>
            <Link href="/dashboard" className="mt-4 inline-block rounded-xl bg-neonBlue/20 px-4 py-2 text-neonBlue transition hover:bg-neonBlue/30">
              Activate Free Access
            </Link>
          </AnimatedCard>
        </section>
      </Reveal>
    </PageShell>
  );
}
