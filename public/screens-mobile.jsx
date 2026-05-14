// Mobile screens — wrapped in IPhoneFrame (alias of IOSDevice)
const IPhoneFrame = ({ children, statusBar = {} }) => (
  <IOSDevice statusBarTime={statusBar.time || "9:41"}>{children}</IOSDevice>
);

const MobileLogin = () => (
  <IPhoneFrame statusBar={{ time: "9:41" }}>
    <div className="m-screen" style={{ padding: 28, display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(180deg, #faf5ff 0%, var(--bg) 50%)" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg, var(--primary), var(--primary-light))", display: "grid", placeItems: "center", color: "white", fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 30, marginBottom: 32, boxShadow: "var(--sh-md)" }}>P</div>
        <h1 style={{ fontSize: 28, marginBottom: 6 }}>Welcome back</h1>
        <div style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 28 }}>Sign in to your Pulse HR workspace</div>
        <Field label="Email"><input className="input" defaultValue="maya@acme.co"/></Field>
        <div style={{ height: 12 }}/>
        <Field label="Password"><input className="input" type="password" defaultValue="••••••••••"/></Field>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontSize: 13 }}>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}><input type="checkbox" defaultChecked/> Stay signed in</label>
          <a style={{ color: "var(--primary)", fontWeight: 500 }}>Forgot?</a>
        </div>
        <Btn kind="primary" full size="lg" style={{ marginTop: 20 }}>Sign in</Btn>
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "20px 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }}/><span className="muted-2" style={{ fontSize: 11 }}>OR</span><div style={{ flex: 1, height: 1, background: "var(--border)" }}/>
        </div>
        <Btn full><I.Mail size={14}/> Continue with Google</Btn>
      </div>
      <div style={{ textAlign: "center", fontSize: 12, color: "var(--text-2)" }}>New here? <a style={{ color: "var(--primary)", fontWeight: 500 }}>Create an account</a></div>
    </div>
  </IPhoneFrame>
);

