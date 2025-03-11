import { JobItemProps } from '@/app/types/props';

export default function JobItem({ job, children }: JobItemProps) {
  return (
    <div className='flex p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 bg-base-100'>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='flex gap-3'>
          <div className='flex-1'>
            <p className='font-medium block'>{job.tenvieclam}</p>
            <p className='text-sm text-neutral-600'>{job.tencongty}</p>
            <p className='text-sm text-neutral-600'>{job.diachi}</p>
            {job.luongthapnhat && job.luongcaonhat && (
              <p className='text-sm text-neutral-600'>
                {`${job.luongthapnhat} - ${job.luongcaonhat} triệu`}
              </p>
            )}
            {job.luongthapnhat && !job.luongcaonhat && (
              <p className='text-sm text-neutral-600'>
                {`Từ ${job.luongthapnhat} triệu`}
              </p>
            )}
            {!job.luongthapnhat && job.luongcaonhat && (
              <p className='text-sm text-neutral-600'>
                {`Đến ${job.luongcaonhat} triệu`}
              </p>
            )}
            {!job.luongthapnhat && !job.luongcaonhat && (
              <p className='text-sm text-neutral-600'>{`Lương thỏa thuận`}</p>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-2'>{children}</div>
    </div>
  );
}
