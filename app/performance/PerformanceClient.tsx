'use client';

import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Star } from 'lucide-react';

type Review = {
  id: string;
  rating: number | null;
  status: string;
  reviewee: {
    firstName: string;
    lastName: string;
    department: { name: string } | null;
  };
};

export default function PerformanceClient({ reviews }: { reviews: Review[] }) {
  const chartData = [
    { label: "Eng", value: 4.4 }, { label: "Design", value: 4.6 },
    { label: "Product", value: 4.3 }, { label: "Marketing", value: 4.1 },
    { label: "Sales", value: 4.0 }, { label: "Ops", value: 4.2 },
    { label: "Finance", value: 3.9 }, { label: "Support", value: 4.3 },
  ];

  // Dummy top performers
  const topPerformers = [
    { n: "Sofia Romero", d: "Design", s: 4.9, g: "5/5", m: "Linh Tran" },
    { n: "Priya Iyer", d: "Engineering", s: 4.8, g: "4/4", m: "Sasha Volkov" },
    { n: "Aiko Tanaka", d: "Marketing", s: 4.8, g: "5/5", m: "—" },
    { n: "Lina Park", d: "Engineering", s: 4.7, g: "3/4", m: "Priya Iyer" },
    { n: "Henrik Olsen", d: "Sales", s: 4.6, g: "4/5", m: "David Kim" },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight">Performance</h1>
          <p className="text-[13px] text-muted-foreground mt-1">Q3 2026 Cycle</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { l: "Cycle status", v: "In progress", d: "32 days remaining", c: "var(--info)", bg: "var(--info-bg)" },
          { l: "Reviews completed", v: "184/248", d: "74.2%", c: "var(--success)", bg: "var(--success-bg)" },
          { l: "Avg performance", v: "4.2", d: "out of 5", c: "var(--primary)", bg: "var(--primary-bg)" },
          { l: "On performance plan", v: "6", d: "2.4% of org", c: "var(--warning)", bg: "var(--warning-bg)" },
        ].map(k => (
          <div key={k.l} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="text-xs text-muted-foreground font-medium mb-3">{k.l}</div>
            <div className="flex items-baseline gap-3">
              <div className="text-[28px] font-heading font-semibold tracking-tight leading-none" style={{ color: k.c }}>{k.v}</div>
              <div className="text-[11px] font-bold px-2 py-0.5 rounded-full text-muted-foreground">{k.d}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[15px] font-semibold font-heading mb-6">Average rating by department</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} dy={10} />
                <Tooltip cursor={{ fill: 'var(--accent)' }} contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', fontSize: '12px', boxShadow: 'var(--sh-sm)' }} />
                <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-center">
          <h3 className="text-[15px] font-semibold font-heading mb-6">Review completion</h3>
          <div className="flex flex-col gap-5">
            {[["Self review", 92], ["Manager review", 78], ["Peer review", 64], ["Skip-level", 41]].map(([l,p]) => (
              <div key={l as string}>
                <div className="flex justify-between mb-1.5 text-[12px]">
                  <span className="text-muted-foreground font-medium">{l}</span>
                  <span className="font-mono font-semibold">{p}%</span>
                </div>
                <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col flex-1 min-h-0">
        <div className="p-4 border-b border-border flex justify-between items-center bg-card shrink-0">
          <h3 className="text-[15px] font-semibold font-heading">Top performers · Q3</h3>
          <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
            View all 248
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead className="bg-surface sticky top-0 z-10 border-b border-border">
              <tr>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider w-12">#</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Employee</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Department</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Score</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Goals</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Manager</th>
              </tr>
            </thead>
            <tbody>
              {topPerformers.map((p, i) => (
                <tr key={p.n} className="border-b border-border/60 hover:bg-surface/50 transition-colors cursor-pointer">
                  <td className="py-3 px-4 text-muted-foreground font-mono">{i+1}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-[10px] shrink-0">
                        {p.n.charAt(0)}
                      </div>
                      <span className="font-semibold text-foreground">{p.n}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground font-medium">{p.d}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5 text-warning bg-warning-bg px-2 py-0.5 rounded-md w-max">
                      <Star className="w-3 h-3 fill-warning" />
                      <span className="font-bold text-foreground text-[11px]">{p.s}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono font-medium text-muted-foreground">{p.g}</td>
                  <td className="py-3 px-4 text-muted-foreground font-medium">{p.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
