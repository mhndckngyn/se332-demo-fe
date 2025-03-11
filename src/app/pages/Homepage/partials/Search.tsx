import search from '@/assets/search.svg';
import { location } from '@/assets';
import { SearchProps } from '../types';
import { useRef } from 'react';

export default function Search({ setSearch }: SearchProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    setSearch((prev) => ({
      ...prev,
      KeywordName: nameRef.current?.value || '',
    }));

    setSearch((prev) => ({
      ...prev,
      KeywordLocation: locationRef.current?.value || '',
    }));
  };

  return (
    <div className='py-[60px] flex flex-col gap-[40px] items-center'>
      <div>
        <h1 className='text-4xl font-semibold text-center'>
          Tìm kiếm{' '}
          <span className='relative px-2 italic bg-accent rounded-lg py-1'>
            công việc mơ ước
          </span>
        </h1>
        <p className='text-neutral-600 mt-[15px] text-center'>
          Khám phá hàng ngàn cơ hội việc làm phù hợp với bạn ngay hôm nay
        </p>
      </div>
      <div className='flex w-full justify-center gap-2'>
        <label className='input input-bordered flex items-center gap-2 xl:min-w-[420px]'>
          <img src={search} alt='' className='w-[16px] h-[16px]' />
          <input
            ref={nameRef}
            type='text'
            className='grow'
            placeholder='UI Designer, Business Analyst,... '
          />
        </label>
        <label className='input input-bordered flex items-center gap-2 xl:min-w-[420px]'>
          <img src={location} alt='' className='w-[18px] h-[18px]' />
          <input
            ref={locationRef}
            type='text'
            className='grow'
            placeholder='Hà Nội, Đà Nẵng, Cần Thơ,... '
          />
        </label>
        <button className='btn btn-primary' onClick={handleSearch}>
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
