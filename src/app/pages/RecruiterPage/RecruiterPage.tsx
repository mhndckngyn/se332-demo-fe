import JobItem from '@/app/components/JobItem';
import { JobDetailData, JobGeneralData } from '@/app/types/data';
import { add } from '@/assets';
import { useState } from 'react';
import JobInfoModal from './partials/JobInfoModal';
import { JobDetailsListExample } from '@/mocks/JobDetailsExample';

export default function RecruiterPage() {
  const [jobs, setJobs] = useState(JobDetailsListExample);
  const [selectedJob, setSelectedJob] = useState<JobDetailData | null>(null);

  const handleFormOpen = (jobData: JobDetailData | null) => {
    setSelectedJob(jobData);
    const modal = document.getElementById('job-info-form');
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  return (
    <div className='flex-1 bg-base-200 px-[100px] py-[30px] min-h-[80vh]'>
      <div className='flex items-center gap-[20px]'>
        <h1 className='text-2xl font-semibold'>Việc làm bạn đã đăng tải</h1>
        <button className='btn btn-ghost' onClick={() => handleFormOpen(null)}>
          <img src={add} alt='' className='w-[24px]' />
          Đăng tải việc làm mới
        </button>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 mt-[20px]'>
        {jobs.map((job) => (
          <JobItem key={job.idvieclam} job={job}>
            <button className='btn btn-primary'>Đơn ứng tuyển</button>
            <button className='btn btn-ghost' onClick={() => handleFormOpen(job)}>Chỉnh sửa</button>
          </JobItem>
        ))}
      </div>
      <JobInfoModal initialJob={selectedJob}/>
    </div>
  );
}
