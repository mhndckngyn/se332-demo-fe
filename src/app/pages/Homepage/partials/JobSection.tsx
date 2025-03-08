import { useState } from 'react';
import { JobSectionProps } from '../types';
import JobItem from '@/app/components/JobItem';
import { JobData } from '@/app/types/data';

export default function JobSection({ initialJobs, setApplyingJob }: JobSectionProps) {
  const [jobs, setJobs] = useState(initialJobs);
  const handleApply = (job: JobData) => {
    return () => {
      setApplyingJob(null); // Reset first
      setTimeout(() => setApplyingJob(job), 0); // Set the job in the next tick
    };
  };

  return (
    <div className='px-[100px] py-[40px] gap-8 bg-base-200'>
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='text-3xl font-semibold'>Việc làm phù hợp</h2>
          <p className='text-neutral-600 text-sm mt-1.5'>
            {jobs.length} kết quả
          </p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4'>
          {jobs.map((job) => (
            <JobItem key={job.id} job={job}>
              <button
                className='btn btn-soft btn-primary'
                onClick={handleApply(job)}>
                Ứng tuyển
              </button>
            </JobItem>
          ))}
        </div>
      </div>
    </div>
  );
}
