'use client';

import { Users, Briefcase, TrendingDown, Target, TrendingUp, MoreHorizontal, ChevronLeft, ChevronRight, Plus, DollarSign, Calendar, FileText, Send } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const kpis = [
  { label: "Total Headcount", value: "248", delta: "+12 MTD", up: true, icon: Users },
  { label: "Open Roles", value: "16", delta: "+3 this week", up: true, icon: Briefcase },
  { label: "Attrition (YTD)", value: "4.8%", delta: "-1.2 vs Q2", up: false, icon: TrendingDown },
  { label: "Reviews Due", value: "32", delta: "in next 14 days", up: true, icon: Target },
];

const deptData = [
  { name: "Eng", value: 86 }, { name: "Design", value: 22 }, { name: "Product", value: 18 },
  { name: "Marketing", value: 28 }, { name: "Sales", value: 34 }, { name: "Ops", value: 24 },
  { name: "Finance", value: 14 }, { name: "Legal", value: 8 }, { name: "Support", value: 14 },
];

const funnel = [
  { label: "Applied", value: 412, w: 100 },
  { label: "Screening", value: 156, w: 80 },
  { label: "Interview", value: 64, w: 58 },
  { label: "Offer", value: 22, w: 38 },
  { label: "Hired", value: 11, w: 22 },
];

