// Realistic dummy data — single source of truth across screens.

const DATA = {
  company: { name: "Acme Corp", domain: "acme.co", employees: 248 },

  employees: [
    { id: 1, name: "Maya Chen", role: "HR Director", dept: "People Ops", location: "San Francisco", status: "Active", email: "maya.chen@acme.co", phone: "+1 (415) 555-0123", joined: "Mar 2019", manager: null, salary: 165000 },
    { id: 2, name: "Jordan Reyes", role: "Senior Recruiter", dept: "People Ops", location: "Remote", status: "Active", email: "jordan@acme.co", phone: "+1 (415) 555-0142", joined: "Jul 2021", manager: 1, salary: 118000 },
    { id: 3, name: "Priya Iyer", role: "Engineering Manager", dept: "Engineering", location: "Bengaluru", status: "Active", email: "priya@acme.co", phone: "+91 98 4500 1122", joined: "Feb 2020", manager: null, salary: 195000 },
    { id: 4, name: "Marcus Adler", role: "Staff Engineer", dept: "Engineering", location: "Berlin", status: "On Leave", email: "marcus@acme.co", phone: "+49 30 5550 1199", joined: "Sep 2018", manager: 3, salary: 178000 },
    { id: 5, name: "Sofia Romero", role: "Product Designer", dept: "Design", location: "Mexico City", status: "Active", email: "sofia@acme.co", phone: "+52 55 5550 7711", joined: "Jan 2022", manager: null, salary: 132000 },
    { id: 6, name: "Daniel Kovač", role: "Data Analyst", dept: "Analytics", location: "Prague", status: "Active", email: "daniel@acme.co", phone: "+420 222 555 011", joined: "Apr 2023", manager: 3, salary: 96000 },
    { id: 7, name: "Aiko Tanaka", role: "Brand Lead", dept: "Marketing", location: "Tokyo", status: "Active", email: "aiko@acme.co", phone: "+81 3 5550 1144", joined: "Aug 2021", manager: null, salary: 142000 },
    { id: 8, name: "Henrik Olsen", role: "Account Executive", dept: "Sales", location: "Copenhagen", status: "Active", email: "henrik@acme.co", phone: "+45 33 555 002", joined: "May 2022", manager: null, salary: 124000 },
    { id: 9, name: "Lina Park", role: "Frontend Engineer", dept: "Engineering", location: "Seoul", status: "Active", email: "lina@acme.co", phone: "+82 2 5550 1188", joined: "Oct 2022", manager: 3, salary: 128000 },
    { id: 10, name: "Omar Haddad", role: "DevOps", dept: "Engineering", location: "Cairo", status: "Active", email: "omar@acme.co", phone: "+20 2 5550 1133", joined: "Jun 2023", manager: 3, salary: 112000 },
    { id: 11, name: "Yuki Sato", role: "Content Strategist", dept: "Marketing", location: "Remote", status: "Active", email: "yuki@acme.co", phone: "+81 3 5550 1199", joined: "Feb 2023", manager: 7, salary: 88000 },
    { id: 12, name: "Reza Karimi", role: "Junior Developer", dept: "Engineering", location: "Tehran", status: "Terminated", email: "reza@acme.co", phone: "—", joined: "Nov 2022", manager: 3, salary: 0 },
  ],

  candidates: [
    { id: 1, name: "Anaïs Dubois", role: "Senior Designer", stage: "Applied", days: 1, score: 4.5, email: "anais.d@mail.com" },
    { id: 2, name: "Theo Walker", role: "Frontend Engineer", stage: "Applied", days: 2, score: 4.2 },
    { id: 3, name: "Sasha Petrova", role: "Data Engineer", stage: "Applied", days: 3, score: 3.9 },
    { id: 4, name: "Ravi Mehta", role: "Senior Designer", stage: "Screening", days: 5, score: 4.6 },
    { id: 5, name: "Naomi Brooks", role: "Product Manager", stage: "Screening", days: 4, score: 4.1 },
    { id: 6, name: "Felix Hartmann", role: "Frontend Engineer", stage: "Interview", days: 8, score: 4.8 },
    { id: 7, name: "Lucia Romano", role: "Senior Designer", stage: "Interview", days: 6, score: 4.4 },
    { id: 8, name: "Kenji Mori", role: "Backend Engineer", stage: "Interview", days: 10, score: 4.0 },
    { id: 9, name: "Fatima Al-Said", role: "Product Manager", stage: "Offer", days: 14, score: 4.9 },
    { id: 10, name: "Jonas Berg", role: "Frontend Engineer", stage: "Offer", days: 12, score: 4.7 },
    { id: 11, name: "Mei Lin", role: "Senior Designer", stage: "Hired", days: 22, score: 4.8 },
  ],

  jobs: [
    { id: 1, title: "Senior Product Designer", dept: "Design", location: "Remote", type: "Full-time", applicants: 47, status: "Active", posted: "5 days ago", salary: "$140k–$180k" },
    { id: 2, title: "Senior Frontend Engineer", dept: "Engineering", location: "San Francisco · Hybrid", type: "Full-time", applicants: 89, status: "Active", posted: "2 weeks ago", salary: "$160k–$210k" },
    { id: 3, title: "Product Manager, Growth", dept: "Product", location: "Remote", type: "Full-time", applicants: 34, status: "Active", posted: "1 week ago", salary: "$155k–$195k" },
    { id: 4, title: "Backend Engineer (Go)", dept: "Engineering", location: "Berlin · On-site", type: "Full-time", applicants: 22, status: "Active", posted: "3 days ago", salary: "€90k–€130k" },
    { id: 5, title: "Customer Support Lead", dept: "Customer Success", location: "Remote", type: "Full-time", applicants: 18, status: "Draft", posted: "—", salary: "$90k–$115k" },
    { id: 6, title: "Marketing Designer", dept: "Marketing", location: "Tokyo · Hybrid", type: "Contract", applicants: 12, status: "Closed", posted: "1 month ago", salary: "—" },
  ],

  activity: [
    { who: "Jordan Reyes", what: "moved", target: "Felix Hartmann", to: "Interview stage", time: "12m ago", icon: "user" },
    { who: "Priya Iyer", what: "approved", target: "Marcus Adler's", to: "leave request (5 days)", time: "1h ago", icon: "check" },
    { who: "Maya Chen", what: "published", target: "Senior PM", to: "job posting", time: "2h ago", icon: "briefcase" },
    { who: "Sofia Romero", what: "completed", target: "Q3 self-review", time: "3h ago", icon: "target" },
    { who: "System", what: "ran", target: "April payroll", to: "(248 employees · $4.2M)", time: "Yesterday", icon: "dollar" },
    { who: "Aiko Tanaka", what: "submitted", target: "expense report", to: "($1,240)", time: "Yesterday", icon: "file" },
  ],

  notifications: [
    { group: "Today", items: [
      { title: "5 leave requests pending", body: "Marcus Adler, Sofia Romero, +3 others", time: "10m", unread: true, kind: "leave" },
      { title: "Felix Hartmann moved to Interview", body: "Senior Frontend · Stage 2", time: "1h", unread: true, kind: "candidate" },
      { title: "April payroll ready to run", body: "248 employees · $4,212,490 total", time: "2h", unread: true, kind: "payroll" },
    ]},
    { group: "Earlier", items: [
      { title: "Q3 review cycle starts Monday", body: "Reminder · 12 reviews assigned to you", time: "Yesterday", unread: false, kind: "perf" },
      { title: "New course published", body: "Inclusive Hiring · 1h 20m", time: "2 days ago", unread: false, kind: "training" },
      { title: "Sofia completed her self-review", body: "Q3 cycle · 4.6 average", time: "3 days ago", unread: false, kind: "perf" },
    ]},
  ],

  goals: [
    { id: 1, title: "Reduce time-to-hire to 28 days", owner: "Maya Chen", q: "Q3", progress: 72, krs: 4 },
    { id: 2, title: "Launch redesigned onboarding", owner: "Sofia Romero", q: "Q3", progress: 48, krs: 5 },
    { id: 3, title: "Achieve 90% review completion", owner: "People Ops", q: "Q3", progress: 86, krs: 3 },
    { id: 4, title: "Expand engineering team by 12", owner: "Priya Iyer", q: "Q3", progress: 58, krs: 3 },
  ],

  courses: [
    { id: 1, title: "Inclusive Hiring Practices", duration: "1h 20m", enrolled: 142, status: "Active", category: "Hiring" },
    { id: 2, title: "Manager Essentials: First 90 Days", duration: "3h 45m", enrolled: 38, status: "Active", category: "Leadership" },
    { id: 3, title: "Compensation Bands & Equity", duration: "55m", enrolled: 86, status: "Active", category: "Compensation" },
    { id: 4, title: "Performance Conversations", duration: "2h 10m", enrolled: 64, status: "Draft", category: "Leadership" },
    { id: 5, title: "Workplace Privacy (GDPR)", duration: "40m", enrolled: 248, status: "Active", category: "Compliance" },
    { id: 6, title: "Effective 1:1s", duration: "30m", enrolled: 112, status: "Active", category: "Leadership" },
  ],
};

window.DATA = DATA;
