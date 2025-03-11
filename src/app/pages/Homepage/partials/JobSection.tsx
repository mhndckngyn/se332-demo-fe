import JobItem from '@/app/components/JobItem';
import { JobGeneralData } from '@/app/types/data';
import { useState } from 'react';
import {
  FilterItem,
  FilterProps,
  FilterState,
  JobSectionProps,
} from '../types';

export default function JobSection({ unfilteredJobs }: JobSectionProps) {
  const [salaryFilters, setSalaryFilters] =
    useState<FilterState[]>(salaryRanges);

  const filterItems: FilterItem[] = salaryRanges.map((filter, index) => ({
    label: filter.label,
    onChange: () => {
      setSalaryFilters((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, enabled: !item.enabled } : item
        )
      );
    },
  }));

  const currentFilters = salaryFilters.filter((s) => s.enabled);
  let jobs: JobGeneralData[] = unfilteredJobs;
  if (currentFilters.length < salaryFilters.length) {
    jobs = unfilteredJobs.filter((job) =>
      currentFilters.some(
        (filter) =>
          job.luongcaonhat > filter.min && job.luongthapnhat < filter.max
      )
    );
  }

  return (
    <div className='flex-1 px-[100px] py-[40px] gap-8 bg-[#F8F8FD] grid grid-cols-[1fr_4fr]'>
      <div className='flex flex-col gap-4'>
        <Filter title='Mức lương' items={filterItems} />
      </div>
      <div className='flex flex-col gap-6'>
        <div>
          <h2 className='text-3xl font-semibold'>Việc làm phù hợp</h2>
          <p className='text-neutral-600 text-sm mt-1.5'>
            {jobs.length} kết quả
          </p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4'>
          {jobs.map((job) => (
            <JobItem key={job.idvieclam} job={job}>
              <a
                className='btn btn-soft btn-primary'
                href={`/jobs/${job.idvieclam}`}>
                Xem chi tiết
              </a>
            </JobItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function Filter({ title, items }: FilterProps) {
  return (
    <div className='border border-gray-300 collapse collapse-arrow'>
      <input type='checkbox' defaultChecked />
      <div className='collapse-title font-semibold'>{title}</div>
      <div className='collapse-content '>
        {items.map((item, index) => (
          <div key={index} className='form-control'>
            <label className='label cursor-pointer gap-2.5'>
              <input
                type='checkbox'
                defaultChecked
                className='checkbox checkbox-primary'
                onChange={item.onChange}
              />
              <span>{item.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

const salaryRanges: FilterState[] = [
  {
    label: 'Từ 5 - 10 triệu',
    min: 5,
    max: 10,
    enabled: true,
  },
  {
    label: 'Từ 10 - 15 triệu',
    min: 10,
    max: 15,
    enabled: true,
  },
  {
    label: 'Từ 15 - 25 triệu',
    min: 15,
    max: 25,
    enabled: true,
  },
  {
    label: 'Từ 25 - 40 triệu',
    min: 5,
    max: 10,
    enabled: true,
  },
  {
    label: '40 triệu trở lên',
    min: 40,
    max: Infinity,
    enabled: true,
  },
];
