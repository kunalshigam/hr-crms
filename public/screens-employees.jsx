// Employee management screens — Directory, Profile, Add/Edit, Org Chart

const ScreenDirectory = () => {
  const filters = ["All", "Engineering", "Design", "Product", "People Ops", "Marketing", "Sales"];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Employee Directory <span className="frame-meta">/employees</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="employees"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="People" subtitle="Employee Directory"/>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 600 }}>248 people</div>
                <div style={{ fontSize: 13, color: "var(--text-2)" }}>Active · across 9 departments and 14 locations</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Btn icon={<I.Upload size={14}/>}>Import CSV</Btn>
                <Btn kind="primary" icon={<I.Plus size={14}/>}>Add employee</Btn>
              </div>
            </div>

            <div className="card" style={{ padding: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ position: "relative", flex: 1, minWidth: 240 }}>
                  <I.Search size={14} style={{ position: "absolute", left: 12, top: 11, color: "var(--text-3)" }}/>
                  <input className="input" placeholder="Search by name, email, or role…" style={{ paddingLeft: 36 }}/>
                </div>
                <select className="input" style={{ width: 160 }} defaultValue="All">{filters.map(f => <option key={f}>{f}</option>)}</select>
                <select className="input" style={{ width: 140 }}><option>Any status</option><option>Active</option><option>On Leave</option><option>Terminated</option></select>
                <select className="input" style={{ width: 160 }}><option>Any location</option><option>Remote</option><option>San Francisco</option><option>Berlin</option><option>Tokyo</option></select>
                <Btn icon={<I.Filter size={14}/>}>More filters</Btn>
                <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
                  <button className="btn btn-sm" style={{ borderRadius: 0, border: "none", background: "var(--accent)", color: "var(--primary)" }}><I.List size={14}/></button>
                  <button className="btn btn-sm btn-ghost" style={{ borderRadius: 0, border: "none" }}><I.Grid size={14}/></button>
                </div>
              </div>
            </div>

            <div className="card" style={{ overflow: "hidden" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: 28 }}><input type="checkbox"/></th>
                    <th>Employee</th><th>Role</th><th>Department</th><th>Location</th><th>Status</th><th>Joined</th><th style={{ width: 40 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {DATA.employees.map(e => (
                    <tr key={e.id}>
                      <td><input type="checkbox"/></td>
                      <td><div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Avatar name={e.name} size="sm"/>
                        <div><div style={{ fontWeight: 500 }}>{e.name}</div><div style={{ color: "var(--text-3)", fontSize: 11 }}>{e.email}</div></div>
                      </div></td>
                      <td>{e.role}</td>
                      <td><Pill kind="neutral">{e.dept}</Pill></td>
                      <td className="muted">{e.location}</td>
                      <td><StatusPill status={e.status}/></td>
                      <td className="muted">{e.joined}</td>
                      <td><I.MoreHorizontal size={14} style={{ color: "var(--text-3)" }}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text-2)" }}>
                <div>Showing 1–12 of 248</div>
                <div style={{ display: "flex", gap: 4 }}>
                  <button className="btn btn-sm">Previous</button>
                  <button className="btn btn-sm btn-primary">1</button>
                  <button className="btn btn-sm">2</button>
                  <button className="btn btn-sm">3</button>
                  <button className="btn btn-sm">…</button>
                  <button className="btn btn-sm">21</button>
                  <button className="btn btn-sm">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenProfile = () => {
  const e = DATA.employees[2]; // Priya
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Employee Profile <span className="frame-meta">/employees/3</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="employees"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="People" subtitle="Priya Iyer"/>
          <div style={{ padding: 24 }}>
            <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 20 }}>
              <div style={{ height: 100, background: "linear-gradient(120deg, #6B21A8 0%, #A855F7 60%, #E9D5FF 100%)" }}/>
              <div style={{ padding: "0 28px 22px", marginTop: -42, display: "flex", alignItems: "end", gap: 20 }}>
                <Avatar name={e.name} size="xl"/>
                <div style={{ flex: 1, paddingBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <h2 style={{ fontSize: 24 }}>{e.name}</h2>
                    <StatusPill status={e.status}/>
                  </div>
                  <div style={{ color: "var(--text-2)", fontSize: 14, marginTop: 4 }}>{e.role} · {e.dept}</div>
                  <div style={{ display: "flex", gap: 16, marginTop: 8, fontSize: 12, color: "var(--text-2)" }}>
                    <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.Mail size={12}/>{e.email}</span>
                    <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.Phone size={12}/>{e.phone}</span>
                    <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.MapPin size={12}/>{e.location}</span>
                    <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.Calendar size={12}/>Joined {e.joined}</span>
                  </div>
                </div>
                <Btn icon={<I.Send size={14}/>}>Message</Btn>
                <Btn kind="primary" icon={<I.Edit size={14}/>}>Edit profile</Btn>
              </div>
              <div className="tabs" style={{ padding: "0 28px" }}>
                <div className="tab active">Overview</div>
                <div className="tab">Compensation</div>
                <div className="tab">Documents <span className="pill pill-neutral" style={{ marginLeft: 6, padding: "1px 6px" }}>8</span></div>
                <div className="tab">Performance</div>
                <div className="tab">Leave</div>
                <div className="tab">Time Off</div>
              </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Card>
                  <h3 style={{ fontSize: 15, marginBottom: 14 }}>Personal information</h3>
                  <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14, fontSize: 13 }}>
                    {[
                      ["Legal name", "Priya Lakshmi Iyer"],
                      ["Preferred name", "Priya"],
                      ["Date of birth", "Apr 12, 1988"],
                      ["Gender", "Female"],
                      ["Nationality", "Indian"],
                      ["Marital status", "Married"],
                      ["Home address", "12 Brigade Rd, Bengaluru 560001"],
                      ["Emergency contact", "Karthik Iyer · +91 98 4500 9988"],
                    ].map(([l, v]) => (
                      <div key={l}><div style={{ color: "var(--text-3)", fontSize: 11, marginBottom: 2 }}>{l}</div><div>{v}</div></div>
                    ))}
                  </div>
                </Card>
                <Card>
                  <h3 style={{ fontSize: 15, marginBottom: 14 }}>Role & compensation</h3>
                  <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 14, fontSize: 13 }}>
                    {[
                      ["Job title", "Engineering Manager"],
                      ["Department", "Engineering"],
                      ["Reports to", "Sasha Volkov (VP Eng)"],
                      ["Employment type", "Full-time"],
                      ["Pay grade", "L7 · Senior IC"],
                      ["Annual salary", "$195,000"],
                      ["Equity", "12,500 RSUs · 4y vest"],
                      ["Bonus target", "15% of base"],
                      ["Next review", "Oct 1, 2026"],
                    ].map(([l, v]) => (
                      <div key={l}><div style={{ color: "var(--text-3)", fontSize: 11, marginBottom: 2 }}>{l}</div><div style={{ fontWeight: 500 }}>{v}</div></div>
                    ))}
                  </div>
                </Card>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Card>
                  <h3 style={{ fontSize: 15, marginBottom: 12 }}>Reports to</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 10, background: "var(--surface)", borderRadius: 8 }}>
                    <Avatar name="Sasha Volkov" size="sm"/>
                    <div style={{ flex: 1, fontSize: 13 }}>
                      <div style={{ fontWeight: 500 }}>Sasha Volkov</div>
                      <div style={{ color: "var(--text-3)", fontSize: 11 }}>VP Engineering</div>
                    </div>
                    <I.ChevronRight size={14} style={{ color: "var(--text-3)" }}/>
                  </div>
                  <h3 style={{ fontSize: 15, margin: "16px 0 12px" }}>Direct reports · 6</h3>
                  {DATA.employees.filter(x => x.manager === 3).map(d => (
                    <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 4px", borderBottom: "1px solid var(--divider)" }}>
                      <Avatar name={d.name} size="sm"/>
                      <div style={{ flex: 1, fontSize: 13 }}>
                        <div style={{ fontWeight: 500 }}>{d.name}</div>
                        <div style={{ color: "var(--text-3)", fontSize: 11 }}>{d.role}</div>
                      </div>
                      <StatusPill status={d.status}/>
                    </div>
                  ))}
                </Card>
                <Card>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 15 }}>Leave balance</h3>
                    <a style={{ fontSize: 11, color: "var(--primary)" }}>View →</a>
                  </div>
                  {[
                    { l: "Annual leave", used: 8, total: 25, color: "var(--primary)" },
                    { l: "Sick leave", used: 2, total: 10, color: "var(--info)" },
                    { l: "Personal", used: 1, total: 5, color: "var(--warning)" },
                  ].map(b => (
                    <div key={b.l} style={{ marginBottom: 12 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                        <span>{b.l}</span><span className="tabular muted">{b.total - b.used} of {b.total} days left</span>
                      </div>
                      <div className="bar-track"><div className="bar-fill" style={{ width: `${(b.used / b.total) * 100}%`, background: b.color }}/></div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenAddEmployee = () => {
  const Step = ({ n, title, active, done }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, position: "relative" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%",
        background: done ? "var(--success)" : active ? "var(--primary)" : "var(--surface)",
        border: active || done ? "none" : "1px solid var(--border)",
        color: done || active ? "white" : "var(--text-3)",
        display: "grid", placeItems: "center", fontWeight: 600, fontSize: 12, zIndex: 1 }}>
        {done ? <I.Check size={14}/> : n}
      </div>
      <div style={{ fontSize: 11, color: active ? "var(--text)" : "var(--text-3)", fontWeight: active ? 600 : 400, marginTop: 6 }}>{title}</div>
    </div>
  );
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Add Employee · Step 3 of 5 (Compensation) <span className="frame-meta">/employees/new</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="employees"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="People" subtitle="Add new employee"/>
          <div style={{ padding: 24 }}>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 28, position: "relative" }}>
                <div style={{ position: "absolute", top: 16, left: "10%", right: "10%", height: 2, background: "var(--border)" }}/>
                <div style={{ position: "absolute", top: 16, left: "10%", width: "30%", height: 2, background: "var(--success)" }}/>
                <Step n={1} title="Personal" done/>
                <Step n={2} title="Role & Dept" done/>
                <Step n={3} title="Compensation" active/>
                <Step n={4} title="Documents"/>
                <Step n={5} title="Review & Invite"/>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 920 }}>
                <Field label="Compensation type">
                  <select className="input"><option>Salary (annual)</option><option>Hourly</option></select>
                </Field>
                <Field label="Currency">
                  <select className="input"><option>USD — US Dollar</option><option>EUR</option><option>INR</option></select>
                </Field>
                <Field label="Annual base salary">
                  <input className="input" defaultValue="$165,000"/>
                </Field>
                <Field label="Pay frequency">
                  <select className="input"><option>Bi-weekly</option><option>Monthly</option><option>Weekly</option></select>
                </Field>
                <Field label="Bonus target (%)">
                  <input className="input" defaultValue="15"/>
                </Field>
                <Field label="Equity grant">
                  <input className="input" defaultValue="8,000 RSUs"/>
                </Field>
                <Field label="Effective from">
                  <input className="input" type="date" defaultValue="2026-05-15"/>
                </Field>
                <Field label="Pay grade / band">
                  <select className="input"><option>L6 — Senior IC</option><option>L5</option><option>L7 — Staff</option></select>
                </Field>
                <div style={{ gridColumn: "span 2" }}>
                  <Field label="Notes (private to HR)">
                    <textarea className="input" rows={3} defaultValue="Sign-on bonus of $20,000 paid in two installments. Relocation package approved."/>
                  </Field>
                </div>
              </div>
              <div style={{ marginTop: 24, padding: 14, background: "var(--surface)", borderRadius: 10, fontSize: 12, color: "var(--text-2)", display: "flex", gap: 10 }}>
                <I.AlertCircle size={14} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}/>
                <div>This employee will be auto-enrolled in payroll group <strong style={{ color: "var(--text)" }}>US-Salaried</strong>. Tax forms (W-4, I-9) will be emailed for e-signature on the next step.</div>
              </div>
              <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
                <Btn kind="ghost" icon={<I.ArrowLeft size={14}/>}>Back</Btn>
                <div style={{ display: "flex", gap: 8 }}>
                  <Btn>Save as draft</Btn>
                  <Btn kind="primary">Continue → Documents</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenOrgChart = () => {
  const Node = ({ name, role, lead, children }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="card" style={{ padding: 12, display: "flex", alignItems: "center", gap: 10, minWidth: 200,
        background: lead ? "var(--primary)" : "var(--card)", color: lead ? "white" : "var(--text)",
        borderColor: lead ? "var(--primary)" : "var(--border)", boxShadow: lead ? "var(--sh-md)" : "var(--sh-sm)" }}>
        <Avatar name={name} size="sm"/>
        <div style={{ flex: 1, fontSize: 12 }}>
          <div style={{ fontWeight: 600 }}>{name}</div>
          <div style={{ opacity: lead ? 0.85 : 0.6, fontSize: 11 }}>{role}</div>
        </div>
        {children && <I.Minus size={12} style={{ opacity: 0.7 }}/>}
      </div>
      {children && (
        <>
          <div style={{ width: 2, height: 24, background: "var(--border)" }}/>
          <div style={{ display: "flex", gap: 28, position: "relative" }}>
            <div style={{ position: "absolute", top: -1, left: 24, right: 24, height: 2, background: "var(--border)" }}/>
            {children.map((c, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 2, height: 24, background: "var(--border)" }}/>
                <Node {...c}/>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Org Chart <span className="frame-meta">/employees/org</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="employees"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="People" subtitle="Org Chart"/>
          <div style={{ padding: 24 }}>
            <div className="card" style={{ padding: 16, marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
              <input className="input" placeholder="Find an employee in the org…" style={{ flex: 1, maxWidth: 320 }}/>
              <select className="input" style={{ width: 180 }}><option>All departments</option></select>
              <div className="spacer"/>
              <Btn icon={<I.Download size={14}/>} size="sm">Export PNG</Btn>
              <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 8 }}>
                <button className="btn btn-sm btn-ghost" style={{ border: "none" }}><I.Minus size={14}/></button>
                <div style={{ padding: "0 12px", display: "grid", placeItems: "center", fontSize: 12, color: "var(--text-2)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>100%</div>
                <button className="btn btn-sm btn-ghost" style={{ border: "none" }}><I.Plus size={14}/></button>
              </div>
            </div>
            <div className="card" style={{ padding: "40px 20px", overflow: "auto", background: "var(--surface)", minHeight: 600 }}>
              <Node name="Eleanor Vance" role="Chief Executive Officer" lead children={[
                { name: "Maya Chen", role: "HR Director", children: [
                  { name: "Jordan Reyes", role: "Senior Recruiter" },
                  { name: "Lex Park", role: "People Partner" },
                ]},
                { name: "Sasha Volkov", role: "VP Engineering", lead: false, children: [
                  { name: "Priya Iyer", role: "Eng Manager" },
                  { name: "Marcus Adler", role: "Staff Eng" },
                  { name: "Omar Haddad", role: "DevOps" },
                ]},
                { name: "Linh Tran", role: "VP Product", children: [
                  { name: "Sofia Romero", role: "Lead Designer" },
                  { name: "Theo Walker", role: "PM" },
                ]},
                { name: "David Kim", role: "VP Revenue", children: [
                  { name: "Henrik Olsen", role: "AE" },
                  { name: "Aiko Tanaka", role: "Brand Lead" },
                ]},
              ]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.EmployeeScreens = { ScreenDirectory, ScreenProfile, ScreenAddEmployee, ScreenOrgChart };
