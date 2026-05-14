import { prisma } from '@/lib/prisma';
import PipelineClient from './PipelineClient';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function PipelinePage({ params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({
    where: { id: params.id }
  });

  if (!job) {
    // If the specific job isn't found (since IDs are generated dynamically by seed),
    // we'll just fetch the first available job for demo purposes.
    const firstJob = await prisma.job.findFirst();
    if (!firstJob) return notFound();
    
    const candidates = await prisma.candidate.findMany({
      where: { jobId: firstJob.id },
      orderBy: { score: 'desc' }
    });
    
    return <PipelineClient job={firstJob} candidates={candidates} />;
  }

  const candidates = await prisma.candidate.findMany({
    where: { jobId: job.id },
    orderBy: { score: 'desc' }
  });

  return <PipelineClient job={job} candidates={candidates} />;
}
