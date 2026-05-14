const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create Company
  const company = await prisma.company.create({
    data: {
      name: 'Acme Corp',
      domain: 'acme.co',
    },
  });

  // Create Departments
  const depts = ['People Ops', 'Engineering', 'Design', 'Analytics', 'Marketing', 'Sales', 'Product', 'Customer Success'];
  const createdDepts: Record<string, any> = {};
  for (const d of depts) {
    createdDepts[d] = await prisma.department.create({
      data: { name: d, companyId: company.id },
    });
  }

  // Create Employees Data
  const empData = [
    { name: "Maya Chen", role: "HR Director", dept: "People Ops", location: "San Francisco", status: "ACTIVE", email: "maya.chen@acme.co", phone: "+1 (415) 555-0123", joined: new Date("2019-03-01"), salary: 165000 },
    { name: "Jordan Reyes", role: "Senior Recruiter", dept: "People Ops", location: "Remote", status: "ACTIVE", email: "jordan@acme.co", phone: "+1 (415) 555-0142", joined: new Date("2021-07-01"), salary: 118000 },
    { name: "Priya Iyer", role: "Engineering Manager", dept: "Engineering", location: "Bengaluru", status: "ACTIVE", email: "priya@acme.co", phone: "+91 98 4500 1122", joined: new Date("2020-02-01"), salary: 195000 },
    { name: "Marcus Adler", role: "Staff Engineer", dept: "Engineering", location: "Berlin", status: "ON_LEAVE", email: "marcus@acme.co", phone: "+49 30 5550 1199", joined: new Date("2018-09-01"), salary: 178000 },
    { name: "Sofia Romero", role: "Product Designer", dept: "Design", location: "Mexico City", status: "ACTIVE", email: "sofia@acme.co", phone: "+52 55 5550 7711", joined: new Date("2022-01-01"), salary: 132000 },
    { name: "Daniel Kovač", role: "Data Analyst", dept: "Analytics", location: "Prague", status: "ACTIVE", email: "daniel@acme.co", phone: "+420 222 555 011", joined: new Date("2023-04-01"), salary: 96000 },
    { name: "Aiko Tanaka", role: "Brand Lead", dept: "Marketing", location: "Tokyo", status: "ACTIVE", email: "aiko@acme.co", phone: "+81 3 5550 1144", joined: new Date("2021-08-01"), salary: 142000 },
    { name: "Henrik Olsen", role: "Account Executive", dept: "Sales", location: "Copenhagen", status: "ACTIVE", email: "henrik@acme.co", phone: "+45 33 555 002", joined: new Date("2022-05-01"), salary: 124000 },
    { name: "Lina Park", role: "Frontend Engineer", dept: "Engineering", location: "Seoul", status: "ACTIVE", email: "lina@acme.co", phone: "+82 2 5550 1188", joined: new Date("2022-10-01"), salary: 128000 },
    { name: "Omar Haddad", role: "DevOps", dept: "Engineering", location: "Cairo", status: "ACTIVE", email: "omar@acme.co", phone: "+20 2 5550 1133", joined: new Date("2023-06-01"), salary: 112000 },
    { name: "Yuki Sato", role: "Content Strategist", dept: "Marketing", location: "Remote", status: "ACTIVE", email: "yuki@acme.co", phone: "+81 3 5550 1199", joined: new Date("2023-02-01"), salary: 88000 },
    { name: "Reza Karimi", role: "Junior Developer", dept: "Engineering", location: "Tehran", status: "TERMINATED", email: "reza@acme.co", phone: "-", joined: new Date("2022-11-01"), salary: 0 },
  ];

  const createdEmps: Record<string, any> = {};
  for (const emp of empData) {
    const names = emp.name.split(' ');
    const e = await prisma.employee.create({
      data: {
        companyId: company.id,
        firstName: names[0],
        lastName: names.slice(1).join(' ') || '',
        email: emp.email,
        phone: emp.phone,
        status: emp.status,
        joinedAt: emp.joined,
        deptId: createdDepts[emp.dept]?.id,
        designation: emp.role,
        location: emp.location,
        salary: emp.salary,
      }
    });
    createdEmps[emp.name] = e;
  }

  // Set managers based on relations
  await prisma.employee.update({ where: { id: createdEmps['Jordan Reyes'].id }, data: { managerId: createdEmps['Maya Chen'].id } });
  await prisma.employee.update({ where: { id: createdEmps['Marcus Adler'].id }, data: { managerId: createdEmps['Priya Iyer'].id } });
  await prisma.employee.update({ where: { id: createdEmps['Daniel Kovač'].id }, data: { managerId: createdEmps['Priya Iyer'].id } });
  await prisma.employee.update({ where: { id: createdEmps['Lina Park'].id }, data: { managerId: createdEmps['Priya Iyer'].id } });
  await prisma.employee.update({ where: { id: createdEmps['Omar Haddad'].id }, data: { managerId: createdEmps['Priya Iyer'].id } });
  await prisma.employee.update({ where: { id: createdEmps['Yuki Sato'].id }, data: { managerId: createdEmps['Aiko Tanaka'].id } });

  // Create Jobs
  const jobsData = [
    { title: "Senior Product Designer", dept: "Design", location: "Remote", type: "Full-time", status: "ACTIVE", salaryRange: "$140k–$180k" },
    { title: "Senior Frontend Engineer", dept: "Engineering", location: "San Francisco · Hybrid", type: "Full-time", status: "ACTIVE", salaryRange: "$160k–$210k" },
    { title: "Product Manager, Growth", dept: "Product", location: "Remote", type: "Full-time", status: "ACTIVE", salaryRange: "$155k–$195k" },
    { title: "Backend Engineer (Go)", dept: "Engineering", location: "Berlin · On-site", type: "Full-time", status: "ACTIVE", salaryRange: "€90k–€130k" },
    { title: "Customer Support Lead", dept: "Customer Success", location: "Remote", type: "Full-time", status: "DRAFT", salaryRange: "$90k–$115k" },
    { title: "Marketing Designer", dept: "Marketing", location: "Tokyo · Hybrid", type: "Contract", status: "CLOSED", salaryRange: "—" },
  ];

  for (const j of jobsData) {
    await prisma.job.create({
      data: {
        companyId: company.id,
        title: j.title,
        deptId: createdDepts[j.dept]?.id,
        location: j.location,
        type: j.type,
        status: j.status,
        salaryRange: j.salaryRange,
      }
    });
  }

  // Goals
  await prisma.goal.createMany({
    data: [
      { empId: createdEmps['Maya Chen'].id, title: "Reduce time-to-hire to 28 days", quarter: "Q3", progress: 72, krs: 4 },
      { empId: createdEmps['Sofia Romero'].id, title: "Launch redesigned onboarding", quarter: "Q3", progress: 48, krs: 5 },
      { empId: createdEmps['Priya Iyer'].id, title: "Expand engineering team by 12", quarter: "Q3", progress: 58, krs: 3 },
    ]
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
