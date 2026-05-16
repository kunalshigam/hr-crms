'use client';

import { useState } from 'react';
import { Download, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

type Leave = {
  id: string;
  employee: {
    firstName: string;
    lastName: string;
  };
  type: string;
  startDate: Date;
  endDate: Date;
  days: number;
  reason: string | null;
  status: string;
};

export default function LeaveClient({ requests }: { requests: Leave[] }) {
  const [filter, setFilter] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredRequests = requests.filter(r => filter === 'ALL' || r.status === filter);

  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      toast.success('Leave request submitted', {
        description: 'Your request has been sent to your manager for approval.',
      });
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Time Off</h1>
            <p className="text-[13px] text-muted-foreground mt-1">Leave Management</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-[13px] font-medium text-foreground hover:bg-accent transition-colors">
              <Download className="w-4 h-4" /> Export
            </button>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-primary border border-primary px-4 py-2 rounded-lg text-[13px] font-medium text-white shadow-sm hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> Request leave
            </button>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { l: "Annual leave", used: 612, total: 1875, c: "var(--primary)" },
          { l: "Sick leave", used: 88, total: 750, c: "var(--info)" },
          { l: "Personal", used: 36, total: 375, c: "var(--warning)" },
          { l: "Parental", used: 18, total: 90, c: "var(--success)" },
        ].map(b => (
          <div key={b.l} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="text-[12px] text-muted-foreground mb-1">{b.l} (org-wide)</div>
            <div className="flex items-baseline gap-2 mb-3">
              <div className="font-heading text-[26px] font-semibold">{b.total - b.used}</div>
              <div className="text-[12px] text-muted-foreground">days remaining of {b.total}</div>
            </div>
            <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(b.used/b.total)*100}%`, backgroundColor: b.c }} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col flex-1 min-h-0">
        <div className="p-4 border-b border-border flex justify-between items-center bg-card shrink-0 gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-[15px] font-semibold font-heading">Requests</h3>
            <div className="flex gap-4 border-l border-border pl-4">
              <div className="text-[13px] font-medium text-primary border-b border-primary pb-0.5 cursor-pointer flex items-center gap-1.5">
                Pending <span className="bg-warning text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">{requests.filter(r => r.status === 'PENDING').length}</span>
              </div>
              <div className="text-[13px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">Approved</div>
              <div className="text-[13px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">Rejected</div>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead className="bg-surface sticky top-0 z-10 border-b border-border">
              <tr>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Employee</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Type</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Dates</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Days</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Reason</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id} className="border-b border-border/60 hover:bg-surface/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-[10px] shrink-0">
                        {r.employee.firstName.charAt(0)}{r.employee.lastName.charAt(0)}
                      </div>
                      <span className="font-semibold text-foreground">{r.employee.firstName} {r.employee.lastName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground font-medium">{r.type}</td>
                  <td className="py-3 px-4 font-mono text-[12px] text-muted-foreground">
                    {format(new Date(r.startDate), 'MMM d')} — {format(new Date(r.endDate), 'MMM d')}
                  </td>
                  <td className="py-3 px-4 font-mono text-[12px] font-semibold text-foreground">{r.days}</td>
                  <td className="py-3 px-4 text-muted-foreground truncate max-w-[200px]">{r.reason || '—'}</td>
                  <td className="py-3 px-4">
                    {r.status === 'PENDING' && <span className="inline-flex items-center bg-warning-bg text-warning text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Pending</span>}
                    {r.status === 'APPROVED' && <span className="inline-flex items-center bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Approved</span>}
                    {r.status === 'REJECTED' && <span className="inline-flex items-center bg-danger-bg text-danger text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Rejected</span>}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button className="px-3 py-1 bg-primary text-white text-[11px] font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-sm">Approve</button>
                      <button className="px-3 py-1 bg-surface border border-border text-foreground text-[11px] font-semibold rounded-md hover:bg-accent transition-colors">Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request time off">
        <form onSubmit={handleApplyLeave} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-foreground">Leave type</label>
            <select required className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all">
              <option value="ANNUAL">Annual Leave (14 days left)</option>
              <option value="SICK">Sick Leave (5 days left)</option>
              <option value="UNPAID">Unpaid Leave</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Start date</label>
              <input required type="date" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">End date</label>
              <input required type="date" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-foreground">Reason (Optional)</label>
            <textarea placeholder="Add a note for your manager..." className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all min-h-[80px]" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-foreground">Attachment (Optional)</label>
            <input type="file" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all file:border-0 file:bg-transparent file:text-[13px] file:font-medium file:text-primary hover:file:cursor-pointer" />
            <div className="text-[11px] text-muted-foreground mt-0.5">Required for sick leave &gt; 2 days</div>
          </div>

          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-border">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-[13px] font-medium text-foreground hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-primary text-white text-[13px] font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
              {isSubmitting ? 'Submitting...' : 'Submit request'}
            </button>
          </div>
        </form>
      </Modal>
      </div>
    </>
  );
}
