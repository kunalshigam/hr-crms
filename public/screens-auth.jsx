// Auth screens — Login, Register, Forgot Password
// Each is a desktop frame, 1280px wide.

const ScreenLogin = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Login <span className="frame-meta">/auth/login · 1280×760</span></div>
    <div className="frame-body">
      <div className="auth-split">
        <div className="auth-side">
          <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative", zIndex: 1 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", display: "grid", placeItems: "center", fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 22 }}>P</div>
            <div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 20, fontWeight: 600 }}>PurplePeople HR</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>The people platform for modern teams</div>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 44, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Run your<br/>people ops<br/>like an OS.
            </div>
            <div style={{ marginTop: 18, fontSize: 14, opacity: 0.85, maxWidth: 360 }}>
              Hiring, onboarding, payroll, performance, and analytics — one calmly purple workspace.
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 24, fontSize: 12 }}>
            <div><div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 600 }}>3,200+</div><div style={{ opacity: 0.75 }}>teams onboarded</div></div>
            <div><div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 600 }}>98%</div><div style={{ opacity: 0.75 }}>retention rate</div></div>
            <div><div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 600 }}>4.9★</div><div style={{ opacity: 0.75 }}>customer rating</div></div>
          </div>
        </div>
        <div className="auth-form">
          <div style={{ maxWidth: 360, width: "100%", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 28, fontWeight: 600 }}>Welcome back</div>
            <div style={{ color: "var(--text-2)", fontSize: 14, marginTop: 6, marginBottom: 28 }}>Sign in to your workspace at <strong style={{ color: "var(--text)" }}>acme.purplepeople.co</strong></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Work email"><input className="input" defaultValue="maya.chen@acme.co"/></Field>
              <Field label="Password">
                <div style={{ position: "relative" }}>
                  <input className="input" type="password" defaultValue="••••••••••" style={{ paddingRight: 36 }}/>
                  <I.Eye size={16} style={{ position: "absolute", right: 12, top: 12, color: "var(--text-3)" }}/>
                </div>
              </Field>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-2)" }}>
                  <input type="checkbox" defaultChecked/> Keep me signed in
                </label>
                <a style={{ color: "var(--primary)", fontWeight: 500 }}>Forgot password?</a>
              </div>
              <Btn kind="primary" full size="lg">Sign in</Btn>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-3)", fontSize: 11, margin: "8px 0" }}>
                <div style={{ height: 1, background: "var(--border)", flex: 1 }}/>OR<div style={{ height: 1, background: "var(--border)", flex: 1 }}/>
              </div>
              <button className="btn" style={{ justifyContent: "center", padding: 11 }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.5 12.25c0-.79-.07-1.54-.2-2.27H12v4.3h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.11z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.06-3.72 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.85 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.35-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.67-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.1 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.67 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
                Sign in with Google
              </button>
              <button className="btn" style={{ justifyContent: "center", padding: 11 }}>
                <I.Lock size={14}/> Continue with SSO (SAML)
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "var(--text-2)" }}>
              New to PurplePeople? <a style={{ color: "var(--primary)", fontWeight: 500 }}>Create a workspace →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenRegister = () => {
  const Step = ({ n, title, active, done }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, opacity: active || done ? 1 : 0.45 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%",
        background: done ? "var(--success)" : active ? "var(--primary)" : "var(--accent)",
        color: done || active ? "white" : "var(--primary)",
        display: "grid", placeItems: "center", fontWeight: 600, fontSize: 12 }}>
        {done ? <I.Check size={14}/> : n}
      </div>
      <div style={{ fontSize: 13, color: active ? "var(--text)" : "var(--text-2)", fontWeight: active ? 600 : 400 }}>{title}</div>
    </div>
  );
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Register / Onboarding (Step 2 of 3) <span className="frame-meta">/auth/register</span></div>
      <div className="frame-body" style={{ background: "var(--surface)", padding: "48px 80px", minHeight: 760 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,var(--primary),var(--primary-light))", display: "grid", placeItems: "center", color: "white", fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 18 }}>P</div>
          <div style={{ fontFamily: "var(--f-display)", fontSize: 18, fontWeight: 600 }}>PurplePeople HR</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Step n={1} title="Company info" done/>
            <div style={{ width: 2, height: 24, background: "var(--border)", marginLeft: 13 }}/>
            <Step n={2} title="Admin account" active/>
            <div style={{ width: 2, height: 24, background: "var(--border)", marginLeft: 13 }}/>
            <Step n={3} title="Choose your plan"/>
          </div>
          <div className="card" style={{ padding: 36, maxWidth: 560 }}>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 26, fontWeight: 600, marginBottom: 6 }}>Create your admin account</div>
            <div style={{ color: "var(--text-2)", fontSize: 13, marginBottom: 24 }}>You'll be the first administrator. You can invite teammates after setup.</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <Field label="First name"><input className="input" defaultValue="Maya"/></Field>
              <Field label="Last name"><input className="input" defaultValue="Chen"/></Field>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Work email"><input className="input" defaultValue="maya.chen@acme.co"/></Field>
              <Field label="Workspace URL" hint="You can change this later in Settings.">
                <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                  <input className="input" defaultValue="acme" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}/>
                  <div style={{ padding: "10px 12px", background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "none", borderRadius: "0 8px 8px 0", fontSize: 13, color: "var(--text-2)" }}>.purplepeople.co</div>
                </div>
              </Field>
              <Field label="Password" hint="Minimum 12 characters, one symbol.">
                <input className="input" type="password" defaultValue="••••••••••••••"/>
              </Field>
              <label style={{ display: "flex", alignItems: "start", gap: 8, fontSize: 12, color: "var(--text-2)", marginTop: 4 }}>
                <input type="checkbox" defaultChecked style={{ marginTop: 2 }}/>
                <span>I agree to the <a style={{ color: "var(--primary)" }}>Terms of Service</a> and acknowledge the <a style={{ color: "var(--primary)" }}>Data Processing Addendum</a>.</span>
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28 }}>
              <Btn kind="ghost" icon={<I.ArrowLeft size={14}/>}>Back</Btn>
              <Btn kind="primary">Continue to plan →</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenForgot = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Forgot Password (sent state) <span className="frame-meta">/auth/forgot</span></div>
    <div className="frame-body" style={{ background: "var(--surface)", padding: 48, minHeight: 760, display: "grid", placeItems: "center" }}>
      <div className="card" style={{ padding: 40, maxWidth: 460, width: "100%", textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center", margin: "0 auto 18px" }}>
          <I.Mail size={28}/>
        </div>
        <div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 600 }}>Check your inbox</div>
        <div style={{ color: "var(--text-2)", fontSize: 14, marginTop: 8, marginBottom: 24 }}>
          We sent a reset link to <strong style={{ color: "var(--text)" }}>maya.chen@acme.co</strong>. The link expires in 30 minutes.
        </div>
        <Btn kind="primary" full>Open email app</Btn>
        <div style={{ marginTop: 16, fontSize: 12, color: "var(--text-2)" }}>
          Didn't get it? <a style={{ color: "var(--primary)", fontWeight: 500 }}>Resend in 0:42</a> · <a style={{ color: "var(--primary)", fontWeight: 500 }}>Try a different email</a>
        </div>
        <div className="divider" style={{ margin: "24px 0" }}/>
        <a style={{ fontSize: 13, color: "var(--text-2)", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <I.ArrowLeft size={13}/> Back to sign in
        </a>
      </div>
    </div>
  </div>
);

window.AuthScreens = { ScreenLogin, ScreenRegister, ScreenForgot };
