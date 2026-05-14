'use client';

import { Upload } from 'lucide-react';

export default function CompanySettingsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 md:px-8 border-b border-border bg-card">
        <h2 className="text-[22px] font-semibold tracking-tight">Company settings</h2>
        <div className="text-[13px] text-muted-foreground mt-1">Workspace identity, locale, and fiscal calendar.</div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col gap-6 max-w-[800px]">
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-[15px] font-semibold font-heading mb-4">Brand</h3>
          <div className="flex gap-6 items-start">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-[#A855F7] flex items-center justify-center text-white font-heading font-bold text-3xl shadow-sm">
              A
            </div>
            <div className="flex-1">
              <button className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-lg text-[13px] font-medium text-foreground hover:bg-accent transition-colors shadow-sm">
                <Upload className="w-4 h-4" /> Upload logo
              </button>
              <div className="text-[11px] text-muted-foreground mt-3 font-medium">SVG, PNG up to 2MB · Recommended 256×256</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-[15px] font-semibold font-heading mb-5">Company information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Legal name</label>
              <input type="text" defaultValue="Acme Corporation, Inc." className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Display name</label>
              <input type="text" defaultValue="Acme Corp" className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Tax ID / EIN</label>
              <input type="text" defaultValue="84-2384741" className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Industry</label>
              <select className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm">
                <option>Software · SaaS</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Headquarters</label>
              <input type="text" defaultValue="500 Howard St, San Francisco, CA" className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Website</label>
              <input type="text" defaultValue="https://acme.co" className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-[15px] font-semibold font-heading mb-5">Locale & fiscal calendar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Default timezone</label>
              <select className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm">
                <option>America/Los_Angeles (PT)</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Date format</label>
              <select className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm">
                <option>April 17, 2026</option>
                <option>17 Apr 2026</option>
                <option>04/17/2026</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Currency</label>
              <select className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm">
                <option>USD — US Dollar</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Fiscal year starts</label>
              <select className="bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm">
                <option>January 1</option>
                <option>April 1</option>
                <option>July 1</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Working days</label>
              <div className="flex gap-1.5">
                {["M","T","W","T","F","S","S"].map((d, i) => (
                  <button key={i} className={`w-9 h-9 flex items-center justify-center rounded-md border text-[13px] font-semibold transition-colors shadow-sm ${i < 5 ? 'bg-primary border-primary text-white' : 'bg-surface border-border text-muted-foreground'}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-foreground">Working hours</label>
              <div className="flex gap-3">
                <input type="text" defaultValue="9:00 AM" className="w-1/2 bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
                <input type="text" defaultValue="6:00 PM" className="w-1/2 bg-surface border border-border focus:border-ring rounded-md py-2 px-3 text-[13px] outline-none text-foreground transition-all shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end pb-8">
          <button className="px-5 py-2.5 bg-surface border border-border text-foreground text-[13px] font-semibold rounded-lg hover:bg-accent transition-colors shadow-sm">
            Discard changes
          </button>
          <button className="px-5 py-2.5 bg-primary text-white text-[13px] font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
