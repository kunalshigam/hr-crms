import { prisma } from '@/lib/prisma';
import LeaveClient from './LeaveClient';

export const dynamic = 'force-dynamic';

export default async function LeavePage() {
  const requests = await prisma.leave.findMany({
    include: {
      employee: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <LeaveClient requests={requests} />;
}
