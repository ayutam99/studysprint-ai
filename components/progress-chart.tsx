'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { day: 'Mon', score: 48 },
  { day: 'Tue', score: 62 },
  { day: 'Wed', score: 73 },
  { day: 'Thu', score: 78 },
  { day: 'Fri', score: 86 },
  { day: 'Sat', score: 91 },
];

export function ProgressChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip contentStyle={{ background: '#0f1329', border: '1px solid #ffffff20' }} />
          <Line type="monotone" dataKey="score" stroke="#4facfe" strokeWidth={3} dot={{ fill: '#9f7aea' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
