import { prisma } from '@/lib/prisma';
import AttendanceClient from './AttendanceClient';

export const dynamic = 'force-dynamic';

export default async function AttendancePage() {
  const records = await prisma.attendance.findMany({
    include: {
      employee: true,
    },
    orderBy: {
      clockIn: 'desc',
    },
    take: 50,
  });

  return <AttendanceClient records={records} />;
}
