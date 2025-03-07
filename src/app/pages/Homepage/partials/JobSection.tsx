import { useState } from 'react';
import { JobSectionProps } from '../types';
import JobItem from '@/app/components/JobItem';

export default function JobSection({ initialJobs }: JobSectionProps) {
  const [jobs, setJobs] = useState(initialJobs);

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
              <button className='btn btn-soft btn-primary'>
                Xem chi tiết
              </button>
            </JobItem>
          ))}
        </div>
        <div className='join self-center'>
          <button className='join-item btn'>«</button>
          <button className='join-item btn'>1</button>
          <button className='join-item btn'>2</button>
          <button className='join-item btn btn-disabled'>...</button>
          <button className='join-item btn'>99</button>
          <button className='join-item btn'>100</button>
          <button className='join-item btn'>»</button>
        </div>
      </div>
    </div>
  );
}
