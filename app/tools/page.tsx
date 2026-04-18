'use client';

import { useMemo, useState } from 'react';
import { AnimatedCard } from '@/components/animated-card';
import { PageShell } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { toolTabs } from '@/data/demo-data';

export default function ToolsPage() {
  const [active, setActive] = useState(toolTabs[0].key);

  const current = useMemo(() => toolTabs.find((t) => t.key === active) ?? toolTabs[0], [active]);

  return (
    <PageShell>
      <Reveal>
        <div className="space-y-6">
          <h1 className="section-title">Study Tools</h1>
          <p className="text-slate-300">Switch tabs to simulate different AI study outputs instantly.</p>

          <div className="flex flex-wrap gap-2">
            {toolTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${active === tab.key ? 'bg-neonBlue/20 text-neonBlue shadow-[0_0_18px_rgba(79,172,254,0.2)]' : 'bg-white/10 hover:bg-white/20'}`}
                aria-pressed={active === tab.key}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <AnimatedCard>
            <h2 className="text-2xl font-semibold">{current.title}</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {current.content.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </div>
      </Reveal>
    </PageShell>
  );
}
