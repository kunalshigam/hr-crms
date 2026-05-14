// Dashboard screen — desktop, 1280px

const ScreenDashboard = () => {
  const kpis = [
    { label: "Total Headcount", value: "248", delta: "+12 MTD", up: true, icon: <I.Users size={18}/>, spark: [220,225,228,232,236,240,244,248] },
    { label: "Open Roles", value: "16", delta: "+3 this week", up: true, icon: <I.Briefcase size={18}/>, spark: [11,12,11,13,14,15,15,16] },
    { label: "Attrition (YTD)", value: "4.8%", delta: "-1.2 vs Q2", up: false, icon: <I.TrendingDown size={18}/>, spark: [6.2,6.0,5.8,5.6,5.4,5.2,5.0,4.8] },
    { label: "Reviews Due", value: "32", delta: "in next 14 days", up: true, icon: <I.Target size={18}/>, spark: [40,38,36,35,34,33,33,32] },
  ];
  const dept = [
    { label: "Eng", value: 86 }, { label: "Design", value: 22 }, { label: "Product", value: 18 },
    { label: "Marketing", value: 28 }, { label: "Sales", value: 34 }, { label: "Ops", value: 24 },
    { label: "Finance", value: 14 }, { label: "Legal", value: 8 }, { label: "Support", value: 14 },
  ];
  const funnel = [
    { label: "Applied", value: 412, w: 100 },
    { label: "Screening", value: 156, w: 80 },
    { label: "Interview", value: 64, w: 58 },
    { label: "Offer", value: 22, w: 38 },
    { label: "Hired", value: 11, w: 22 },
  ];
  return (
    <div className="frame frame-desktop">
      <div className="frame-label">Main Dashboard <span className="frame-meta">/dashboard · 1280px</span></div>
      <div className="frame-body" style={{ display: "flex" }}>
        <AppSidebar active="dashboard"/>
        <div style={{ flex: 1 }}>
          <AppTopbar title="Overview" subtitle="Good morning, Maya 👋"/>
          <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* KPI row */}
            <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {kpis.map(k => (
                <div className="kpi" key={k.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <div className="kpi-icon">{k.icon}</div>
                    <Spark values={k.spark} w={70} h={26}/>
                  </div>
                  <div className="kpi-label">{k.label}</div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <div className="kpi-value">{k.value}</div>
                    <div className={`kpi-delta ${k.up ? "up" : "down"}`}>
                      {k.up ? <I.TrendingUp size={11}/> : <I.TrendingDown size={11}/>}{k.delta}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Charts */}
            <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", gap: 16 }}>
              <Card padding={20}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 15 }}>Headcount by Department</h3>
                    <div style={{ fontSize: 12, color: "var(--text-2)" }}>248 active · last updated 2h ago</div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Pill kind="neutral">This quarter</Pill>
                    <button className="btn btn-sm btn-ghost"><I.MoreHorizontal size={14}/></button>
                  </div>
                </div>
                <BarChart data={dept} height={180}/>
              </Card>
              <Card padding={20}>
                <h3 style={{ fontSize: 15, marginBottom: 4 }}>Hiring Funnel</h3>
                <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 16 }}>Last 30 days · all roles</div>
                <div className="funnel">
                  {funnel.map((f, i) => (
                    <div key={i} className="funnel-row" style={{ width: `${f.w}%`, opacity: 1 - i*0.08 }}>
                      <span className="label">{f.label}</span>
                      <span className="num">{f.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: 12, background: "var(--surface)", borderRadius: 8, fontSize: 12, color: "var(--text-2)" }}>
                  Conversion to offer: <strong style={{ color: "var(--text)" }}>5.3%</strong> · Avg time-to-hire: <strong style={{ color: "var(--text)" }}>34 days</strong>
                </div>
              </Card>
            </div>

            {/* Row 3: activity + calendar + quick actions */}
            <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16 }}>
              <Card padding={0}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 15 }}>Activity</h3>
                  <a style={{ fontSize: 12, color: "var(--primary)", fontWeight: 500 }}>View all →</a>
                </div>
                <div style={{ padding: "8px 0" }}>
                  {DATA.activity.map((a, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "10px 20px", alignItems: "start" }}>
                      <Avatar name={a.who} size="sm"/>
                      <div style={{ flex: 1, fontSize: 13 }}>
                        <div><strong>{a.who}</strong> <span className="muted">{a.what}</span> <strong>{a.target}</strong> {a.to && <span className="muted">{a.to}</span>}</div>
                        <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card padding={20}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ fontSize: 15 }}>April 2026</h3>
                  <div style={{ display: "flex", gap: 4 }}>
                    <button className="btn btn-icon btn-sm"><I.ChevronLeft size={14}/></button>
                    <button className="btn btn-icon btn-sm"><I.ChevronRight size={14}/></button>
                  </div>
                </div>
                <div className="cal">
                  {["M","T","W","T","F","S","S"].map((d,i)=><div key={i} className="cal-head">{d}</div>)}
                  {[31,1,2,3,4,5,6].map(d=><div key={"a"+d} className={"cal-cell " + (d===31?"muted":"")}>{d}</div>)}
                  {[7,8,9,10,11,12,13].map(d=><div key={"b"+d} className={"cal-cell " + (d===9?"has-event":"") + (d===11?" has-event":"")}>{d}</div>)}
                  {[14,15,16,17,18,19,20].map(d=><div key={"c"+d} className={"cal-cell " + (d===15?"today":"") + (d===17?"has-event":"")}>{d}</div>)}
                  {[21,22,23,24,25,26,27].map(d=><div key={"d"+d} className={"cal-cell " + (d===23?"has-event":"")}>{d}</div>)}
                  {[28,29,30,1,2,3,4].map((d,i)=><div key={"e"+i} className={"cal-cell " + (i>=3?"muted":"")}>{d}</div>)}
                </div>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "start" }}>
                    <div style={{ width: 4, height: 32, background: "var(--primary)", borderRadius: 2 }}/>
                    <div style={{ fontSize: 12 }}>
                      <div style={{ fontWeight: 500 }}>Q3 Review kickoff</div>
                      <div className="muted">Today · 2:00 PM</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "start" }}>
                    <div style={{ width: 4, height: 32, background: "var(--primary-light)", borderRadius: 2 }}/>
                    <div style={{ fontSize: 12 }}>
                      <div style={{ fontWeight: 500 }}>Felix Hartmann · Final Interview</div>
                      <div className="muted">Apr 17 · 10:00 AM</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card padding={20}>
                <h3 style={{ fontSize: 15, marginBottom: 12 }}>Quick actions</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {[
                    { i: <I.Plus size={16}/>, l: "Add employee" },
                    { i: <I.Briefcase size={16}/>, l: "Post a job" },
                    { i: <I.DollarSign size={16}/>, l: "Run payroll" },
                    { i: <I.Calendar size={16}/>, l: "Approve leave", n: 5 },
                    { i: <I.FileText size={16}/>, l: "New report" },
                    { i: <I.Send size={16}/>, l: "Send announcement" },
                  ].map(a => (
                    <button key={a.l} className="btn" style={{ flexDirection: "column", padding: "14px 8px", gap: 8, alignItems: "center", height: 80, position: "relative" }}>
                      <span style={{ color: "var(--primary)" }}>{a.i}</span>
                      <span style={{ fontSize: 11, fontWeight: 500 }}>{a.l}</span>
                      {a.n && <span style={{ position: "absolute", top: 8, right: 8, background: "var(--danger)", color: "white", fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 999 }}>{a.n}</span>}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.DashboardScreens = { ScreenDashboard };
