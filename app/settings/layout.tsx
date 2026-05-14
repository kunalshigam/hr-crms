'use client';

import { AppLayout } from '@/components/layout/AppLayout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: '/settings/company', label: 'Company' },
    { href: '#', label: 'Roles & Permissions' },
    { href: '#', label: 'Departments' },
    { href: '#', label: 'Designations' },
    { href: '#', label: 'Integrations' },
    { href: '#', label: 'Notifications' },
    { href: '#', label: 'Security' },
    { href: '#', label: 'Billing' },
  ];

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-64px)] -m-6 md:-m-8">
        <div className="flex-1 flex overflow-hidden">
          <div className="w-[220px] bg-card border-r border-border p-4 flex flex-col gap-1 shrink-0">
            {links.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-[13px] font-medium transition-colors ${
                    isActive 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex-1 overflow-auto bg-surface">
            {children}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