const MobileHome = () => (
  <IPhoneFrame>
    <div className="m-screen">
      <div style={{ padding: "16px 20px 14px", background: "linear-gradient(180deg, #4C1D95 0%, #6B21A8 100%)", color: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>Friday, April 17</div>
            <h2 style={{ color: "white", fontSize: 22, marginTop: 2 }}>Hi, Maya 👋</h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "none", color: "white", display: "grid", placeItems: "center", position: "relative" }}>
              <I.Bell size={16}/>
              <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: "50%", background: "var(--danger)", border: "1.5px solid #6B21A8" }}/>
            </button>
            <Avatar name="Maya Chen" size="md"/>
          </div>
        </div>
        <Card padding={16} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>You're clocked in</div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 26, fontWeight: 600, color: "white", marginTop: 2 }}>4h 23m</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>Started 8:42 AM</div>
            </div>
            <button className="btn" style={{ background: "white", color: "var(--primary)", fontWeight: 600 }}>Clock out</button>
          </div>
        </Card>
      </div>
      <div style={{ padding: 18 }}>
        <h3 style={{ fontSize: 14, marginBottom: 10, color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Quick actions</h3>
        <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 22 }}>
          {[
            { i: <I.Calendar size={18}/>, l: "Apply leave" },
            { i: <I.Clock size={18}/>, l: "Timesheet" },
            { i: <I.DollarSign size={18}/>, l: "Payslips" },
            { i: <I.User size={18}/>, l: "Profile" },
          ].map(a => (
            <div key={a.l} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: 12, textAlign: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center", margin: "0 auto 8px" }}>{a.i}</div>
              <div style={{ fontSize: 11, fontWeight: 500, lineHeight: 1.2 }}>{a.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <h3 style={{ fontSize: 14 }}>Today's schedule</h3>
          <a style={{ fontSize: 12, color: "var(--primary)" }}>See all</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { t: "10:00", title: "Felix Hartmann · Final Panel", sub: "Video · 60 min", c: "var(--primary)" },
            { t: "13:00", title: "Hiring sync", sub: "Conference Room B · 30 min", c: "var(--info)" },
            { t: "15:30", title: "1:1 with Lina", sub: "Video · 30 min", c: "var(--success)" },
          ].map(e => (
            <div key={e.t} style={{ display: "flex", gap: 12, padding: 12, background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)" }}>
              <div style={{ width: 4, borderRadius: 2, background: e.c }}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--text-3)", fontWeight: 600 }}>{e.t} PT</div>
                <div style={{ fontSize: 13, fontWeight: 500, marginTop: 2 }}>{e.title}</div>
                <div style={{ fontSize: 11, color: "var(--text-2)", marginTop: 2 }}>{e.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <h3 style={{ fontSize: 14, margin: "20px 0 10px" }}>Pending for you</h3>
        <Card style={{ display: "flex", alignItems: "center", gap: 12, padding: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#FFF6E5", color: "var(--warning)", display: "grid", placeItems: "center" }}><I.Calendar size={16}/></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>2 leave requests waiting</div>
            <div style={{ fontSize: 11, color: "var(--text-2)" }}>Marcus Adler & Sofia Romero</div>
          </div>
          <I.ChevronRight size={16} style={{ color: "var(--text-3)" }}/>
        </Card>
      </div>
      <MobileTabBar active="home"/>
    </div>
  </IPhoneFrame>
);

const MobileLeaveRequest = () => (
  <IPhoneFrame>
    <div className="m-screen">
      <div className="m-header">
        <I.ChevronLeft size={20}/>
        <h2 style={{ flex: 1, textAlign: "center", fontSize: 16 }}>Apply for leave</h2>
        <span/>
      </div>
      <div style={{ padding: 18, paddingBottom: 100 }}>
        <Card padding={16} style={{ marginBottom: 16, background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)", color: "white", border: "none" }}>
          <div style={{ fontSize: 12, opacity: 0.85 }}>Annual leave balance</div>
          <div style={{ fontFamily: "var(--f-display)", fontSize: 32, fontWeight: 600, color: "white", marginTop: 2 }}>17.5 <span style={{ fontSize: 14, opacity: 0.7 }}>days</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, opacity: 0.85 }}>
            <span>Used: 4.5</span><span>Pending: 3</span><span>Available: 17.5</span>
          </div>
        </Card>
        <Field label="Type">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { l: "Annual", on: true }, { l: "Sick" },
              { l: "Personal" }, { l: "Other" },
            ].map(t => (
              <button key={t.l} className="btn" style={{ padding: 12, justifyContent: "center",
                background: t.on ? "var(--primary)" : "var(--card)", color: t.on ? "white" : "var(--text)",
                border: t.on ? "1px solid var(--primary)" : "1px solid var(--border)" }}>{t.l}</button>
            ))}
          </div>
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
          <Field label="From"><input className="input" type="date" defaultValue="2026-05-12"/></Field>
          <Field label="To"><input className="input" type="date" defaultValue="2026-05-16"/></Field>
        </div>
        <div style={{ marginTop: 12, padding: 12, background: "var(--accent)", borderRadius: 10, fontSize: 13, color: "var(--primary)", display: "flex", justifyContent: "space-between" }}>
          <span>Total</span><strong>5 working days</strong>
        </div>
        <div style={{ marginTop: 14 }}>
          <Field label="Reason (optional)">
            <textarea className="input" rows={3} defaultValue="Family vacation, booked in January."/>
          </Field>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 14, paddingBottom: 24, background: "var(--card)", borderTop: "1px solid var(--border)", display: "flex", gap: 8 }}>
        <Btn full>Cancel</Btn>
        <Btn kind="primary" full>Submit</Btn>
      </div>
    </div>
  </IPhoneFrame>
);

const MobilePayslip = () => (
  <IPhoneFrame>
    <div className="m-screen">
      <div className="m-header"><I.ChevronLeft size={20}/><h2 style={{ flex: 1, textAlign: "center", fontSize: 16 }}>Payslip</h2><I.Download size={18}/></div>
      <div style={{ padding: 18 }}>
        <Card padding={20} style={{ background: "linear-gradient(135deg, #4C1D95, #A855F7)", color: "white", border: "none", marginBottom: 16 }}>
          <div style={{ fontSize: 12, opacity: 0.85 }}>April 2026</div>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 1 }}>Paid Apr 30, 2026</div>
          <div style={{ fontFamily: "var(--f-display)", fontSize: 36, fontWeight: 600, color: "white", marginTop: 14, letterSpacing: "-0.02em" }}>$12,961.47</div>
          <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>Net pay · deposited •••• 4421</div>
        </Card>
        <Card padding={0} style={{ marginBottom: 16 }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--divider)", fontSize: 13, fontWeight: 600 }}>Earnings</div>
          {[["Base salary","$16,250.00"],["Bonus","$2,031.25"],["Equity","$3,200.00"],["Allowance","$120.00"]].map(([l,v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid var(--divider)", fontSize: 13 }}>
              <span style={{ color: "var(--text-2)" }}>{l}</span><span className="tabular" style={{ fontWeight: 500 }}>{v}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", fontSize: 13, fontWeight: 600 }}>
            <span>Gross pay</span><span className="tabular">$21,601.25</span>
          </div>
        </Card>
        <Card padding={0}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--divider)", fontSize: 13, fontWeight: 600 }}>Deductions</div>
          {[["Federal tax","$3,890.22"],["State tax","$1,512.08"],["Soc. Sec.","$1,339.27"],["Medicare","$313.21"],["401(k) 8%","$1,300.00"],["Health","$285.00"]].map(([l,v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid var(--divider)", fontSize: 13 }}>
              <span style={{ color: "var(--text-2)" }}>{l}</span><span className="tabular" style={{ fontWeight: 500 }}>−{v}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", fontSize: 13, fontWeight: 600 }}>
            <span>Total deductions</span><span className="tabular">−$8,639.78</span>
          </div>
        </Card>
      </div>
      <MobileTabBar active="payslips"/>
    </div>
  </IPhoneFrame>
);

const MobileDirectory = () => (
  <IPhoneFrame>
    <div className="m-screen">
      <div className="m-header"><h2 style={{ flex: 1, fontSize: 18 }}>People</h2><I.Search size={18}/></div>
      <div style={{ padding: "0 18px 14px" }}>
        <input className="input" placeholder="Search 248 people…" style={{ marginBottom: 12 }}/>
        <div style={{ display: "flex", gap: 6, overflowX: "auto" }}>
          {["All","Engineering","Design","Product","Sales"].map((t,i) => (
            <Pill key={t} kind={i === 0 ? "info" : "neutral"} style={{ flexShrink: 0 }}>{t}</Pill>
          ))}
        </div>
      </div>
      <div style={{ overflowY: "auto" }}>
        {DATA.employees.slice(0, 9).map(e => (
          <div key={e.id} style={{ display: "flex", gap: 12, padding: "12px 18px", borderBottom: "1px solid var(--divider)" }}>
            <Avatar name={e.name} size="md"/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{e.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-2)" }}>{e.role}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{e.dept} · {e.location}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <button className="btn btn-icon btn-sm"><I.Phone size={13}/></button>
              <button className="btn btn-icon btn-sm"><I.Mail size={13}/></button>
            </div>
          </div>
        ))}
      </div>
      <MobileTabBar active="people"/>
    </div>
  </IPhoneFrame>
);

const MobileApproval = () => (
  <IPhoneFrame>
    <div className="m-screen">
      <div className="m-header"><h2 style={{ flex: 1, fontSize: 18 }}>Approvals</h2><Pill kind="warning">5 pending</Pill></div>
      <div className="tabs" style={{ padding: "0 18px" }}>
        <div className="tab active">Leave (3)</div><div className="tab">Expenses (1)</div><div className="tab">Time (1)</div>
      </div>
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { n: "Marcus Adler", role: "Backend Engineer", t: "Annual leave · 5 days", d: "May 12 — May 16", reason: "Family vacation, pre-booked." },
          { n: "Sofia Romero", role: "Senior Designer", t: "Sick leave · 1 day", d: "Apr 15", reason: "Doctor's appointment." },
          { n: "Henrik Olsen", role: "Account Executive", t: "Personal · 1 day", d: "Apr 30", reason: "Moving day." },
        ].map(r => (
          <Card key={r.n} padding={16}>
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <Avatar name={r.n} size="md"/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{r.n}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)" }}>{r.role}</div>
              </div>
              <Pill kind="warning">Pending</Pill>
            </div>
            <div style={{ padding: 10, background: "var(--surface)", borderRadius: 8, fontSize: 12, marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>{r.t}</div>
              <div style={{ color: "var(--text-2)", marginTop: 2 }}>{r.d}</div>
              <div style={{ color: "var(--text-2)", marginTop: 6, fontStyle: "italic" }}>"{r.reason}"</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Btn full>Reject</Btn>
              <Btn kind="primary" full>Approve</Btn>
            </div>
          </Card>
        ))}
      </div>
      <MobileTabBar active="approvals"/>
    </div>
  </IPhoneFrame>
);

const MobileProfile = () => (
  <IPhoneFrame>
    <div className="m-screen">
      <div style={{ background: "linear-gradient(180deg, #4C1D95, #6B21A8)", padding: "20px 18px 50px", color: "white", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
          <I.ChevronLeft size={20}/><span style={{ fontSize: 15, fontWeight: 600 }}>My Profile</span><I.Settings size={18}/>
        </div>
        <Avatar name="Maya Chen" size="xl" style={{ margin: "0 auto", border: "4px solid rgba(255,255,255,0.3)", width: 88, height: 88, fontSize: 28 }}/>
        <h2 style={{ color: "white", fontSize: 20, marginTop: 12 }}>Maya Chen</h2>
        <div style={{ fontSize: 13, opacity: 0.85, marginTop: 2 }}>Head of People · ID #00112</div>
      </div>
      <div style={{ padding: "0 18px", marginTop: -32 }}>
        <Card padding={14} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", textAlign: "center" }}>
          {[["17.5","Leave days"],["4h 23m","Today"],["4.8","Rating"]].map(([v,l]) => (
            <div key={l} style={{ borderRight: l !== "Rating" ? "1px solid var(--divider)" : "none", padding: "4px 0" }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 18, fontWeight: 600 }}>{v}</div>
              <div style={{ fontSize: 10, color: "var(--text-3)", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </Card>
      </div>
      <div style={{ padding: 18 }}>
        <Card padding={0}>
          {[
            { i: <I.User size={16}/>, l: "Personal information" },
            { i: <I.FileText size={16}/>, l: "Documents", v: "12 files" },
            { i: <I.DollarSign size={16}/>, l: "Compensation" },
            { i: <I.Calendar size={16}/>, l: "Time off & balances" },
            { i: <I.Target size={16}/>, l: "Goals & reviews" },
            { i: <I.GraduationCap size={16}/>, l: "Training", v: "3 in progress" },
          ].map((r, i, a) => (
            <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: i < a.length - 1 ? "1px solid var(--divider)" : "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center" }}>{r.i}</div>
              <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{r.l}</div>
              {r.v && <span className="muted-2" style={{ fontSize: 11 }}>{r.v}</span>}
              <I.ChevronRight size={14} style={{ color: "var(--text-3)" }}/>
            </div>
          ))}
        </Card>
        <Btn full size="lg" style={{ marginTop: 16, color: "var(--danger)" }}>Sign out</Btn>
      </div>
      <MobileTabBar active="profile"/>
    </div>
  </IPhoneFrame>
);

const MobileTabBar = ({ active }) => {
  const tabs = [
    { k: "home", i: <I.Home size={18}/>, l: "Home" },
    { k: "people", i: <I.Users size={18}/>, l: "People" },
    { k: "approvals", i: <I.Check size={18}/>, l: "Approve" },
    { k: "payslips", i: <I.DollarSign size={18}/>, l: "Pay" },
    { k: "profile", i: <I.User size={18}/>, l: "Me" },
  ];
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "var(--card)", borderTop: "1px solid var(--border)", padding: "8px 0 22px", display: "flex", justifyContent: "space-around" }}>
      {tabs.map(t => (
        <div key={t.k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, color: t.k === active ? "var(--primary)" : "var(--text-3)" }}>
          {t.i}
          <div style={{ fontSize: 10, fontWeight: t.k === active ? 600 : 400 }}>{t.l}</div>
        </div>
      ))}
    </div>
  );
};

window.MobileScreens = { MobileLogin, MobileHome, MobileLeaveRequest, MobilePayslip, MobileDirectory, MobileApproval, MobileProfile };
