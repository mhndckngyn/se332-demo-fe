import { JobApplicationData } from '@/app/types/data';
import { JobInfoProps } from '@/app/types/props';
import axiosInstance from '@/modules/axiosInstance';
import { useEffect, useState } from 'react';
import { JobApplicationItemProp } from '../props';
import { JobApplicationListExample } from '@/mocks/JobApplicationsExample';
import { FaFile, FaLinkedinIn, FaRegStar } from 'react-icons/fa';

export default function JobApplicationModal({ initialJob: job }: JobInfoProps) {
  const [applications, setApplications] = useState<JobApplicationData[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      // const response = await axiosInstance.get(`/job-application/GetAllJobApplications/${job?.idvieclam}`);
      // if (response.status === 200) {
      //   setApplications(response.data);
      // }
      setApplications(JobApplicationListExample);
    };

    fetchApplications();
  });

  return (
    <dialog id='job-view-modal' className='modal'>
      <div className='modal-box max-h-[80vh] lg:min-w-[800px]'>
        <div>
          <p className='font-semibold mb-1'>{job?.tenvieclam}</p>
          <p className='text-sm text-neutral-600'>
            {job?.tencongty}, {job?.diachi}
          </p>
          <p className='text-sm text-neutral-600'>
            {`Ứng tuyển trước: ${job?.ungtuyentruoc}`}
          </p>
          <p className='text-sm text-neutral-600'>
            {job?.luongthapnhat && `Lương tối thiểu: ${job?.luongthapnhat}`}
          </p>
          <p className='text-sm text-neutral-600'>
            {job?.luongcaonhat && `Lương tối đa: ${job?.luongcaonhat}`}
          </p>
        </div>
        <h3 className='font-bold text-md mt-[16px] mb-[10px]'>
          Danh sách đơn ứng tuyển
        </h3>
        <div className='flex flex-col gap-2'>
          {applications.map((a) => (
            <JobApplicationItem key={a.iddonungtuyen} application={a} />
          ))}
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}

function JobApplicationItem({ application }: JobApplicationItemProp) {
  return (
    <div className='rounded-box shadow p-[16px] flex justify-between'>
      <div>
        <p className='textarea-md'>{application.tenungvien}</p>
        <p className='text-sm text-neutral-600'>{application.sodienthoai}</p>
        <p className='text-sm text-neutral-600'>{application.email}</p>
        <p className=''></p>
      </div>
      <div className='flex gap-2'>
        <button className='btn btn-circle'>
          <FaFile />
        </button>
        <a
          className='btn btn-circle'
          href={application.linkedin}
          target='_blank'
          rel='noreferrer noopener'>
          <FaLinkedinIn />
        </a>
        <button className='btn btn-circle'>
          <FaRegStar />
        </button>
      </div>
    </div>
  );
}
