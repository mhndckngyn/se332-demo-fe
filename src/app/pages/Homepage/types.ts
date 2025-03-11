import { JobGeneralData } from '@/app/types/data';

export type JobSectionProps = {
  unfilteredJobs: JobGeneralData[];
};

export type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<JobSearchStates>>;
}

export type FilterItem = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FilterProps = {
  title: string;
  items: FilterItem[];
};

export type ApplyJobModalProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type JobSearchStates = {
  KeywordName: string;
  KeywordLocation: string;
}

export type FilterState = {
  label: string;
  min: number;
  max: number;
  enabled: boolean;
}