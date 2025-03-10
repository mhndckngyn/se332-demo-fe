import { JobGeneralData } from '@/app/types/data';

export type JobSectionProps = {
  jobs: JobGeneralData[];
};

export type FilterProps = {
  title: string;
  items: string[];
};

export type ApplyJobModalProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}