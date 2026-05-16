'use client';

import { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Download } from 'lucide-react';
import { format } from 'date-fns';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  designation: string | null;
  department: { name: string } | null;
  location: string | null;
  status: string;
  joinedAt: Date;
};

export default function EmployeeDirectory({ initialEmployees }: { initialEmployees: Employee[] }) {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const employees = initialEmployees.filter(e => 
    `${e.firstName} ${e.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    e.email.toLowerCase().includes(search.toLowerCase()) ||
    (e.designation || '').toLowerCase().includes(search.toLowerCase())
  );

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      toast.success('Employee added successfully', {
        description: 'Maya Chen has been added to the directory.',
      });
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto h-full">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight">Employee Directory</h1>
            <p className="text-[13px] text-muted-foreground mt-1">Manage your team members and their profiles.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-[13px] font-medium text-foreground hover:bg-accent transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-primary border border-primary px-4 py-2 rounded-lg text-[13px] font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Employee
            </button>
          </div>
        </div>

      <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col flex-1 min-h-0">
        <div className="p-4 border-b border-border flex justify-between items-center bg-card shrink-0 gap-4">
          <div className="relative w-full max-w-[320px]">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by name, email, or role..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface border border-border focus:border-ring focus:bg-background rounded-md py-2 pl-9 pr-4 text-[13px] outline-none text-foreground transition-all"
            />
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="flex items-center gap-2 bg-surface border border-border px-3 py-1.5 rounded-lg text-[12px] font-medium text-foreground hover:bg-accent transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filters
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead className="bg-surface sticky top-0 z-10 border-b border-border">
              <tr>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Employee</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Role & Department</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Location</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider">Joined</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground text-[11px] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted-foreground text-sm">
                    No employees found matching "{search}"
                  </td>
                </tr>
              ) : (
                employees.map((emp) => (
                  <tr key={emp.id} className="border-b border-border/60 hover:bg-surface/50 transition-colors group cursor-pointer">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-xs shrink-0">
                          {emp.firstName.charAt(0)}{emp.lastName.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{emp.firstName} {emp.lastName}</span>
                          <span className="text-[11.5px] text-muted-foreground">{emp.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{emp.designation || '—'}</span>
                        <span className="text-[11.5px] text-muted-foreground">{emp.department?.name || '—'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {emp.status === 'ACTIVE' && <span className="inline-flex items-center gap-1.5 bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-success"></span>Active</span>}
                      {emp.status === 'ON_LEAVE' && <span className="inline-flex items-center gap-1.5 bg-warning-bg text-warning text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-warning"></span>On Leave</span>}
                      {emp.status === 'TERMINATED' && <span className="inline-flex items-center gap-1.5 bg-danger-bg text-danger text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-danger"></span>Terminated</span>}
                    </td>
                    <td className="py-3 px-4 text-foreground">{emp.location || '—'}</td>
                    <td className="py-3 px-4 text-muted-foreground">{format(new Date(emp.joinedAt), 'MMM d, yyyy')}</td>
                    <td className="py-3 px-4 text-right">
                      <button className="p-1.5 rounded-md hover:bg-surface text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground bg-surface shrink-0">
          <div>Showing {employees.length} of {initialEmployees.length} employees</div>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 rounded border border-border bg-card hover:bg-accent disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 rounded border border-border bg-card hover:bg-accent disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add new employee">
        <form onSubmit={handleAddEmployee} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">First name</label>
              <input required type="text" placeholder="Maya" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Last name</label>
              <input required type="text" placeholder="Chen" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-foreground">Work email</label>
            <input required type="email" placeholder="maya.chen@acme.co" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Department</label>
              <select required className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all">
                <option value="">Select department...</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="product">Product</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Role</label>
              <input required type="text" placeholder="e.g. Senior Developer" className="w-full bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-border">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-[13px] font-medium text-foreground hover:bg-surface rounded-lg transition-colors border border-transparent hover:border-border">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-primary text-white text-[13px] font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
              {isSubmitting ? 'Adding...' : 'Add employee'}
            </button>
          </div>
        </form>
      </Modal>
      </div>
    </>
  );
}
