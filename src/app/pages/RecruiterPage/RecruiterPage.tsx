import JobItem from '@/app/components/JobItem';
import { JobDetailData } from '@/app/types/data';
import { add } from '@/assets';
import axiosInstance from '@/modules/axiosInstance';
import { useEffect, useState } from 'react';
import JobApplicationModal from './partials/JobApplicationModal';
import JobInfoModal from './partials/JobInfoModal';
import useAuth from '@/hooks/useAuth';

export default function RecruiterPage() {
  const [jobs, setJobs] = useState<JobDetailData[]>([]);
  const [editingJob, setEditingJob] = useState<JobDetailData | null>(null);
  const [viewingJob, setViewingJob] = useState<JobDetailData | null>(null);
  const user = useAuth()
  const handleOpenEditForm = (jobData: JobDetailData | null) => {
    setEditingJob(jobData);
    const modal = document.getElementById('job-edit-form');
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const handleOpenApplicationModal = (jobData: JobDetailData | null) => {
    setViewingJob(jobData);
    const modal = document.getElementById('job-view-modal');
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

   useEffect(() => {
    const fetchJobsByRecruiter = async () => {
      const response = await axiosInstance.get(`/job/GetAllJobs?IdRecruiter=${user?.idnguoidung}`);
      if (response.data.length) {
        setJobs(response.data);

      }
    };

    fetchJobsByRecruiter();
  }, [user?.idnguoidung]);

  return (
    <div className='flex-1 bg-base-200 px-[100px] py-[30px] min-h-[80vh]'>
      <div className='flex items-center gap-[20px]'>
        <h1 className='text-2xl font-semibold'>Việc làm bạn đã đăng tải</h1>
        <button
          className='btn btn-ghost'
          onClick={() => handleOpenEditForm(null)}>
          <img src={add} alt='' className='w-[24px]' />
          Đăng tải việc làm mới
        </button>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 mt-[20px]'>
        {jobs.map((job) => (
          <JobItem key={job.idvieclam} job={job}>
            <button
              className='btn btn-primary'
              onClick={() => handleOpenApplicationModal(job)}>
              Đơn ứng tuyển
            </button>
            <button
              className='btn btn-ghost'
              onClick={() => handleOpenEditForm(job)}>
              Chỉnh sửa
            </button>
          </JobItem>
        ))}
      </div>
      <JobInfoModal initialJob={editingJob} />
      <JobApplicationModal initialJob={viewingJob} />
    </div>
  );
}
