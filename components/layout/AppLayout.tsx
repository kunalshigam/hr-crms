'use client';

import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { Toaster } from 'sonner';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
      <Toaster position="bottom-right" toastOptions={{
        className: 'bg-card border-border text-foreground',
      }} />
    </div>
  );
}
