import { JobItem } from '@/app/types/JobItem';

export type JobSectionProps = {
  initialJobs: JobItem[];
};

export type FilterProps = {
  title: string;
  items: string[];
};

export type JobItemProps = {
  job: JobItem;
}