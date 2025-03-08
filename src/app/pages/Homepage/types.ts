import { JobData } from '@/app/types/data';

export type JobSectionProps = {
  initialJobs: JobData[];
  setApplyingJob: React.Dispatch<React.SetStateAction<JobData | null>>;
};

export type FilterProps = {
  title: string;
  items: string[];
};

export type ApplyJobModalProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}