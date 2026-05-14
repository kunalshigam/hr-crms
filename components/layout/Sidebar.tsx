'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Calendar, 
  Clock, 
  DollarSign, 
  Target, 
  BookOpen, 
  BarChart, 
  Settings,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { useState } from 'react';

const MENU_ITEMS = [
  { group: 'Core', items: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Employees', icon: Users, path: '/employees' },
  ]},
  { group: 'Modules', items: [
    { name: 'Recruitment', icon: Briefcase, path: '/recruitment', badge: '3' },
    { name: 'Attendance', icon: Clock, path: '/attendance' },
    { name: 'Leave', icon: Calendar, path: '/leave', badge: '5' },
    { name: 'Payroll', icon: DollarSign, path: '/payroll' },
    { name: 'Performance', icon: Target, path: '/performance' },
    { name: 'Training', icon: BookOpen, path: '/training' },
  ]},
  { group: 'System', items: [
    { name: 'Reports', icon: BarChart, path: '/reports' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ]},
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-card border-r border-border flex flex-col flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-[80px]' : 'w-[240px]'}`}>
      <div className="flex items-center gap-3 p-4 border-b border-border mb-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#A855F7] flex items-center justify-center text-white font-heading font-bold text-base shadow-sm shrink-0">
          P
        </div>
        {!collapsed && (
          <div className="flex flex-col flex-1 overflow-hidden">
            <strong className="font-heading text-[15px] truncate text-foreground">PurplePeople</strong>
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="text-muted-foreground hover:text-foreground shrink-0 p-1">
          {collapsed ? <Menu className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {MENU_ITEMS.map((group, i) => (
          <div key={i} className="mb-4">
            {!collapsed && (
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-5 py-2">
                {group.group}
              </div>
            )}
            <div className="px-3 flex flex-col gap-1">
              {group.items.map((item) => {
                const isActive = pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors ${
                      isActive 
                        ? 'bg-accent text-primary font-medium' 
                        : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="truncate">{item.name}</span>}
                    {!collapsed && item.badge && (
                      <span className="ml-auto bg-primary text-primary-foreground text-[10px] py-[1px] px-[6px] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
