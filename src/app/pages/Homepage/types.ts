import { JobData } from '@/app/types/data';

export type JobSectionProps = {
  initialJobs: JobData[];
};

export type FilterProps = {
  title: string;
  items: string[];
};