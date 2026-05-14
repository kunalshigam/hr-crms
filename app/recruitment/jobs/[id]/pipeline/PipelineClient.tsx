'use client';

import { Search, Filter, Plus, Star, Calendar } from 'lucide-react';
import Link from 'next/link';

type Candidate = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  stage: string;
  score: number | null;
  createdAt: Date;
};

type Job = {
  id: string;
  title: string;
};

export default function PipelineClient({ job, candidates }: { job: Job, candidates: Candidate[] }) {
  const stages = ["Applied", "Screening", "Interview", "Offer", "Hired"];

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto h-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link href="/recruitment" className="text-[13px] text-muted-foreground hover:text-foreground hover:underline transition-colors">
            ← All jobs
          </Link>
          <span className="text-muted-foreground">·</span>
          <span className="text-[13px] font-medium">{candidates.length} candidates</span>
          <span className="inline-flex items-center gap-1.5 bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ml-2">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
            <Search className="w-3.5 h-3.5" /> Search candidates
          </button>
          <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-primary border border-primary px-3 py-1.5 rounded-lg text-[12px] font-medium text-white shadow-sm hover:bg-primary/90 transition-colors">
            <Plus className="w-3.5 h-3.5" /> Add candidate
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 flex-1 items-start min-h-0">
        {stages.map((s, idx) => {
          const cs = candidates.filter(c => c.stage === s);
          return (
            <div key={s} className="flex-1 min-w-[280px] flex flex-col gap-3 bg-surface border border-border rounded-xl p-3 max-h-full">
              <div className="flex justify-between items-center px-1 mb-1">
                <div className="text-[14px] font-heading font-semibold text-foreground">
                  {s} <span className="text-muted-foreground font-normal ml-1">· {cs.length}</span>
                </div>
                <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-border transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-col gap-3 overflow-y-auto pr-1 pb-1 flex-1">
                {cs.map(c => (
                  <div key={c.id} className="bg-card border border-border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing group">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-xs shrink-0">
                        {c.firstName.charAt(0)}{c.lastName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                          {c.firstName} {c.lastName}
                        </div>
                        <div className="text-[11px] text-muted-foreground truncate">{job.title}</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-warning bg-warning-bg px-1.5 py-0.5 rounded-md">
                        <Star className="w-3 h-3 fill-warning" />
                        <span className="text-[11px] font-bold text-foreground">{c.score || '—'}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {Math.floor((Date.now() - new Date(c.createdAt).getTime()) / (1000 * 60 * 60 * 24))}d in stage
                      </span>
                    </div>
                    
                    {idx === 2 && c.score && c.score > 4 && (
                      <div className="mt-3 bg-accent text-primary text-[10px] font-medium px-2 py-1.5 rounded-md flex items-center gap-1.5 border border-primary/20">
                        <Calendar className="w-3 h-3" /> Interview Tomorrow · 10am
                      </div>
                    )}
                  </div>
                ))}
                {cs.length === 0 && (
                  <div className="py-6 border-2 border-dashed border-border rounded-lg flex items-center justify-center text-[12px] text-muted-foreground font-medium">
                    Drop here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
