// Performance, Training, Reports, Settings, Global Components

const ScreenPerformance = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Performance Overview <span className="frame-meta">/performance</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="performance"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Performance" subtitle="Q3 2026 Cycle"/>
        <div style={{ padding: 24 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
            {[
              { l: "Cycle status", v: "In progress", d: "32 days remaining", c: "var(--info)" },
              { l: "Reviews completed", v: "184/248", d: "74.2%", c: "var(--success)" },
              { l: "Avg performance", v: "4.2", d: "out of 5", c: "var(--primary)" },
              { l: "On performance plan", v: "6", d: "2.4% of org", c: "var(--warning)" },
            ].map(k => (
              <div className="kpi" key={k.l}>
                <div className="kpi-label">{k.l}</div>
                <div className="kpi-value" style={{ color: k.c }}>{k.v}</div>
                <div style={{ fontSize: 11, color: "var(--text-2)" }}>{k.d}</div>
              </div>
            ))}
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 }}>
            <Card padding={20}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Average rating by department</h3>
              <BarChart data={[
                { label: "Eng", value: 4.4 }, { label: "Design", value: 4.6 },
                { label: "Product", value: 4.3 }, { label: "Marketing", value: 4.1 },
                { label: "Sales", value: 4.0 }, { label: "Ops", value: 4.2 },
                { label: "Finance", value: 3.9 }, { label: "Support", value: 4.3 },
              ]} max={5}/>
            </Card>
            <Card padding={20}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Review completion</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <Donut value={74} sub="of 248" color="var(--success)"/>
                <div style={{ flex: 1, fontSize: 12 }}>
                  {[["Self review", 92], ["Manager review", 78], ["Peer review", 64], ["Skip-level", 41]].map(([l,p]) => (
                    <div key={l} style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span>{l}</span><span className="tabular" style={{ fontWeight: 600 }}>{p}%</span></div>
                      <div className="bar-track"><div className="bar-fill" style={{ width: `${p}%` }}/></div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <Card padding={0}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 15 }}>Top performers · Q3</h3>
              <Btn size="sm">View all 248</Btn>
            </div>
            <table className="table">
              <thead><tr><th>#</th><th>Employee</th><th>Department</th><th>Score</th><th>Goals</th><th>Manager</th><th>Trend</th></tr></thead>
              <tbody>
                {[
                  { n: "Sofia Romero", d: "Design", s: 4.9, g: "5/5", m: "Linh Tran", t: [3.8, 4.1, 4.4, 4.6, 4.9] },
                  { n: "Priya Iyer", d: "Engineering", s: 4.8, g: "4/4", m: "Sasha Volkov", t: [4.2, 4.4, 4.5, 4.7, 4.8] },
                  { n: "Aiko Tanaka", d: "Marketing", s: 4.8, g: "5/5", m: "—", t: [4.0, 4.3, 4.5, 4.7, 4.8] },
                  { n: "Lina Park", d: "Engineering", s: 4.7, g: "3/4", m: "Priya Iyer", t: [4.0, 4.2, 4.5, 4.6, 4.7] },
                  { n: "Henrik Olsen", d: "Sales", s: 4.6, g: "4/5", m: "David Kim", t: [3.9, 4.1, 4.3, 4.5, 4.6] },
                ].map((p, i) => (
                  <tr key={p.n}>
                    <td className="muted">{i+1}</td>
                    <td><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={p.n} size="sm"/>{p.n}</div></td>
                    <td className="muted">{p.d}</td>
                    <td><div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--warning)" }}><I.Star size={12} style={{ fill: "var(--warning)" }}/><span style={{ color: "var(--text)", fontWeight: 600 }}>{p.s}</span></div></td>
                    <td>{p.g}</td>
                    <td className="muted">{p.m}</td>
                    <td><Spark values={p.t} w={80}/></td>
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

const ScreenReviewForm = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Performance Review Form <span className="frame-meta">/performance/review/142</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="performance"/>
      <div style={{ flex: 1, background: "var(--surface)" }}>
        <AppTopbar title="Performance" subtitle="Manager review · Lina Park"/>
        <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
          <Card padding={28}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 18, borderBottom: "1px solid var(--border)" }}>
              <Avatar name="Lina Park" size="lg"/>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 20 }}>Lina Park</h2>
                <div style={{ color: "var(--text-2)", fontSize: 13 }}>Frontend Engineer · Engineering</div>
              </div>
              <Pill kind="info">Q3 Cycle · Manager review</Pill>
            </div>
            {[
              { name: "Technical Excellence", desc: "Code quality, system design, technical decisions", v: 4 },
              { name: "Collaboration & Communication", desc: "Cross-functional partnership, written and verbal comms", v: 5 },
              { name: "Ownership & Impact", desc: "Drives outcomes end-to-end, reliable delivery", v: 4 },
              { name: "Growth Mindset", desc: "Learning, mentorship, continuous improvement", v: 5 },
            ].map((c, i) => (
              <div key={c.name} style={{ marginBottom: 22 }}>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)" }}>{c.desc}</div>
                </div>
                <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                  {[1,2,3,4,5].map(n => (
                    <button key={n} className="btn" style={{
                      padding: "10px 16px",
                      background: n <= c.v ? "var(--primary)" : "var(--surface)",
                      color: n <= c.v ? "white" : "var(--text-2)",
                      border: n <= c.v ? "1px solid var(--primary)" : "1px solid var(--border)",
                      fontWeight: 600,
                    }}>{n}</button>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", marginLeft: 10, fontSize: 12, color: "var(--text-2)" }}>
                    {["Needs work","Developing","Meets","Exceeds","Outstanding"][c.v-1]}
                  </div>
                </div>
                <textarea className="input" rows={2} placeholder="Add specific examples and feedback…"
                  defaultValue={i === 0 ? "Strong implementation work on the editor migration. Could push deeper on architectural decisions in larger projects." : ""}/>
              </div>
            ))}
            <div className="divider"/>
            <div style={{ marginTop: 14 }}>
              <Field label="Goals progress (Q3)">
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { g: "Ship editor V2 to GA", p: 100 },
                    { g: "Mentor 2 junior engineers", p: 70 },
                    { g: "Reduce bundle size by 30%", p: 45 },
                  ].map(g => (
                    <div key={g.g} style={{ display: "flex", alignItems: "center", gap: 12, padding: 10, background: "var(--surface)", borderRadius: 8 }}>
                      <I.Target size={14} style={{ color: "var(--primary)" }}/>
                      <span style={{ flex: 1, fontSize: 13 }}>{g.g}</span>
                      <div style={{ width: 100 }}><div className="bar-track"><div className="bar-fill" style={{ width: `${g.p}%` }}/></div></div>
                      <span className="tabular muted" style={{ fontSize: 12, width: 32 }}>{g.p}%</span>
                    </div>
                  ))}
                </div>
              </Field>
              <div style={{ marginTop: 16 }}>
                <Field label="Overall feedback (visible to Lina)">
                  <textarea className="input" rows={4} defaultValue="Lina has had a strong quarter, leading the editor migration to a successful GA launch with no rollbacks. Communication and mentorship have been exceptional…"/>
                </Field>
              </div>
              <div style={{ marginTop: 16 }}>
                <Field label="Private notes (HR & manager only)">
                  <textarea className="input" rows={2} placeholder="Notes about promotion readiness, comp adjustments, or development plans."/>
                </Field>
              </div>
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <h4 style={{ fontSize: 13, marginBottom: 10 }}>Overall rating</h4>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 36, fontWeight: 600, color: "var(--primary)" }}>4.5</div>
              <div style={{ fontSize: 12, color: "var(--text-2)" }}>Exceeds expectations</div>
            </Card>
            <Card>
              <h4 style={{ fontSize: 13, marginBottom: 10 }}>Sources</h4>
              <div style={{ fontSize: 12, lineHeight: 1.7 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Self review</span><Pill kind="success">Done</Pill></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Peer × 3</span><Pill kind="success">Done</Pill></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Manager (you)</span><Pill kind="warning">Draft</Pill></div>
              </div>
            </Card>
            <Btn full>Save draft</Btn>
            <Btn kind="primary" full icon={<I.Send size={14}/>}>Submit review</Btn>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenGoals = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Goals & OKRs <span className="frame-meta">/performance/goals</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="performance"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Performance" subtitle="Goals & OKRs"/>
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <select className="input" style={{ width: 160 }}><option>Q3 2026</option></select>
            <select className="input" style={{ width: 200 }}><option>All teams</option></select>
            <select className="input" style={{ width: 160 }}><option>Any owner</option></select>
            <div className="spacer"/>
            <Btn kind="primary" icon={<I.Plus size={14}/>}>New objective</Btn>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {DATA.goals.map(g => (
              <Card key={g.id} padding={20}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <Pill kind={g.progress > 80 ? "success" : g.progress > 50 ? "info" : "warning"}>
                    {g.progress > 80 ? "On track" : g.progress > 50 ? "At risk" : "Behind"}
                  </Pill>
                  <I.MoreHorizontal size={14} style={{ color: "var(--text-3)" }}/>
                </div>
                <h3 style={{ fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>{g.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-2)", marginBottom: 14 }}>
                  <Avatar name={g.owner} size="sm"/>{g.owner} · {g.q} · {g.krs} key results
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}>
                  <span className="muted">Progress</span><span style={{ fontWeight: 600 }} className="tabular">{g.progress}%</span>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${g.progress}%` }}/></div>
                <div className="divider"/>
                {[
                  { kr: "Reduce avg time-to-hire from 42 to 28 days", p: 76 },
                  { kr: "Achieve 90% offer-acceptance rate", p: 68 },
                  { kr: "Launch structured panel training", p: 100 },
                ].slice(0, g.id === 1 ? 3 : 2).map((kr, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", fontSize: 12 }}>
                    <span style={{ flex: 1, color: "var(--text-2)" }}>{kr.kr}</span>
                    <div style={{ width: 60 }}><div className="bar-track" style={{ height: 4 }}><div className="bar-fill" style={{ width: `${kr.p}%` }}/></div></div>
                    <span className="tabular" style={{ fontSize: 11, fontWeight: 500, width: 32, textAlign: "right" }}>{kr.p}%</span>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenTraining = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Training Catalog <span className="frame-meta">/training</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="training"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Training" subtitle="Course catalog"/>
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <input className="input" placeholder="Search courses…" style={{ flex: 1, maxWidth: 320 }}/>
            <select className="input" style={{ width: 160 }}><option>All categories</option></select>
            <div className="spacer"/>
            <Btn kind="primary" icon={<I.Plus size={14}/>}>New course</Btn>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {DATA.courses.map((c, i) => (
              <Card key={c.id} padding={0} style={{ overflow: "hidden" }}>
                <div style={{ height: 130, background: `linear-gradient(135deg, hsl(${260 + i*8}, 60%, ${55+i*3}%), hsl(${280 + i*5}, 65%, 70%))`, position: "relative", display: "grid", placeItems: "center" }}>
                  <I.GraduationCap size={36} style={{ color: "white", opacity: 0.9 }}/>
                  <div style={{ position: "absolute", top: 10, right: 10 }}><Pill kind={c.status === "Active" ? "success" : "neutral"}>{c.status}</Pill></div>
                </div>
                <div style={{ padding: 16 }}>
                  <div style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{c.category}</div>
                  <h3 style={{ fontSize: 15, marginBottom: 6 }}>{c.title}</h3>
                  <div style={{ display: "flex", gap: 12, fontSize: 11, color: "var(--text-2)", marginBottom: 14 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><I.Clock size={11}/>{c.duration}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><I.Users size={11}/>{c.enrolled} enrolled</span>
                  </div>
                  <Btn full size="sm">View course</Btn>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenCourse = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Course Detail <span className="frame-meta">/training/courses/2</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="training"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Training" subtitle="Manager Essentials: First 90 Days"/>
        <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
          <div>
            <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 16 }}>
              <div style={{ height: 220, background: "linear-gradient(135deg, #4C1D95, #A855F7)", position: "relative", display: "grid", placeItems: "center" }}>
                <I.PlayCircle size={64} style={{ color: "white" }}/>
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, color: "white" }}>
                  <Pill style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>Leadership</Pill>
                  <h2 style={{ color: "white", fontSize: 28, marginTop: 8 }}>Manager Essentials: First 90 Days</h2>
                  <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>3h 45m · 8 modules · Updated April 2026</div>
                </div>
              </div>
            </div>
            <Card padding={20}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Syllabus</h3>
              {[
                { t: "Welcome & framing your first 90 days", d: "12 min", done: true },
                { t: "Building 1:1s that matter", d: "28 min", done: true },
                { t: "Setting expectations and direction", d: "32 min", done: true, current: false },
                { t: "Giving and receiving feedback", d: "45 min", current: true },
                { t: "Performance conversations", d: "30 min" },
                { t: "Coaching vs managing", d: "25 min" },
                { t: "Building team rituals", d: "20 min" },
                { t: "Wrap-up & action plan", d: "15 min" },
              ].map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: 10, borderRadius: 8, background: m.current ? "var(--accent)" : "transparent", marginBottom: 4 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%",
                    background: m.done ? "var(--success)" : m.current ? "var(--primary)" : "var(--surface)",
                    color: m.done || m.current ? "white" : "var(--text-3)",
                    border: m.done || m.current ? "none" : "1px solid var(--border)",
                    display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600
                  }}>{m.done ? <I.Check size={12}/> : i+1}</div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: m.current ? 600 : 400 }}>{m.t}</div>
                  <span className="muted-2" style={{ fontSize: 11 }}>{m.d}</span>
                </div>
              ))}
            </Card>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <h4 style={{ fontSize: 13, marginBottom: 12 }}>Your progress</h4>
              <Donut value={37} sub="3 of 8 done" size={100} stroke={10}/>
              <Btn kind="primary" full style={{ marginTop: 14 }} icon={<I.PlayCircle size={14}/>}>Continue learning</Btn>
            </Card>
            <Card>
              <h4 style={{ fontSize: 13, marginBottom: 12 }}>Enrolled · 38</h4>
              <div style={{ display: "flex", marginBottom: 12 }}>
                {DATA.employees.slice(0,5).map((e, i) => (
                  <div key={e.id} style={{ marginLeft: i ? -8 : 0, border: "2px solid var(--card)", borderRadius: "50%" }}>
                    <Avatar name={e.name} size="sm"/>
                  </div>
                ))}
                <div style={{ marginLeft: -8, width: 24, height: 24, borderRadius: "50%", background: "var(--surface)", border: "2px solid var(--card)", display: "grid", placeItems: "center", fontSize: 10, color: "var(--text-2)", fontWeight: 600 }}>+33</div>
              </div>
              <div style={{ fontSize: 11, color: "var(--text-2)" }}>Avg completion: <strong style={{ color: "var(--text)" }}>62%</strong></div>
            </Card>
            <Card>
              <h4 style={{ fontSize: 13, marginBottom: 10 }}>Materials</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
                {["Workbook.pdf", "1:1 templates.docx", "Feedback frameworks.pdf"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: 8, background: "var(--surface)", borderRadius: 6 }}>
                    <I.FileText size={14} style={{ color: "var(--primary)" }}/>
                    <span style={{ flex: 1 }}>{f}</span>
                    <I.Download size={12} style={{ color: "var(--text-3)" }}/>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenReports = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Reports Hub <span className="frame-meta">/reports</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="reports"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Reports" subtitle="Reports & Analytics"/>
        <div style={{ padding: 24 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
            {[
              { i: <I.Users size={22}/>, t: "Headcount", d: "Growth, distribution, demographics", n: 8 },
              { i: <I.TrendingDown size={22}/>, t: "Turnover & Retention", d: "Attrition, tenure, exit reasons", n: 6 },
              { i: <I.DollarSign size={22}/>, t: "Payroll & Compensation", d: "Run history, comp ratios, equity", n: 11 },
              { i: <I.Target size={22}/>, t: "Performance", d: "Cycle results, ratings distribution", n: 9 },
              { i: <I.Clock size={22}/>, t: "Attendance", d: "Daily presence, hours worked, late", n: 5 },
              { i: <I.Briefcase size={22}/>, t: "Recruitment", d: "Pipeline, time-to-hire, source funnel", n: 7 },
            ].map(r => (
              <Card key={r.t} padding={20} style={{ cursor: "pointer" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center", marginBottom: 14 }}>{r.i}</div>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{r.t}</h3>
                <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 14 }}>{r.d}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
                  <span className="muted-2">{r.n} reports</span>
                  <span style={{ color: "var(--primary)", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>Open <I.ArrowRight size={12}/></span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenReportDetail = () => {
  const monthly = [86,92,98,105,112,128,142,156,168,184,212,248];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Report Detail · Headcount Growth <span className="frame-meta">/reports/headcount</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="reports"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Reports" subtitle="Headcount Growth · 12 months"/>
          <div style={{ padding: 24 }}>
            <div className="card" style={{ padding: 16, marginBottom: 16, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <input className="input" type="date" defaultValue="2025-05-01" style={{ width: 150 }}/>
              <span className="muted">to</span>
              <input className="input" type="date" defaultValue="2026-04-30" style={{ width: 150 }}/>
              <select className="input" style={{ width: 160 }}><option>All departments</option></select>
              <select className="input" style={{ width: 160 }}><option>All locations</option></select>
              <div className="spacer"/>
              <Btn icon={<I.Download size={14}/>} size="sm">Export CSV</Btn>
              <Btn icon={<I.Download size={14}/>} size="sm">Export PDF</Btn>
            </div>
            <Card padding={20} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <h3 style={{ fontSize: 15 }}>Total headcount</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 32, fontWeight: 600 }}>248</div>
                    <div style={{ fontSize: 12, color: "var(--success)" }}>+188% YoY</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {["7d","30d","90d","12m","All"].map((p, i) => (
                    <button key={p} className={"btn btn-sm" + (i === 3 ? " btn-primary" : "")}>{p}</button>
                  ))}
                </div>
              </div>
              <LineChart values={monthly} h={240}/>
            </Card>
            <Card padding={0}>
              <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)" }}><h3 style={{ fontSize: 15 }}>By month</h3></div>
              <table className="table">
                <thead><tr><th>Month</th><th>Start</th><th>Hires</th><th>Departures</th><th>End</th><th>Net change</th></tr></thead>
                <tbody>
                  {["May 2025","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan 2026","Feb","Mar","Apr"].map((m,i) => {
                    const start = monthly[i] || 86, end = monthly[i+1] || start + 6;
                    const hires = Math.floor((end - start) * 1.5 + 4);
                    const dep = hires - (end - start);
                    return <tr key={m}><td style={{ fontWeight: 500 }}>{m}</td><td className="tabular">{start}</td><td className="tabular" style={{ color: "var(--success)" }}>+{hires}</td><td className="tabular" style={{ color: "var(--danger)" }}>−{dep}</td><td className="tabular">{end}</td><td className="tabular" style={{ fontWeight: 600 }}>+{end - start}</td></tr>;
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenSettingsCompany = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Settings · Company <span className="frame-meta">/settings/company</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="settings"/>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ width: 220, borderRight: "1px solid var(--border)", padding: "24px 12px", background: "var(--card)" }}>
          {[
            { l: "Company", a: true }, { l: "Roles & Permissions" }, { l: "Departments" },
            { l: "Designations" }, { l: "Integrations" }, { l: "Notifications" },
            { l: "Security" }, { l: "Billing" },
          ].map(s => <div key={s.l} className={`sb-link ${s.a ? "active" : ""}`}>{s.l}</div>)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--border)" }}>
            <h2 style={{ fontSize: 22 }}>Company settings</h2>
            <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 2 }}>Workspace identity, locale, and fiscal calendar.</div>
          </div>
          <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}>
            <Card padding={24}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Brand</h3>
              <div style={{ display: "flex", gap: 16, alignItems: "start" }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, background: "linear-gradient(135deg, var(--primary), var(--primary-light))", display: "grid", placeItems: "center", color: "white", fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 36 }}>A</div>
                <div style={{ flex: 1 }}>
                  <Btn icon={<I.Upload size={14}/>}>Upload logo</Btn>
                  <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 6 }}>SVG, PNG up to 2MB · Recommended 256×256</div>
                </div>
              </div>
            </Card>
            <Card padding={24}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Company information</h3>
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Legal name"><input className="input" defaultValue="Acme Corporation, Inc."/></Field>
                <Field label="Display name"><input className="input" defaultValue="Acme Corp"/></Field>
                <Field label="Tax ID / EIN"><input className="input" defaultValue="84-2384741"/></Field>
                <Field label="Industry"><select className="input"><option>Software · SaaS</option></select></Field>
                <Field label="Headquarters"><input className="input" defaultValue="500 Howard St, San Francisco, CA"/></Field>
                <Field label="Website"><input className="input" defaultValue="https://acme.co"/></Field>
              </div>
            </Card>
            <Card padding={24}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Locale & fiscal calendar</h3>
              <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Default timezone"><select className="input"><option>America/Los_Angeles (PT)</option></select></Field>
                <Field label="Date format"><select className="input"><option>April 17, 2026</option><option>17 Apr 2026</option><option>04/17/2026</option></select></Field>
                <Field label="Currency"><select className="input"><option>USD — US Dollar</option></select></Field>
                <Field label="Fiscal year starts"><select className="input"><option>January 1</option><option>April 1</option><option>July 1</option></select></Field>
                <Field label="Working days"><div style={{ display: "flex", gap: 4 }}>{["M","T","W","T","F","S","S"].map((d,i) => <button key={i} className="btn btn-sm" style={{ background: i < 5 ? "var(--primary)" : "var(--surface)", color: i < 5 ? "white" : "var(--text-2)", border: "1px solid var(--border)", width: 36, justifyContent: "center" }}>{d}</button>)}</div></Field>
                <Field label="Working hours"><div style={{ display: "flex", gap: 6 }}><input className="input" defaultValue="9:00 AM"/><input className="input" defaultValue="6:00 PM"/></div></Field>
              </div>
            </Card>
            <div style={{ display: "flex", gap: 8, justifyContent: "end" }}>
              <Btn>Discard changes</Btn>
              <Btn kind="primary">Save changes</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenRoles = () => {
  const modules = ["Employees","Recruitment","Payroll","Performance","Reports","Settings"];
  const roles = [
    { name: "Owner", count: 2, perms: ["RW","RW","RW","RW","RW","RW"] },
    { name: "HR Admin", count: 4, perms: ["RW","RW","RW","RW","RW","R"] },
    { name: "Manager", count: 28, perms: ["R+","R","—","RW","R","—"] },
    { name: "Employee", count: 214, perms: ["—","—","—","R","—","—"] },
  ];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Roles & Permissions <span className="frame-meta">/settings/roles</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="settings"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Settings" subtitle="Roles & Permissions"/>
          <div style={{ padding: 24 }}>
            <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
              {roles.map(r => (
                <Card key={r.name}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ fontSize: 15 }}>{r.name}</h3>
                    <I.MoreHorizontal size={14} style={{ color: "var(--text-3)" }}/>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-2)", margin: "4px 0 12px" }}>{r.count} member{r.count > 1 ? "s" : ""}</div>
                  <div style={{ display: "flex", marginTop: 4 }}>
                    {DATA.employees.slice(0, Math.min(4, r.count)).map((e, i) => (
                      <div key={i} style={{ marginLeft: i ? -8 : 0, border: "2px solid var(--card)", borderRadius: "50%" }}>
                        <Avatar name={e.name} size="sm"/>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <Card padding={0}>
              <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ fontSize: 15 }}>Permission matrix</h3>
                <Btn kind="primary" size="sm" icon={<I.Plus size={14}/>}>Custom role</Btn>
              </div>
              <table className="table">
                <thead><tr><th>Module</th>{roles.map(r => <th key={r.name} style={{ textAlign: "center" }}>{r.name}</th>)}</tr></thead>
                <tbody>
                  {modules.map((m, i) => (
                    <tr key={m}>
                      <td style={{ fontWeight: 500 }}>{m}</td>
                      {roles.map((r, j) => (
                        <td key={j} style={{ textAlign: "center" }}>
                          {r.perms[i] === "RW" ? <Pill kind="success">Read & Write</Pill>
                            : r.perms[i] === "R" ? <Pill kind="info">Read</Pill>
                            : r.perms[i] === "R+" ? <Pill kind="info">Read (Team)</Pill>
                            : <span className="muted-2">—</span>}
                        </td>
                      ))}
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
};

const ScreenDepartments = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Departments & Designations <span className="frame-meta">/settings/departments</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="settings"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Settings" subtitle="Departments & Designations"/>
        <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card padding={0}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 15 }}>Departments · 9</h3>
              <Btn size="sm" kind="primary" icon={<I.Plus size={14}/>}>Add</Btn>
            </div>
            <table className="table">
              <thead><tr><th>Department</th><th>Lead</th><th>People</th><th></th></tr></thead>
              <tbody>
                {[
                  ["Engineering","Sasha Volkov",86],["Design","Sofia Romero",22],["Product","Linh Tran",18],
                  ["Marketing","Aiko Tanaka",28],["Sales","David Kim",34],["Customer Success","Henrik Olsen",24],
                  ["People Ops","Maya Chen",14],["Finance","Robin Patel",14],["Legal","Dana Quinn",8],
                ].map(([n,l,p]) => (
                  <tr key={n}>
                    <td style={{ fontWeight: 500 }}>{n}</td>
                    <td><div style={{ display: "flex", alignItems: "center", gap: 6 }}><Avatar name={l} size="sm"/>{l}</div></td>
                    <td className="tabular">{p}</td>
                    <td><div style={{ display: "flex", gap: 4 }}><button className="btn btn-icon btn-sm btn-ghost"><I.Edit size={12}/></button><button className="btn btn-icon btn-sm btn-ghost"><I.Trash size={12}/></button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <Card padding={0}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 15 }}>Designations · 24</h3>
              <Btn size="sm" kind="primary" icon={<I.Plus size={14}/>}>Add</Btn>
            </div>
            <table className="table">
              <thead><tr><th>Title</th><th>Level</th><th>Band</th><th>People</th></tr></thead>
              <tbody>
                {[
                  ["Software Engineer","L4","$110–145k",18],["Senior Engineer","L5","$140–175k",24],
                  ["Staff Engineer","L6","$170–210k",12],["Engineering Manager","M4","$180–220k",6],
                  ["Product Designer","L4","$110–145k",10],["Senior Designer","L5","$135–170k",8],
                  ["Account Executive","L4","$95–135k",18],["Recruiter","L4","$95–125k",4],
                ].map(([n,l,b,p]) => (
                  <tr key={n}>
                    <td style={{ fontWeight: 500 }}>{n}</td>
                    <td><Pill kind="neutral">{l}</Pill></td>
                    <td className="tabular muted">{b}</td>
                    <td className="tabular">{p}</td>
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

const ScreenIntegrations = () => {
  const ints = [
    { n: "Slack", c: "#4A154B", d: "Notifications, leave requests, hiring updates", connected: true },
    { n: "Google Workspace", c: "#4285F4", d: "Calendar, Meet, Drive · SSO", connected: true },
    { n: "Zoom", c: "#2D8CFF", d: "Auto-create interview links", connected: true },
    { n: "GitHub", c: "#181717", d: "Engineer onboarding, deprovisioning", connected: false },
    { n: "Notion", c: "#000000", d: "Sync employee handbooks & policies", connected: false },
    { n: "Stripe Payroll API", c: "#635BFF", d: "Process global payroll runs", connected: true },
    { n: "Greenhouse", c: "#1F8B4C", d: "Sync ATS pipelines", connected: false },
    { n: "BambooHR", c: "#5DBC5A", d: "One-way employee data import", connected: false },
  ];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Integrations <span className="frame-meta">/settings/integrations</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="settings"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Settings" subtitle="Integrations"/>
          <div style={{ padding: 24 }}>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {ints.map(i => (
                <Card key={i.n} padding={20}>
                  <div style={{ display: "flex", alignItems: "start", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: i.c, color: "white", display: "grid", placeItems: "center", fontFamily: "var(--f-display)", fontWeight: 700, fontSize: 20 }}>{i.n[0]}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <h3 style={{ fontSize: 15 }}>{i.n}</h3>
                        {i.connected && <Pill kind="success">Connected</Pill>}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--text-2)", marginTop: 4, lineHeight: 1.5 }}>{i.d}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--divider)" }}>
                    <span className="muted-2" style={{ fontSize: 11 }}>{i.connected ? "Last synced 12 min ago" : "Not connected"}</span>
                    {i.connected ? <Btn size="sm">Configure</Btn> : <Btn size="sm" kind="primary">Connect</Btn>}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenNotifSettings = () => {
  const events = [
    "Employee added","Leave request submitted","Leave approved","Payroll processed",
    "Review assigned","Goal updated","Job published","Candidate stage changed",
    "Document expiring","Birthday & work anniversary",
  ];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Notifications Settings <span className="frame-meta">/settings/notifications</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="settings"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Settings" subtitle="Notification preferences"/>
          <div style={{ padding: 24 }}>
            <Card padding={0}>
              <table className="table">
                <thead><tr><th>Event</th><th style={{ textAlign: "center" }}>Email</th><th style={{ textAlign: "center" }}>In-app</th><th style={{ textAlign: "center" }}>SMS</th><th style={{ textAlign: "center" }}>Slack</th></tr></thead>
                <tbody>
                  {events.map((e, i) => (
                    <tr key={e}>
                      <td style={{ fontWeight: 500 }}>{e}</td>
                      {[true, true, i % 3 === 0, i % 2 === 0].map((on, j) => (
                        <td key={j} style={{ textAlign: "center" }}>
                          <div style={{ width: 32, height: 18, borderRadius: 999, background: on ? "var(--primary)" : "var(--border-2)", position: "relative", display: "inline-block" }}>
                            <div style={{ position: "absolute", top: 2, left: on ? 16 : 2, width: 14, height: 14, borderRadius: "50%", background: "white" }}/>
                          </div>
                        </td>
                      ))}
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
};

const ScreenNotifCenter = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Notification Center (slide-in) <span className="frame-meta">global component</span></div>
    <div className="frame-body" style={{ display: "flex", position: "relative" }}>
      <AppSidebar active="dashboard"/>
      <div style={{ flex: 1, position: "relative" }}>
        <AppTopbar title="Overview" subtitle="Dashboard"/>
        <div style={{ padding: 24, opacity: 0.4, pointerEvents: "none" }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[1,2,3,4].map(i => <div key={i} className="kpi" style={{ height: 130 }}/>)}
          </div>
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 400, background: "var(--card)", borderLeft: "1px solid var(--border)", boxShadow: "var(--sh-xl)", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: 18, borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: 16 }}>Notifications</h3>
              <div style={{ fontSize: 11, color: "var(--text-2)" }}>3 unread</div>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              <Btn size="sm" kind="ghost">Mark all read</Btn>
              <button className="btn btn-icon btn-sm btn-ghost"><I.X size={14}/></button>
            </div>
          </div>
          <div className="tabs" style={{ padding: "0 18px" }}>
            <div className="tab active">All</div>
            <div className="tab">Unread <span className="pill pill-warning" style={{ marginLeft: 4, padding: "1px 6px" }}>3</span></div>
            <div className="tab">Mentions</div>
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            {DATA.notifications.map(g => (
              <div key={g.group}>
                <div style={{ padding: "10px 18px", fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, background: "var(--surface)" }}>{g.group}</div>
                {g.items.map((n, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "14px 18px", borderBottom: "1px solid var(--divider)", background: n.unread ? "var(--surface-2)" : "var(--card)", position: "relative" }}>
                    {n.unread && <div style={{ position: "absolute", left: 8, top: 22, width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }}/>}
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      {n.kind === "leave" ? <I.Calendar size={16}/> : n.kind === "candidate" ? <I.User size={16}/> : n.kind === "payroll" ? <I.DollarSign size={16}/> : n.kind === "perf" ? <I.Target size={16}/> : <I.GraduationCap size={16}/>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{n.title}</div>
                      <div style={{ fontSize: 12, color: "var(--text-2)" }}>{n.body}</div>
                      <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>{n.time} ago</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ padding: 14, borderTop: "1px solid var(--border)", textAlign: "center" }}>
            <a style={{ fontSize: 13, color: "var(--primary)", fontWeight: 500 }}>View all notifications →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenGlobalSearch = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Global Search (overlay) <span className="frame-meta">global component · ⌘K</span></div>
    <div className="frame-body" style={{ display: "flex", position: "relative" }}>
      <AppSidebar active="dashboard"/>
      <div style={{ flex: 1, position: "relative", background: "var(--surface)" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(30, 27, 75, 0.45)", backdropFilter: "blur(4px)", display: "grid", placeItems: "start center", paddingTop: 80 }}>
          <div style={{ width: 640, background: "var(--card)", borderRadius: 16, boxShadow: "var(--sh-xl)", overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 12 }}>
              <I.Search size={18} style={{ color: "var(--text-3)" }}/>
              <input className="input" placeholder="Search anything…" defaultValue="ma" style={{ border: "none", padding: 0, background: "transparent", fontSize: 16 }}/>
              <Pill kind="neutral">esc</Pill>
            </div>
            <div style={{ maxHeight: 480, overflowY: "auto" }}>
              <div style={{ padding: "10px 20px 6px", fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Employees</div>
              {DATA.employees.slice(0,3).map(e => (
                <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", cursor: "pointer", background: e.id === 1 ? "var(--accent)" : "transparent" }}>
                  <Avatar name={e.name} size="sm"/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{e.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)" }}>{e.role} · {e.dept}</div>
                  </div>
                  <Pill kind="neutral">↵ Open</Pill>
                </div>
              ))}
              <div style={{ padding: "10px 20px 6px", fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Jobs</div>
              {DATA.jobs.slice(0,2).map(j => (
                <div key={j.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", cursor: "pointer" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center" }}><I.Briefcase size={14}/></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{j.title}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)" }}>{j.dept} · {j.applicants} applicants</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: "10px 20px 6px", fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Documents</div>
              {["Manager Handbook 2026.pdf", "Maternity Policy v3.docx"].map(d => (
                <div key={d} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", cursor: "pointer" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center" }}><I.FileText size={14}/></div>
                  <div style={{ flex: 1, fontSize: 13 }}>{d}</div>
                </div>
              ))}
              <div style={{ padding: "10px 20px 6px", fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Recent</div>
              {["Q3 Performance cycle", "April payroll run", "Felix Hartmann · Candidate"].map(r => (
                <div key={r} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", cursor: "pointer", color: "var(--text-2)", fontSize: 13 }}>
                  <I.Clock size={14}/>{r}
                </div>
              ))}
            </div>
            <div style={{ padding: "10px 20px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-3)" }}>
              <div style={{ display: "flex", gap: 16 }}><span>↑↓ Navigate</span><span>↵ Select</span><span>esc Close</span></div>
              <div>Powered by ⌘K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenEmpty = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Empty States <span className="frame-meta">global · 3 variants</span></div>
    <div className="frame-body" style={{ background: "var(--surface)", padding: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
      {[
        { i: <I.Users size={36}/>, t: "No employees yet", d: "Add your first employee or import a CSV from your previous HR system. Setup takes about 2 minutes.", btn: "Add employee", btn2: "Import CSV" },
        { i: <I.Briefcase size={36}/>, t: "No jobs posted", d: "Create your first job to start collecting applicants. We'll auto-publish to your careers page.", btn: "Create job posting" },
        { i: <I.ChartBar size={36}/>, t: "Not enough data", d: "We need at least 30 days of history to show meaningful trends. Check back next week.", btn: "Import historical data" },
      ].map((e, i) => (
        <Card key={i} padding={32} style={{ textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: 20, background: "var(--accent)", color: "var(--primary)", display: "grid", placeItems: "center", margin: "0 auto 18px", position: "relative" }}>
            {e.i}
            <div style={{ position: "absolute", top: -6, right: -6, width: 24, height: 24, borderRadius: "50%", background: "var(--primary)", color: "white", display: "grid", placeItems: "center" }}><I.Plus size={12}/></div>
          </div>
          <h3 style={{ fontSize: 17, marginBottom: 8 }}>{e.t}</h3>
          <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5, marginBottom: 18, maxWidth: 280, marginLeft: "auto", marginRight: "auto" }}>{e.d}</div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            <Btn kind="primary" icon={<I.Plus size={14}/>}>{e.btn}</Btn>
            {e.btn2 && <Btn>{e.btn2}</Btn>}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const ScreenError = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Error / 404 / 500 <span className="frame-meta">global</span></div>
    <div className="frame-body" style={{ background: "var(--surface)", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, minHeight: 600 }}>
      {[
        { code: "404", t: "We couldn't find that page", d: "The link may be outdated, or you may not have access. Try heading back to your dashboard.", btn: "Back to dashboard" },
        { code: "500", t: "Something went wrong on our end", d: "Our team has been notified. Please try again in a moment.", btn: "Retry", btn2: "Contact support" },
      ].map((e, i) => (
        <div key={e.code} style={{ padding: 60, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", borderRight: i === 0 ? "1px solid var(--border)" : "none", background: i === 0 ? "var(--bg)" : "var(--surface)" }}>
          <div style={{ position: "relative", marginBottom: 24 }}>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 140, fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.05em" }}>{e.code}</div>
            <div style={{ position: "absolute", top: -10, right: -30, width: 60, height: 60, borderRadius: "50%", background: "var(--accent)", opacity: 0.6 }}/>
            <div style={{ position: "absolute", bottom: 10, left: -25, width: 36, height: 36, borderRadius: 8, background: "var(--accent-strong)", transform: "rotate(15deg)", opacity: 0.6 }}/>
          </div>
          <h2 style={{ fontSize: 22, marginBottom: 8 }}>{e.t}</h2>
          <div style={{ fontSize: 14, color: "var(--text-2)", maxWidth: 380, marginBottom: 20 }}>{e.d}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <Btn kind="primary" icon={<I.Home size={14}/>}>{e.btn}</Btn>
            {e.btn2 && <Btn>{e.btn2}</Btn>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

window.PerfGlobalScreens = {
  ScreenPerformance, ScreenReviewForm, ScreenGoals, ScreenTraining, ScreenCourse,
  ScreenReports, ScreenReportDetail, ScreenSettingsCompany, ScreenRoles,
  ScreenDepartments, ScreenIntegrations, ScreenNotifSettings,
  ScreenNotifCenter, ScreenGlobalSearch, ScreenEmpty, ScreenError,
};
