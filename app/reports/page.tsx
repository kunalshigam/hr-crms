'use client';

import { Users, TrendingDown, DollarSign, Target, Clock, Briefcase, ArrowRight } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { i: <Users className="w-6 h-6" />, t: "Headcount", d: "Growth, distribution, demographics", n: 8 },
    { i: <TrendingDown className="w-6 h-6" />, t: "Turnover & Retention", d: "Attrition, tenure, exit reasons", n: 6 },
    { i: <DollarSign className="w-6 h-6" />, t: "Payroll & Compensation", d: "Run history, comp ratios, equity", n: 11 },
    { i: <Target className="w-6 h-6" />, t: "Performance", d: "Cycle results, ratings distribution", n: 9 },
    { i: <Clock className="w-6 h-6" />, t: "Attendance", d: "Daily presence, hours worked, late", n: 5 },
    { i: <Briefcase className="w-6 h-6" />, t: "Recruitment", d: "Pipeline, time-to-hire, source funnel", n: 7 },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight">Reports</h1>
          <p className="text-[13px] text-muted-foreground mt-1">Reports & Analytics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((r) => (
          <div key={r.t} className="bg-card border border-border rounded-xl p-5 shadow-sm group hover:shadow-md hover:border-primary/30 transition-all cursor-pointer flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {r.i}
            </div>
            <h3 className="text-[17px] font-semibold font-heading mb-1.5">{r.t}</h3>
            <div className="text-[13px] text-muted-foreground mb-6 flex-1">{r.d}</div>
            
            <div className="flex justify-between items-center text-[12px] pt-4 border-t border-border mt-auto">
              <span className="text-muted-foreground font-medium">{r.n} reports</span>
              <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
