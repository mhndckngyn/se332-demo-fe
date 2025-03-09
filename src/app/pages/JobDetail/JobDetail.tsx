import JobDetailsExample from '@/mocks/JobDetailsExample';
import { useState } from 'react';
import JobApplicationForm from './partials/JobApplicationForm';
const JobDetail = () => {
  const jobDetail = JobDetailsExample;
  const [openForm, setOpenForm] = useState<boolean>();

  const handleApply = () => {
    setOpenForm((prevState) => !prevState);
  };

  return (
    <div className='flex-1 min-h-[80vh]'>
      {openForm && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='h-screen w-screen bg-black opacity-50 fixed top-0 left-0'></div>
          <div className='bg-white rounded-lg shadow-lg z-10'>
            <JobApplicationForm setOpenForm={setOpenForm} />
          </div>
        </div>
      )}
      <div className='bg-[#F8F8FD] px-[100px] py-[40px] gap-[20px] grid place-items-center'>
        <div className='flex bg-base-100 p-[30px] rounded-xl shadow-sm'>
          <div className='bg-blue-500 text-white text-xl font-bold p-3 rounded-lg h-max mt-1'>
            S
          </div>
          <div className='pl-5 flex-1'>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <div>
                  <h1 className='text-2xl font-bold'>{jobDetail.name}</h1>
                  <p className='text-gray-500 mt-1 mb-3'>
                    {jobDetail.company} ({jobDetail.location})
                  </p>
                </div>
                <button className='btn btn-primary' onClick={handleApply}>Ứng tuyển</button>
              </div>
              <p className='prose'>{jobDetail.description}</p>
              <div></div>
            </div>
            <div className='divider'></div>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>Ngày đăng 🕰</p>
                <p className='text-neutral-500'>1/1/2025</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>Ứng tuyển trước ⌛</p>
                <p className='text-neutral-500'>8/1/2025</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>Mức lương 💸</p>
                <p className='text-neutral-500'>
                  {jobDetail.minSalary && jobDetail.maxSalary
                    ? `${jobDetail.minSalary} - ${jobDetail.maxSalary} triệu`
                    : jobDetail.minSalary
                    ? `Từ ${jobDetail.minSalary} triệu`
                    : jobDetail.maxSalary
                    ? `Tới ${jobDetail.maxSalary} triệu`
                    : `Lương thỏa thuận`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-[100px] py-[40px] flex flex-col items-center gap-[20px]'>
        <div className='prose'>
          <h2>🛠️ Trách nhiệm công việc</h2>
          <ul>
            {jobDetail.responsibilities.map((r, index) => (
              <li key={index}>{r}</li>
            ))}
          </ul>
        </div>
        <div className='prose'>
          <h2>👀 Chúng tôi đang tìm...</h2>
          <ul>
            {jobDetail.whoAreYou.map((w, index) => (
              <li key={index}>{w}</li>
            ))}
          </ul>
        </div>
        <div className='prose'>
          <h2>💰 Đãi ngộ và phúc lợi</h2>
          <ul>
            {jobDetail.benefits.map((b, index) => (
              <li key={index}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
