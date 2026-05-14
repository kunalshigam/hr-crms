import { prisma } from '@/lib/prisma';
import PayrollClient from './PayrollClient';

export const dynamic = 'force-dynamic';

export default async function PayrollPage() {
  const records = await prisma.payroll.findMany({
    include: {
      employee: {
        include: {
          department: true
        }
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <PayrollClient records={records} />;
}
