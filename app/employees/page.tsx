import { prisma } from '@/lib/prisma';
import EmployeeDirectory from './EmployeeDirectory';

export const dynamic = 'force-dynamic';

export default async function EmployeesPage() {
  const employees = await prisma.employee.findMany({
    include: {
      department: true,
    },
    orderBy: {
      firstName: 'asc',
    },
  });

  return <EmployeeDirectory initialEmployees={employees} />;
}
