import { JobGeneralData } from '@/app/types/data.ts';
import { JobItemsExample } from '@/mocks/JobItemsExample.ts';
import { useState } from 'react';
import JobSection from './partials/JobSection.tsx';
import Search from './partials/Search.tsx';

export default function Homepage() {
  const jobs = JobItemsExample;
  const [applyingJob, setApplyingJob] = useState<JobGeneralData | null>(null);

  return (
    <div className='flex-1'>
      <Search />
      <JobSection initialJobs={jobs} setApplyingJob={setApplyingJob} />
    </div>
  );
}
