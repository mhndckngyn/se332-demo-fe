import { JobApplicationData } from '@/app/types/data';
import { JobInfoProps } from '@/app/types/props';
import axiosInstance from '@/modules/axiosInstance';
import convertDateToISO from '@/modules/convertDateToISO';
import { useEffect, useState } from 'react';
import { FaLinkedinIn, FaRegStar } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { JobApplicationItemProp } from '../props';
import { apiEndpoint } from '@/settings/backend';

export default function JobApplicationModal({ initialJob: job }: JobInfoProps) {
  const [applications, setApplications] = useState<JobApplicationData[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await axiosInstance.get(
        `/job-application/GetAllJobApplications?IdJob=${job?.idvieclam}`
      );
      if (response.status === 200) {
        setApplications(response.data);
      }
    };

    fetchApplications();
  }, [job]);

  return (
    <dialog id='job-view-modal' className='modal'>
      <div className='modal-box max-h-[80vh] lg:min-w-[800px]'>
        <div>
          <p className='font-semibold mb-1'>{job?.tenvieclam}</p>
          <p className='text-sm text-neutral-600'>
            {job?.tencongty}, {job?.diachi}
          </p>
          <p className='text-sm text-neutral-600'>
            {`Ứng tuyển trước: ${convertDateToISO(job?.ungtuyentruoc)}`}
          </p>
          <p className='text-sm text-neutral-600'>
            {job?.luongthapnhat &&
              `Lương tối thiểu: ${job?.luongthapnhat} triệu VNĐ`}
          </p>
          <p className='text-sm text-neutral-600'>
            {job?.luongcaonhat &&
              `Lương tối đa: ${job?.luongcaonhat} triệu VNĐ`}
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
        <div className="tooltip" data-tip="Tải về CV ứng viên">
          <a
            className='btn btn-circle'
            href={`${apiEndpoint}${application.cvpath}`}
            target='_blank'>
            <HiOutlineDocumentDownload size={18} />
          </a>
        </div>
        {/* <div className='tooltip' data-tip="Trang cá nhân LinkedIn">
          <a
            className='btn btn-circle'
            href={application.linkedin}
            target='_blank'
            rel='noreferrer noopener'>
            <FaLinkedinIn />
          </a>
        </div> */}
        <div className="tooltip" data-tip="Gắn dấu sao">
          <button className='btn btn-circle'>
            <FaRegStar />
          </button>
        </div>
      </div>
    </div>
  );
}
