import { prisma } from '@/lib/prisma';
import PerformanceClient from './PerformanceClient';

export const dynamic = 'force-dynamic';

export default async function PerformancePage() {
  const reviews = await prisma.review.findMany({
    include: {
      reviewee: {
        include: {
          department: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <PerformanceClient reviews={reviews} />;
}
