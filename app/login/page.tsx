'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-background">
      <div className="hidden md:flex flex-col justify-between p-12 text-white relative overflow-hidden" 
           style={{ background: 'linear-gradient(160deg, #4C1D95 0%, #6B21A8 50%, #A855F7 100%)' }}>
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
        <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(233,213,255,0.2) 0%, transparent 60%)' }} />
             
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-heading font-bold text-xl border border-white/20">
              P
            </div>
            <strong className="font-heading text-xl tracking-tight">PurplePeople HR</strong>
          </div>
          <h1 className="text-4xl font-heading font-semibold leading-tight mb-6">
            Everything you need to manage your global workforce.
          </h1>
          <p className="text-white/80 text-lg max-w-md leading-relaxed">
            From recruiting to payroll, performance to attendance. One unified platform for the modern enterprise.
          </p>
        </div>
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#6B21A8] bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-medium">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className="text-sm font-medium text-white/90">Join 10,000+ HR leaders</div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="w-full max-w-sm mx-auto">
          <div className="mb-8">
            <h2 className="text-[28px] font-semibold font-heading tracking-tight mb-2">Welcome back</h2>
            <p className="text-[14px] text-muted-foreground">Please enter your details to sign in.</p>
          </div>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-[13px] font-medium text-foreground mb-1.5">Email address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="maya@acme.co"
                className="w-full bg-background border border-border focus:border-ring focus:ring-4 focus:ring-ring/10 rounded-lg py-2.5 px-3 text-[14px] outline-none transition-all"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[13px] font-medium text-foreground">Password</label>
                <a href="#" className="text-[12px] text-primary font-medium hover:underline">Forgot password?</a>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-background border border-border focus:border-ring focus:ring-4 focus:ring-ring/10 rounded-lg py-2.5 px-3 text-[14px] outline-none transition-all"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="rounded border-border text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-[13px] text-muted-foreground">Remember for 30 days</label>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white font-medium text-[14px] py-2.5 rounded-lg shadow-sm hover:bg-primary/90 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center text-[13px] text-muted-foreground">
            Don't have an account? <a href="#" className="text-primary font-medium hover:underline">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
