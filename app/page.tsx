import Link from 'next/link';
import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';

const features = [
  'Smart AI summaries in seconds',
  'Exam-focused MCQs with explanations',
  'Flashcards and memory tricks',
  'Emergency prep mode for tomorrow exams',
];

const trustStats = [
  { value: '10,000+', label: 'Students Ready' },
  { value: '120+', label: 'Colleges Reached' },
  { value: '2.4M', label: 'Practice Qs Generated' },
  { value: '38%', label: 'Average Prep Time Saved' },
];

const howItWorks = [
  'Upload notes and choose subject',
  'Generate summary, quiz, flashcards, and formula sheets',
  'Practice timed questions and track progress',
  'Revise weak spots before exam day',
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="grid items-center gap-8 py-12 md:grid-cols-2">
        <div className="space-y-5">
          <p className="w-fit rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-sm text-neonBlue">Trusted for last-minute exam prep</p>
          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Exam Tomorrow? <span className="gradient-text">Start Now.</span>
          </h1>
          <p className="text-lg text-slate-300">Upload notes, generate summaries, quizzes, flashcards and pass smarter.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple px-5 py-3 font-semibold transition hover:scale-[1.02]">
              Start Free
            </Link>
            <Link href="/prep" className="rounded-xl border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10">
              Emergency Prep
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-xl font-black gradient-text">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <AnimatedCard>
          <h3 className="text-xl font-bold">Live Demo Workflow</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>1. Upload notes</li>
            <li>2. Pick subject</li>
            <li>3. Generate crash summary</li>
            <li>4. Attempt 5-minute quiz</li>
            <li>5. Revise with flashcards</li>
          </ul>
          <div className="mt-4 rounded-xl border border-neonBlue/20 bg-neonBlue/10 p-3 text-sm text-neonBlue">
            Used by students across colleges for one-night revision sprints.
          </div>
        </AnimatedCard>
      </section>

      <section className="space-y-4 py-10">
        <h2 className="section-title">Features Showcase</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimatedCard key={feature} delay={i * 0.06}>
              <p className="text-slate-100">{feature}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="grid gap-4 py-10 md:grid-cols-2">
        <AnimatedCard>
          <h3 className="mb-2 text-xl font-semibold">Why students love it</h3>
          <p className="text-slate-300">Fast, structured, and exam-oriented. Designed for students with low time and high pressure.</p>
        </AnimatedCard>
        <AnimatedCard>
          <h3 className="mb-2 text-xl font-semibold">Testimonials</h3>
          <p className="text-slate-300">“I revised 3 chapters in one night and scored 84%.” — Aarav, B.Tech.</p>
        </AnimatedCard>
      </section>

      <section className="py-10">
        <AnimatedCard>
          <h3 className="mb-3 text-2xl font-bold">How it works</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {howItWorks.map((step, index) => (
              <div key={step} className="rounded-xl border border-white/15 bg-white/5 p-3 text-slate-200">
                <span className="mr-2 rounded-full bg-neonBlue/20 px-2 py-1 text-xs text-neonBlue">Step {index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </AnimatedCard>
      </section>

      <section className="py-10">
        <AnimatedCard>
          <h3 className="text-2xl font-bold">Free plan pricing</h3>
          <p className="mt-2 text-slate-300">₹0 forever. Unlimited demo subjects, daily quiz mode, emergency prep templates, and progress dashboard.</p>
          <Link href="/dashboard" className="mt-4 inline-block rounded-xl bg-neonBlue/20 px-4 py-2 text-neonBlue hover:bg-neonBlue/30">
            Activate Free Access
          </Link>
        </AnimatedCard>
      </section>
    </PageShell>
  );
}
