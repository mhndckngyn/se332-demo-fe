import { JobItemProps } from '../types';

export default function JobItem({ job }: JobItemProps) {
  return (
    <div className='flex p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 bg-base-100'>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex gap-3'>
          <a
            className='border border-gray-300 w-[84px] h-[84px] grid place-items-center rounded'
            href={job.url}>
            <img
              src={job.companyImageUrl}
              alt={'Logo ' + job.company}
              className='w-[64px]'
            />
          </a>
          <div className='flex-1'>
            <a className='font-medium text-lg block' href={job.url}>
              {job.name}
            </a>
            <p className='text-sm text-neutral-600'>
              <a href={job.companyUrl}>{job.company}</a>
            </p>
          </div>
        </div>
        <div className='flex gap-1'>
          {job.minSalary && job.maxSalary && (
            <div className='badge bg-neutral-200'>{`${job.minSalary} - ${job.maxSalary} triệu`}</div>
          )}
          {job.minSalary && !job.maxSalary && (
            <div className='badge bg-neutral-200'>{`Từ ${job.minSalary} triệu`}</div>
          )}
          {!job.minSalary && job.maxSalary && (
            <div className='badge bg-neutral-200'>{`Tới ${job.minSalary} triệu`}</div>
          )}
          {!job.minSalary && !job.maxSalary && (
            <div className='badge bg-neutral-200'>{`Lương thỏa thuận`}</div>
          )}
          <div className='badge bg-neutral-200'>{job.location}</div>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <a className='btn btn-primary' href={job.url}>
          Ứng tuyển
        </a>
        <a className='btn btn-ghost' href={job.url}>
          Xem chi tiết
        </a>
      </div>
    </div>
  );
}
