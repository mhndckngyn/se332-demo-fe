import { useState } from 'react';
import { FilterProps, JobSectionProps } from '../types';
import JobItem from '@/app/components/JobItem';
import { JobGeneralData } from '@/app/types/data';

export default function JobSection({
  initialJobs,
  setApplyingJob,
}: JobSectionProps) {
  const [jobs, setJobs] = useState(initialJobs);

  const handleApply = (job: JobGeneralData) => {
    return () => {
      setApplyingJob(null); // Reset first
      setTimeout(() => setApplyingJob(job), 0); // Set the job in the next tick

      const modal = document.getElementById('job-apply-form');
      if (modal instanceof HTMLDialogElement) {
        modal.showModal();
      }
    };
  };

  return (
    <div className='px-[100px] py-[40px] gap-8 bg-[#F8F8FD] grid grid-cols-[1fr_4fr]'>
      <div className='flex flex-col gap-4'>
        <Filter
          title={'Mức lương'}
          items={[
            'Từ 5 - 10 triệu',
            'Từ 10 - 15 triệu',
            'Từ 15 - 25 triệu',
            'Từ 25 - 40 triệu',
            '40 triệu trở lên',
          ]}
        />
      </div>
      <div className='flex flex-col gap-6'>
        <div>
          <h2 className='text-3xl font-semibold'>Việc làm phù hợp</h2>
          <p className='text-neutral-600 text-sm mt-1.5'>
            {jobs.length} kết quả
          </p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4'>
          {jobs.map((job) => (
            <JobItem key={job.id} job={job}>
              <a
                className='btn btn-soft btn-primary'
                onClick={handleApply(job)}
                href={`/jobs/${job.id}`}>
                Xem chi tiết
              </a>
            </JobItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function Filter({ title, items }: FilterProps) {
  return (
    <div className='border border-gray-300 collapse collapse-arrow'>
      <input type='checkbox' defaultChecked />
      <div className='collapse-title font-semibold'>{title}</div>
      <div className='collapse-content '>
        {items.map((item, index) => (
          <div key={index} className='form-control'>
            <label className='label cursor-pointer gap-2.5'>
              <input
                type='checkbox'
                defaultChecked
                className='checkbox checkbox-primary'
              />
              <span>{item}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
