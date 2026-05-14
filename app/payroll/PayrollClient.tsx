'use client';

import { Download, Send } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type Payroll = {
  id: string;
  employee: {
    firstName: string;
    lastName: string;
    department: { name: string } | null;
  };
  baseSalary: number;
  deductions: number;
  netSalary: number;
  status: string;
};

export default function PayrollClient({ records }: { records: Payroll[] }) {
  const pieData = [
    { name: 'Base salary', value: 68, color: 'var(--primary)' },
    { name: 'Bonuses', value: 16, color: 'var(--primary-light)' },
    { name: 'Benefits', value: 9, color: '#C084FC' },
    { name: 'Deductions', value: 7, color: 'var(--accent)' },
  ];

  const totalPayroll = records.reduce((acc, r) => acc + r.baseSalary, 0);

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight">Payroll</h1>
          <p className="text-[13px] text-muted-foreground mt-1">April 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 rounded-xl p-6 shadow-sm border border-border" style={{ background: "linear-gradient(135deg, #4C1D95 0%, #6B21A8 60%, #A855F7 110%)", color: "white" }}>
          <div className="text-[12px] opacity-85 uppercase tracking-[0.06em] mb-2 font-medium">Total payroll · April 2026</div>
          <div className="font-heading text-[44px] font-semibold tracking-tight leading-none mb-6">
            ${totalPayroll.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          
          <div className="flex gap-10 mb-8">
            <div>
              <div className="text-[12px] opacity-75 mb-1">Employees</div>
              <div className="font-semibold text-[16px]">{records.length}</div>
            </div>
            <div>
              <div className="text-[12px] opacity-75 mb-1">Pay date</div>
              <div className="font-semibold text-[16px]">Apr 30</div>
            </div>
            <div>
              <div className="text-[12px] opacity-75 mb-1">Net pay</div>
              <div className="font-semibold text-[16px]">${(totalPayroll * 0.72).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>
            <div>
              <div className="text-[12px] opacity-75 mb-1">Status</div>
              <div className="font-semibold text-[16px]">Awaiting approval</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white text-primary rounded-lg font-semibold text-[14px] shadow-sm hover:bg-white/90 transition-colors">
              Review pay run
            </button>
            <button className="px-5 py-2.5 rounded-lg font-semibold text-[14px] border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
              Run payroll →
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[15px] font-semibold font-heading mb-4">Pay breakdown</h3>
          <div className="flex items-center gap-6 h-[160px]">
            <div className="w-[120px] h-[120px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[18px] font-heading font-semibold leading-none">68%</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mt-0.5">Base</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-2.5">
              {[
                { l: "Base salary", v: "$2,864,493", c: "var(--primary)", p: 68 },
                { l: "Bonuses", v: "$674,000", c: "var(--primary-light)", p: 16 },
                { l: "Benefits", v: "$378,123", c: "#C084FC", p: 9 },
                { l: "Deductions", v: "−$295,874", c: "var(--accent)", p: 7 },
              ].map(r => (
                <div key={r.l} className="flex items-center justify-between text-[12px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: r.c }} />
                    <span className="text-muted-foreground">{r.l}</span>
                  </div>
                  <div className="flex gap-3 text-right">
                    <span className="text-muted-foreground font-mono w-6">{r.p}%</span>
                    <span className="font-semibold font-mono w-20">{r.v}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col flex-1 min-h-0">
        <div className="p-4 border-b border-border flex justify-between items-center bg-card shrink-0 gap-4">
          <h3 className="text-[15px] font-semibold font-heading">Payslips · April 2026</h3>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Search employee…" 
              className="w-[220px] bg-surface border border-border focus:border-ring rounded-md py-1.5 px-3 text-[12px] outline-none text-foreground transition-all"
            />
            <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
              <Send className="w-3.5 h-3.5" /> Send all payslips
            </button>
            <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
              <Download className="w-3.5 h-3.5" /> Export CSV
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead className="bg-surface sticky top-0 z-10 border-b border-border">
              <tr>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Employee</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Department</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Gross</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Deductions</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Net pay</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider text-right"></th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-b border-border/60 hover:bg-surface/50 transition-colors group cursor-pointer">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-[10px] shrink-0">
                        {r.employee.firstName.charAt(0)}{r.employee.lastName.charAt(0)}
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{r.employee.firstName} {r.employee.lastName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground font-medium">{r.employee.department?.name || '—'}</td>
                  <td className="py-3 px-4 font-mono text-[12px] text-foreground">${r.baseSalary.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                  <td className="py-3 px-4 font-mono text-[12px] text-muted-foreground">−${r.deductions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                  <td className="py-3 px-4 font-mono text-[12px] font-bold text-foreground">${r.netSalary.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                  <td className="py-3 px-4">
                    {r.status === 'PAID' && <span className="inline-flex items-center bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Processed</span>}
                    {r.status === 'DRAFT' && <span className="inline-flex items-center bg-surface text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-border">Draft</span>}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded-md hover:bg-surface text-muted-foreground"><Download className="w-3.5 h-3.5" /></button>
                      <button className="p-1.5 rounded-md hover:bg-surface text-muted-foreground"><Send className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
