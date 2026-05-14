'use client';

import { Plus, GraduationCap, Clock, Users } from 'lucide-react';

export default function TrainingPage() {
  const courses = [
    { id: 1, title: "Manager Essentials: First 90 Days", category: "Leadership", duration: "3h 45m", enrolled: 38, status: "Active" },
    { id: 2, title: "Information Security 2026", category: "Compliance", duration: "45m", enrolled: 248, status: "Active" },
    { id: 3, title: "Effective 1:1 Meetings", category: "Leadership", duration: "1h 20m", enrolled: 62, status: "Active" },
    { id: 4, title: "Structured Interviewing", category: "Recruitment", duration: "2h 15m", enrolled: 45, status: "Active" },
    { id: 5, title: "Giving Actionable Feedback", category: "Performance", duration: "1h 10m", enrolled: 112, status: "Draft" },
    { id: 6, title: "Anti-Harassment Training", category: "Compliance", duration: "1h 00m", enrolled: 248, status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight">Training</h1>
          <p className="text-[13px] text-muted-foreground mt-1">Course catalog</p>
        </div>
      </div>

      <div className="flex gap-2 mb-2">
        <input 
          type="text" 
          placeholder="Search courses…" 
          className="flex-1 max-w-[320px] bg-surface border border-border focus:border-ring rounded-md py-1.5 px-3 text-[13px] outline-none text-foreground transition-all"
        />
        <select className="bg-surface border border-border rounded-md px-3 py-1.5 text-[13px] text-foreground outline-none w-[160px]">
          <option>All categories</option>
          <option>Leadership</option>
          <option>Compliance</option>
        </select>
        <div className="flex-1" />
        <button className="flex items-center gap-2 bg-primary border border-primary px-3 py-1.5 rounded-lg text-[13px] font-medium text-white shadow-sm hover:bg-primary/90 transition-colors">
          <Plus className="w-3.5 h-3.5" /> New course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c, i) => (
          <div key={c.id} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow cursor-pointer">
            <div 
              className="h-[130px] relative flex items-center justify-center shrink-0"
              style={{ background: `linear-gradient(135deg, hsl(${260 + i*8}, 60%, ${55+i*3}%), hsl(${280 + i*5}, 65%, 70%))` }}
            >
              <GraduationCap className="w-10 h-10 text-white/90" />
              <div className="absolute top-2.5 right-2.5">
                {c.status === 'Active' ? (
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white border border-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">Active</span>
                ) : (
                  <span className="inline-flex items-center bg-black/20 backdrop-blur-sm text-white/80 border border-white/10 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Draft</span>
                )}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-1">{c.category}</div>
              <h3 className="text-[16px] font-semibold font-heading mb-3 group-hover:text-primary transition-colors line-clamp-2">{c.title}</h3>
              
              <div className="flex gap-4 text-[12px] text-muted-foreground mb-4 font-medium mt-auto">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {c.enrolled} enrolled</span>
              </div>
              
              <button className="w-full py-2 bg-surface border border-border text-foreground text-[12px] font-semibold rounded-lg hover:bg-accent hover:border-accent transition-colors">
                View course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
