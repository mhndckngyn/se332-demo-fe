import { useState } from 'react';
import { JobSectionProps } from '../types';
import Filter from './Filter';
import JobItem from './JobItem';

export default function JobSection({ initialJobs }: JobSectionProps) {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div className='px-[100px] py-[40px] grid grid-cols-[1fr_4fr] gap-8 bg-base-200'>
      <div className='flex flex-col gap-4'>
        <Filter title={'Loại hình'} items={['Full time', 'Part time']} />
        <Filter
          title={'Ngành nghề'}
          items={[
            'Ngân hàng',
            'IT - Phần mềm',
            'Xây dựng',
            'Logistics - Vận tải',
            'Viễn thông',
            'Bảo hiểm',
            'Nhà hàng / Khách sạn',
          ]}
        />
        <Filter
          title={'Ngành nghề'}
          items={[
            'Ngân hàng',
            'IT - Phần mềm',
            'Xây dựng',
            'Logistics - Vận tải',
            'Viễn thông',
            'Bảo hiểm',
            'Nhà hàng / Khách sạn',
          ]}
        />
      </div>
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='text-3xl font-semibold'>Việc làm phù hợp</h2>
          <p className='text-neutral-600 text-sm mt-1.5'>
            16 trong tổng 48 kết quả
          </p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-4'>
          {jobs.map((job) => (
            <JobItem key={job.id} job={job} />
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
