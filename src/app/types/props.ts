import { ReactNode } from "react";
import { JobDetailData, JobGeneralData } from "./data";

export type JobItemProps = {
  job: JobGeneralData;
  children: ReactNode;
}

export type JobInfoProps = {
  initialJob: JobDetailData | null;
}
