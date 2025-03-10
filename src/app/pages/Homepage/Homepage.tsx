import { JobGeneralData } from '@/app/types/data.ts';
import axiosInstance from '@/modules/axiosInstance.ts';
import { useEffect, useState } from 'react';
import JobSection from './partials/JobSection.tsx';
import Search from './partials/Search.tsx';

export default function Homepage() {
  const [jobs, setJobs] = useState<JobGeneralData[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axiosInstance.get('/job/GetAllJobs');
      if (response.status === 200) {
        console.log(response.data);
        setJobs(response.data);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className='flex-1'>
      <Search />
      <JobSection jobs={jobs} />
    </div>
  );
}
