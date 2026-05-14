'use client';

import { Bell, Search, Sun, Moon, X, Clock, Briefcase, FileText, User, Target, GraduationCap, Calendar, DollarSign, LogOut, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function TopNav() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowSearch((s) => !s);
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
        setShowNotifs(false);
        setShowProfile(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <>
      <header className="h-[60px] flex items-center px-6 border-b border-border bg-card shrink-0 relative z-20">
        <div className="flex-1 max-w-[480px] relative">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowSearch(true)} />
          <input 
            type="text" 
            placeholder="Search employees, jobs, candidates... (⌘K)" 
            readOnly
            onClick={() => setShowSearch(true)}
            className="w-full bg-surface border border-transparent hover:border-border cursor-pointer rounded-md py-2 pl-9 pr-4 text-[13px] outline-none text-muted-foreground transition-all"
          />
        </div>

        <div className="ml-auto flex items-center gap-4">
          <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>
          
          <button 
            onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false); }} 
            className={`relative ${showNotifs ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Bell className="w-[18px] h-[18px]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full border border-card"></span>
          </button>
          
          <div className="relative">
            <div 
              onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-xs ml-2 cursor-pointer shadow-sm hover:ring-2 hover:ring-primary/50 transition-all"
            >
              MC
            </div>
            
            {showProfile && (
              <div className="absolute right-0 top-[calc(100%+12px)] w-[240px] bg-card border border-border rounded-xl shadow-lg overflow-hidden flex flex-col z-50">
                <div className="p-4 border-b border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-sm shrink-0">
                    MC
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-semibold text-foreground truncate">Maya Chen</div>
                    <div className="text-[12px] text-muted-foreground truncate">maya@purplepeople.co</div>
                  </div>
                </div>
                <div className="p-2">
                  <button onClick={() => { setShowProfile(false); router.push('/settings'); }} className="w-full flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors">
                    <Settings className="w-4 h-4" /> Account Settings
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-danger hover:bg-danger/10 rounded-md transition-colors mt-1">
                    <LogOut className="w-4 h-4" /> Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Global Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex justify-center pt-[10vh] px-4" onClick={() => setShowSearch(false)}>
          <div className="w-full max-w-[640px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-border flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input 
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-[16px] text-foreground placeholder:text-muted-foreground" 
                placeholder="Search anything..." 
                defaultValue="ma"
              />
              <div className="bg-surface border border-border text-[10px] font-semibold text-muted-foreground px-2 py-1 rounded uppercase tracking-widest">
                ESC
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2">
              <div className="px-3 py-2 text-[11px] text-muted-foreground uppercase tracking-widest font-semibold">Employees</div>
              {[
                { name: "Maya Chen", role: "HR Admin", dept: "People Ops" },
                { name: "Marcus Adler", role: "Software Engineer", dept: "Engineering" },
                { name: "Maria Garcia", role: "Account Executive", dept: "Sales" }
              ].map((e, i) => (
                <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${i === 0 ? 'bg-accent' : 'hover:bg-surface'}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#A855F7] text-white flex items-center justify-center font-semibold text-[10px] shrink-0">
                    {e.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-medium text-foreground">{e.name}</div>
                    <div className="text-[11px] text-muted-foreground">{e.role} · {e.dept}</div>
                  </div>
                  {i === 0 && <span className="text-[11px] text-primary font-medium">↵ Open</span>}
                </div>
              ))}
              
              <div className="px-3 py-2 text-[11px] text-muted-foreground uppercase tracking-widest font-semibold mt-2">Jobs</div>
              {[
                { title: "Senior Frontend Engineer", dept: "Engineering", applicants: 42 },
                { title: "Product Marketing Manager", dept: "Marketing", applicants: 18 }
              ].map((j, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-surface transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-medium text-foreground">{j.title}</div>
                    <div className="text-[11px] text-muted-foreground">{j.dept} · {j.applicants} applicants</div>
                  </div>
                </div>
              ))}
              
              <div className="px-3 py-2 text-[11px] text-muted-foreground uppercase tracking-widest font-semibold mt-2">Documents</div>
              {["Manager Handbook 2026.pdf", "Maternity Policy v3.docx"].map((d, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-surface transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-[13px] font-medium text-foreground">{d}</div>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-border flex justify-between items-center bg-surface/50 text-[11px] text-muted-foreground">
              <div className="flex gap-4">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>esc Close</span>
              </div>
              <div>Powered by ⌘K</div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Slideout */}
      {showNotifs && (
        <>
          <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setShowNotifs(false)}></div>
          <div className="absolute top-[60px] right-0 bottom-0 w-[380px] bg-card border-l border-border shadow-2xl z-50 flex flex-col transform transition-transform animate-in slide-in-from-right duration-200" style={{ height: 'calc(100vh - 60px)' }}>
            <div className="p-4 border-b border-border flex justify-between items-center bg-card">
              <div>
                <h3 className="text-[16px] font-semibold font-heading">Notifications</h3>
                <div className="text-[11px] text-muted-foreground">3 unread</div>
              </div>
              <div className="flex gap-2">
                <button className="text-[12px] font-medium text-primary hover:text-primary/80 transition-colors">Mark all read</button>
                <button onClick={() => setShowNotifs(false)} className="p-1.5 rounded-md hover:bg-surface text-muted-foreground"><X className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div className="flex gap-4 px-4 border-b border-border">
              <div className="px-1 py-3 text-[13px] font-medium text-primary border-b-2 border-primary cursor-pointer">All</div>
              <div className="px-1 py-3 text-[13px] font-medium text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-1.5">
                Unread <span className="bg-warning text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">3</span>
              </div>
              <div className="px-1 py-3 text-[13px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">Mentions</div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {[
                {
                  group: "Today",
                  items: [
                    { title: "Leave Request Approved", body: "Your annual leave from May 12-16 has been approved by your manager.", time: "10m", kind: "leave", unread: true },
                    { title: "New Candidate Applied", body: "Felix Hartmann applied for Senior Frontend Engineer.", time: "2h", kind: "candidate", unread: true },
                  ]
                },
                {
                  group: "Yesterday",
                  items: [
                    { title: "Payroll Processed", body: "Your April 2026 payslip is now available to view and download.", time: "1d", kind: "payroll", unread: true },
                    { title: "Q3 Performance Cycle", body: "Please complete your self-review by next Friday.", time: "1d", kind: "perf", unread: false },
                    { title: "Training Assigned", body: "You have been assigned 'Information Security 2026'.", time: "1d", kind: "training", unread: false },
                  ]
                }
              ].map(g => (
                <div key={g.group}>
                  <div className="px-4 py-2 bg-surface text-[10px] text-muted-foreground uppercase tracking-widest font-semibold border-y border-border">{g.group}</div>
                  {g.items.map((n, i) => (
                    <div key={i} className={`flex gap-3 p-4 border-b border-border/60 hover:bg-surface/50 transition-colors cursor-pointer relative ${n.unread ? 'bg-primary/5' : ''}`}>
                      {n.unread && <div className="absolute left-2 top-8 w-1.5 h-1.5 rounded-full bg-primary" />}
                      <div className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0">
                        {n.kind === "leave" && <Calendar className="w-4 h-4" />}
                        {n.kind === "candidate" && <User className="w-4 h-4" />}
                        {n.kind === "payroll" && <DollarSign className="w-4 h-4" />}
                        {n.kind === "perf" && <Target className="w-4 h-4" />}
                        {n.kind === "training" && <GraduationCap className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-foreground mb-0.5">{n.title}</div>
                        <div className="text-[12px] text-muted-foreground leading-snug">{n.body}</div>
                        <div className="text-[10px] text-muted-foreground font-medium mt-1.5">{n.time} ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-border text-center bg-card">
              <button className="text-[13px] font-medium text-primary hover:underline">View all notifications →</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
