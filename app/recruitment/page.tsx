import { prisma } from '@/lib/prisma';
import RecruitmentClient from './RecruitmentClient';

export const dynamic = 'force-dynamic';

export default async function RecruitmentPage() {
  const jobs = await prisma.job.findMany({
    include: {
      department: true,
      _count: {
        select: { candidates: true }
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <RecruitmentClient jobs={jobs} />;
}
