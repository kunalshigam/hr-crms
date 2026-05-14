// Shared UI primitives and stand-ins used across screens.

const Avatar = ({ name = "AJ", size = "md", img }) => {
  const initials = name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  const cls = size === "sm" ? "avatar avatar-sm"
    : size === "lg" ? "avatar avatar-lg"
    : size === "xl" ? "avatar avatar-xl" : "avatar";
  // Color by hash
  const colors = [
    'linear-gradient(135deg,#6B21A8,#A855F7)',
    'linear-gradient(135deg,#7E22CE,#C084FC)',
    'linear-gradient(135deg,#5B21B6,#8B5CF6)',
    'linear-gradient(135deg,#9333EA,#D8B4FE)',
    'linear-gradient(135deg,#4C1D95,#7C3AED)',
    'linear-gradient(135deg,#581C87,#A78BFA)',
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return <div className={cls} style={{ background: colors[idx] }}>{initials}</div>;
};

const Pill = ({ children, kind = "" }) => {
  const map = { success: "pill-success", warning: "pill-warning", danger: "pill-danger", info: "pill-info", neutral: "pill-neutral" };
  return <span className={`pill ${map[kind] || ""}`}><span className="dot"/>{children}</span>;
};

const StatusPill = ({ status }) => {
  const map = {
    Active: "success", "On Leave": "warning", Terminated: "danger",
    Pending: "warning", Approved: "success", Rejected: "danger",
    Draft: "neutral", Closed: "neutral", Open: "info",
    Present: "success", Absent: "danger", Late: "warning",
    Hired: "success", Screening: "info", Interview: "warning", Offer: "info", Applied: "neutral",
  };
  return <Pill kind={map[status] || "neutral"}>{status}</Pill>;
};

const Btn = ({ children, kind = "", size = "", onClick, icon, type, full }) => {
  const cls = `btn ${kind === "primary" ? "btn-primary" : kind === "ghost" ? "btn-ghost" : kind === "danger" ? "btn-danger" : ""} ${size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : ""}`;
  return <button type={type} className={cls} onClick={onClick} style={full ? { width: "100%", justifyContent: "center" } : null}>
    {icon}{children}
  </button>;
};

const Field = ({ label, children, hint }) => (
  <div>
    {label && <label className="label">{label}</label>}
    {children}
    {hint && <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>{hint}</div>}
  </div>
);

const Card = ({ children, padding = 18, style }) => (
  <div className="card" style={{ padding, ...style }}>{children}</div>
);

// Donut chart
const Donut = ({ value = 70, size = 140, stroke = 14, label, sub, color = "var(--primary)", track = "var(--accent)" }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  return (
    <div className="donut-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}/>
      </svg>
      <div className="center" style={{ flexDirection: "column" }}>
        <div>{label || `${value}%`}</div>
        {sub && <div style={{ fontSize: 10, color: "var(--text-2)", fontWeight: 500, fontFamily: "var(--f-body)" }}>{sub}</div>}
      </div>
    </div>
  );
};

// Bar chart with x-axis labels
const BarChart = ({ data, height = 160, max }) => {
  const m = max || Math.max(...data.map(d => d.value)) * 1.15;
  return (
    <div>
      <div className="bar-chart" style={{ height }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
            <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "end" }}>
              <div className="bar" style={{ height: `${(d.value / m) * 100}%`, width: "100%" }}>
                <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", fontSize: 10, color: "var(--text-2)", fontWeight: 600, whiteSpace: "nowrap" }}>{d.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        {data.map((d, i) => <div key={i} className="bar-label" style={{ flex: 1 }}>{d.label}</div>)}
      </div>
    </div>
  );
};

