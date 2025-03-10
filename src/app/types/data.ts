export interface JobGeneralData  {
  id: string;
  name: string;
  company: string;
  location: string;
  minSalary: number | null;
  maxSalary: number | null;
};

export type JobDetailData = JobGeneralData & {
  postDate: string;
  applyBefore: string;
  responsibilities: string[];
  whoAreYou: string[];
}