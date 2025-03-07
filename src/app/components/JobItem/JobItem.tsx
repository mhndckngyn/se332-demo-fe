import { JobItemProps } from '@/app/types/props';

export default function JobItem({ job, children }: JobItemProps) {
  return (
    <div className='flex p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 bg-base-100'>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex gap-3'>
          <div className='flex-1'>
            <a className='font-medium text-lg block' href={job.url}>
              {job.name}
            </a>
            <p className='text-sm text-neutral-600'>
              <a href={job.companyUrl}>{job.company}</a>
            </p>
            <p className='text-sm text-neutral-600'>{job.location}</p>
            {job.minSalary && job.maxSalary && (
              <p className='text-sm text-neutral-600'>
                {`${job.minSalary} - ${job.maxSalary} triệu`}
              </p>
            )}
            {job.minSalary && !job.maxSalary && (
              <p className='text-sm text-neutral-600'>
                {`Từ ${job.minSalary} triệu`}
              </p>
            )}
            {!job.minSalary && job.maxSalary && (
              <p className='text-sm text-neutral-600'>
                {`Tới ${job.maxSalary} triệu`}
              </p>
            )}
            {!job.minSalary && !job.maxSalary && (
              <p className='text-sm text-neutral-600'>
                {`Lương thỏa thuận`}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-2'>{children}</div>
    </div>
  );
}