// Line chart (sparkline-ish, 240x80)
const LineChart = ({ values, w = 600, h = 200, color = "var(--primary)", fill = "url(#lc-fill)" }) => {
  const max = Math.max(...values), min = Math.min(...values);
  const pad = 12;
  const pts = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);
    return [x, y];
  });
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  const fillPath = `${path} L${pts[pts.length-1][0]},${h-pad} L${pts[0][0]},${h-pad} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="lc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary-light)" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="var(--primary-light)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={fillPath} fill={fill}/>
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      {pts.map((p, i) => i === pts.length - 1 ? <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={color}/> : null)}
    </svg>
  );
};

// Sparkline
const Spark = ({ values, w = 100, h = 28, color = "var(--primary)" }) => {
  const max = Math.max(...values), min = Math.min(...values);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 2) - 1;
    return `${x},${y}`;
  }).join(' ');
  return <svg width={w} height={h}><polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></svg>;
};

// Generic placeholder
const Placeholder = ({ w = "100%", h = 160, label }) => (
  <div className="ph" style={{ width: w, height: h }}>{label}</div>
);

// In-app sidebar (used inside desktop screens)
const AppSidebar = ({ active = "dashboard" }) => {
  const links = [
    { id: "dashboard", icon: <I.Home size={16}/>, label: "Dashboard" },
    { id: "employees", icon: <I.Users size={16}/>, label: "Employees" },
    { id: "recruitment", icon: <I.Briefcase size={16}/>, label: "Recruitment", badge: "12" },
    { id: "attendance", icon: <I.Clock size={16}/>, label: "Attendance" },
    { id: "leave", icon: <I.Calendar size={16}/>, label: "Leave" },
    { id: "payroll", icon: <I.DollarSign size={16}/>, label: "Payroll" },
    { id: "performance", icon: <I.Target size={16}/>, label: "Performance" },
    { id: "training", icon: <I.GraduationCap size={16}/>, label: "Training" },
    { id: "reports", icon: <I.ChartBar size={16}/>, label: "Reports" },
  ];
  const settings = [
    { id: "settings", icon: <I.Settings size={16}/>, label: "Settings" },
    { id: "help", icon: <I.AlertCircle size={16}/>, label: "Help & Support" },
  ];
  return (
    <aside className="sb">
      <div className="sb-brand">
        <div className="logo">P</div>
        <div>
          <strong>PurplePeople</strong>
          <div style={{ fontSize: 10, color: "var(--text-3)", marginTop: 2 }}>Acme Corp · Admin</div>
        </div>
      </div>
      <div className="sb-section">Workspace</div>
      {links.map(l => (
        <div key={l.id} className={`sb-link ${l.id === active ? 'active' : ''}`}>
          <span className="icon">{l.icon}</span>
          {l.label}
          {l.badge && <span className="badge">{l.badge}</span>}
        </div>
      ))}
      <div className="sb-section">Account</div>
      {settings.map(l => (
        <div key={l.id} className={`sb-link ${l.id === active ? 'active' : ''}`}>
          <span className="icon">{l.icon}</span>{l.label}
        </div>
      ))}
      <div style={{ marginTop: "auto", padding: 10, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar name="Maya Chen" size="sm"/>
        <div style={{ flex: 1, fontSize: 12 }}>
          <div style={{ fontWeight: 600 }}>Maya Chen</div>
          <div style={{ color: "var(--text-3)", fontSize: 10 }}>HR Director</div>
        </div>
        <I.LogOut size={14}/>
      </div>
    </aside>
  );
};

// In-app top bar
const AppTopbar = ({ title, subtitle, actions }) => (
  <div className="tb">
    <div>
      <div style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 2 }}>Workspace · {title}</div>
      <div style={{ fontFamily: "var(--f-display)", fontSize: 18, fontWeight: 600 }}>{subtitle || title}</div>
    </div>
    <div className="spacer"/>
    <input className="tb-search" placeholder="Search employees, jobs, documents…"/>
    <button className="btn btn-icon" title="Notifications" style={{ position: "relative" }}>
      <I.Bell size={16}/>
      <span style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, background: "var(--danger)", borderRadius: "50%", border: "2px solid var(--card)" }}/>
    </button>
    <button className="btn btn-icon"><I.Settings size={16}/></button>
    <Avatar name="Maya Chen" size="sm"/>
    {actions}
  </div>
);

// Mobile status bar + bottom nav
const MStatusBar = ({ dark }) => (
  <div className="m-statusbar" style={{ color: dark ? "white" : null }}>
    <span>9:41</span>
    <span className="icons">
      <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M1 7h2v3H1zM5 5h2v5H5zM9 3h2v7H9zM13 1h2v9h-2z" fill="currentColor"/></svg>
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M7 8.5l-3-3a4 4 0 0 1 6 0zm0-3a7 7 0 0 0-5 2L0 5a10 10 0 0 1 14 0L12 7.5a7 7 0 0 0-5-2z" fill="currentColor"/></svg>
      <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2" stroke="currentColor"/><rect x="2" y="2" width="16" height="7" rx="1" fill="currentColor"/><rect x="21" y="3.5" width="2" height="4" fill="currentColor"/></svg>
    </span>
  </div>
);

const MBottomBar = ({ active = "home" }) => {
  const items = [
    { id: "home", label: "Home", icon: <I.Home/> },
    { id: "attend", label: "Attendance", icon: <I.Clock/> },
    { id: "leave", label: "Leave", icon: <I.Calendar/> },
    { id: "pay", label: "Payslips", icon: <I.DollarSign/> },
    { id: "me", label: "Profile", icon: <I.User/> },
  ];
  return (
    <div className="m-bottombar">
      {items.map(i => (
        <div key={i.id} className={`item ${i.id === active ? "active" : ""}`}>
          <span className="icon">{i.icon}</span>
          {i.label}
        </div>
      ))}
    </div>
  );
};

Object.assign(window, {
  Avatar, Pill, StatusPill, Btn, Field, Card,
  Donut, BarChart, LineChart, Spark, Placeholder,
  AppSidebar, AppTopbar, MStatusBar, MBottomBar
});
