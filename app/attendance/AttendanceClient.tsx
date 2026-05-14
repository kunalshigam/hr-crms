'use client';

import { Download } from 'lucide-react';
import { format } from 'date-fns';

type Attendance = {
  id: string;
  employee: {
    firstName: string;
    lastName: string;
  };
  clockIn: Date | null;
  status: string;
};

export default function AttendanceClient({ records }: { records: Attendance[] }) {
  const heat = Array.from({length: 30}, () => Math.floor(Math.random() * 5));

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">Attendance</h1>
        <p className="text-[13px] text-muted-foreground mt-1">Overview for the current month</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { l: "Present today", v: "229", d: "92.3%", c: "var(--success)", bg: "var(--success-bg)" },
          { l: "Absent", v: "8", d: "3.2%", c: "var(--danger)", bg: "var(--danger-bg)" },
          { l: "Late", v: "6", d: "2.4%", c: "var(--warning)", bg: "var(--warning-bg)" },
          { l: "On leave", v: "5", d: "2.0%", c: "var(--info)", bg: "var(--info-bg)" },
        ].map(k => (
          <div key={k.l} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="text-xs text-muted-foreground font-medium mb-3">{k.l}</div>
            <div className="flex items-baseline gap-3">
              <div className="text-[28px] font-heading font-semibold tracking-tight leading-none">{k.v}</div>
              <div className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ color: k.c, backgroundColor: k.bg }}>{k.d}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-semibold font-heading">Attendance heatmap · Last 30 days</h3>
            <select className="bg-surface border border-border rounded-md px-2 py-1 text-xs text-foreground outline-none">
              <option>All departments</option>
            </select>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4">
            {["M","T","W","T","F","S","S"].map((d,i) => <div key={i} className="text-[10px] uppercase font-semibold text-muted-foreground py-1">{d}</div>)}
            {heat.map((h, i) => (
              <div key={i} className={`aspect-square flex items-center justify-center rounded-md text-[10px] cursor-help transition-all hover:ring-2 hover:ring-ring`} 
                   style={{ 
                     backgroundColor: h === 0 ? 'var(--surface)' : `hsla(273, 67%, ${90 - h * 15}%, 1)`, 
                     color: h > 2 ? 'white' : 'var(--foreground)'
                   }}>
                {i+1}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 mt-4 text-[11px] text-muted-foreground font-medium">
            <span>Less</span>
            {[0,1,2,3,4].map(i => (
              <div key={i} className="w-4 h-4 rounded-sm" style={{ backgroundColor: i === 0 ? 'var(--surface)' : `hsla(273, 67%, ${90 - i * 15}%, 1)` }} />
            ))}
            <span>More</span>
          </div>
        </div>

        <div className="lg:col-span-3 bg-card border border-border rounded-xl shadow-sm flex flex-col">
          <div className="p-4 border-b border-border flex justify-between items-center bg-card shrink-0">
            <h3 className="text-[15px] font-semibold font-heading">Today · {records.length} records</h3>
            <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </div>
          
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead className="bg-surface sticky top-0 z-10 border-b border-border">
                <tr>
                  <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Employee</th>
                  <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Clock in</th>
                  <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Hours</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id} className="border-b border-border/60 hover:bg-surface/50 transition-colors cursor-pointer">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-[10px] shrink-0">
                          {r.employee.firstName.charAt(0)}{r.employee.lastName.charAt(0)}
                        </div>
                        <span className="font-semibold text-foreground">{r.employee.firstName} {r.employee.lastName}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {r.status === 'PRESENT' && <span className="inline-flex items-center gap-1.5 bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Present</span>}
                      {r.status === 'LATE' && <span className="inline-flex items-center gap-1.5 bg-warning-bg text-warning text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Late</span>}
                      {r.status === 'ABSENT' && <span className="inline-flex items-center gap-1.5 bg-danger-bg text-danger text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Absent</span>}
                    </td>
                    <td className="py-3 px-4 font-mono text-[12px] text-muted-foreground">
                      {r.clockIn ? format(new Date(r.clockIn), 'h:mm a') : '—'}
                    </td>
                    <td className="py-3 px-4 font-mono text-[12px] font-medium text-foreground">
                      {r.status === 'ABSENT' ? '0' : '7.5'}h
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
