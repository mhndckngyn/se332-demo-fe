import { JobGeneralData } from '@/app/types/data.ts';
import axiosInstance from '@/modules/axiosInstance.ts';
import buildQueryUrl from '@/modules/buildQueryUrl.ts';
import { useEffect, useState } from 'react';
import JobSection from './partials/JobSection.tsx';
import Search from './partials/Search.tsx';
import { JobSearchStates } from './types.ts';

export default function Homepage() {
  const [jobs, setJobs] = useState<JobGeneralData[]>([]);
  const [searchQuery, setSearchQuery] = useState<JobSearchStates>({
    KeywordName: '',
    KeywordLocation: '',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const url = buildQueryUrl('/job/GetAllJobs', searchQuery);
      const response = await axiosInstance.get(url);
      if (response.status === 200) {
        setJobs(response.data);
      }
    };

    fetchJobs();
  }, [searchQuery]);

  return (
    <div className='flex-1 min-h-[85vh] flex flex-col'>
      <Search setSearch={setSearchQuery} />
      <JobSection unfilteredJobs={jobs} />
    </div>
  );
}
