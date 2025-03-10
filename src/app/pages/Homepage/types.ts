import { JobGeneralData } from '@/app/types/data';

export type JobSectionProps = {
  initialJobs: JobGeneralData[];
  setApplyingJob: React.Dispatch<React.SetStateAction<JobGeneralData | null>>;
};

export type FilterProps = {
  title: string;
  items: string[];
};

export type ApplyJobModalProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}