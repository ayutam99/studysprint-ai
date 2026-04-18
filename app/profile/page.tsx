import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';
import { ProgressChart } from '@/components/progress-chart';

const badges = ['7-Day Focus Streak', '100 MCQs Solved', 'Formula Master', 'Night-before Hero'];

export default function ProfilePage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <h1 className="section-title">Student Profile</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <AnimatedCard>
            <p className="text-sm text-slate-400">Student Name</p>
            <p className="text-2xl font-bold">Aditi Sharma</p>
            <p className="mt-2 text-slate-300">Courses: Physics, Economics, Computer Science</p>
          </AnimatedCard>
          <AnimatedCard><p className="text-sm text-slate-400">XP Points</p><p className="text-2xl font-bold gradient-text">2,480</p></AnimatedCard>
          <AnimatedCard><p className="text-sm text-slate-400">Daily Streak</p><p className="text-2xl font-bold">12 days 🔥</p></AnimatedCard>
        </div>
        <AnimatedCard>
          <h2 className="mb-3 text-xl font-semibold">Achievement Badges</h2>
          <div className="flex flex-wrap gap-2">{badges.map((b) => <span key={b} className="rounded-full border border-neonPurple/30 bg-neonPurple/15 px-3 py-1 text-sm">{b}</span>)}</div>
        </AnimatedCard>
        <AnimatedCard>
          <h2 className="mb-3 text-xl font-semibold">Saved Notes</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-300"><li>Electromagnetism quick sheet.pdf</li><li>Elasticity graphs cheatsheet.txt</li><li>MBA market segmentation guide.docx</li></ul>
        </AnimatedCard>
        <AnimatedCard>
          <h2 className="mb-3 text-xl font-semibold">Quiz History & Progress</h2>
          <p className="mb-2 text-slate-300">Recent scores: 68%, 74%, 80%, 88%</p>
          <ProgressChart />
        </AnimatedCard>
      </div>
    </PageShell>
  );
}
