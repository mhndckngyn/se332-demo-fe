export interface JobGeneralData  {
  idvieclam: string;
  tenvieclam: string;
  tencongty: string;
  diachi: string;
  luongthapnhat: number | null;
  luongcaonhat: number | null;
};

export type JobDetailData = JobGeneralData & {
  postDate: string;
  applyBefore: string;
  responsibilities: string[];
  whoAreYou: string[];
}