export interface JobGeneralData {
  idvieclam: string;
  tenvieclam: string;
  tencongty: string;
  diachi: string;
  luongthapnhat: number | null;
  luongcaonhat: number | null;
}

export type JobDetailData = JobGeneralData & {
  ngaydang: string;
  ungtuyentruoc: string;
  trachnhiemcongviec: string[];
  yeucauungvien: string[];
};

export type JobApplicationData = {
  iddonungtuyen: string;
  idvieclam: string;
  tenungvien: string;
  email: string;
  linkedin: string;
  sodienthoai: string;
  cvpath: string;
};
