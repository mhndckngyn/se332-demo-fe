import { JobData } from '@/app/types/data.ts';
import { JobItems } from '@/mocks/JobItems.ts';
import { useEffect, useState } from 'react';
import JobSection from './partials/JobSection.tsx';
import Search from './partials/Search.tsx';
import ApplyJobModal from './partials/ApplyJobModal.tsx';

export default function Homepage() {
  const jobs = JobItems;
  const [applyingJob, setApplyingJob] = useState<JobData | null>(null);

  useEffect(() => {
    const modal = document.getElementById('job-apply-form');
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }, [applyingJob])

  return (
    <div className='flex-1'>
      <Search />
      <JobSection initialJobs={jobs} setApplyingJob={setApplyingJob} />
      <ApplyJobModal />
    </div>
  );
}
