import search from '@/assets/search.svg';
import { location } from '@/assets';

export default function Search() {
  return (
    <div className='py-[60px] flex flex-col gap-[40px] items-center'>
      <div>
        <h1 className='text-4xl font-semibold text-center'>
          Tìm kiếm{' '}
          <span className='relative px-1.5 italic'>
            <span className='absolute -inset-x-1 -inset-y-0.5 bg-accent -z-10 rounded-lg'></span>
            công việc mơ ước
          </span>
        </h1>
        <p className='text-neutral-600 mt-[15px] text-center'>
          Khám phá hàng ngàn cơ hội việc làm phù hợp với bạn ngay hôm nay
        </p>
      </div>
      <div className='flex w-full justify-center'>
        <label className='input input-bordered flex items-center gap-2 xl:min-w-[420px]'>
          <img src={search} alt='' className='w-[16px] h-[16px]' />
          <input
            type='text'
            className='grow'
            placeholder='UI Designer, Business Analyst,... '
          />
        </label>
        <div className='divider divider-horizontal'></div>
        <label className='input input-bordered flex items-center gap-2 xl:min-w-[420px]'>
          <img src={location} alt='' className='w-[18px] h-[18px]' />
          <input
            type='text'
            className='grow'
            placeholder='Hà Nội, Đà Nẵng, Cần Thơ,... '
          />
        </label>
        <button className='btn btn-primary ml-[24px]'>Tìm kiếm</button>
      </div>
    </div>
  );
}
