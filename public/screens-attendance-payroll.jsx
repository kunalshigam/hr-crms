// Attendance, Leave, Payroll desktop screens

const ScreenAttendance = () => {
  const heat = Array.from({length: 30}, (_, i) => Math.floor(Math.random() * 5));
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Attendance Overview <span className="frame-meta">/attendance</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="attendance"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Attendance" subtitle="April 2026"/>
          <div style={{ padding: 24 }}>
            <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
              {[
                { l: "Present today", v: "229", d: "92.3%", c: "var(--success)" },
                { l: "Absent", v: "8", d: "3.2%", c: "var(--danger)" },
                { l: "Late", v: "6", d: "2.4%", c: "var(--warning)" },
                { l: "On leave", v: "5", d: "2.0%", c: "var(--info)" },
              ].map(k => (
                <div className="kpi" key={k.l}>
                  <div className="kpi-label">{k.l}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <div className="kpi-value">{k.v}</div>
                    <div style={{ fontSize: 12, color: k.c, fontWeight: 600 }}>{k.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
              <Card padding={20}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <h3 style={{ fontSize: 15 }}>Attendance heatmap · Last 30 days</h3>
                  <select className="input" style={{ width: 160 }}><option>All departments</option></select>
                </div>
                <div className="cal">
                  {["M","T","W","T","F","S","S"].map((d,i)=><div key={i} className="cal-head">{d}</div>)}
                  {heat.map((h, i) => <div key={i} className={`cal-cell heat-${h}`}>{i+1}</div>)}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, fontSize: 11, color: "var(--text-2)" }}>
                  <span>Less</span>
                  {[0,1,2,3,4].map(i => <div key={i} className={`cal-cell heat-${i}`} style={{ width: 16, height: 16, fontSize: 0 }}/>)}
                  <span>More</span>
                </div>
              </Card>
              <Card padding={0}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: 15 }}>Today · 248 employees</h3>
                  <Btn size="sm" icon={<I.Download size={14}/>}>Export</Btn>
                </div>
                <table className="table">
                  <thead><tr><th>Employee</th><th>Status</th><th>Clock in</th><th>Hours</th></tr></thead>
                  <tbody>
                    {[
                      { n: "Maya Chen", s: "Present", in: "8:42 AM", h: "7.2" },
                      { n: "Jordan Reyes", s: "Present", in: "9:01 AM", h: "6.8" },
                      { n: "Marcus Adler", s: "Absent", in: "—", h: "0" },
                      { n: "Sofia Romero", s: "Late", in: "10:14 AM", h: "5.5" },
                      { n: "Daniel Kovač", s: "Present", in: "8:55 AM", h: "7.0" },
                      { n: "Aiko Tanaka", s: "Present", in: "8:30 AM", h: "7.5" },
                      { n: "Henrik Olsen", s: "Present", in: "9:15 AM", h: "6.6" },
                    ].map(r => (
                      <tr key={r.n}>
                        <td><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={r.n} size="sm"/>{r.n}</div></td>
                        <td><StatusPill status={r.s}/></td>
                        <td className="tabular">{r.in}</td>
                        <td className="tabular">{r.h}h</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenLeaveManagement = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Leave Management <span className="frame-meta">/leave</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="leave"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Time Off" subtitle="Leave Management"/>
        <div style={{ padding: 24 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
            {[
              { l: "Annual leave", used: 612, total: 1875, c: "var(--primary)" },
              { l: "Sick leave", used: 88, total: 750, c: "var(--info)" },
              { l: "Personal", used: 36, total: 375, c: "var(--warning)" },
              { l: "Parental", used: 18, total: 90, c: "var(--success)" },
            ].map(b => (
              <Card key={b.l}>
                <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 4 }}>{b.l} (org-wide)</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 26, fontWeight: 600 }}>{b.total - b.used}</div>
                  <div className="muted-2" style={{ fontSize: 12 }}>days remaining of {b.total}</div>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${(b.used/b.total)*100}%`, background: b.c }}/></div>
              </Card>
            ))}
          </div>
          <Card padding={0}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 16 }}>
              <h3 style={{ fontSize: 15 }}>Requests</h3>
              <div className="tabs" style={{ border: "none", flex: 1 }}>
                <div className="tab active">Pending <span className="pill pill-warning" style={{ marginLeft: 4, padding: "1px 6px" }}>5</span></div>
                <div className="tab">Approved</div>
                <div className="tab">Rejected</div>
                <div className="tab">All</div>
              </div>
              <Btn size="sm" icon={<I.Download size={14}/>}>Export</Btn>
            </div>
            <table className="table">
              <thead><tr><th>Employee</th><th>Type</th><th>Dates</th><th>Days</th><th>Reason</th><th>Status</th><th style={{ width: 180 }}></th></tr></thead>
              <tbody>
                {[
                  { n: "Marcus Adler", t: "Annual", d: "Apr 22 — Apr 26", n2: 5, r: "Family vacation", s: "Pending" },
                  { n: "Sofia Romero", t: "Sick", d: "Apr 15", n2: 1, r: "Doctor's appointment", s: "Pending" },
                  { n: "Henrik Olsen", t: "Personal", d: "Apr 30", n2: 1, r: "Moving day", s: "Pending" },
                  { n: "Aiko Tanaka", t: "Annual", d: "May 6 — May 14", n2: 7, r: "Pre-booked travel", s: "Pending" },
                  { n: "Daniel Kovač", t: "Sick", d: "Apr 11 — Apr 12", n2: 2, r: "Flu", s: "Pending" },
                ].map(row => (
                  <tr key={row.n}>
                    <td><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={row.n} size="sm"/>{row.n}</div></td>
                    <td>{row.t}</td>
                    <td className="tabular muted">{row.d}</td>
                    <td className="tabular">{row.n2}</td>
                    <td className="muted">{row.r}</td>
                    <td><StatusPill status={row.s}/></td>
                    <td><div style={{ display: "flex", gap: 6 }}><Btn size="sm" kind="primary">Approve</Btn><Btn size="sm">Reject</Btn></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const ScreenLeaveRequest = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Leave Request Form (modal) <span className="frame-meta">/leave/new</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="leave"/>
      <div style={{ flex: 1, position: "relative", background: "var(--surface)" }}>
        <AppTopbar title="Time Off" subtitle="Apply for leave"/>
        <div style={{ padding: 24, opacity: 0.4, pointerEvents: "none" }}>
          <Card><div style={{ height: 120 }}/></Card>
        </div>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 520, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, boxShadow: "var(--sh-xl)", padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <h2 style={{ fontSize: 18 }}>Apply for leave</h2>
            <button className="btn btn-icon btn-ghost btn-sm"><I.X size={14}/></button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Field label="Leave type">
              <select className="input"><option>Annual leave (17 days remaining)</option><option>Sick leave (8 days remaining)</option><option>Personal (4 days remaining)</option></select>
            </Field>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Field label="From"><input className="input" type="date" defaultValue="2026-05-12"/></Field>
              <Field label="To"><input className="input" type="date" defaultValue="2026-05-16"/></Field>
            </div>
            <div style={{ padding: 10, background: "var(--accent)", borderRadius: 8, fontSize: 12, color: "var(--primary)", display: "flex", justifyContent: "space-between" }}>
              <span>Total leave days</span><strong>5 working days</strong>
            </div>
            <Field label="Reason">
              <textarea className="input" rows={3} placeholder="Optional — your manager will see this." defaultValue="Family vacation, booked in January."/>
            </Field>
            <Field label="Attachment (optional)">
              <div style={{ border: "1.5px dashed var(--border)", borderRadius: 8, padding: 18, textAlign: "center", fontSize: 12, color: "var(--text-2)" }}>
                <I.Upload size={20} style={{ color: "var(--primary)", marginBottom: 6 }}/>
                <div>Drop files here or <a style={{ color: "var(--primary)", fontWeight: 500 }}>browse</a></div>
                <div style={{ fontSize: 10, marginTop: 4 }}>PDF, JPG, PNG up to 10MB</div>
              </div>
            </Field>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
            <Btn full>Cancel</Btn>
            <Btn kind="primary" full icon={<I.Send size={14}/>}>Submit request</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenPayroll = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Payroll Dashboard <span className="frame-meta">/payroll</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="payroll"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Payroll" subtitle="April 2026"/>
        <div style={{ padding: 24 }}>
          <div className="grid" style={{ gridTemplateColumns: "1.6fr 1fr", gap: 16, marginBottom: 20 }}>
            <Card padding={24} style={{ background: "linear-gradient(135deg, #4C1D95 0%, #6B21A8 60%, #A855F7 110%)", color: "white", border: "none" }}>
              <div style={{ fontSize: 12, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.06em" }}>Total payroll · April 2026</div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 44, fontWeight: 600, marginTop: 6, letterSpacing: "-0.02em" }}>$4,212,490.00</div>
              <div style={{ display: "flex", gap: 24, marginTop: 12, fontSize: 12 }}>
                <div><div style={{ opacity: 0.75 }}>Employees</div><div style={{ fontWeight: 600, fontSize: 16 }}>248</div></div>
                <div><div style={{ opacity: 0.75 }}>Pay date</div><div style={{ fontWeight: 600, fontSize: 16 }}>Apr 30</div></div>
                <div><div style={{ opacity: 0.75 }}>Net pay</div><div style={{ fontWeight: 600, fontSize: 16 }}>$2,968,720</div></div>
                <div><div style={{ opacity: 0.75 }}>Status</div><div style={{ fontWeight: 600, fontSize: 16 }}>Awaiting approval</div></div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                <Btn size="lg" style={{ background: "white", color: "var(--primary)" }}>Review pay run</Btn>
                <button className="btn btn-lg" style={{ background: "rgba(255,255,255,0.18)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Run payroll →</button>
              </div>
            </Card>
            <Card padding={20}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Pay breakdown</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <Donut value={68} sub="Base" label="68%"/>
                <div style={{ flex: 1, fontSize: 12 }}>
                  {[
                    { l: "Base salary", v: "$2,864,493", c: "var(--primary)", p: 68 },
                    { l: "Bonuses", v: "$674,000", c: "var(--primary-light)", p: 16 },
                    { l: "Benefits", v: "$378,123", c: "var(--accent-strong)", p: 9 },
                    { l: "Deductions", v: "−$295,874", c: "var(--accent)", p: 7 },
                  ].map(r => (
                    <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0" }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: r.c }}/>
                      <span style={{ flex: 1 }}>{r.l}</span>
                      <span className="tabular muted">{r.p}%</span>
                      <span className="tabular" style={{ fontWeight: 500 }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <Card padding={0}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 15 }}>Payslips · April 2026</h3>
              <div style={{ display: "flex", gap: 8 }}>
                <input className="input" placeholder="Search employee…" style={{ width: 220 }}/>
                <Btn icon={<I.Send size={14}/>}>Send all payslips</Btn>
                <Btn icon={<I.Download size={14}/>}>Export CSV</Btn>
              </div>
            </div>
            <table className="table">
              <thead><tr><th>Employee</th><th>Department</th><th>Gross</th><th>Deductions</th><th>Net pay</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {DATA.employees.slice(0, 7).map(e => (
                  <tr key={e.id}>
                    <td><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={e.name} size="sm"/>{e.name}</div></td>
                    <td className="muted">{e.dept}</td>
                    <td className="tabular">${(e.salary/12).toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
                    <td className="tabular muted">−${Math.floor(e.salary/12*0.28).toLocaleString()}</td>
                    <td className="tabular" style={{ fontWeight: 600 }}>${Math.floor(e.salary/12*0.72).toLocaleString()}</td>
                    <td><Pill kind="success">Processed</Pill></td>
                    <td><div style={{ display: "flex", gap: 4 }}><button className="btn btn-icon btn-sm btn-ghost"><I.Download size={13}/></button><button className="btn btn-icon btn-sm btn-ghost"><I.Send size={13}/></button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const ScreenPayslip = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Payslip Detail <span className="frame-meta">/payroll/payslips/p-202604-3</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="payroll"/>
      <div style={{ flex: 1, background: "var(--surface)" }}>
        <AppTopbar title="Payroll" subtitle="Payslip · April 2026"/>
        <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 280px", gap: 20 }}>
          <Card padding={36}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 28 }}>
              <div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,var(--primary),var(--primary-light))", display: "grid", placeItems: "center", color: "white", fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>P</div>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 18, fontWeight: 600 }}>Acme Corp</div>
                <div style={{ fontSize: 11, color: "var(--text-2)" }}>500 Howard St · San Francisco, CA 94105</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 600 }}>Payslip</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", marginTop: 2 }}>Period: Apr 1 — Apr 30, 2026</div>
                <div style={{ fontSize: 12, color: "var(--text-2)" }}>Pay date: Apr 30, 2026</div>
                <Pill kind="success" style={{ marginTop: 6 }}>Processed</Pill>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, padding: 16, background: "var(--surface)", borderRadius: 10, marginBottom: 24 }}>
              <div>
                <div className="muted-2" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Employee</div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>Priya Iyer</div>
                <div style={{ fontSize: 12, color: "var(--text-2)" }}>Engineering Manager · ID #00342</div>
              </div>
              <div>
                <div className="muted-2" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Bank account</div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>•••• •••• 4421</div>
                <div style={{ fontSize: 12, color: "var(--text-2)" }}>HDFC Bank · Bengaluru</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
              <div>
                <h4 style={{ fontSize: 12, fontFamily: "var(--f-body)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-3)", marginBottom: 10 }}>Earnings</h4>
                {[
                  ["Base salary", "$16,250.00"], ["Performance bonus", "$2,031.25"],
                  ["Equity vesting", "$3,200.00"], ["Cell phone allowance", "$120.00"],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--divider)", fontSize: 13 }}>
                    <span>{l}</span><span className="tabular" style={{ fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: 13, fontWeight: 600 }}>
                  <span>Gross pay</span><span className="tabular">$21,601.25</span>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 12, fontFamily: "var(--f-body)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-3)", marginBottom: 10 }}>Deductions</h4>
                {[
                  ["Federal income tax", "−$3,890.22"], ["State tax (CA)", "−$1,512.08"],
                  ["Social Security", "−$1,339.27"], ["Medicare", "−$313.21"],
                  ["401(k) contribution (8%)", "−$1,300.00"], ["Health insurance", "−$285.00"],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--divider)", fontSize: 13 }}>
                    <span>{l}</span><span className="tabular muted">{v}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: 13, fontWeight: 600 }}>
                  <span>Total deductions</span><span className="tabular">−$8,639.78</span>
                </div>
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg, #4C1D95, #A855F7)", color: "white", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 12, opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.06em" }}>Net pay</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>Deposited Apr 30, 2026</div>
              </div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em" }}>$12,961.47</div>
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Btn kind="primary" full icon={<I.Download size={14}/>}>Download PDF</Btn>
            <Btn full icon={<I.Send size={14}/>}>Email payslip</Btn>
            <Btn full icon={<I.FileText size={14}/>}>Print</Btn>
            <Card>
              <h4 style={{ fontSize: 13, marginBottom: 8 }}>YTD summary</h4>
              <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.8 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>YTD Gross</span><span className="tabular" style={{ color: "var(--text)", fontWeight: 500 }}>$86,405.00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>YTD Tax</span><span className="tabular" style={{ color: "var(--text)", fontWeight: 500 }}>$28,213.20</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>YTD Net</span><span className="tabular" style={{ color: "var(--text)", fontWeight: 500 }}>$51,845.88</span></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
);

window.AttendancePayrollScreens = { ScreenAttendance, ScreenLeaveManagement, ScreenLeaveRequest, ScreenPayroll, ScreenPayslip };
