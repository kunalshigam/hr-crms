'use client';

import { Filter, Plus, MoreHorizontal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { Modal } from '@/components/ui/Modal';

type Job = {
  id: string;
  title: string;
  department: { name: string } | null;
  location: string;
  type: string;
  status: string;
  salaryRange: string | null;
  createdAt: Date;
  _count: { candidates: number };
};

export default function RecruitmentClient({ jobs }: { jobs: Job[] }) {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredJobs = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    (j.department?.name || '').toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      toast.success('Job posting created', {
        description: 'Your new job posting is now live and accepting candidates.',
      });
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Recruitment</h1>
            <p className="text-[13px] text-muted-foreground mt-1">Open positions</p>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="text-[22px] font-heading font-semibold">{jobs.length} open positions</div>
              <div className="text-[13px] text-muted-foreground mt-1">222 active candidates · 11 hires this quarter</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-[13px] font-medium text-foreground hover:bg-accent transition-colors">
                <Filter className="w-4 h-4" /> Filters
              </button>
              <button className="flex items-center gap-2 bg-primary border border-primary px-4 py-2 rounded-lg text-[13px] font-medium text-white shadow-sm hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" /> Create job posting
              </button>
            </div>
          </div>

          <div className="flex gap-6 border-b border-border mb-6">
            <div className="px-1 py-3 text-[14px] font-medium text-primary border-b-2 border-primary cursor-pointer">
              All <span className="text-muted-foreground font-normal">({jobs.length})</span>
            </div>
            <div className="px-1 py-3 text-[14px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Active <span className="font-normal">(12)</span>
            </div>
            <div className="px-1 py-3 text-[14px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Draft <span className="font-normal">(2)</span>
            </div>
            <div className="px-1 py-3 text-[14px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              Closed <span className="font-normal">(2)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobs.map((j) => (
              <div key={j.id} className="bg-card border border-border rounded-xl p-5 shadow-sm transition-all hover:shadow-md">
                <div className="flex justify-between mb-3">
                  {j.status === 'ACTIVE' && <span className="inline-flex items-center gap-1.5 bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Active</span>}
                  {j.status === 'DRAFT' && <span className="inline-flex items-center gap-1.5 bg-surface text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-border">Draft</span>}
                  {j.status === 'CLOSED' && <span className="inline-flex items-center gap-1.5 bg-danger-bg text-danger text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Closed</span>}
                  <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-surface"><MoreHorizontal className="w-4 h-4" /></button>
                </div>
                <h3 className="text-[17px] font-semibold font-heading mb-1">{j.title}</h3>
                <div className="text-[12px] text-muted-foreground mb-4">
                  {j.department?.name || 'No Dept'} · {j.location} · {j.type}
                </div>

                <div className="flex gap-8 mb-4 pb-4 border-b border-border">
                  <div>
                    <div className="font-heading text-[22px] font-semibold">{j._count.candidates}</div>
                    <div className="text-[11px] text-muted-foreground">Applicants</div>
                  </div>
                  <div>
                    <div className="font-heading text-[22px] font-semibold">{Math.floor(j._count.candidates / 3) || 0}</div>
                    <div className="text-[11px] text-muted-foreground">In review</div>
                  </div>
                  <div>
                    <div className="font-heading text-[22px] font-semibold">{Math.floor(j._count.candidates / 8) || 0}</div>
                    <div className="text-[11px] text-muted-foreground">Interviewing</div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-muted-foreground">{j.salaryRange || 'Unspecified'} · Posted {new Date(j.createdAt).toLocaleDateString()}</span>
                  <Link href={`/recruitment/jobs/${j.id}/pipeline`} className="flex items-center gap-1.5 px-3 py-1.5 text-primary hover:bg-accent rounded-md font-medium transition-colors">
                    Open pipeline <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create job posting">
          <form onSubmit={handleCreateJob} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Job title</label>
              <input required type="text" placeholder="e.g. Senior Frontend Engineer" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-foreground">Department</label>
                <select required className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all">
                  <option value="">Select department...</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-foreground">Employment type</label>
                <select required className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all">
                  <option value="full-time">Full-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-foreground">Location</label>
                <input required type="text" placeholder="e.g. Remote, San Francisco" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-foreground">Salary range</label>
                <input type="text" placeholder="e.g. $120k - $150k" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-border">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-[13px] font-medium text-foreground hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-primary text-white text-[13px] font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
                {isSubmitting ? 'Creating...' : 'Create job'}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