const activity = [
  { who: "Jordan Reyes", what: "moved", target: "Felix Hartmann", to: "Interview stage", time: "12m ago" },
  { who: "Priya Iyer", what: "approved", target: "Marcus Adler's", to: "leave request (5 days)", time: "1h ago" },
  { who: "Maya Chen", what: "published", target: "Senior PM", to: "job posting", time: "2h ago" },
  { who: "Sofia Romero", what: "completed", target: "Q3 self-review", time: "3h ago" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Overview</h1>
        <p className="text-[13px] text-muted-foreground mt-1">Good morning, Maya 👋</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-card border border-border rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-accent text-primary flex items-center justify-center">
                <k.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-xs text-muted-foreground font-medium">{k.label}</div>
            <div className="flex items-baseline justify-between">
              <div className="text-[28px] font-heading font-semibold tracking-tight leading-none">{k.value}</div>
              <div className={`flex items-center gap-1 text-[11px] font-medium ${k.up ? 'text-success' : 'text-danger'}`}>
                {k.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {k.delta}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-[15px] font-semibold font-heading">Headcount by Department</h3>
              <div className="text-xs text-muted-foreground mt-1">248 active · last updated 2h ago</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-surface text-muted-foreground text-[11px] font-medium px-3 py-1 rounded-full border border-border">This quarter</span>
              <button className="p-1 hover:bg-surface rounded-md text-muted-foreground">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--text-2)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--text-2)' }} />
                <Tooltip cursor={{ fill: 'var(--surface-2)' }} contentStyle={{ borderRadius: '8px', border: '1px solid var(--border)', fontSize: '12px' }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {deptData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? 'var(--primary)' : 'var(--primary-light)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col">
          <h3 className="text-[15px] font-semibold font-heading mb-1">Hiring Funnel</h3>
          <div className="text-xs text-muted-foreground mb-4">Last 30 days · all roles</div>
          <div className="flex flex-col gap-[4px] flex-1">
            {funnel.map((f, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg text-white text-xs h-[38px]" 
                style={{ width: `${f.w}%`, background: 'linear-gradient(90deg, var(--primary), var(--primary-light))', opacity: 1 - i * 0.1 }}>
                <span className="font-medium">{f.label}</span>
                <span className="font-heading font-semibold text-sm">{f.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-surface rounded-lg text-xs text-muted-foreground border border-border">
            Conversion to offer: <strong className="text-foreground">5.3%</strong> · Avg time: <strong className="text-foreground">34 days</strong>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border flex justify-between items-center bg-card shrink-0">
            <h3 className="text-[15px] font-semibold font-heading">Activity</h3>
            <button className="text-xs text-primary font-medium hover:underline">View all →</button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {activity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-[10px] shrink-0">
                  {a.who.charAt(0)}
                </div>
                <div className="text-[13px] leading-relaxed">
                  <div><strong className="text-foreground font-medium">{a.who}</strong> <span className="text-muted-foreground">{a.what}</span> <strong className="text-foreground font-medium">{a.target}</strong> {a.to && <span className="text-muted-foreground">{a.to}</span>}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-semibold font-heading">April 2026</h3>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-md hover:bg-surface flex items-center justify-center text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-7 h-7 rounded-md hover:bg-surface flex items-center justify-center text-muted-foreground"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4">
            {["M","T","W","T","F","S","S"].map((d,i) => <div key={i} className="text-[10px] uppercase font-semibold text-muted-foreground py-1">{d}</div>)}
            {[31,1,2,3,4,5,6].map((d, i) => <div key={`a${d}`} className={`aspect-square flex items-center justify-center rounded-md cursor-pointer hover:bg-surface ${i===0 ? 'text-muted-foreground/50' : 'text-foreground'}`}>{d}</div>)}
            {[7,8,9,10,11,12,13].map((d) => <div key={`b${d}`} className={`aspect-square flex items-center justify-center rounded-md cursor-pointer hover:bg-surface text-foreground relative ${d===9||d===11 ? 'after:content-[""] after:w-1 after:h-1 after:bg-primary after:rounded-full after:absolute after:bottom-1' : ''}`}>{d}</div>)}
            {[14,15,16,17,18,19,20].map((d) => <div key={`c${d}`} className={`aspect-square flex items-center justify-center rounded-md cursor-pointer text-foreground relative ${d===15 ? 'bg-primary text-white font-semibold shadow-sm' : 'hover:bg-surface'} ${d===17 ? 'after:content-[""] after:w-1 after:h-1 after:bg-primary after:rounded-full after:absolute after:bottom-1' : ''}`}>{d}</div>)}
            {[21,22,23,24,25,26,27].map((d) => <div key={`d${d}`} className={`aspect-square flex items-center justify-center rounded-md cursor-pointer hover:bg-surface text-foreground relative ${d===23 ? 'after:content-[""] after:w-1 after:h-1 after:bg-primary after:rounded-full after:absolute after:bottom-1' : ''}`}>{d}</div>)}
            {[28,29,30,1,2,3,4].map((d,i) => <div key={`e${i}`} className={`aspect-square flex items-center justify-center rounded-md cursor-pointer hover:bg-surface ${i>=3 ? 'text-muted-foreground/50' : 'text-foreground'}`}>{d}</div>)}
          </div>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <div className="flex gap-3 items-start">
              <div className="w-1 h-8 bg-primary rounded-full shrink-0"></div>
              <div className="text-xs">
                <div className="font-medium text-foreground">Q3 Review kickoff</div>
                <div className="text-muted-foreground mt-0.5">Today · 2:00 PM</div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-1 h-8 bg-primary-light rounded-full shrink-0"></div>
              <div className="text-xs">
                <div className="font-medium text-foreground">Felix Hartmann · Final Interview</div>
                <div className="text-muted-foreground mt-0.5">Apr 17 · 10:00 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[15px] font-semibold font-heading mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Plus, label: "Add employee" },
              { icon: Briefcase, label: "Post a job" },
              { icon: DollarSign, label: "Run payroll" },
              { icon: Calendar, label: "Approve leave", badge: "5" },
              { icon: FileText, label: "New report" },
              { icon: Send, label: "Announcement" },
            ].map((a, i) => (
              <button key={i} className="flex flex-col items-center justify-center gap-2 p-3 bg-surface border border-border hover:border-primary-light hover:bg-background transition-all rounded-lg h-[84px] relative group">
                <a.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-foreground text-center leading-tight">{a.label}</span>
                {a.badge && (
                  <span className="absolute top-1.5 right-1.5 bg-danger text-white text-[9px] font-bold px-[5px] py-[1px] rounded-full shadow-sm">
                    {a.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
