// Recruitment screens — Job listings, Create job, Pipeline (Kanban), Candidate profile, Interview scheduler

const ScreenJobs = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Job Listings <span className="frame-meta">/recruitment/jobs</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="recruitment"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Recruitment" subtitle="Open positions"/>
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 600 }}>16 open positions</div>
              <div style={{ fontSize: 13, color: "var(--text-2)" }}>222 active candidates · 11 hires this quarter</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Btn icon={<I.Filter size={14}/>}>Filters</Btn>
              <Btn kind="primary" icon={<I.Plus size={14}/>}>Create job posting</Btn>
            </div>
          </div>
          <div className="tabs" style={{ marginBottom: 16 }}>
            <div className="tab active">All <span className="muted-2">(16)</span></div>
            <div className="tab">Active <span className="muted-2">(12)</span></div>
            <div className="tab">Draft <span className="muted-2">(2)</span></div>
            <div className="tab">Closed <span className="muted-2">(2)</span></div>
            <div className="tab">Archived</div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {DATA.jobs.map(j => (
              <div className="card" key={j.id} style={{ padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <StatusPill status={j.status}/>
                  <I.MoreHorizontal size={14} style={{ color: "var(--text-3)" }}/>
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 4 }}>{j.title}</h3>
                <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 14 }}>
                  {j.dept} · {j.location} · {j.type}
                </div>
                <div style={{ display: "flex", gap: 18, marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--border)" }}>
                  <div><div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 600 }}>{j.applicants}</div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Applicants</div></div>
                  <div><div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 600 }}>{Math.floor(j.applicants/3)}</div><div style={{ fontSize: 11, color: "var(--text-3)" }}>In review</div></div>
                  <div><div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 600 }}>{Math.floor(j.applicants/8)}</div><div style={{ fontSize: 11, color: "var(--text-3)" }}>Interviewing</div></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
                  <span className="muted">{j.salary} · Posted {j.posted}</span>
                  <Btn kind="ghost" size="sm" icon={<I.ArrowRight size={12}/>}>Open pipeline</Btn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenCreateJob = () => (
  <div className="frame frame-desktop">
    <div className="frame-label">Create Job Posting <span className="frame-meta">/recruitment/jobs/new</span></div>
    <div className="frame-body" style={{ display: "flex" }}>
      <AppSidebar active="recruitment"/>
      <div style={{ flex: 1 }}>
        <AppTopbar title="Recruitment" subtitle="New job posting"/>
        <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
          <div className="card" style={{ padding: 28 }}>
            <h2 style={{ fontSize: 20, marginBottom: 4 }}>Senior Product Designer</h2>
            <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 24 }}>Draft · last edited 2 minutes ago</div>
            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Job title"><input className="input" defaultValue="Senior Product Designer"/></Field>
                <Field label="Department"><select className="input"><option>Design</option></select></Field>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                <Field label="Location type"><select className="input"><option>Remote</option><option>Hybrid</option><option>On-site</option></select></Field>
                <Field label="Employment type"><select className="input"><option>Full-time</option><option>Contract</option><option>Part-time</option></select></Field>
                <Field label="Seniority"><select className="input"><option>Senior</option></select></Field>
              </div>
              <Field label="Description">
                <div className="input" style={{ padding: 0 }}>
                  <div style={{ borderBottom: "1px solid var(--border)", padding: "6px 8px", display: "flex", gap: 4, fontSize: 11, color: "var(--text-2)" }}>
                    {["B","I","U","H1","H2","•","1.","🔗","Code","↺"].map(t => <button key={t} className="btn btn-sm btn-ghost" style={{ padding: "4px 8px", fontWeight: t === "B" ? 700 : 400 }}>{t}</button>)}
                  </div>
                  <div style={{ padding: 14, fontSize: 13, lineHeight: 1.6, color: "var(--text)", minHeight: 200 }}>
                    <p style={{ margin: "0 0 10px" }}>We're looking for a Senior Product Designer to join the Design team and shape the next generation of our hiring & onboarding flows.</p>
                    <strong>What you'll do</strong>
                    <ul style={{ margin: "6px 0", paddingLeft: 20 }}>
                      <li>Own end-to-end design of new features across web and mobile</li>
                      <li>Collaborate closely with engineering and product partners</li>
                      <li>Define and evolve our design system</li>
                    </ul>
                    <strong>What we're looking for</strong>
                    <ul style={{ margin: "6px 0", paddingLeft: 20 }}>
                      <li>5+ years of product design experience</li>
                      <li>Strong portfolio of B2B SaaS work</li>
                    </ul>
                  </div>
                </div>
              </Field>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                <Field label="Salary range — min"><input className="input" defaultValue="$140,000"/></Field>
                <Field label="Salary range — max"><input className="input" defaultValue="$180,000"/></Field>
                <Field label="Currency"><select className="input"><option>USD</option></select></Field>
              </div>
              <Field label="Hiring team">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["Maya Chen — Hiring manager", "Jordan Reyes — Recruiter", "Sofia Romero — Panel"].map(p => (
                    <div key={p} className="pill" style={{ padding: "4px 10px" }}>{p} <I.X size={10}/></div>
                  ))}
                  <button className="btn btn-sm btn-ghost"><I.Plus size={12}/> Add</button>
                </div>
              </Field>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
              <h3 style={{ fontSize: 14, marginBottom: 12 }}>Publish settings</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
                {[
                  ["Company careers page", true], ["LinkedIn", true], ["Indeed", false],
                  ["Slack #hiring", true], ["Internal only", false],
                ].map(([l, on]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{l}</span>
                    <div style={{ width: 32, height: 18, borderRadius: 999, background: on ? "var(--primary)" : "var(--border-2)", position: "relative" }}>
                      <div style={{ position: "absolute", top: 2, left: on ? 16 : 2, width: 14, height: 14, borderRadius: "50%", background: "white", transition: "left 0.2s" }}/>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h3 style={{ fontSize: 14, marginBottom: 10 }}>AI suggestions</h3>
              <div style={{ fontSize: 12, color: "var(--text-2)", padding: 10, background: "var(--surface)", borderRadius: 8, marginBottom: 8 }}>
                💡 Add "Figma" and "design systems" to requirements to match similar listings.
              </div>
              <div style={{ fontSize: 12, color: "var(--text-2)", padding: 10, background: "var(--surface)", borderRadius: 8 }}>
                💡 Salary band is 8% below market median for this role.
              </div>
            </Card>
            <div style={{ display: "flex", gap: 8 }}>
              <Btn full>Save draft</Btn>
              <Btn kind="primary" full icon={<I.Send size={14}/>}>Publish</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenPipeline = () => {
  const stages = ["Applied", "Screening", "Interview", "Offer", "Hired"];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Applicant Pipeline (Kanban) <span className="frame-meta">/recruitment/jobs/1/pipeline</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="recruitment"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Recruitment" subtitle="Senior Product Designer · Pipeline"/>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <a className="muted" style={{ fontSize: 13 }}>← All jobs</a>
                <span className="dot-sep"/>
                <span style={{ fontSize: 13 }}>47 candidates</span>
                <Pill kind="success">Active</Pill>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Btn icon={<I.Search size={14}/>} size="sm">Search candidates</Btn>
                <Btn icon={<I.Filter size={14}/>} size="sm">Filter</Btn>
                <Btn kind="primary" size="sm" icon={<I.Plus size={14}/>}>Add candidate</Btn>
              </div>
            </div>
            <div className="kanban">
              {stages.map((s, idx) => {
                const cs = DATA.candidates.filter(c => c.stage === s);
                return (
                  <div key={s} className="kanban-col">
                    <div className="kanban-col-head">
                      <div className="title">{s} <span className="muted-2" style={{ fontWeight: 400 }}>· {cs.length}</span></div>
                      <I.Plus size={14} style={{ color: "var(--text-3)" }}/>
                    </div>
                    {cs.map(c => (
                      <div key={c.id} className="kanban-card">
                        <div style={{ display: "flex", alignItems: "start", gap: 8, marginBottom: 8 }}>
                          <Avatar name={c.name} size="sm"/>
                          <div style={{ flex: 1 }}>
                            <div className="name">{c.name}</div>
                            <div className="role">{c.role}</div>
                          </div>
                        </div>
                        <div className="meta">
                          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--warning)" }}>
                            <I.Star size={11} style={{ fill: "var(--warning)" }}/>
                            <span style={{ fontSize: 11, color: "var(--text)", fontWeight: 600 }}>{c.score}</span>
                          </div>
                          <span className="muted-2" style={{ fontSize: 10 }}>{c.days}d in stage</span>
                        </div>
                        {idx === 2 && c.id === 6 && (
                          <div style={{ marginTop: 8, padding: 6, background: "var(--accent)", borderRadius: 6, fontSize: 10, color: "var(--primary)", display: "flex", alignItems: "center", gap: 4 }}>
                            <I.Calendar size={10}/> Interview Apr 17 · 10am
                          </div>
                        )}
                      </div>
                    ))}
                    {cs.length === 0 && <div style={{ fontSize: 11, color: "var(--text-3)", textAlign: "center", padding: 16 }}>Drop here</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenCandidate = () => {
  const c = { name: "Felix Hartmann", role: "Senior Frontend Engineer", email: "felix.h@mail.com", phone: "+49 30 5550 7711", location: "Berlin", score: 4.8 };
  const timeline = [
    { stage: "Applied", date: "Apr 1", who: "via LinkedIn", done: true },
    { stage: "Recruiter Screen", date: "Apr 3", who: "Jordan Reyes · 30 min", done: true, score: 4.5 },
    { stage: "Take-home", date: "Apr 7", who: "Submitted in 4 days", done: true, score: 4.6 },
    { stage: "Technical Interview", date: "Apr 12", who: "Priya Iyer · 90 min", done: true, score: 4.9 },
    { stage: "Final Panel", date: "Apr 17", who: "3 panelists · 2:00 PM", done: false, current: true },
    { stage: "Offer", date: "—", who: "Pending final", done: false },
  ];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Candidate Profile <span className="frame-meta">/recruitment/candidates/6</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="recruitment"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Recruitment" subtitle={c.name}/>
          <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 380px", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Card padding={20}>
                <div style={{ display: "flex", gap: 16, alignItems: "start" }}>
                  <Avatar name={c.name} size="xl"/>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <h2 style={{ fontSize: 22 }}>{c.name}</h2>
                      <Pill kind="info">Interview stage</Pill>
                    </div>
                    <div style={{ color: "var(--text-2)", fontSize: 13, marginTop: 2 }}>Applying for {c.role}</div>
                    <div style={{ display: "flex", gap: 16, marginTop: 10, fontSize: 12, color: "var(--text-2)" }}>
                      <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.Mail size={12}/>{c.email}</span>
                      <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.Phone size={12}/>{c.phone}</span>
                      <span style={{ display: "flex", gap: 5, alignItems: "center" }}><I.MapPin size={12}/>{c.location}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 32, fontWeight: 600, color: "var(--primary)" }}>{c.score}</div>
                    <div style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Avg score</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  <Btn kind="primary" icon={<I.Calendar size={14}/>}>Schedule interview</Btn>
                  <Btn icon={<I.Send size={14}/>}>Send message</Btn>
                  <Btn icon={<I.FileText size={14}/>}>Make offer</Btn>
                  <div className="spacer"/>
                  <Btn kind="danger" size="sm">Reject</Btn>
                </div>
              </Card>

              <Card padding={0}>
                <div className="tabs" style={{ padding: "0 20px" }}>
                  <div className="tab active">Resume</div>
                  <div className="tab">Notes <span className="pill pill-neutral" style={{ marginLeft: 4, padding: "1px 6px" }}>4</span></div>
                  <div className="tab">Scorecards</div>
                  <div className="tab">Communications</div>
                  <div className="tab">Files</div>
                </div>
                <div style={{ padding: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ background: "var(--surface)", borderRadius: 8, padding: 16, height: 320, overflow: "hidden", position: "relative" }}>
                    <div style={{ fontFamily: "var(--f-display)", fontWeight: 600, fontSize: 16, marginBottom: 4 }}>Felix Hartmann</div>
                    <div style={{ fontSize: 11, color: "var(--text-2)", marginBottom: 14 }}>Senior Frontend Engineer · Berlin</div>
                    <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 4 }}>EXPERIENCE</div>
                    <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 10 }}>
                      <div style={{ color: "var(--text)", fontWeight: 500 }}>Senior Frontend · Hatch (2022–present)</div>
                      Led design system rebuild used by 200+ engineers…
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 10 }}>
                      <div style={{ color: "var(--text)", fontWeight: 500 }}>Frontend · Folio (2019–2022)</div>
                      Shipped editor for 800k MAU collaborative tool…
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 4 }}>SKILLS</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {["React","TypeScript","CSS Architecture","Performance","Design Systems"].map(s => <span key={s} className="pill" style={{ fontSize: 10 }}>{s}</span>)}
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, var(--surface))" }}/>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 14, marginBottom: 10 }}>Evaluation summary</h3>
                    {[
                      { label: "Technical", v: 4.9 },
                      { label: "Product sense", v: 4.6 },
                      { label: "Communication", v: 4.8 },
                      { label: "Culture add", v: 4.7 },
                    ].map(s => (
                      <div key={s.label} style={{ marginBottom: 10 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                          <span>{s.label}</span><span className="tabular" style={{ fontWeight: 600 }}>{s.v}</span>
                        </div>
                        <div className="bar-track"><div className="bar-fill" style={{ width: `${(s.v/5)*100}%` }}/></div>
                      </div>
                    ))}
                    <div style={{ marginTop: 12, padding: 10, background: "var(--surface)", borderRadius: 8, fontSize: 12, color: "var(--text-2)" }}>
                      <strong style={{ color: "var(--text)" }}>Recommendation:</strong> Strong yes from 3/3 panelists. Ready for final round.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <Card padding={20}>
              <h3 style={{ fontSize: 15, marginBottom: 14 }}>Status timeline</h3>
              <div style={{ position: "relative", paddingLeft: 18 }}>
                <div style={{ position: "absolute", left: 5, top: 4, bottom: 4, width: 2, background: "var(--border)" }}/>
                {timeline.map((t, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: 16 }}>
                    <div style={{ position: "absolute", left: -18, top: 2, width: 12, height: 12, borderRadius: "50%",
                      background: t.done ? "var(--success)" : t.current ? "var(--primary)" : "var(--border-2)",
                      border: "3px solid var(--bg)", boxShadow: t.current ? "0 0 0 3px var(--accent)" : "none" }}/>
                    <div style={{ fontSize: 13, fontWeight: t.current ? 600 : 500, color: t.done || t.current ? "var(--text)" : "var(--text-2)" }}>{t.stage}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 1 }}>{t.date} · {t.who}</div>
                    {t.score && <div style={{ fontSize: 11, color: "var(--success)", marginTop: 2, fontWeight: 500 }}>Score: {t.score}/5</div>}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScreenScheduler = () => {
  const slots = [
    { time: "9:00 AM", taken: true }, { time: "9:30 AM", taken: false }, { time: "10:00 AM", taken: false, selected: true },
    { time: "10:30 AM", taken: false }, { time: "11:00 AM", taken: true }, { time: "11:30 AM", taken: false },
    { time: "1:00 PM", taken: false }, { time: "1:30 PM", taken: false }, { time: "2:00 PM", taken: true },
    { time: "2:30 PM", taken: false }, { time: "3:00 PM", taken: false }, { time: "3:30 PM", taken: false },
  ];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Interview Scheduler <span className="frame-meta">/recruitment/schedule</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="recruitment"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Recruitment" subtitle="Schedule interview · Felix Hartmann"/>
          <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}>
            <Card padding={20}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: 16 }}>Pick a date · April 2026</h3>
                <div style={{ display: "flex", gap: 4 }}>
                  <button className="btn btn-icon btn-sm"><I.ChevronLeft size={14}/></button>
                  <Btn size="sm">Today</Btn>
                  <button className="btn btn-icon btn-sm"><I.ChevronRight size={14}/></button>
                </div>
              </div>
              <div className="cal" style={{ marginBottom: 24 }}>
                {["M","T","W","T","F","S","S"].map((d,i)=><div key={i} className="cal-head">{d}</div>)}
                {Array.from({length: 30}, (_, i) => i + 1).map(d => {
                  const cls = d === 17 ? "today" : d === 11 || d === 18 || d === 23 ? "has-event" : "";
                  return <div key={d} className={"cal-cell " + cls}>{d}</div>;
                })}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <h3 style={{ fontSize: 16 }}>Available slots · Friday, Apr 17</h3>
                <span className="muted" style={{ fontSize: 12 }}>Times in PT (Maya's local)</span>
              </div>
              <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                {slots.map(s => (
                  <button key={s.time} className="btn" style={{
                    justifyContent: "center", padding: 12,
                    background: s.selected ? "var(--primary)" : s.taken ? "var(--surface)" : "var(--bg)",
                    color: s.selected ? "white" : s.taken ? "var(--text-3)" : "var(--text)",
                    border: s.selected ? "1px solid var(--primary)" : "1px solid var(--border)",
                    textDecoration: s.taken ? "line-through" : "none",
                    cursor: s.taken ? "not-allowed" : "pointer",
                  }}>{s.time}</button>
                ))}
              </div>
            </Card>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Card>
                <h3 style={{ fontSize: 14, marginBottom: 14 }}>Interview details</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
                  <div style={{ padding: 12, background: "var(--surface)", borderRadius: 8 }}>
                    <div className="muted-2" style={{ fontSize: 11 }}>WHEN</div>
                    <div style={{ fontWeight: 600, marginTop: 2 }}>Friday, April 17 · 10:00–11:00 AM PT</div>
                  </div>
                  <Field label="Interview type">
                    <select className="input"><option>Final Panel (60 min)</option><option>Recruiter screen (30 min)</option><option>Take-home review (45 min)</option></select>
                  </Field>
                  <Field label="Interviewers">
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {["Priya Iyer", "Sofia Romero", "Maya Chen"].map(p => (
                        <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, padding: 8, background: "var(--surface)", borderRadius: 6 }}>
                          <Avatar name={p} size="sm"/>
                          <div style={{ flex: 1, fontSize: 12 }}>
                            <div style={{ fontWeight: 500 }}>{p}</div>
                            <div className="muted-2" style={{ fontSize: 10 }}>Available 10–11 AM</div>
                          </div>
                          <I.Check size={14} style={{ color: "var(--success)" }}/>
                        </div>
                      ))}
                    </div>
                  </Field>
                  <Field label="Video link">
                    <div style={{ display: "flex", gap: 6 }}>
                      <select className="input" style={{ flex: 1 }}><option>Google Meet (auto-create)</option><option>Zoom</option><option>In-person</option></select>
                      <Btn icon={<I.Video size={14}/>}>Generate</Btn>
                    </div>
                  </Field>
                </div>
              </Card>
              <div style={{ display: "flex", gap: 8 }}>
                <Btn full>Cancel</Btn>
                <Btn kind="primary" full icon={<I.Send size={14}/>}>Send invite</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.RecruitmentScreens = { ScreenJobs, ScreenCreateJob, ScreenPipeline, ScreenCandidate, ScreenScheduler };
