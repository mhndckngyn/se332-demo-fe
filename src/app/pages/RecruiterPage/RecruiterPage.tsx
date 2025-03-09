import JobItem from '@/app/components/JobItem';
import { JobData } from '@/app/types/data';
import { add } from '@/assets';
import { JobItemsExample } from '@/mocks/JobItemsExample';
import { useState } from 'react';
import JobInfoModal from './partials/JobInfoModal';

export default function RecruiterPage() {
  const [jobs, setJobs] = useState(JobItemsExample);
  const [selectedJob, setSelectedJob] = useState<JobData | null>(null);

  const handleFormOpen = (jobData: JobData | null) => {
    setSelectedJob(jobData);
    const form = document.getElementById('job-info-form');
    if (form instanceof HTMLDialogElement) {
      form.showModal();
    }
  };

  return (
    <div className='flex-1 bg-base-200 px-[100px] py-[30px]'>
      <div className='flex items-center gap-[20px]'>
        <h1 className='text-2xl font-semibold'>Việc làm bạn đã đăng tải</h1>
        <button className='btn btn-ghost' onClick={() => handleFormOpen(null)}>
          <img src={add} alt='' className='w-[24px]' />
          Đăng tải việc làm mới
        </button>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 mt-[20px]'>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job}>
            <button className='btn btn-primary'>Đơn ứng tuyển</button>
            <button className='btn btn-ghost' onClick={() => handleFormOpen(job)}>Chỉnh sửa</button>
          </JobItem>
        ))}
      </div>
      <JobInfoModal initialJob={selectedJob}/>
    </div>
  );
}
